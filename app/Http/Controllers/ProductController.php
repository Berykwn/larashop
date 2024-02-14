<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::select('id', 'name')->get();

        $products = Product::select('id', 'name', 'price', 'description', 'tag', 'thumbnail')->with('categories')->latest()->paginate(12);

        return Inertia::render('User/Product/Index', [
            'category' => $categories,
            'products' => $products
        ]);
    }

    public function show(Product $product, Request $request)
    {
        $products = $product->find($request->id);

        return Inertia::render('User/Product/Show', [
            'products' => $products
        ]);
    }

}
