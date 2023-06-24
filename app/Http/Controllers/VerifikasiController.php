<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class VerifikasiController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Verifikasi');
    }

    public function onboard()
    {
        return Inertia::render('Auth/OnBoarding');
    }
}
