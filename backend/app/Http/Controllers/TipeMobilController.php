<?php

namespace App\Http\Controllers;

use App\Mobil;
use App\TipeMobil;
use Illuminate\Http\Request;

class TipeMobilController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Mobil $mobil)
    {
        return $mobil->tipe;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Mobil $mobil, Request $request)
    {
        $tipe = $mobil->tipe()->create($request->all());
        return response()->json($tipe);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\TipeMobil  $tipeMobil
     * @return \Illuminate\Http\Response
     */
    public function show(TipeMobil $tipe)
    {
        return $tipe;
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\TipeMobil  $tipeMobil
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TipeMobil $tipe)
    {
        $tipe->update($request->all());
        return response()->json($tipe);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\TipeMobil  $tipeMobil
     * @return \Illuminate\Http\Response
     */
    public function destroy(TipeMobil $tipe)
    {
        $tipe->delete();
        return response()->json(null,204);
    }
}
