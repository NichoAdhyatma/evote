<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        User::create([
            'name' => 'Admin 01',
            'email' => 'nevalkoki@gmail.com',
            'level' => 'admin',
            'token' => 'C7W7QxLJqR5qDqbC'
        ]);
    }
}
