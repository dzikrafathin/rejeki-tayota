<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Foto extends Model
{
    protected $fillable = [
        'nama',
        'url'
    ];

    public function mobil() {
        return $this->belongsTo('App\Mobil');
    }
}
