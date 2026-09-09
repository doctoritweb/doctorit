"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Monitor,
  Printer,
  Wifi,
  HardDrive,
  MemoryStick,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  Star,
  Zap,
  Home,
  Settings,
  Database,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Laptop & Desktop Repair",
    desc: "Screen, battery, keyboard, motherboard, power issues and performance problems fixed for home users.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Wifi,
    title: "Home WiFi Setup",
    desc: "Router installation, WiFi range improvement, password setup and home network troubleshooting.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Printer,
    title: "Printer Setup & Service",
    desc: "Printer installation, driver setup, wireless printing and basic printer repair for home use.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Database,
    title: "Data Recovery",
    desc: "Recover photos, documents and important files from failed drives, deleted folders or dead laptops.",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: HardDrive,
    title: "SSD Upgrade",
    desc: "Make your old laptop or PC much faster with SSD upgrade and clean system setup.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: MemoryStick,
    title: "RAM Upgrade",
    desc: "Increase memory for smoother multitasking, faster browsing and better overall performance.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Settings,
    title: "PC Installation & Setup",
    desc: "New computer setup, Windows installation, drivers, software and basic optimization.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Monitor,
    title: "General IT Support",
    desc: "Software issues, slow system, virus problems and everyday computer help for home users.",
    color: "from-slate-600 to-slate-800",
  },
];

const steps = [
  {
    step: "01",
    title: "Tell Us the Problem",
    desc: "Call, WhatsApp or visit us and explain the issue with your laptop, PC or printer.",
  },
  {
    step: "02",
    title: "Quick Diagnosis",
    desc: "We check the device and explain the problem with a clear repair or setup cost.",
  },
  {
    step: "03",
    title: "Repair / Setup",
    desc: "Our technicians complete the work carefully using genuine parts where needed.",
  },
  {
    step: "04",
    title: "Ready to Use",
    desc: "You get your device back tested, working and ready for daily home use.",
  },
];

const faqs = [
  {
    q: "Do you provide service for home users only or also for offices?",
    a: "We serve both. This page is focused on home and personal users, but we also support small offices and shops.",
  },
  {
    q: "Can you set up WiFi and printer at my home?",
    a: "Yes. We help with router setup, WiFi configuration, printer installation and wireless printing setup.",
  },
  {
    q: "How long do common laptop repairs take?",
    a: "Many common issues are completed within 24–48 hours. Some parts-based repairs may take a little longer depending on availability.",
  },
  {
    q: "Do you upgrade old laptops with SSD and RAM?",
    a: "Yes. SSD and RAM upgrades are one of the best ways to make an old laptop feel fast again.",
  },
  {
    q: "Is data recovery possible from a dead laptop?",
    a: "In many cases yes. If the storage drive is okay, we can recover your photos, documents and important files.",
  },
];

export default function HomePersonalPage() {
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
              <Home className="w-4 h-4" />
              Home & Personal Users
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Complete IT Support
              <span className="block text-cyan-300">For Your Home & Family</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Laptop and desktop repair, printer service, WiFi setup, data recovery and PC installation —  
              reliable IT help for individuals and families.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Book a Service
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
                Trusted Home Service
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                Fast Support
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-300" />
                Laptop • PC • Printer • WiFi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Services for Home & Personal Users
            </h2>
            <p className="text-slate-600 text-lg">
              Practical IT solutions for your everyday computer and home network needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-transparent hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
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

      {/* ========== HIGHLIGHTED SERVICES ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Most Requested Home Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Laptop & desktop repair",
                "Home WiFi & printer setup",
                "Data recovery",
                "SSD / RAM upgrades",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-slate-600 text-lg">
              Simple process for home users — clear communication and reliable service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                  <div className="text-5xl font-black text-blue-100 group-hover:text-blue-200 transition-colors mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
                <Zap className="w-4 h-4" />
                Why DoctorIT
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Reliable IT Help for Your Home
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We help families and individuals with everyday computer problems —  
                from slow laptops and WiFi issues to printer setup and data recovery.
              </p>

              <div className="space-y-4">
                {[
                  "Friendly support for non-technical users",
                  "Clear explanation before any repair",
                  "Home WiFi and printer setup assistance",
                  "Laptop, desktop and data recovery support",
                  "SSD & RAM upgrades for better speed",
                  "Honest pricing with no unnecessary work",
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
                  icon: Laptop,
                  title: "Device Repair",
                  desc: "Laptop and desktop issues fixed properly",
                  gradient: "from-blue-500 to-cyan-600",
                },
                {
                  icon: Wifi,
                  title: "Home Network",
                  desc: "WiFi and printer setup made simple",
                  gradient: "from-violet-500 to-indigo-600",
                },
                {
                  icon: HardDrive,
                  title: "Speed Upgrade",
                  desc: "SSD and RAM upgrades for old systems",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Database,
                  title: "Data Safety",
                  desc: "Recover important personal files",
                  gradient: "from-orange-500 to-amber-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
              Common questions from home and personal users.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-blue-200 transition-colors"
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
                  <p className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.a}</p>
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
            Need Help With Your Home Computer?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            From laptop repair and WiFi setup to data recovery and upgrades — we’re here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Book a Service
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