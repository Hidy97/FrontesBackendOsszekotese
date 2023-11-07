<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Http\Request;

class WriterController extends Controller
{
    //

    public function index(){
        $writers = Writer::all(); //az összes rekord lekérése
        return response()->json($writers);
    }

    public function store(Request $request){
        $writer = new Writer();
        $writer->nev = $request->nev;
        $writer->szul = $request->szul;
        $writer->save();
    }
}
