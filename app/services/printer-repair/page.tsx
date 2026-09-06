"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Printer,
  Droplets,
  FileWarning,
  Settings,
  Wifi,
  Wrench,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  Star,
  Zap,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Paper Jam Issues",
    desc: "Frequent paper jams, paper not feeding, roller problems, path blockage",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Droplets,
    title: "Ink / Toner Problems",
    desc: "Low quality print, streaks, blank pages, ink leakage, cartridge issues",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Printer,
    title: "Not Printing",
    desc: "Printer offline, not responding, print queue stuck, driver errors",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: Wifi,
    title: "WiFi / Network Issues",
    desc: "Wireless connection failed, network printer not found, IP problems",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Settings,
    title: "Hardware Failure",
    desc: "Fuser issues, drum unit, pickup roller, power board and mechanical faults",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: AlertTriangle,
    title: "Error Codes",
    desc: "Error lights, display messages, firmware problems, sensor faults",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: RefreshCw,
    title: "Slow / Poor Quality",
    desc: "Slow printing, faded text, smudges, alignment and calibration issues",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Wrench,
    title: "Maintenance Service",
    desc: "Full cleaning, roller replacement, preventive maintenance for offices",
    color: "from-slate-600 to-slate-800",
  },
];

const steps = [
  {
    step: "01",
    title: "Free Diagnosis",
    desc: "We check your printer and clearly explain the issue before any repair.",
  },
  {
    step: "02",
    title: "Transparent Quote",
    desc: "You get a clear repair cost. Work starts only after your approval.",
  },
  {
    step: "03",
    title: "Expert Repair",
    desc: "Technicians repair using quality parts and proper service tools.",
  },
  {
    step: "04",
    title: "Testing & Delivery",
    desc: "Full print test is done. You receive the printer with warranty.",
  },
];

const faqs = [
  {
    q: "Which printer brands do you repair?",
    a: "We repair all major brands including HP, Canon, Epson, Brother, Samsung, Ricoh and more — both inkjet and laser printers.",
  },
  {
    q: "How long does a printer repair take?",
    a: "Most common issues (paper jam, cartridge, cleaning, drivers) are fixed within a few hours to 24 hours. Major hardware repairs may take 1–3 days.",
  },
  {
    q: "Do you repair both home and office printers?",
    a: "Yes. We service home inkjet printers as well as office laser printers and multi-function devices.",
  },
  {
    q: "Can you fix network / WiFi printer problems?",
    a: "Yes. We troubleshoot wireless setup, IP conflicts, sharing issues and make your printer work properly on the network.",
  },
  {
    q: "Is there warranty on printer repairs?",
    a: "Yes. We provide service warranty on major repairs. The period depends on the type of spare part and work done.",
  },
];

export default function PrinterRepairPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">

      {/* ========== HERO ========== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#021964] via-[#022978] to-[#03adeb] text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              <Printer className="w-4 h-4" />
              Professional Printer Repair
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Printer Repair
              <span className="block text-cyan-300">Fast • Reliable • Affordable</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Paper jams, poor print quality, network issues or hardware faults —  
              we repair inkjet & laser printers of all major brands with warranty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Book a Repair
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-300" />
                Service Warranty
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                Same Day / Next Day Service
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-300" />
                Home & Office Printers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PROBLEMS WE FIX ========== */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Printer Problems We Fix
            </h2>
            <p className="text-slate-600 text-lg">
              From simple paper jams to complex hardware and network issues — we handle it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-400`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Our Printer Repair Process Works
            </h2>
            <p className="text-slate-600 text-lg">
              Clear, fast and professional service from diagnosis to final testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 h-full hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-400">
                  <div className="text-5xl font-black text-blue-100 group-hover:text-blue-200 transition-colors mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Zap className="w-4 h-4" />
                Why DoctorIT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose Us for Printer Repair?
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We service both home and office printers with honest diagnosis, 
                quality spare parts and reliable after-service support.
              </p>

              <div className="space-y-4">
                {[
                  "Support for HP, Canon, Epson, Brother & more",
                  "Inkjet and Laser printer expertise",
                  "Network & WiFi printer setup support",
                  "Transparent pricing — no hidden charges",
                  "Quality spare parts and service warranty",
                  "Home and office printer maintenance",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-lg">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  icon: ShieldCheck,
                  title: "Service Warranty",
                  desc: "Warranty on major printer repairs",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Clock,
                  title: "Quick Service",
                  desc: "Many issues fixed same day or next day",
                  gradient: "from-blue-500 to-cyan-600",
                },
                {
                  icon: Wrench,
                  title: "All Major Brands",
                  desc: "HP, Canon, Epson, Brother, Samsung...",
                  gradient: "from-violet-500 to-indigo-600",
                },
                {
                  icon: Star,
                  title: "Home & Office",
                  desc: "Personal and business printer support",
                  gradient: "from-orange-500 to-amber-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 shadow-md`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
              Common questions about our printer repair service.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50/50 hover:border-blue-200 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-900 text-[15px] md:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-20 bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Printer Not Working Properly?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a free diagnosis and clear quotation. We repair home and office printers of all major brands.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Book Free Diagnosis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+91XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              +91 XXXXX XXXXX
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}