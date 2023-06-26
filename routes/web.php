<?php

use App\Http\Controllers\CandidateController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifikasiController;
use App\Http\Controllers\VoteController;
use App\Models\Candidate;
use App\Models\User;
use App\Models\Vote;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render(
        'Welcome',
        [
            'candidate' => Candidate::all(),
            'votes' => Vote::where('status', 'sah')->get(["blm_id", "bem_id"]),
        ]
    );
});

Route::middleware('auth:sanctum', 'token')->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/onboard', [VerifikasiController::class, 'onboard'])->name('verif.onboard');
});

Route::middleware('auth:sanctum', 'pemilihan', 'token')->group(function () {
    Route::get('/pemilihan', function () {
        return Inertia::render('Pemilihan/Layout', [
            'candidate' => Candidate::all()
        ]);
    })->name('bem');
    Route::resource('/vote', VoteController::class)->only('store');
});

Route::middleware('auth:sanctum', 'isVerif')->group(function () {
    Route::get('/verifikasi', [VerifikasiController::class, 'index'])->name('verif.index');
    Route::patch("/upload", [UserController::class, 'uploadPhoto'])->name('user.upload');
});

Route::middleware('auth', 'isAdmin')->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('Admin/Index', [
            'users' => User::where('level', 'user')->get(['id', 'name', 'email', 'token', 'image', 'pemilihan']),
            'suara' => [
                'sah' => Vote::where('status', 'sah')->count(),
                'tidakSah' =>  Vote::where('status', 'tidak-sah')->count(),
            ],
            'candidate' => Candidate::all(),
        ]);
    })->name('admin.index');
    Route::post('/send-mail-to-users', [UserController::class, 'sendEmail'])->name('send-mail');
    Route::post('/genrate-token', [UserController::class, 'generateToken'])->name('token');
    Route::post('/delete-token', [UserController::class, 'deleteToken'])->name('delete-token');
    Route::post('/banned', [VoteController::class, 'bannedVote'])->name('banned');
    Route::post("/kandidat-store", [CandidateController::class, 'store'])->name('kandidat.store');
});

require __DIR__ . '/auth.php';
