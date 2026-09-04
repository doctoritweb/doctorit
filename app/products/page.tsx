"use client";

import { useState } from "react";
import ProductCard from "@/components/products/ProductCard";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
}

const images = {
  Laptops: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500",
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500",
    "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=500",
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
  ],
  Phones: [
    "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
    "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=500",
  ],
  Accessories: [
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
    "https://images.unsplash.com/photo-1600080972464-8eef123c0f5e?w=500",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
  ],
  Monitors: [
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500",
    "https://images.unsplash.com/photo-1586210579191-33b45e38dd2f?w=500",
    "https://images.unsplash.com/photo-1616763355603-9755a640a287?w=500",
  ],
  Components: [
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500",
    "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
    "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500",
    "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=500",
  ],
};

const categoriesList = ["Laptops", "Phones", "Accessories", "Monitors", "Components"];

function generateProducts(): Product[] {
  const products: Product[] = [];
  let id = 1;

  categoriesList.forEach((category) => {
    const categoryImages = images[category as keyof typeof images];

    for (let i = 0; i < 30; i++) {
      products.push({
        id: id++,
        name: `${category.slice(0, -1)} ${i + 1}`,
        price: Math.floor(Math.random() * 1800) + 50,
        originalPrice: Math.floor(Math.random() * 2000) + 100,
        image: categoryImages[i % categoryImages.length],
        category: category,
        rating: Number((4 + Math.random()).toFixed(1)),
        inStock: Math.random() > 0.2,
      });
    }
  });

  return products;
}

const allProducts = generateProducts();

const categories = ["All", "Laptops", "Phones", "Accessories", "Monitors", "Components"];

const priceRanges = [
  { id: "under100", label: "Under $100", min: 0, max: 100 },
  { id: "100to500", label: "$100 - $500", min: 100, max: 500 },
  { id: "500to1000", label: "$500 - $1000", min: 500, max: 1000 },
  { id: "above1000", label: "Above $1000", min: 1000, max: Infinity },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("featured");

  let filteredProducts = allProducts.filter((product) => {
    if (selectedCategory !== "All" && product.category !== selectedCategory) {
      return false;
    }

    if (selectedPrice) {
      const range = priceRanges.find((r) => r.id === selectedPrice);
      if (range && (product.price < range.min || product.price > range.max)) {
        return false;
      }
    }

    return true;
  });

  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          All Products
        </h1>
        <p className="text-gray-600 mt-2">
          Find the best IT products for your needs
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-3">
                {priceRanges.map((range) => (
                  <label
                    key={range.id}
                    className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === range.id}
                      onChange={() => setSelectedPrice(range.id)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    {range.label}
                  </label>
                ))}

                {selectedPrice && (
                  <button
                    onClick={() => setSelectedPrice(null)}
                    className="text-sm text-blue-600 hover:underline mt-2"
                  >
                    Clear price filter
                  </button>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{filteredProducts.length}</span> products
            </p>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-500">
              <p className="text-lg mb-3">No products found</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedPrice(null);
                }}
                className="text-blue-600 hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}