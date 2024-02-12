<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::select('id', 'name')->get();

        $products = Product::with('categories')->take(4)->latest()->get();

        return Inertia::render('User/Home/Index', [
            'category' => $categories,
            'products' => $products
        ]);
    }
}
