<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/


Route::group(['middleware' => 'isLogin'], function () {
    Route::get('/sign-in', \App\Livewire\Auth\Login::class)->name('sign-in');
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', \App\Livewire\Dashboard::class)->name('dashboard');
    Route::get('/master-data/customers', \App\Livewire\Customers::class)->name('master-data.customers');
    Route::get('/master-data/products', \App\Livewire\Products::class)->name('master-data.products');

    Route::get('/logout', function () {
        auth()->logout();
        return redirect()->route('sign-in');
    })->name('logout');
});
