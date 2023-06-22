<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VerifikasiController;
use App\Models\User;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render(
        'Welcome'
    );
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth:sanctum', 'token'])->name('dashboard');

Route::middleware('auth:sanctum', 'token')->group(function () {
    Route::get('/bem', function () {
        return Inertia::render('Pemilihan/Layout');
    })->name('bem');
    Route::get('/verifikasi', [VerifikasiController::class, 'index'])->name('verif.index');
    Route::get('/onboard', [VerifikasiController::class, 'onboard'])->name('verif.onboard');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::patch("/upload", [UserController::class, 'uploadPhoto'])->name('user.upload');
});

Route::middleware('auth', 'isAdmin')->group(function () {
    Route::get('/admin', function () {
        return Inertia::render('Admin/Index', [
            'users' => User::where('level', 'user')->get(['id', 'name', 'email', 'token'])
        ]);
    })->name('admin.index');
    Route::post('/send-mail-to-users', [UserController::class, 'sendEmail'])->name('send-mail');
    Route::post('/genrate-token', [UserController::class, 'generateToken'])->name('token');
    Route::post('/delete-token', [UserController::class, 'deleteToken'])->name('delete-token');
});

require __DIR__ . '/auth.php';
