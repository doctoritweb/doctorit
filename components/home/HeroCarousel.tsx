"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Powerful Gaming Laptops",
    subtitle: "Up to 20% Off on ROG & Legion Series",
    description: "Experience ultra-smooth gaming with latest RTX graphics.",
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1600&h=800&fit=crop",
    buttonText: "Shop Laptops",
    buttonLink: "/products?category=laptops",
  },
  {
    id: 2,
    title: "Build Your Dream PC",
    subtitle: "Custom Desktop Configurations",
    description: "High-performance processors, GPUs and cooling solutions.",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1600&h=800&fit=crop",
    buttonText: "Explore Desktops",
    buttonLink: "/products?category=desktops",
  },
  {
    id: 3,
    title: "Storage & Components",
    subtitle: "SSDs, RAM & Motherboards",
    description: "Upgrade your system with genuine high-speed components.",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1600&h=800&fit=crop",
    buttonText: "Shop Components",
    buttonLink: "/products?category=components",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    
    // Autoplay every 5 seconds
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative bg-blue-950 overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              {/* Background Image */}
              <div className="relative h-[500px] md:h-[600px] lg:h-[650px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark Blue Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-900/40"></div>

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                  <div className="max-w-2xl text-white">
                    <p className="text-blue-300 font-semibold text-sm md:text-base mb-3 tracking-wide uppercase">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-lg">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.buttonLink}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold text-lg transition shadow-lg shadow-blue-900/40"
                    >
                      {slide.buttonText}
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-blue-400 w-8"
                : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}