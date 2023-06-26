<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminnRequest;
use App\Models\Vote;
use App\Http\Requests\StoreVoteRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VoteController extends Controller
{

    public function store(StoreVoteRequest $request)
    {
        $request->validated();

        $user = Auth::user();

        Vote::create(
            [
                'user_id' => Auth::user()->id,
                'bem_id' => $request->pilihan['bem'],
                'blm_id' => $request->pilihan['blm'],
                'status' => "sah",
            ]
        );

        $user->pemilihan = true;

        $user->tokens()->delete();

        $user->save();

        return redirect("/dashboard");
    }

    public function bannedVote(AdminnRequest $request)
    {
        if ($request->userId) {
            $user =  User::find($request->userId);
            $vote = Vote::where('user_id', $user->id)->first();
            if (!is_null($user->pemilihan)) {
                $user->pemilihan = !$user->pemilihan;
                $vote->status = $user->pemilihan ? "sah" : "tidak-sah";
                $user->save();
                $vote->save();
            } else return redirect("/admin");
        }

        return redirect('/admin');
    }
}
