<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function index()
    {
        $order = Order::select('id', 'amount', 'status', 'snap_token', 'created_at')->latest()->orderByDesc('created_at')->get();

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

            // Set your Merchant Server Key
            \Midtrans\Config::$serverKey = config('midtrans.serverKey');
            // Set to Development/Sandbox Environment (default). Set to true for Production Environment (accept real transaction).
            \Midtrans\Config::$isProduction = false;
            // Set sanitization on (default)
            \Midtrans\Config::$isSanitized = true;
            // Set 3DS transaction for credit card to true
            \Midtrans\Config::$is3ds = true;

            $params = array(
                'transaction_details' => array(
                    'order_id' => rand(),
                    'gross_amount' => $order->amount,
                ),
                'customer_details' => array(
                    'first_name' => Auth::user()->name,
                    'email' => Auth::user()->email,
                )
            );

            $snapToken = \Midtrans\Snap::getSnapToken($params);

            $order->snap_token = $snapToken;

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

    public function payment(Order $order, Request $request, $id)
    {
        $order = Order::findOrFail($id);

        $order->status = 'success';

        $order->save();

        return redirect()->route('user.orders')->with('message', 'Payment success!');
    }


}
