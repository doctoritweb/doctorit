"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";

export default function BookRepairCTA() {
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Deep gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950" />

      {/* Animated glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      {/* Top highlight line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Floating badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-medium backdrop-blur-md shadow-lg shadow-blue-950/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <Sparkles className="w-4 h-4 text-yellow-300" />
            Same-day diagnosis available
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.1]">
            Ready to Repair
            <br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
              Your Device?
            </span>
          </h2>
          <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Expert technicians. Genuine parts. Transparent pricing.
            <br className="hidden sm:block" />
            Book now and get your device fixed fast.
          </p>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-12 mt-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">100%</div>
              <div className="text-blue-200/60 text-xs">Warranty</div>
            </div>
          </div>

          <div className="w-px h-10 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Clock className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">24–48h</div>
              <div className="text-blue-200/60 text-xs">Most Repairs</div>
            </div>
          </div>

          <div className="w-px h-10 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">4.9/5</div>
              <div className="text-blue-200/60 text-xs">Customer Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary */}
          <Link
            href="/contact"
            onMouseEnter={() => setHoveredBtn("book")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="group relative inline-flex items-center gap-3 bg-white text-slate-900 px-9 py-4.5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-blue-950/40 hover:shadow-blue-500/20 hover:-translate-y-1.5 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <Zap
                className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                  hoveredBtn === "book" ? "scale-110 rotate-12" : ""
                }`}
              />
              Book a Repair
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 ${
                  hoveredBtn === "book" ? "translate-x-1.5" : ""
                }`}
              />
            </span>
            {/* Shine */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-blue-100/60 to-transparent" />
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredBtn("whatsapp")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-9 py-4.5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-green-950/30 hover:shadow-green-500/20 hover:-translate-y-1.5 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              <MessageCircle
                className={`w-5 h-5 transition-transform duration-300 ${
                  hoveredBtn === "whatsapp" ? "scale-125" : ""
                }`}
              />
              WhatsApp Us
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </a>

          {/* Call */}
          <a
            href="tel:+91XXXXXXXXXX"
            onMouseEnter={() => setHoveredBtn("call")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="group relative inline-flex items-center gap-3 border-2 border-white/20 bg-white/5 hover:bg-white hover:text-slate-900 text-white px-9 py-4.5 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-sm"
          >
            <Phone
              className={`w-5 h-5 transition-transform duration-300 ${
                hoveredBtn === "call" ? "rotate-[15deg] scale-110" : ""
              }`}
            />
            Call Now
          </a>
        </div>

        {/* Bottom trust line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-blue-200/50 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400/80" />
            <span>Free diagnosis</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400/80" />
            <span>No hidden charges</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400/80" />
            <span>Genuine parts only</span>
          </div>
        </div>
      </div>
    </section>
  );
}