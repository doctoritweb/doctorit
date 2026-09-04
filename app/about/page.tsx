"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Clock, 
  Wrench, 
  Award, 
  Heart,
  ArrowRight,
  CheckCircle
} from "lucide-react";

// Counter Hook
function useCountUp(end: number, duration: number = 2000, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

// Stat Card Component
function StatCard({ value, suffix, label, startCounting }: { 
  value: number; 
  suffix: string; 
  label: string;
  startCounting: boolean;
}) {
  const count = useCountUp(value, 2000, startCounting);

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition">
      <div className="text-4xl font-bold text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <p className="text-slate-600 font-medium">{label}</p>
    </div>
  );
}

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [startCounting, setStartCounting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounting(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* ========== HERO SECTION ========== */}
      <section className="bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DoctorIT</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Your trusted partner for professional computer & laptop repair services
          </p>
        </div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Who We Are
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                DoctorIT is a professional IT repair and service center dedicated to providing 
                fast, reliable, and affordable solutions for laptops, desktops, printers, and more.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We started with a simple goal — to help people and businesses get their devices 
                working again without the high costs and long waiting times of big service centers.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Today, we proudly serve hundreds of customers with genuine spare parts, 
                expert technicians, and honest pricing.
              </p>
            </div>

            {/* Right Stats with Count Up */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <StatCard value={5} suffix="+" label="Years Experience" startCounting={startCounting} />
              <StatCard value={2000} suffix="+" label="Devices Repaired" startCounting={startCounting} />
              <StatCard value={98} suffix="%" label="Customer Satisfaction" startCounting={startCounting} />
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center hover:border-blue-300 hover:shadow-lg hover:shadow-blue-50 transition">
                <div className="text-4xl font-bold text-blue-600 mb-2">24-48h</div>
                <p className="text-slate-600 font-medium">Average Repair Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== OUR MISSION ========== */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-600 text-lg">
              To deliver honest, high-quality, and affordable IT repair services that 
              customers can trust — every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-blue-50 transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer First</h3>
              <p className="text-slate-600">
                We treat every customer’s device with care and provide clear communication at every step.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-blue-50 transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Promise</h3>
              <p className="text-slate-600">
                We use genuine parts and provide warranty on all major repairs for your peace of mind.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center hover:shadow-lg hover:shadow-blue-50 transition">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Team</h3>
              <p className="text-slate-600">
                Our technicians are experienced and continuously trained on the latest devices and issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY TRUST US LIST ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Customers Trust Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              "Experienced & certified technicians",
              "Genuine spare parts only",
              "Transparent pricing with no hidden charges",
              "Up to 90 days service warranty",
              "Most repairs completed in 24–48 hours",
              "Friendly support via call & WhatsApp",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-16 bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help With Your Device?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Our experts are ready to diagnose and repair your laptop, desktop or printer.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-3.5 rounded-xl font-semibold text-lg transition"
          >
            Book a Repair
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}