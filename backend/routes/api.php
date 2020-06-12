<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::get('foto','FotoController@indexAll');
Route::get('/katalog','MobilController@indexKatalog');

Route::post('/masuk','UserController@masuk');
Route::get('/profil','UserController@profil');
Route::post('/profil','UserController@ubahProfil');

Route::apiResource('user','UserController');

Route::apiResource('mobil','MobilController');
Route::apiResource('mobil.tipe','TipeMobilController')->shallow();
Route::apiResource('mobil.foto','FotoController')->shallow();
Route::apiResource('mobil.testimoni','TestimoniController')->shallow();

Route::get('/mobil/{mobil}/testimoni_publik','TestimoniController@indexPublik');

Route::apiResource('pemesanan','PemesananController');
//Route::get('/pemesanan/test/item','ItemPemesananController@index');
Route::apiResource('pemesanan.item','ItemPemesananController')->shallow();

