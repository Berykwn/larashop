<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $order = Order::select('id', 'amount', 'status', 'created_at')->latest()->orderByDesc('created_at')->get();

        return Inertia::render('User/Order/Index', [
            'order' => $order
        ]);
    }
    public function create(OrderRequest $request)
    {
        try {

            $validatedData = $request->validated();
            // Simpan order
            $order = new Order([
                'user_id' => Auth::id(),
                'address' => $validatedData['address'],
                'note' => $validatedData['note'],
                'amount' => $validatedData['amount'],
            ]);

            $order->save();

            // Ambil item dari keranjang
            $items = Cart::select('id', 'product_id')->where('user_id', Auth::id())->get();

            // Simpan setiap item dalam pesanan
            foreach ($items as $item) {
                $orderItem = new OrderItem([
                    'product_id' => $item->product_id,
                    // Jika ada atribut lain yang perlu Anda set, tambahkan di sini
                ]);

                $order->orderItems()->save($orderItem);

                // Hapus item dari keranjang belanja
                Cart::where('id', $item->id)->delete();
            }

            return redirect()->route('user.orders')->with('message', 'Order success!');
        } catch (QueryException $e) {
            // Tangani kesalahan saat menyimpan data ke database
            return redirect()->back()->with('error', 'Error occurred while processing your request.');
        }
    }


}
