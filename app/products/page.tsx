import Link from "next/link";
import ProductCard from "@/components/products/ProductCard";

// Temporary dummy data (replace with API later)
const products = [
  {
    id: 1,
    name: "MacBook Pro 14-inch M3",
    price: 1999,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    category: "Laptops",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: 1649,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
    category: "Laptops",
    rating: 4.7,
    inStock: true,
  },
  {
    id: 3,
    name: "iPhone 16 Pro",
    price: 999,
    originalPrice: 1099,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500",
    category: "Phones",
    rating: 4.8,
    inStock: true,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    price: 349,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500",
    category: "Accessories",
    rating: 4.9,
    inStock: true,
  },
  {
    id: 5,
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    category: "Phones",
    rating: 4.8,
    inStock: false,
  },
  {
    id: 6,
    name: "Logitech MX Master 3S",
    price: 99,
    originalPrice: 119,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    category: "Accessories",
    rating: 4.7,
    inStock: true,
  },
];

const categories = ["All", "Laptops", "Phones", "Accessories", "Monitors", "Components"];

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          All Products
        </h1>
        <p className="text-gray-600 mt-2">
          Find the best IT products for your needs
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl border border-gray-200 p-5 sticky top-24">
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="w-full text-left px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Under $100
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300" />
                  $100 - $500
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300" />
                  $500 - $1000
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="checkbox" className="rounded border-gray-300" />
                  Above $1000
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{products.length}</span> products
            </p>
            <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
              <option>Top Rated</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}