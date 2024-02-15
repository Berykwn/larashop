<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{

    public function index()
    {
        $cart = Cart::with(['product'])->where(['user_id' => Auth::id()])->latest()->get();

        $amount = 0;

        foreach ($cart as $cartItem) {
            $amount += $cartItem->product->price * $cartItem->quantity;
        }


        return Inertia::render('User/Cart/Index', [
            'cart' => $cart,
            'amount' => $amount
        ]);
    }

    public function addToCart(Request $request, $productId)
    {
        try {
            $product = Product::findOrFail($productId);
        } catch (ModelNotFoundException $e) {
            return redirect()->route('user.home')->with('error', 'Product not found!');
        }

        $cartItem = [
            'product_id' => $productId,
            'user_id' => auth()->id(),
        ];

        $existingCartItem = Cart::where($cartItem)->first();

        if ($existingCartItem) {
            // Jika barang sudah ada di keranjang, tambahkan jumlahnya
            $existingCartItem->quantity += $request->quantity;
            $existingCartItem->save();
        } else {
            // Jika barang belum ada di keranjang, tambahkan sebagai item baru
            $cartItem['quantity'] = $request->quantity;
            Cart::create($cartItem);
        }

        return redirect()->route('user.cart')->with('message', 'The product has been added to the cart!');
    }

    public function removeFromCart($cartId)
    {
        $cart = Cart::findOrFail($cartId);
        $cart->delete();

        return redirect()->route('user.cart')->with('message', 'Product removed from cart successfully!');

    }

}
