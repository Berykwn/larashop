<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Product 1',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.',
                'tag' => 'SALE',
                'price' => 1000000,
                'thumbnail' => 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
            ],
            [
                'name' => 'Product 2',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.',
                'tag' => 'SALE',
                'price' => 2990000,
                'thumbnail' => 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
            ],
            [
                'name' => 'Product 3',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.',
                'tag' => 'SALE',
                'price' => 3990000,
                'thumbnail' => 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
            ],
            [
                'name' => 'Product 4',
                'description' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.',
                'content' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veritatis.',
                'tag' => 'SALE',
                'price' => 4990000,
                'thumbnail' => 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
            ],
        ];

        // Seed the products into the database
        foreach ($products as $productData) {
            Product::create($productData);
        }
    }
}
