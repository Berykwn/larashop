<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index'])->name('user.home');
Route::get('/products', [ProductController::class, 'index'])->name('user.products');
Route::get('/products/show', [ProductController::class, 'show'])->name('user.product.show');

Route::get('/cart', [CartController::class, 'index'])->name('user.cart');
Route::post('/cart/add/{productId}', [CartController::class, 'addToCart'])->name('user.addToCart');
Route::delete('/cart/remove/{cartId}', [CartController::class, 'removeFromCart'])->name('user.cart.delete');

Route::get('/orders/', [OrderController::class, 'index'])->name('user.orders');
Route::post('/order/create', [OrderController::class, 'create'])->name('user.order.create');
Route::post('/order/payment/{id}', [OrderController::class, 'payment'])->name('user.order.payment');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
