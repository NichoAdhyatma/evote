<?php

namespace App\Http\Controllers;

use App\Mail\TokenMail;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;


class UserController extends Controller
{
    public function uploadPhoto(Request $request)
    {
        $request->validate([
            'image' => 'required|mimes:png,jpg,jpeg',
        ]);
        $user = Auth::user();

        if ($user->image) {
            Storage::disk('public')->delete($user->image);
        }

        $filename = $request->file('image')->getClientOriginalName();
        $hash = Str::random(10) . '.' . $filename;
        $filepath = $request->file('image')->storeAs('assets/images', $hash, 'public');

        $user->image = $filepath;
        $user->verifikasi = true;
        $user->save();

        return redirect("/onboard");
    }

    public function sendEmail()
    {
        $users = User::where('level', 'user')->get();

        foreach ($users as $user) {
            Mail::to($user->email)->send(new TokenMail($user));
        }

        return redirect("/admin")->with("success", "Berhasil mengirim email");
    }

    public function generateToken()
    {
        $users = User::where('level', 'user')->get();

        foreach ($users as $user) {
            $user->tokens()->delete();
            $token = $user->createToken("auth-token");
            $user->token = $token->plainTextToken;
            $user->save();
        }

        return redirect("/admin")->with("success", "Berhasil generate Token");
    }

    public function deleteToken()
    {
        $users = User::where('level', 'user')->get();

        foreach ($users as $user) {
            $user->token = null;
            $user->tokens()->delete();
            $user->save();
        }

        return redirect("/admin")->with("success", "Berhasil menghapus Token");
    }
}
