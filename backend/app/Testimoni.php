<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimoni extends Model
{
    protected $fillable = [
        'nama',
        'email',
        'isi',
        'terverifikasi'
    ];

    public function mobil() {
        return $this->belongsTo('App\Mobil');
    }
}
