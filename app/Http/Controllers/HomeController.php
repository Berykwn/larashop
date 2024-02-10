<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::select('id', 'name')->get();

        return Inertia::render('User/Home/Index', [
            'category' => $categories
        ]);
    }
}
