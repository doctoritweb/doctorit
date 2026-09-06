"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Award,
  Heart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Count-up hook with easing                                          */
/* ------------------------------------------------------------------ */
function useCountUp(
  end: number,
  duration = 2000,
  startCounting: boolean,
  decimals = 0
) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const ease = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = ease(progress);

      setCount(
        decimals > 0
          ? Number((eased * end).toFixed(decimals))
          : Math.floor(eased * end)
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting, decimals]);

  return count;
}

/* ------------------------------------------------------------------ */
/*  Intersection observer – returns [ref, inView]                      */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.25): [
  React.RefObject<HTMLDivElement | null>,
  boolean
] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ------------------------------------------------------------------ */
/*  Stat Card                                                          */
/* ------------------------------------------------------------------ */
function StatCard({
  value,
  suffix,
  label,
  startCounting,
  delay = 0,
}: {
  value: number;
  suffix: string;
  label: string;
  startCounting: boolean;
  delay?: number;
}) {
  const count = useCountUp(value, 1800 + delay, startCounting);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!startCounting) return;
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [startCounting, delay]);

  return (
    <div
      className={`
        group relative bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center
        transition-all duration-500 ease-out
        hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/5 group-hover:to-cyan-400/10 transition-all duration-500 pointer-events-none" />

      <div className="relative">
        <div className="text-4xl font-bold text-blue-600 mb-2 tabular-nums tracking-tight">
          {count}
          <span className="text-blue-500">{suffix}</span>
        </div>
        <p className="text-slate-600 font-medium text-sm sm:text-base">{label}</p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mission Card                                                       */
/* ------------------------------------------------------------------ */
function MissionCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  inView,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
  inView: boolean;
}) {
  return (
    <div
      className={`
        group bg-white border border-slate-200 rounded-2xl p-8 text-center
        transition-all duration-600 ease-out
        hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1.5 hover:border-blue-300
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-5
                   transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white
                   group-hover:shadow-lg group-hover:shadow-blue-200"
      >
        <Icon className="w-7 h-7 transition-transform duration-300 group-hover:rotate-6" />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Trust Item                                                         */
/* ------------------------------------------------------------------ */
function TrustItem({
  text,
  index,
  inView,
}: {
  text: string;
  index: number;
  inView: boolean;
}) {
  return (
    <div
      className={`
        flex items-start gap-3 p-3 rounded-xl
        transition-all duration-500 ease-out
        hover:bg-blue-50/80 hover:translate-x-1
        ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
      `}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
      <span className="text-slate-700 text-lg">{text}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Page                                                          */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  const [statsRef, statsInView] = useInView(0.3);
  const [missionRef, missionInView] = useInView(0.2);
  const [trustRef, trustInView] = useInView(0.15);
  const [ctaRef, ctaInView] = useInView(0.3);

  const trustItems = [
    "Experienced & certified technicians",
    "Genuine spare parts only",
    "Transparent pricing with no hidden charges",
    "Up to 90 days service warranty",
    "Most repairs completed in 24–48 hours",
    "Friendly support via call & WhatsApp",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ========== HERO ========== */}
      <section className="relative bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-cyan-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight animate-[fadeInUp_0.7s_ease-out]">
            About DoctorIT
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto animate-[fadeInUp_0.7s_ease-out_0.15s_both]">
            Your trusted partner for professional computer & laptop repair
            services
          </p>
        </div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Who We Are
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                DoctorIT is a professional IT repair and service center dedicated
                to providing fast, reliable, and affordable solutions for
                laptops, desktops, printers, and more.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We started with a simple goal — to help people and businesses get
                their devices working again without the high costs and long
                waiting times of big service centers.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Today, we proudly serve hundreds of customers with genuine spare
                parts, expert technicians, and honest pricing.
              </p>
            </div>

            {/* Right – Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-5 sm:gap-6">
              <StatCard
                value={5}
                suffix="+"
                label="Years Experience"
                startCounting={statsInView}
                delay={0}
              />
              <StatCard
                value={2000}
                suffix="+"
                label="Devices Repaired"
                startCounting={statsInView}
                delay={120}
              />
              <StatCard
                value={98}
                suffix="%"
                label="Customer Satisfaction"
                startCounting={statsInView}
                delay={240}
              />
              <div
                className={`
                  group relative bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center
                  transition-all duration-500 ease-out
                  hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/60 hover:-translate-y-1
                  ${statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                `}
                style={{ transitionDelay: "360ms" }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/5 group-hover:to-cyan-400/10 transition-all duration-500 pointer-events-none" />
                <div className="relative">
                  <div className="text-4xl font-bold text-blue-600 mb-2 flex items-center justify-center gap-1">
                    <Clock className="w-7 h-7 opacity-80" />
                    <span>24-48h</span>
                  </div>
                  <p className="text-slate-600 font-medium text-sm sm:text-base">
                    Average Repair Time
                  </p>
                </div>
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
              To deliver honest, high-quality, and affordable IT repair services
              that customers can trust — every single time.
            </p>
          </div>

          <div
            ref={missionRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <MissionCard
              icon={Heart}
              title="Customer First"
              description="We treat every customer’s device with care and provide clear communication at every step."
              delay={0}
              inView={missionInView}
            />
            <MissionCard
              icon={ShieldCheck}
              title="Quality Promise"
              description="We use genuine parts and provide warranty on all major repairs for your peace of mind."
              delay={150}
              inView={missionInView}
            />
            <MissionCard
              icon={Award}
              title="Expert Team"
              description="Our technicians are experienced and continuously trained on the latest devices and issues."
              delay={300}
              inView={missionInView}
            />
          </div>
        </div>
      </section>

      {/* ========== WHY TRUST US ========== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Customers Trust Us
            </h2>
          </div>

          <div
            ref={trustRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto"
          >
            {trustItems.map((item, index) => (
              <TrustItem
                key={index}
                text={item}
                index={index}
                inView={trustInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section
        ref={ctaRef}
        className="relative py-16 md:py-20 bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] text-white overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-300/10 rounded-full blur-3xl" />
        </div>

        <div
          className={`
            relative max-w-4xl mx-auto px-4 text-center
            transition-all duration-700 ease-out
            ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help With Your Device?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Our experts are ready to diagnose and repair your laptop, desktop or
            printer.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-white text-blue-800 hover:bg-blue-50 px-8 py-3.5 rounded-xl font-semibold text-lg
                       transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Book a Repair
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}