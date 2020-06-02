<?php

namespace App\Http\Controllers;

use App\Pemesanan;
use App\TipeMobil;
use Illuminate\Http\Request;
use App\Http\Resources\Pemesanan as PemesananResource;

class PemesananController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Pemesanan::all();
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pemesanan = Pemesanan::create($request->except('items'));
        foreach ($request->items as $item) {
            $tipeMobil = TipeMobil::find($item["tipe_mobil_id"]);
            $itemPemesanan = $pemesanan->item()->create([
                "jumlah" => $item["jumlah"],
                "warna" => $item["warna"]
            ]);
            $itemPemesanan->tipe()->associate($tipeMobil);
            $itemPemesanan->save();

        }
        return response()->json($pemesanan,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Pemesanan  $pemesanan
     * @return \Illuminate\Http\Response
     */
    public function show(Pemesanan $pemesanan)
    {
        return $pemesanan;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Pemesanan  $pemesanan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Pemesanan $pemesanan)
    {
        $pemesanan->update($request->all());

        return response()->json($pemesanan,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Pemesanan  $pemesanan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Pemesanan $pemesanan)
    {
        foreach($pemesanan->item as $item) {
            $item->delete();
        }
        $pemesanan->delete();

        return response()->json(null,204);
    }
}
