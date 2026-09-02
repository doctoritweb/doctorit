import Link from "next/link";
import { notFound } from "next/navigation";

// Temporary dummy data
const products = [
  {
    id: 1,
    name: "MacBook Pro 14-inch M3",
    price: 1999,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    category: "Laptops",
    rating: 4.9,
    reviews: 128,
    inStock: true,
    description:
      "The MacBook Pro 14-inch with M3 chip delivers exceptional performance and battery life. Perfect for developers, designers, and power users.",
    features: [
      "Apple M3 chip with 8-core CPU",
      "14-inch Liquid Retina XDR display",
      "18GB Unified Memory",
      "512GB SSD Storage",
      "Up to 22 hours battery life",
      "Three Thunderbolt 4 ports",
    ],
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: 1649,
    originalPrice: 1799,
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800",
    category: "Laptops",
    rating: 4.7,
    reviews: 89,
    inStock: true,
    description: "Powerful Windows laptop with stunning display and excellent build quality.",
    features: ["Intel Core i7", "16GB RAM", "1TB SSD", "15.6-inch OLED"],
  },
  {
    id: 3,
    name: "iPhone 16 Pro",
    price: 999,
    originalPrice: 1099,
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800",
    category: "Phones",
    rating: 4.8,
    reviews: 215,
    inStock: true,
    description: "The latest iPhone with advanced camera system and A18 Pro chip.",
    features: ["A18 Pro chip", "48MP camera", "Titanium design", "5G"],
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  // Await the params (required in Next.js 15+)
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-blue-600">
          Products
        </Link>
        <span>/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-blue-600 font-medium mb-2">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-3xl font-bold text-gray-900">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <>
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
                  Save {discount}%
                </span>
              </>
            )}
          </div>

          {/* Stock Status */}
          <p
            className={`text-sm font-medium mb-6 ${
              product.inStock ? "text-green-600" : "text-red-600"
            }`}
          >
            {product.inStock ? "✓ In Stock" : "Out of Stock"}
          </p>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            {product.description}
          </p>

          {/* Features */}
          <div className="mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              disabled={!product.inStock}
              className="flex-1 bg-blue-600 text-white py-3.5 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-gray-300 text-gray-700 py-3.5 px-6 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}