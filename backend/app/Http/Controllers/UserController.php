<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\User;

class UserController extends Controller
{
    
    public function index() {
        return User::all();
    }

    public function store(Request $request) {
        $user = User::create($request->except('password'));

        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json($user,201);
    }

    public function update(User $user, Request $request) {
        $user->update($request->except('password'));

        if ($request->has('password')) {
            $user->password = Hash::make($request->password);
            $user->save();
        }

        return response()->json($user, 200);
    }

    public function destroy(User $user) {
        $user->delete();
        return response()->json(null, 204);
    }

    public function profil(Request $request) {
        $user = $request->user();
        return $user;
    }

    public function ubahProfil(Request $request) {
        $user = $request->user();

        $user->update($request->except(['foto','password']));

        if ($request->hasFile('foto')) {

            $url = $request->file('foto')->store('public');
            $user->foto = $url;

        }

        if ($request->has('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        return response()->json($user,200);
    }

    public function masuk(Request $request) {

        $user = User::where('email',$request->email)->first();

        if ($user) {

            if (Hash::check($request->password, $user->password)) {

                $api_token = $user->api_token = Str::random(40);
                $user->save();

                $user = $user->toArray();

                $user['token'] = $api_token;

                return response()->json($user,200);

            } else {
                return response()->json([
                    "password" => "Password yang anda masukan salah"
                ],422);
            }

        } else {
            return response()->json([
                "email" => "Alamat " . $request->email . " tidak terdaftar sebagai Administrator"
            ],422);
        }
    }
}
