"use client";

import { useState } from "react";
import {
  Search,
  Wrench,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  FileText,
  ShieldCheck,
  Clock,
  PackageCheck,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Book a Repair",
    short: "Tell us the issue",
    description:
      "Call us, WhatsApp, or fill the online form. Share your device details and the problem you're facing.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    bg: "bg-blue-50",
    border: "border-blue-200",
    features: [
      { icon: Phone, text: "Call / WhatsApp" },
      { icon: FileText, text: "Online Form" },
      { icon: MessageCircle, text: "Quick Response" },
    ],
  },
  {
    id: 2,
    title: "Diagnosis & Quote",
    short: "Transparent pricing",
    description:
      "Our expert technicians diagnose the issue thoroughly and provide a clear, no-surprise quote before any work begins.",
    icon: Wrench,
    color: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    border: "border-violet-200",
    features: [
      { icon: Search, text: "Full Diagnosis" },
      { icon: FileText, text: "Clear Quote" },
      { icon: ShieldCheck, text: "No Hidden Cost" },
    ],
  },
  {
    id: 3,
    title: "Repair & Delivery",
    short: "Fixed & Ready",
    description:
      "We repair with genuine parts, thoroughly test the device, and return it fully working — usually within 24–48 hours.",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    features: [
      { icon: Wrench, text: "Genuine Parts" },
      { icon: Clock, text: "24–48 Hours" },
      { icon: PackageCheck, text: "Tested & Ready" },
    ],
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  const current = steps.find((s) => s.id === activeStep) || steps[0];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-50">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-100/40 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            Simple 3-Step Process
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Getting your device repaired is simple, transparent, and hassle-free
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
          {/* Left - Step Selector */}
          <div className="col-span-5 space-y-4">
            {steps.map((step, index) => {
              const isActive = activeStep === step.id;
              const Icon = step.icon;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left group relative flex items-start gap-5 p-5 rounded-2xl border-2 transition-all duration-300 ${
                    isActive
                      ? `${step.bg} ${step.border} shadow-lg scale-[1.02]`
                      : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {index < steps.length - 1 && (
                    <div
                      className={`absolute left-[2.15rem] top-[4.5rem] w-0.5 h-8 transition-colors ${
                        isActive ? "bg-blue-400" : "bg-slate-200"
                      }`}
                    />
                  )}

                  <div
                    className={`relative shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${step.color} text-white shadow-lg`
                        : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    <span
                      className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                        isActive
                          ? "bg-slate-900 text-white"
                          : "bg-slate-300 text-slate-700"
                      }`}
                    >
                      {step.id}
                    </span>
                  </div>

                  <div className="pt-1">
                    <h3
                      className={`text-lg font-bold mb-1 transition-colors ${
                        isActive ? "text-slate-900" : "text-slate-700"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {step.short}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right - Active Step Detail */}
          <div className="col-span-7">
            <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className={`h-2 w-full bg-gradient-to-r ${current.color}`} />

              <div className="p-8 md:p-10">
                <div className="flex items-start gap-6 mb-8">
                  <div
                    className={`shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <current.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Step {current.id} of 3
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                      {current.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {current.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
                  {current.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-3.5 rounded-xl ${current.bg} border ${current.border}`}
                    >
                      <feature.icon className="w-5 h-5 text-slate-700 shrink-0" />
                      <span className="text-sm font-medium text-slate-800">
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2.5 bg-gradient-to-r ${current.color} hover:opacity-90 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition shadow-lg`}
                  >
                    Start Step {current.id}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <span className="text-sm text-slate-500">
                    Usually takes less than 2 minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`rounded-2xl border-2 transition-all duration-300 overflow-hidden cursor-pointer ${
                  isActive
                    ? `${step.bg} ${step.border} shadow-lg`
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center gap-4 p-5">
                  <div
                    className={`shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                      isActive
                        ? `bg-gradient-to-br ${step.color} text-white shadow-md`
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-slate-400 mb-0.5">
                      STEP {step.id}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {step.id}
                  </div>
                </div>

                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-5 pb-6">
                    <p className="text-slate-600 leading-relaxed mb-5">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {step.features.map((f, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 text-xs font-medium bg-white/80 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full"
                        >
                          <f.icon className="w-3.5 h-3.5" />
                          {f.text}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${step.color} text-white px-5 py-2.5 rounded-xl text-sm font-semibold`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Warranty on every repair</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>Most jobs in 24–48 hrs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-violet-500" />
            <span>Genuine parts only</span>
          </div>
        </div>
      </div>
    </section>
  );
}