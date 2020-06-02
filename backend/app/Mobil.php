<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mobil extends Model
{
    protected $fillable = [
        'nama',
        'deskripsi',
        'speksifikasi'
    ];

    public function foto() {
        return $this->hasMany('App\Foto');
    }

    public function tipe() {
        return $this->hasMany('App\TipeMobil');
    }

    public function testimoni() {
        return $this->hasMany('App\Testimoni');
    }

}
