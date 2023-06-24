<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use App\Http\Requests\StoreVoteRequest;
use App\Http\Requests\UpdateVoteRequest;
use Illuminate\Support\Facades\Auth;

class VoteController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVoteRequest $request)
    {
        $request->validated();

        $user = Auth::user();

        Vote::create(
            [
                'user_id' => Auth::user()->id,
                'bem_id' => $request->pilihan['bem'],
                'blm_id' => $request->pilihan['blm'],

            ]
        );

        $user->pemilihan = true;
        
        $user->save();

        return redirect("/dashboard");
    }
}
