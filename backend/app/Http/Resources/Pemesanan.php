<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Pemesanan extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $daftarMobil = [];
        foreach ($this->item as $item) {
            $mobil = $item->tipe->mobil;
            array_push($daftarMobil,$mobil);
        }
        return [
            'id' => $this->id,
            'nama' => $this->nama,
            'mobil' => $daftarMobil
        ];
    }
}
