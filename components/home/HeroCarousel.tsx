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
  const autoplay = useRef(
    Autoplay({ delay: 5500, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 35 },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setProgress(0);
  }, [emblaApi]);

  // Progress animation
  useEffect(() => {
    if (!isPlaying) return;

    const start = Date.now();
    const duration = 5500;

    const animate = () => {
      const elapsed = Date.now() - start;
      const value = Math.min(elapsed / duration, 1);
      setProgress(value);
      if (value < 1) requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [selectedIndex, isPlaying]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const toggleAutoplay = () => {
    const plugin = autoplay.current;
    if (!plugin) return;

    if (isPlaying) {
      plugin.stop();
    } else {
      plugin.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative bg-slate-950 overflow-hidden group/hero">
      {/* Main Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={slide.id} className="relative flex-[0_0_100%] min-w-0">
              <div className="relative h-[520px] sm:h-[580px] md:h-[640px] lg:h-[700px] xl:h-[760px]">
                {/* Background Image + Ken Burns */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[8000ms] ease-out will-change-transform ${
                      index === selectedIndex ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                {/* Multi-layer Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(2,6,23,0.4)_100%)]" />

                {/* Content */}
                <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center">
                  <div
                    className={`max-w-2xl text-white transition-all duration-700 ease-out ${
                      index === selectedIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    {/* Badge */}
                    <div
                      className={`inline-flex items-center gap-2 mb-5 transition-all duration-700 delay-100 ${
                        index === selectedIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30 backdrop-blur-sm">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <p
                      className={`text-blue-300/90 font-medium text-sm md:text-base mb-3 tracking-wide uppercase transition-all duration-700 delay-150 ${
                        index === selectedIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      {slide.subtitle}
                    </p>

                    {/* Title */}
                    <h1
                      className={`text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] font-extrabold leading-[1.1] tracking-tight mb-5 transition-all duration-700 delay-200 ${
                        index === selectedIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p
                      className={`text-lg md:text-xl text-slate-300 mb-8 max-w-lg leading-relaxed transition-all duration-700 delay-300 ${
                        index === selectedIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
                    >
                      {slide.description}
                    </p>

                    {/* CTAs */}
                    <div
                      className={`flex flex-wrap items-center gap-4 transition-all duration-700 delay-400 ${
                        index === selectedIndex
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
                    >
                      <Link
                        href={slide.buttonLink}
                        className="group/btn relative inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 shadow-xl shadow-blue-900/40 hover:shadow-blue-500/30 hover:-translate-y-0.5 overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2.5">
                          {slide.buttonText}
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      </Link>

                      <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors duration-300"
                      >
                        View Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
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
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 opacity-0 group-hover/hero:opacity-100 focus:opacity-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 hover:scale-105 opacity-0 group-hover/hero:opacity-100 focus:opacity-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7" />
      </button>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
          {/* Progress Dots */}
          <div className="flex items-center gap-2.5">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className="relative"
                aria-label={`Go to slide ${index + 1}`}
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 overflow-hidden ${
                    index === selectedIndex
                      ? "w-10 bg-white/30"
                      : "w-2.5 bg-white/40 hover:bg-white/60"
                  }`}
                >
                  {index === selectedIndex && (
                    <div
                      className="h-full bg-white rounded-full origin-left"
                      style={{ transform: `scaleX(${progress})` }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Play/Pause + Counter */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleAutoplay}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 text-white flex items-center justify-center transition-all duration-300"
              aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
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