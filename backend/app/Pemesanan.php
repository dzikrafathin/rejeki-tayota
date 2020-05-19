<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pemesanan extends Model
{
    protected $fillable = [
        'nama',
        'alamat',
        'noHp',
        'status'
    ];

    public function item() {
        return $this->hasMany('App\ItemPemesanan');
    }
}
