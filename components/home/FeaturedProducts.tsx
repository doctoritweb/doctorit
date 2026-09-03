import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Laptop Battery (Universal)",
    category: "Laptop Parts",
    price: "₹2,499",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Samsung 980 500GB SSD",
    category: "Storage",
    price: "₹3,999",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Wireless Mouse Logitech",
    category: "Accessories",
    price: "₹1,299",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Laptop Cooling Pad",
    category: "Accessories",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              Featured Products
            </h2>
            <p className="text-slate-600">
              Quality parts & accessories available for sale
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-blue-600 font-medium mb-1">
                  {product.category}
                </p>
                <h3 className="font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-slate-900">
                    {product.price}
                  </span>
                  <span className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                    <ShoppingCart className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}