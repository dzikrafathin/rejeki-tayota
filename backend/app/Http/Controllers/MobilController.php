<?php

namespace App\Http\Controllers;

use App\Mobil;
use App\Foto;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class MobilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /*return Mobil::with(['foto' => function($query) {
            $query->first();
        }])->get();*/
        $daftarMobil = Mobil::all();
        $ret = [];

        foreach($daftarMobil as $mobil) {
            $foto = Foto::where('mobil_id',$mobil->id)->first();



            $mobil = $mobil->toArray();

            if ($foto) {
                $mobil["foto"] = $foto->toArray();
            } else {
                $mobil["foto"] = null;
            }


            array_push($ret,$mobil);
        }

        return $ret;
    }

    public function indexKatalog() {
        $daftarMobil = Mobil::all();
        $ret = [];

        foreach($daftarMobil as $mobil) {
            $foto = Foto::where('mobil_id',$mobil->id)->first();

            //$hargaGede = $mobil->tipe()->max('harga');
            $hargaKecil = $mobil->tipe()->min('harga');

            $mobil = $mobil->toArray();

            if ($foto) {
                $mobil["foto"] = $foto->toArray();
            } else {
                $mobil["foto"] = null;
            }

            $mobil["harga"] = $hargaKecil;
            
            array_push($ret,$mobil);
        }

        return $ret;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $daftarFoto = [];

        $mobil = Mobil::create($request->except('foto'));

        if ($request->hasFile('foto')) {
            foreach ($request->file('foto') as $f) {
                $nama = $f->getClientOriginalName();
                $url = $f->store('public');

                $foto = $mobil->foto()->create([
                    "nama" => $nama,
                    "url" => $url
                ]);

                $foto = $foto->toArray();
                array_push($daftarFoto,$foto);
            }
        } else {
            $daftarFoto = null;
        }

        $mobil = $mobil->toArray();

        $mobil["foto"] = $daftarFoto != null ? $daftarFoto[0] : null;

        return response()->json($mobil,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Mobil  $mobil
     * @return \Illuminate\Http\Response
     */
    public function show(Mobil $mobil)
    {
        $foto = $mobil->foto->first();

        if ($foto) {
            $foto = $foto->toArray();
        } else {
            $foto = null;
        }

        $mobil = $mobil->toArray();
        $mobil["foto"] = $foto;

        return response()->json($mobil);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Mobil  $mobil
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Mobil $mobil)
    {
        $mobil->update($request->all());
        return response()->json($mobil,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Mobil  $mobil
     * @return \Illuminate\Http\Response
     */
    public function destroy(Mobil $mobil)
    {
        foreach($mobil->foto as $foto) {
            Storage::delete($foto->url);
            $foto->delete();
        }

        $mobil->delete();

        return response()->json(null,204);
    }
}
