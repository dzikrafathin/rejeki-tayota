<?php

namespace App\Http\Controllers;

use App\ItemPemesanan;
use App\Pemesanan;
use Illuminate\Http\Request;

class ItemPemesananController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Pemesanan $pemesanan)
    {
        //echo "TEST";
        return $pemesanan->item()->with('tipe.mobil')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ItemPemesanan  $itemPemesanan
     * @return \Illuminate\Http\Response
     */
    public function show(ItemPemesanan $itemPemesanan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ItemPemesanan  $itemPemesanan
     * @return \Illuminate\Http\Response
     */
    public function edit(ItemPemesanan $itemPemesanan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ItemPemesanan  $itemPemesanan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ItemPemesanan $itemPemesanan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ItemPemesanan  $itemPemesanan
     * @return \Illuminate\Http\Response
     */
    public function destroy(ItemPemesanan $itemPemesanan)
    {
        //
    }
}
