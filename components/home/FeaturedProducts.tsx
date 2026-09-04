"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ShoppingCart,
  Heart,
  Eye,
  X,
  Plus,
  Minus,
  Check,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop Battery (Universal)",
    category: "Laptop Parts",
    price: "₹2,499",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Samsung 980 500GB SSD",
    category: "Storage",
    price: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Wireless Mouse Logitech",
    category: "Accessories",
    price: "₹1,299",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Laptop Cooling Pad",
    category: "Accessories",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=400&fit=crop",
  },
];

interface ToastState {
  id: number;
  message: string;
}

export default function FeaturedProducts() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [wishlist, setWishlist] = useState<Set<number>>(new Set());
  const [quickView, setQuickView] = useState<Product | null>(null);
  const [toasts, setToasts] = useState<ToastState[]>([]);
  const toastIdRef = useRef(0);

  function pushToast(message: string) {
    const id = toastIdRef.current++;
    setToasts((t) => [...t, { id, message }]);
    setTimeout(() => {
      setToasts((t) => t.filter((toast) => toast.id !== id));
    }, 2200);
  }

  function addToCart(product: Product, e?: React.MouseEvent) {
    e?.preventDefault();
    e?.stopPropagation();
    setCart((c) => ({ ...c, [product.id]: (c[product.id] ?? 0) + 1 }));
    pushToast(`Added ${product.name} to cart`);
  }

  function updateQty(productId: number, delta: number) {
    setCart((c) => {
      const next = { ...c };
      const qty = (next[productId] ?? 0) + delta;
      if (qty <= 0) {
        delete next[productId];
      } else {
        next[productId] = qty;
      }
      return next;
    });
  }

  function toggleWishlist(productId: number, e?: React.MouseEvent) {
    e?.preventDefault();
    e?.stopPropagation();
    setWishlist((w) => {
      const next = new Set(w);
      if (next.has(productId)) {
        next.delete(productId);
      } else {
        next.add(productId);
      }
      return next;
    });
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setQuickView(null);
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Featured Products
          </h2>
          <p className="text-slate-600">
            Quality parts & accessories available for sale
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => {
            const qty = cart[product.id] ?? 0;
            const isWishlisted = wishlist.has(product.id);

            return (
              <div
                key={product.id}
                className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
              >
                {/* Wishlist button */}
                <button
                  onClick={(e) => toggleWishlist(product.id, e)}
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isWishlisted ? "fill-red-500 text-red-500" : "text-slate-500"
                    }`}
                  />
                </button>

                <Link href={`/products/${product.id}`} className="block">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* Quick view overlay */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setQuickView(product);
                      }}
                      className="absolute inset-0 flex items-center justify-center bg-slate-900/0 group-hover:bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <span className="flex items-center gap-2 bg-white text-slate-900 text-sm font-semibold px-4 py-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4" />
                        Quick view
                      </span>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-5 pb-0">
                    <p className="text-sm text-blue-600 font-medium mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition">
                      {product.name}
                    </h3>

                    <span className="text-lg font-bold text-slate-900">
                      {product.price}
                    </span>
                  </div>
                </Link>

                {/* Cart controls */}
                <div className="p-5 pt-3">
                  {qty === 0 ? (
                    <button
                      onClick={(e) => addToCart(product, e)}
                      className="w-full flex items-center justify-center gap-2 bg-blue-50 text-blue-600 font-semibold text-sm py-2.5 rounded-xl hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to cart
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-blue-600 rounded-xl overflow-hidden">
                      <button
                        onClick={() => updateQty(product.id, -1)}
                        aria-label="Decrease quantity"
                        className="w-10 h-10 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-white font-semibold text-sm">
                        {qty} in cart
                      </span>
                      <button
                        onClick={() => updateQty(product.id, 1)}
                        aria-label="Increase quantity"
                        className="w-10 h-10 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white border border-slate-200 text-blue-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-semibold px-6 py-3 rounded-full transition-colors"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Quick view modal */}
      {quickView && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4"
          onClick={() => setQuickView(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full grid grid-cols-1 sm:grid-cols-2 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setQuickView(null)}
              aria-label="Close quick view"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:bg-slate-100 z-10"
            >
              <X className="w-4 h-4 text-slate-700" />
            </button>

            <div className="aspect-square sm:aspect-auto bg-slate-100">
              <img
                src={quickView.image}
                alt={quickView.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex flex-col">
              <p className="text-sm text-blue-600 font-medium mb-1">
                {quickView.category}
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {quickView.name}
              </h3>
              <span className="text-2xl font-bold text-slate-900 mb-6">
                {quickView.price}
              </span>

              <button
                onClick={(e) => {
                  addToCart(quickView, e);
                  setQuickView(null);
                }}
                className="mt-auto w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toasts */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-center gap-2 bg-slate-900 text-white text-sm font-medium px-4 py-3 rounded-xl shadow-lg animate-[fadeIn_0.2s_ease-out]"
          >
            <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
              <Check className="w-3 h-3" />
            </span>
            {toast.message}
          </div>
        ))}
      </div>
    </section>
  );
}