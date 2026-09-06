"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Wifi,
  Router,
  Network,
  Signal,
  Building2,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  Star,
  Zap,
  Settings,
  Home,
  Server,
  Cable,
} from "lucide-react";

const problems = [
  {
    icon: Wifi,
    title: "WiFi Not Working",
    desc: "No internet, weak signal, frequent disconnects, WiFi keeps dropping",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Signal,
    title: "Poor WiFi Range",
    desc: "Weak signal in rooms, dead zones, range extender & mesh setup",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Router,
    title: "Router Configuration",
    desc: "New router setup, password, port forwarding, firmware & optimization",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: Network,
    title: "LAN / Office Network",
    desc: "Wired network setup, switches, cabling, file/printer sharing",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Building2,
    title: "Office Network Setup",
    desc: "Complete network for small offices, shops, clinics and companies",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Cable,
    title: "Structured Cabling",
    desc: "LAN cabling, points installation, rack basics and clean network layout",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: Settings,
    title: "Network Troubleshooting",
    desc: "IP conflicts, DNS issues, slow network, device not connecting",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Server,
    title: "Business Network Support",
    desc: "Multi-user setup, sharing, basic security and ongoing support",
    color: "from-slate-600 to-slate-800",
  },
];

const steps = [
  {
    step: "01",
    title: "Requirement Check",
    desc: "We understand your home or office needs and inspect the current setup.",
  },
  {
    step: "02",
    title: "Clear Plan & Quote",
    desc: "You get a simple plan and transparent cost before any work starts.",
  },
  {
    step: "03",
    title: "Setup & Configuration",
    desc: "Router, WiFi, LAN, switches and devices are configured properly.",
  },
  {
    step: "04",
    title: "Testing & Handover",
    desc: "Full testing is done. You get a stable working network with guidance.",
  },
];

const faqs = [
  {
    q: "Do you set up WiFi for homes as well as offices?",
    a: "Yes. We handle home WiFi setup, range improvement, and complete office/small business network installation.",
  },
  {
    q: "Can you fix slow or unstable WiFi?",
    a: "Yes. We diagnose signal issues, channel interference, router problems and improve coverage using proper configuration or extenders/mesh if needed.",
  },
  {
    q: "Do you provide office LAN and file sharing setup?",
    a: "Yes. We set up wired LAN, switches, printer/file sharing and basic office network structure for small businesses.",
  },
  {
    q: "Can you set up network for a new office or shop?",
    a: "Yes. From router and WiFi to LAN points and device connectivity — we can set up a complete small office network.",
  },
  {
    q: "Do you also help with CCTV network connectivity?",
    a: "Yes. We can assist with network support related to CCTV systems, such as connecting NVRs/cameras to the local network and basic configuration.",
  },
];

export default function NetworkRepairPage() {
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
              <Wifi className="w-4 h-4" />
              Network & WiFi Setup
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Stable WiFi & Network Setup
              <span className="block text-cyan-300">Home • Office • Business</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              From home WiFi problems to complete office network installation —  
              we design, configure and troubleshoot reliable networks for every need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Book Network Setup
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
                <Home className="w-5 h-5 text-cyan-300" />
                Home WiFi Setup
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-cyan-300" />
                Office Network
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-300" />
                Stable & Secure
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
              Network Problems We Solve
            </h2>
            <p className="text-slate-600 text-lg">
              Home WiFi issues, office LAN setup, range problems and complete business network support.
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
              How Our Network Setup Process Works
            </h2>
            <p className="text-slate-600 text-lg">
              Clear planning, proper configuration and stable results for home and office.
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
                Why Choose Us for Network & WiFi Setup?
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Whether you need better home WiFi or a complete office network,  
                we focus on stable connectivity, clean setup and practical solutions.
              </p>

              <div className="space-y-4">
                {[
                  "Home WiFi setup and range improvement",
                  "Small office and shop network installation",
                  "Router, switch and LAN configuration",
                  "File & printer sharing setup",
                  "Network troubleshooting and optimization",
                  "Support for homes, offices and small industries",
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
                  icon: Home,
                  title: "Home Users",
                  desc: "WiFi setup, password, range and device connectivity",
                  gradient: "from-sky-500 to-blue-600",
                },
                {
                  icon: Building2,
                  title: "Small Offices",
                  desc: "LAN, WiFi, sharing and multi-user office network",
                  gradient: "from-indigo-500 to-violet-600",
                },
                {
                  icon: ShieldCheck,
                  title: "Stable Setup",
                  desc: "Proper configuration for reliable daily performance",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Star,
                  title: "Business Ready",
                  desc: "Practical network solutions for growing companies",
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
              Common questions about our network and WiFi setup service.
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
            Need Better WiFi or Office Network?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get a stable home WiFi setup or complete office network installation from our technicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Book Network Setup
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