<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ItemPemesanan extends Model
{
    protected $fillable = [
        'jumlah',
        'warna'
    ];

    public function pemesanan() {
        return $this->belongsTo('App\Pemesanan');
    }

    public function tipe() {
        return $this->belongsTo('App\TipeMobil','tipe_mobil_id');
    }

}
