"use client";

import Link from "next/link";
import React from "react";

interface Category {
  id: number;
  name: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "PC & Laptop Accessories",
    // Motherboard + parts / accessories
    image:
      "/accessories.jpg",
    href: "/products?category=pc-laptop-accessories",
  },
  {
    id: 2,
    name: "Custom PC Builds",
    // RGB custom gaming PC
    image:
      "/Custom.jpg",
    href: "/products?category=custom-pc-builds",
  },
  {
    id: 3,
    name: "Brand New & Imported Laptops",
    // Non-Apple / multi brand laptop look
    image:
      "/Lapsi.jpg",
    href: "/products?category=imported-laptops",
  },
  {
    id: 4,
    name: "Imported LED/LCD Monitors",
    // Multiple monitors
    image:
      "/monitors.jpg",
    href: "/products?category=monitors",
  },
];

export default function Categories() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Shop by Category
          </h2>
          <p className="text-slate-600">
            Quality parts & accessories available for sale
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white border border-slate-200 rounded-md overflow-hidden
                         transition-all duration-500 ease-out
                         hover:-translate-y-2 hover:border-blue-400
                         hover:shadow-2xl hover:shadow-blue-100/60
                         will-change-transform"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out
                             group-hover:scale-110"
                />

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Category Name */}
              <div className="p-5 pb-5 text-center">
                <p className="text-lg font-bold text-slate-900 
                              transition-colors duration-300 
                              group-hover:text-blue-600">
                  {category.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}