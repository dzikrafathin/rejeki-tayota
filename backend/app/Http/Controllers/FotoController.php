<?php

namespace App\Http\Controllers;

use App\Foto;
use App\Mobil;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class FotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function index(Mobil $mobil)
    {
        return $mobil->foto;
    }

    public function indexAll() {
        return Foto::with('mobil:id,nama')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Mobil $mobil, Request $request)
    {
        if ($request->hasFile('foto')) {

            $ret = [];

            foreach ($request->file('foto') as $foto) {
                $nama = $foto->getClientOriginalName();
                $url = $foto->store('public');

                $data = $mobil->foto()->create([
                    "nama" => $nama,
                    "url" => $url
                ]);
                array_push($ret,$data);
            }

            return response()->json($ret,201);

        } else {
            return response()->json([
                "foto" => "Tidak ada file yang masuk"
            ],422);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Foto  $foto
     * @return \Illuminate\Http\Response
     */
    public function destroy(Foto $foto)
    {
        Storage::delete($foto->url);
        $foto->delete();

        return response()->json(null,204);
    }
}
