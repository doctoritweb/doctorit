"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Laptop,
  Monitor,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  Star,
  Zap,
  Factory,
  Server,
  Network,
  Settings,
  Building2,
  HardDrive,
  Wrench,
  Cable,
} from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Bulk PC / Workstation Deployment",
    desc: "Setup and configuration of multiple computers for factories, warehouses and company offices.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Network,
    title: "Office & Factory Network",
    desc: "Design and installation of stable LAN and WiFi networks for industrial and corporate environments.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Cable,
    title: "Switch, Router & Cabling",
    desc: "Structured cabling, network switches, routers and proper infrastructure for reliable connectivity.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Settings,
    title: "System Configuration",
    desc: "Software, drivers, office tools and system setup across multiple workstations at scale.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: HardDrive,
    title: "Data & Backup Solutions",
    desc: "Centralized backup planning and data protection for business-critical information.",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    desc: "Ongoing technical support and maintenance for industrial and corporate IT systems.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Building2,
    title: "Multi-Location Support",
    desc: "IT support coordination for companies with multiple offices, factories or branches.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Monitor,
    title: "Corporate IT Setup",
    desc: "Complete IT infrastructure setup for new offices, production units and expansions.",
    color: "from-slate-600 to-slate-800",
  },
];

const steps = [
  {
    step: "01",
    title: "Requirement Discussion",
    desc: "We understand your scale, locations and IT needs for factory or company deployment.",
  },
  {
    step: "02",
    title: "Planning & Proposal",
    desc: "Clear plan with scope, timeline and transparent pricing for the required work.",
  },
  {
    step: "03",
    title: "Deployment & Setup",
    desc: "Bulk system setup, network installation and configuration handled systematically.",
  },
  {
    step: "04",
    title: "Handover & Support",
    desc: "Systems tested, documented and handed over with ongoing support options.",
  },
];

const faqs = [
  {
    q: "Do you handle bulk PC setup for factories and companies?",
    a: "Yes. We specialize in deploying and configuring multiple workstations for industrial and corporate environments.",
  },
  {
    q: "Can you set up network infrastructure for a factory or warehouse?",
    a: "Yes. We design and install LAN, WiFi, switches, routers and structured cabling suitable for industrial use.",
  },
  {
    q: "Do you support multi-location companies?",
    a: "Yes. We can coordinate IT setup and support across multiple offices, factories or branches.",
  },
  {
    q: "Is structured cabling included in your services?",
    a: "Yes. We provide structured cabling along with switch and router installation for reliable network performance.",
  },
  {
    q: "Do you offer ongoing maintenance contracts?",
    a: "Yes. We can arrange regular maintenance and support packages for industrial and corporate clients.",
  },
];

export default function IndustriesPage() {
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
              <Factory className="w-4 h-4" />
              Small & Large Industries
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Industrial & Corporate
              <span className="block text-cyan-300">IT Services</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Structured IT services for factories, warehouses and companies —  
              bulk PC deployment, network infrastructure and system maintenance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Request Business Support
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
                Industrial-Grade Support
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                Scalable Solutions
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-300" />
                Factories • Warehouses • Companies
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
              Services for Small & Large Industries
            </h2>
            <p className="text-slate-600 text-lg">
              Practical IT infrastructure solutions for factories, warehouses and corporate environments.
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
              Most Requested Industrial Services
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Bulk PC / workstation setup",
                "Office & factory network",
                "Switch, router & cabling",
                "System deployment at scale",
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
              Structured process designed for industrial and corporate IT projects.
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
                IT Infrastructure for Industrial Scale
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                From single production units to multi-location companies, we deliver practical IT infrastructure 
                that supports your operations reliably.
              </p>

              <div className="space-y-4">
                {[
                  "Experience with bulk system deployment",
                  "Industrial and corporate network setup",
                  "Structured cabling and infrastructure",
                  "Clear project planning and pricing",
                  "Support for factories and warehouses",
                  "Scalable solutions for growing companies",
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
                  icon: Server,
                  title: "Bulk Deployment",
                  desc: "Multiple systems setup & configuration",
                  gradient: "from-blue-500 to-cyan-600",
                },
                {
                  icon: Network,
                  title: "Factory Network",
                  desc: "LAN, WiFi, switches & structured cabling",
                  gradient: "from-cyan-500 to-teal-600",
                },
                {
                  icon: Settings,
                  title: "System Config",
                  desc: "Software, drivers & office tools at scale",
                  gradient: "from-indigo-500 to-blue-600",
                },
                {
                  icon: Building2,
                  title: "Corporate Support",
                  desc: "Ongoing support for offices & units",
                  gradient: "from-slate-600 to-slate-800",
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
              Common questions from industrial and corporate clients.
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
            Need IT Support for Your Industry?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            From bulk PC deployment and factory networks to structured cabling and ongoing support — we’re ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Request Business Support
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