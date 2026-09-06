"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Cpu,
  HardDrive,
  Zap,
  Fan,
  MemoryStick,
  CircuitBoard,
  Power,
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  Star,
  Server,
} from "lucide-react";

const problems = [
  {
    icon: Power,
    title: "No Power / Dead PC",
    desc: "PC not turning on, power supply failure, motherboard power issues",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Monitor,
    title: "No Display",
    desc: "Blank screen, no signal, GPU issues, display output problems",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Cpu,
    title: "CPU & Motherboard",
    desc: "Processor failure, chipset issues, BIOS problems, overheating CPU",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: MemoryStick,
    title: "RAM Issues",
    desc: "Blue screen, random restarts, memory errors, RAM upgrade",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: HardDrive,
    title: "Hard Disk / SSD",
    desc: "Slow boot, clicking sound, drive failure, SSD upgrade & cloning",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Fan,
    title: "Overheating",
    desc: "High temperature, fan noise, thermal paste, cabinet cooling fix",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: CircuitBoard,
    title: "Graphics Card",
    desc: "GPU artifacts, driver crash, no display from GPU, card replacement",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Server,
    title: "Slow Performance",
    desc: "PC lagging, virus, startup issues, full optimization & tune-up",
    color: "from-slate-600 to-slate-800",
  },
];

const steps = [
  {
    step: "01",
    title: "Free Diagnosis",
    desc: "We inspect your desktop and identify the exact problem before any repair.",
  },
  {
    step: "02",
    title: "Clear Quotation",
    desc: "You receive a transparent price. Work starts only after your approval.",
  },
  {
    step: "03",
    title: "Professional Repair",
    desc: "Certified technicians repair using quality parts and proper tools.",
  },
  {
    step: "04",
    title: "Testing & Handover",
    desc: "Full system testing is done. You get warranty and a ready-to-use PC.",
  },
];

const faqs = [
  {
    q: "How long does a desktop repair usually take?",
    a: "Most common repairs (PSU, RAM, HDD/SSD, cleaning) are done within 24–48 hours. Motherboard or GPU level repairs may take 3–5 days.",
  },
  {
    q: "Can you upgrade my old PC instead of repairing?",
    a: "Yes. We offer hardware upgrades like SSD, RAM, Graphics card and power supply to boost performance of older systems.",
  },
  {
    q: "Do you repair custom built / gaming PCs?",
    a: "Yes. We handle both branded desktops and custom-built gaming PCs of all major brands and configurations.",
  },
  {
    q: "Is data safe during repair?",
    a: "Yes. We take care of your data. If the hard disk/SSD is healthy, your files remain safe. We also offer data recovery if needed.",
  },
  {
    q: "Do you provide warranty on desktop repairs?",
    a: "Yes. We provide up to 90 days service warranty on major repairs (parts + labour).",
  },
];

export default function DesktopRepairPage() {
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
              <Monitor className="w-4 h-4" />
              Professional Desktop / PC Repair
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Expert Desktop & PC Repair
              <span className="block text-cyan-300">Fast • Reliable • Affordable</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              From power issues to motherboard and GPU failures — we repair branded 
              and custom-built desktops with genuine parts and service warranty.
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
                Up to 90 Days Warranty
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                24–48 Hours Most Repairs
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-300" />
                Branded + Custom PCs
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
              Desktop / PC Problems We Fix
            </h2>
            <p className="text-slate-600 text-lg">
              We handle complete desktop troubleshooting — from basic issues to advanced hardware repair.
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
              How Our PC Repair Process Works
            </h2>
            <p className="text-slate-600 text-lg">
              Simple, transparent and professional process from diagnosis to delivery.
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
                Why Choose Us for Desktop Repair?
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Whether it’s a home PC, office computer or gaming desktop — we deliver 
                honest diagnosis and reliable repair service.
              </p>

              <div className="space-y-4">
                {[
                  "Free diagnosis before any repair",
                  "Support for branded & custom-built PCs",
                  "Genuine / high-quality spare parts",
                  "Transparent pricing with no hidden costs",
                  "Up to 90 days service warranty",
                  "Hardware upgrade options available",
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
                  title: "Warranty Protected",
                  desc: "Up to 90 days warranty on parts & labour",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Clock,
                  title: "Fast Turnaround",
                  desc: "Most desktop repairs done in 24–48 hrs",
                  gradient: "from-blue-500 to-cyan-600",
                },
                {
                  icon: Wrench,
                  title: "Expert Technicians",
                  desc: "Experienced with all major PC brands",
                  gradient: "from-violet-500 to-indigo-600",
                },
                {
                  icon: Star,
                  title: "Upgrade Ready",
                  desc: "SSD, RAM, GPU & full performance boost",
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
              Common questions about our desktop & PC repair service.
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
            Desktop or PC Not Working?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a free diagnosis and clear quotation from our experts.  
            We repair home, office and gaming PCs.
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