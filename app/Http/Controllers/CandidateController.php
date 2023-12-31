<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminnRequest;
use App\Models\Candidate;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CandidateController extends Controller
{
    public function store(AdminnRequest $request)
    {
        $validatedRequest = $request->validate([
            'candidate_name' => 'string|max:255',
            'level' => 'string',
            'image' => 'mimes:jpg,png,jpeg',
        ]);

        $filename = $request->file('image')->getClientOriginalName();
        $hash = Str::random(10) . '.' . $filename;
        $validatedRequest['image'] = $request->file('image')->storeAs('assets/candidate', $hash, 'public');

        Candidate::create([
            'candidate_name' => $validatedRequest['candidate_name'],
            'level' => $validatedRequest['level'],
            'image' => $validatedRequest['image'],
        ]);

        return redirect("/admin")->with("success", "Berhasil menambah kandidat");
    }

    public function delete(AdminnRequest $request)
    {
        $candidate = Candidate::find($request->id);

        if ($candidate) {
            if ($candidate->image) {
                Storage::disk('public')->delete($candidate->image);
            }

            $candidate->delete();

            return redirect("/admin")->with("success", "Berhasil menghapus kandidat");
        }

        return redirect("/admin");
    }
}
