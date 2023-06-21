<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function store(Request $request, $id){
       $request->validate([
        'name' => 'required',
        'email' => 'required|email|unique:users',
        'token' => 'required',
        'image' => 'required|image',
       ]);
       $user = User::findOrFail($id);

       $imagePath =$request->file('image')->store('public/images');
       $relativeImagePath = str_replace('public', 'storage', $imagePath);

       $user->image = $relativeImagePath;
       $user->save();

       return response()->json(['message' => 'Gambar berhasil disimpan']);
    }
}
