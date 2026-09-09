"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Cpu,
  HardDrive,
  MemoryStick,
  Settings,
  Download,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  Star,
  Zap,
  Laptop,
  Server,
  Wifi,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    icon: Download,
    title: "Windows / OS Installation",
    desc: "Clean installation of Windows 10/11, drivers setup, and basic software configuration.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: HardDrive,
    title: "SSD Upgrade",
    desc: "Replace slow HDD with SSD for much faster boot time, app loading and overall speed.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: MemoryStick,
    title: "RAM Upgrade",
    desc: "Increase memory for better multitasking, smoother performance and reduced lag.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: Cpu,
    title: "Hardware Upgrades",
    desc: "Processor, graphics card, power supply and cooling upgrades for better performance.",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Settings,
    title: "Complete PC Setup",
    desc: "Full system setup for new PCs — OS, drivers, software, updates and optimization.",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: RefreshCw,
    title: "System Optimization",
    desc: "Remove junk, fix slow performance, update drivers and tune system for speed.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Wifi,
    title: "Software & Driver Setup",
    desc: "Install required software, office tools, antivirus and all necessary drivers.",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Server,
    title: "Office / Bulk PC Setup",
    desc: "Multiple system setup for offices, shops and small businesses with standard configuration.",
    color: "from-slate-600 to-slate-800",
  },
];

const steps = [
  {
    step: "01",
    title: "Requirement Discussion",
    desc: "We understand your needs — speed, software, budget and usage type.",
  },
  {
    step: "02",
    title: "Recommendation",
    desc: "We suggest the right upgrade or setup plan for best performance and value.",
  },
  {
    step: "03",
    title: "Installation & Setup",
    desc: "Hardware upgrade, OS installation, drivers and software are done carefully.",
  },
  {
    step: "04",
    title: "Testing & Handover",
    desc: "System is tested, optimized and handed over ready to use.",
  },
];

const faqs = [
  {
    q: "How much faster will my PC become after SSD upgrade?",
    a: "In most cases, boot time and app loading become significantly faster. Many users notice a big improvement in overall responsiveness after moving from HDD to SSD.",
  },
  {
    q: "Will my files be safe during OS installation or upgrade?",
    a: "If you need data backup before installation, we can guide or help with that. Always inform us in advance if important files are on the system.",
  },
  {
    q: "Can you upgrade an old laptop or desktop?",
    a: "Yes, in many cases. We check compatibility first (RAM type, storage slot, power supply, etc.) and then suggest the best possible upgrade.",
  },
  {
    q: "Do you provide Windows license?",
    a: "We can install Windows and help with activation options. Genuine license can be arranged as per your requirement.",
  },
  {
    q: "How long does a typical setup or upgrade take?",
    a: "SSD/RAM upgrades are often done within a few hours. Full OS installation and complete setup usually take same day depending on the work involved.",
  },
];

export default function PcSetupUpgradePage() {
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
              <Settings className="w-4 h-4" />
              PC Setup & Hardware Upgrade
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Make Your PC Faster
              <span className="block text-cyan-300">With Expert Setup & Upgrades</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              From Windows installation and SSD upgrades to RAM, drivers and complete system setup —  
              we make your laptop or desktop ready for smooth and fast performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Book Setup / Upgrade
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
                Genuine Parts
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                Same Day Service
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-300" />
                Laptop & Desktop
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES WE OFFER ========== */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Setup & Upgrade Services
            </h2>
            <p className="text-slate-600 text-lg">
              Everything you need to make your system faster, cleaner and ready to use.
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

      {/* ========== HOW IT WORKS ========== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Our Setup Process Works
            </h2>
            <p className="text-slate-600 text-lg">
              Simple, clear and professional from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-7 h-full hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all duration-300">
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
                Why Choose Us for PC Setup & Upgrades?
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Whether you have a new PC or an old slow system, we help you get the best performance  
                with the right upgrades and clean setup.
              </p>

              <div className="space-y-4">
                {[
                  "SSD & RAM upgrades for better speed",
                  "Clean Windows installation with drivers",
                  "Compatible hardware recommendations",
                  "Laptop and desktop both supported",
                  "Office / multiple PC setup available",
                  "Honest advice — no unnecessary upgrades",
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
                  icon: HardDrive,
                  title: "SSD Upgrades",
                  desc: "Big speed boost by replacing old hard disks",
                  gradient: "from-blue-500 to-cyan-600",
                },
                {
                  icon: MemoryStick,
                  title: "RAM Upgrades",
                  desc: "Better multitasking and smoother performance",
                  gradient: "from-violet-500 to-indigo-600",
                },
                {
                  icon: Settings,
                  title: "Full Setup",
                  desc: "OS, drivers, software and optimization",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Laptop,
                  title: "Laptop & Desktop",
                  desc: "Service for both personal and office systems",
                  gradient: "from-orange-500 to-amber-600",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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
              Common questions about PC setup and upgrades.
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
            Ready to Upgrade or Setup Your PC?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get expert advice and professional installation for better speed and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Book Now
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