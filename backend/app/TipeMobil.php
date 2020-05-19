<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipeMobil extends Model
{
    protected $fillable = [
        'tipe',
        'harga',
        'stok'
    ];

    public function mobil() {
        return $this->belongsTo('App\Mobil');
    }

    public function item() {
        return $this->hasMany('App\ItemPemesanan');
    }

}
