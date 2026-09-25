"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Monitor,
  Printer,
  Wifi,
  HardDrive,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  Star,
  Zap,
  Building2,
  Settings,
  Network,
  Server,
  Users,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Office PC & Laptop Support",
    desc: "Repair and maintenance of office computers and laptops — slow systems, hardware issues and performance problems.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Printer,
    title: "Printer & Scanner Support",
    desc: "Setup, repair and shared network printing for inkjet, laser and multi-function printers used in offices.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Network,
    title: "Small Office Network",
    desc: "WiFi, LAN, router and switch setup for shops, clinics and small offices with stable connectivity.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Settings,
    title: "Software & System Setup",
    desc: "Windows, office software, accounting tools, antivirus and driver installation for business systems.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Server,
    title: "Workstation Setup",
    desc: "New PC installation, data migration and complete system setup for staff and new employees.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: HardDrive,
    title: "Data Backup & Recovery",
    desc: "Protect business files with backup solutions and recover important data from failed drives.",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Wrench,
    title: "On-site Support",
    desc: "Quick on-site visits for urgent issues at your shop, clinic or office — minimal downtime.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Users,
    title: "Ongoing IT Support",
    desc: "Regular maintenance, troubleshooting and technical help so your business systems stay reliable.",
    color: "from-slate-600 to-slate-800",
  },
];

const steps = [
  {
    step: "01",
    title: "Contact Us",
    desc: "Call, WhatsApp or message us about the issue at your shop or office.",
  },
  {
    step: "02",
    title: "Quick Assessment",
    desc: "We understand the problem and give you a clear plan with transparent pricing.",
  },
  {
    step: "03",
    title: "On-site or Workshop",
    desc: "We either visit your location or handle the device at our workshop for proper repair.",
  },
  {
    step: "04",
    title: "Business Ready",
    desc: "Systems are tested and returned so your team can continue work without delays.",
  },
];

const faqs = [
  {
    q: "Do you provide on-site support for small offices and shops?",
    a: "Yes. We offer on-site support for shops, clinics, startups and small offices for urgent issues and network/setup work.",
  },
  {
    q: "Can you set up a complete small office network?",
    a: "Yes. We handle WiFi, LAN, routers, switches and basic structured cabling for small offices and shops.",
  },
  {
    q: "Do you support multiple computers and printers?",
    a: "Yes. We work with multi-PC setups, shared printers and basic office network environments.",
  },
  {
    q: "How fast can you respond to business issues?",
    a: "For urgent problems we try to respond the same day or next day, depending on location and availability.",
  },
  {
    q: "Do you help with software installation for offices?",
    a: "Yes. We install and configure Windows, Microsoft Office, accounting software, antivirus and other business tools.",
  },
];

export default function SmallBusinessPage() {
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
              <Building2 className="w-4 h-4" />
              Small Business & Offices
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Reliable IT Support
              <span className="block text-cyan-300">For Your Business</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Complete IT support for shops, clinics, startups and small offices —  
              computers, printers, networks and on-site technical help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Request Support
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+94727348466"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-10 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-300" />
                Business-Friendly Support
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                Fast Response
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-300" />
                Shops • Clinics • Offices • Startups
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
              Services for Small Business & Offices
            </h2>
            <p className="text-slate-600 text-lg">
              Practical IT solutions that keep your shop, clinic or office running smoothly.
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
              Most Requested Business Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Office PC & laptop repair",
                "Printer & scanner support",
                "Small office network setup",
                "On-site technical support",
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
              Simple and clear process designed for busy shops and small offices.
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
                IT Support That Keeps Your Business Running
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We understand that downtime costs money. Our support is practical, fast and focused on getting your systems back to work quickly.
              </p>

              <div className="space-y-4">
                {[
                  "On-site support for shops and offices",
                  "Clear pricing before any work starts",
                  "Experience with multi-PC office setups",
                  "Printer, network and software support",
                  "Minimal disruption to your daily work",
                  "Reliable technicians you can trust",
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
                  icon: Building2,
                  title: "Business Focus",
                  desc: "Support designed for shops, clinics and offices",
                  gradient: "from-blue-500 to-cyan-600",
                },
                {
                  icon: Network,
                  title: "Office Network",
                  desc: "Stable WiFi and LAN for small teams",
                  gradient: "from-cyan-500 to-teal-600",
                },
                {
                  icon: Printer,
                  title: "Printer Solutions",
                  desc: "Shared and network printer setup & repair",
                  gradient: "from-violet-500 to-indigo-600",
                },
                {
                  icon: Clock,
                  title: "Fast Response",
                  desc: "Quick help when your business needs it",
                  gradient: "from-emerald-500 to-teal-600",
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
              Common questions from small business and office clients.
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
            Need IT Support for Your Business?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            From computer repairs and printer issues to office network setup — we’re ready to help your shop or office.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Request Support
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+94727348466"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              +94 727348466
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}