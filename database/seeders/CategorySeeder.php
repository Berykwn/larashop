<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $categories = [
            'T-shirt',
            'Clothing',
            'Pants',
            'Footwear',
            'Bags',
            'Accessories',
            'Watches',
            'Underwear',
            'Gloves',
            'Eyewear',
        ];

        foreach ($categories as $category) {
            Category::create([
                'name' => $category,
            ]);
        }
    }
}
