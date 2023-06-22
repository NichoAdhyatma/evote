<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
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
        $user->save();

        return redirect("/onboard");
    }
}
