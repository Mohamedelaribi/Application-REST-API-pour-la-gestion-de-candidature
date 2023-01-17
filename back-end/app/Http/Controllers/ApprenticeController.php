<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apprentice;

class ApprenticeController extends Controller
{
    public function search(Request $request){
        $apprentice = Apprentice::where('name', 'like','%'.$request->name.'%')->get();
        return response()->json($apprentice);
        // if($apprentice){
        //     return 'exists';
        // }
        // else{
        //     return 'not found';
        // }
    }

    // public function change()

}
