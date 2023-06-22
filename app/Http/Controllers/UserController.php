<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function uploadPhoto(Request $request)
    {
        $request->validate([
            'image' => 'required',
        ]);

        $user = Auth::user();

        $filename = $request->file('image')->getClientOriginalName();
        $filepath = $request->file('image')->storeAs('/assets/images', $filename, 'public');

        $user->image = $filepath;
        $user->save();

        return redirect("/onboard");
    }
}
