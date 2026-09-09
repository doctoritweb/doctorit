import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "../components/home/HeroCarousel"
import RepairServices from "../components/home/RepairServices"
import HowItWorks from "../components/home/HowItWorks"
import WhyChooseUs from "../components/home/WhyChooseUs"
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CustomerReviews from "@/components/home/CustomerReviews";
import BrandsWeSupport from "@/components/home/BrandsWeSupport";
import BookRepairCTA from "@/components/home/BookRepairCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50" >
    {/* ========== HERO SECTION ========== */}
    <HeroCarousel/>
    <RepairServices/>
    <HowItWorks/>
    <WhyChooseUs/>
    <FeaturedProducts/>
    <CustomerReviews/>
    <BrandsWeSupport/>
    <BookRepairCTA/>
      {/* <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Premium IT Products
              <span className="block text-blue-300 mt-2">For Work & Gaming</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10">
              Laptops, Desktops, Components & Accessories — All in one place with best prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3.5 rounded-lg font-semibold text-lg transition"
              >
                Shop Now
              </Link>
              <Link
                href="/products?category=laptops"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3.5 rounded-lg font-semibold text-lg transition"
              >
                Explore Laptops
              </Link>
            </div>
          </div>
        </div>
        
      </section> */}
    </div>
  );
}
