"use client";

import { useState, useMemo } from "react";
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
  ],
  Phones: [
    "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500",
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=500",
  ],
  Accessories: [
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
  ],
  Monitors: [
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500",
    "https://images.unsplash.com/photo-1586210579191-33b45e38dd2f?w=500",
  ],
  Components: [
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500",
    "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=500",
    "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=500",
    "https://images.unsplash.com/photo-1562976540-1502c2145186?w=500",
  ],
};

const categoriesList = ["Laptops", "Phones", "Accessories", "Monitors", "Components"];

const productNames: Record<string, string[]> = {
  Laptops: [
    "MacBook Pro 14 M3",
    "Dell XPS 15",
    "ASUS ROG Zephyrus",
    "Lenovo ThinkPad X1",
    "HP Spectre x360",
    "Acer Swift 5",
    "MSI Creator Z16",
    "Razer Blade 15",
  ],
  Phones: [
    "iPhone 16 Pro",
    "Samsung Galaxy S24 Ultra",
    "Google Pixel 9 Pro",
    "OnePlus 12",
    "Xiaomi 14 Ultra",
    "Nothing Phone 2",
  ],
  Accessories: [
    "Sony WH-1000XM5",
    "Logitech MX Master 3S",
    "Apple AirPods Pro 2",
    "Keychron K8 Pro",
    "Anker PowerCore 20000",
    "Samsung T7 SSD 2TB",
  ],
  Monitors: [
    "LG UltraFine 27 4K",
    "Dell UltraSharp U2723QE",
    "ASUS ProArt PA278QV",
    "Samsung Odyssey G7",
  ],
  Components: [
    "NVIDIA RTX 4080",
    "AMD Ryzen 9 7950X",
    "Corsair Vengeance 32GB",
    "Samsung 990 Pro 2TB",
  ],
};

function generateProducts(): Product[] {
  const products: Product[] = [];
  let id = 1;

  categoriesList.forEach((category) => {
    const categoryImages = images[category as keyof typeof images];
    const names = productNames[category];

    for (let i = 0; i < 24; i++) {
      const basePrice = Math.floor(Math.random() * 1600) + 80;
      const hasDiscount = Math.random() > 0.4;
      const originalPrice = hasDiscount
        ? basePrice + Math.floor(Math.random() * 300) + 50
        : basePrice;

      products.push({
        id: id++,
        name:
          names[i % names.length] +
          (i >= names.length ? ` ${Math.floor(i / names.length) + 1}` : ""),
        price: basePrice,
        originalPrice,
        image: categoryImages[i % categoryImages.length],
        category,
        rating: Number((4.1 + Math.random() * 0.8).toFixed(1)),
        inStock: Math.random() > 0.18,
      });
    }
  });

  return products;
}

const categories = ["All", "Laptops", "Phones", "Accessories", "Monitors", "Components"];

const priceRanges = [
  { id: "under100", label: "Under $100", min: 0, max: 100 },
  { id: "100to500", label: "$100 – $500", min: 100, max: 500 },
  { id: "500to1000", label: "$500 – $1000", min: 500, max: 1000 },
  { id: "above1000", label: "Above $1000", min: 1000, max: Infinity },
];

export default function ProductsPage() {
  // Fixed: Generate products only once on the client
  const [allProducts] = useState<Product[]>(() => {
    if (typeof window === "undefined") return [];
    return generateProducts();
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");
  const [minRating, setMinRating] = useState<number | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = allProducts.filter((product) => {
      if (selectedCategory !== "All" && product.category !== selectedCategory) {
        return false;
      }

      if (selectedPrice) {
        const range = priceRanges.find((r) => r.id === selectedPrice);
        if (range && (product.price < range.min || product.price > range.max)) {
          return false;
        }
      }

      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      if (minRating && product.rating < minRating) {
        return false;
      }

      if (inStockOnly && !product.inStock) {
        return false;
      }

      if (outOfStockOnly && product.inStock) {
        return false;
      }

      if (onSaleOnly && product.originalPrice <= product.price) {
        return false;
      }

      return true;
    });

    if (sortBy === "price-low") {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [
    allProducts,
    selectedCategory,
    selectedPrice,
    sortBy,
    searchQuery,
    minRating,
    inStockOnly,
    outOfStockOnly,
    onSaleOnly,
  ]);

  const clearAllFilters = () => {
    setSelectedCategory("All");
    setSelectedPrice(null);
    setSearchQuery("");
    setMinRating(null);
    setInStockOnly(false);
    setOutOfStockOnly(false);
    setOnSaleOnly(false);
    setSortBy("featured");
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedPrice !== null ||
    searchQuery !== "" ||
    minRating !== null ||
    inStockOnly ||
    outOfStockOnly ||
    onSaleOnly;

  if (allProducts.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading products...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            All Products
          </h1>
          <p className="text-gray-500 mt-2">
            Discover the latest IT products for work and play
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-xl">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-900 placeholder:text-gray-400"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
              <div className="p-6">
                {/* Categories */}
                <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                  Categories
                </h3>
                <div className="space-y-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        selectedCategory === cat
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Price Range */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                    Price Range
                  </h3>
                  <div className="space-y-3">
                    {priceRanges.map((range) => (
                      <label
                        key={range.id}
                        className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPrice === range.id}
                          onChange={() => setSelectedPrice(range.id)}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="group-hover:text-blue-600 transition-colors">
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                    Rating
                  </h3>
                  <div className="space-y-2">
                    {[4.5, 4, 3].map((rating) => (
                      <button
                        key={rating}
                        onClick={() =>
                          setMinRating(minRating === rating ? null : rating)
                        }
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm transition-all ${
                          minRating === rating
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span className="text-yellow-400">★</span>
                        {rating}+ & up
                      </button>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                    Availability
                  </h3>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => {
                        setInStockOnly(e.target.checked);
                        if (e.target.checked) setOutOfStockOnly(false);
                      }}
                      className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 font-medium">
                      In Stock only
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={outOfStockOnly}
                      onChange={(e) => {
                        setOutOfStockOnly(e.target.checked);
                        if (e.target.checked) setInStockOnly(false);
                      }}
                      className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 font-medium">
                      Out of Stock only
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={onSaleOnly}
                      onChange={(e) => setOnSaleOnly(e.target.checked)}
                      className="w-4 h-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 font-medium">
                      On Sale only
                    </span>
                  </label>
                </div>

                {hasActiveFilters && (
                  <button
                    onClick={clearAllFilters}
                    className="mt-6 w-full py-2.5 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-200 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {selectedCategory !== "All" && (
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory("All")}>×</button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    {priceRanges.find((r) => r.id === selectedPrice)?.label}
                    <button onClick={() => setSelectedPrice(null)}>×</button>
                  </span>
                )}
                {minRating && (
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    {minRating}+ Stars
                    <button onClick={() => setMinRating(null)}>×</button>
                  </span>
                )}
                {inStockOnly && (
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    In Stock
                    <button onClick={() => setInStockOnly(false)}>×</button>
                  </span>
                )}
                {outOfStockOnly && (
                  <span className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">
                    Out of Stock
                    <button onClick={() => setOutOfStockOnly(false)}>×</button>
                  </span>
                )}
                {onSaleOnly && (
                  <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-sm px-3 py-1.5 rounded-full">
                    On Sale
                    <button onClick={() => setOnSaleOnly(false)}>×</button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-sm px-3 py-1.5 rounded-full">
                    “{searchQuery}”
                    <button onClick={() => setSearchQuery("")}>×</button>
                  </span>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <p className="text-sm text-gray-500">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
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
              <div className="bg-white rounded-2xl border border-gray-200 py-20 text-center">
                <p className="text-lg text-gray-500 mb-3">No products found</p>
                <button
                  onClick={clearAllFilters}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}