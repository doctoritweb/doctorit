"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, ArrowRight, Play, Pause } from "lucide-react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Expert Laptop Repair",
    subtitle: "Screen • Battery • Motherboard • Keyboard",
    description:
      "Fast, reliable laptop repairs for personal and business devices. Most jobs completed in 24–48 hours with warranty.",
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=1600&h=800&fit=crop",
    buttonText: "Book Laptop Repair",
    buttonLink: "/services",
    badge: "24-48 Hrs",
  },
  {
    id: 2,
    title: "Desktop & PC Repair",
    subtitle: "Full System Diagnostics & Performance Fixes",
    description:
      "Power issues, motherboard, GPU, storage and cooling solutions — complete desktop repair and upgrades.",
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=1600&h=800&fit=crop",
    buttonText: "Book PC Repair",
    buttonLink: "/services",
    badge: "Full Service",
  },
  {
    id: 3,
    title: "Data Recovery",
    subtitle: "Failed HDD/SSD • Deleted Files • Accidental Format",
    description:
      "Recover important files from dead drives, formatted disks and corrupted storage with high success rates.",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=1600&h=800&fit=crop",
    buttonText: "Recover Data",
    buttonLink: "/services",
    badge: "High Success",
  },
  {
    id: 4,
    title: "Network & WiFi Setup",
    subtitle: "Home • Office • Factory Networks",
    description:
      "Reliable WiFi, LAN, range improvement, structured cabling and complete network troubleshooting.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=800&fit=crop",
    buttonText: "Network Solutions",
    buttonLink: "/services",
    badge: "Home & Office",
  },
  {
    id: 5,
    title: "PC Setup & Upgrades",
    subtitle: "OS Installation • Drivers • SSD/RAM Upgrades",
    description:
      "Complete PC setup for home users and bulk deployment for offices — fast, clean and optimized.",
    image:
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1600&h=800&fit=crop",
    buttonText: "Setup & Upgrade",
    buttonLink: "/services",
    badge: "Ready to Use",
  },
  {
    id: 6,
    title: "Industrial & Corporate IT",
    subtitle: "Bulk Deployment • Factory Networks • Ongoing Support",
    description:
      "Structured IT services for factories, warehouses and offices — from single workstation to multi-system rollout.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=800&fit=crop",
    buttonText: "Business Solutions",
    buttonLink: "/contact",
    badge: "B2B",
  },
];

export default function HeroCarousel() {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [autoplayPlugin.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  // Update selected index
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setProgress(0);
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Progress bar animation
  useEffect(() => {
    if (!isPlaying) return;

    const start = Date.now();
    const duration = 5000;
    let frame: number;

    const animate = () => {
      const elapsed = Date.now() - start;
      const value = Math.min(elapsed / duration, 1);
      setProgress(value);
      if (value < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [selectedIndex, isPlaying]);

  // Play / Pause
  const toggleAutoplay = () => {
    const autoplay = autoplayPlugin.current;
    if (!autoplay) return;

    if (isPlaying) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative bg-slate-950 overflow-hidden group/hero">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[520px] md:h-[640px] lg:h-[700px]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/30" /> */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 flex items-center">
                  <div className="max-w-2xl text-white">
                    <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30 mb-5">
                      {slide.badge}
                    </span>

                    <p className="text-blue-300 font-medium text-sm md:text-base mb-3 tracking-wide uppercase">
                      {slide.subtitle}
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5">
                      {slide.title}
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                      {slide.description}
                    </p>

                    <Link
                      href={slide.buttonLink}
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-xl font-semibold text-lg transition shadow-lg"
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

      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-white/10 z-20">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 transition-none"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          
          {/* Dots */}
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "w-8 bg-blue-500"
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>

          {/* Play/Pause + Counter */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleAutoplay}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center transition"
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 fill-current" />
              ) : (
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              )}
            </button>

            <div className="text-sm font-medium text-white/70 tabular-nums hidden sm:block">
              <span className="text-white">
                {String(selectedIndex + 1).padStart(2, "0")}
              </span>
              <span className="mx-1.5 text-white/40">/</span>
              <span>{String(slides.length).padStart(2, "0")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}