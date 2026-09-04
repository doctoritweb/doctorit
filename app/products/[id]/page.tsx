import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle, MessageCircle, Phone } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  rating: number;
  inStock: boolean;
  description?: string;
  features?: string[];
  reviews?: number;
}

// Same image sets used in products page
const images = {
  Laptops: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
    "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800",
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800",
    "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800",
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800",
    "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?w=800",
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800",
  ],
  Phones: [
    "https://images.unsplash.com/photo-1696446701796-da61225697cc?w=800",
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800",
    "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800",
    "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800",
    "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800",
  ],
  Accessories: [
    "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800",
    "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800",
    "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800",
    "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800",
    "https://images.unsplash.com/photo-1600080972464-8eef123c0f5e?w=800",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800",
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800",
  ],
  Monitors: [
    "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800",
    "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800",
    "https://images.unsplash.com/photo-1586210579191-33b45e38dd2f?w=800",
    "https://images.unsplash.com/photo-1616763355603-9755a640a287?w=800",
  ],
  Components: [
    "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800",
    "https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=800",
    "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800",
    "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800",
    "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800",
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
        category,
        rating: Number((4 + Math.random()).toFixed(1)),
        inStock: Math.random() > 0.2,
        description: `High quality ${category.toLowerCase()} product designed for performance and reliability. Perfect for everyday use and professional work.`,
        features: [
          "Premium build quality",
          "Reliable performance",
          "1 Year warranty",
          "Genuine product",
        ],
        reviews: Math.floor(Math.random() * 300) + 20,
      });
    }
  });

  return products;
}

const products = generateProducts();

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    notFound();
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-10">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-blue-600 transition">
            Products
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
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
            <p className="text-blue-600 font-semibold mb-2">{product.category}</p>
            
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
                {product.rating} ({product.reviews || 0} reviews)
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
                  <span className="bg-red-100 text-red-600 text-sm font-semibold px-2.5 py-1 rounded-lg">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <p
              className={`inline-flex items-center gap-1.5 text-sm font-medium mb-6 px-3 py-1.5 rounded-full ${
                product.inStock
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {product.inStock ? "✓ In Stock" : "Out of Stock"}
            </p>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description || "No description available for this product."}
            </p>

            {/* Features */}
            <div className="mb-10">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Key Features</h3>
              <ul className="space-y-3">
                {(product.features || ["Genuine product", "Quality assured"]).map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] text-white py-3.5 px-6 rounded-xl font-semibold hover:opacity-90 transition"
              >
                <MessageCircle className="w-5 h-5" />
                Enquire Now
              </Link>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3.5 px-6 rounded-xl font-semibold transition"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            {/* Back Button */}
            <div className="mt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}