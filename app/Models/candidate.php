<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class candidate extends Model
{
    use HasFactory;
    protected $fillable = [
        'candidate_id',
        'candidate_name',
        'vote_count',
    ];
}
