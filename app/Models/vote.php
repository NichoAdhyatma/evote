<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    
    public function bemCandidate(){
        return $this->belongsTo(Candidate::class, 'bem_id', 'id');
    }

    public function blmCandidate(){
        return $this->belongsTo(Candidate::class, 'blm_id', 'id');
    }
}
