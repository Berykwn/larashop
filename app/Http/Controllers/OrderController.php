<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\Product;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function create(Request $request)
    {
        try {
            // Simpan order
            $order = new Order([
                'user_id' => Auth::id(),
                'address' => $request->address,
                'note' => $request->note,
                'amount' => $request->amount,
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


            return redirect()->route('user.cart')->with('message', 'Order success!');
        } catch (QueryException $e) {
            // Tangani kesalahan saat menyimpan data ke database
            return redirect()->back()->with('error', 'Error occurred while processing your request.');
        } catch (\Exception $e) {
            // Tangani kesalahan umum
            return redirect()->back()->with('error', $e->getMessage());
        }
    }
}
