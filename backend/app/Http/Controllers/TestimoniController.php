<?php

namespace App\Http\Controllers;

use App\Testimoni;
use App\Mobil;
use Illuminate\Http\Request;

class TestimoniController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Mobil $mobil)
    {
        return $mobil->testimoni;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Mobil $mobil, Request $request)
    {
        $res = $mobil->testimoni()->create([
            "nama" => $request->nama,
            "email" => $request->email,
            "isi" => $request->isi,
            "terverifikasi" => false
        ]);


        return response()->json($res,201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Testimoni  $testimoni
     * @return \Illuminate\Http\Response
     */
    public function show(Testimoni $testimoni)
    {
        return $testimoni;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Testimoni  $testimoni
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Testimoni $testimoni)
    {
        $testimoni->update($request->all());

        return response()->json($testimoni,200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Testimoni  $testimoni
     * @return \Illuminate\Http\Response
     */
    public function destroy(Testimoni $testimoni)
    {
        $testimoni->delete();

        return response()->json(null,204);
    }
}
