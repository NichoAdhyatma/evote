<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    
    public function vote_bem(){
        return $this->hasMany(Vote::class, 'bem_id', 'id');
    }

    public function vote_blm(){
        return $this->hasMany(Vote::class, 'blm_id', 'id');
    }
}
