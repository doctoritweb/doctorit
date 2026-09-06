"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HardDrive,
  Database,
  FolderOpen,
  AlertTriangle,
  Smartphone,
  Laptop,
  ShieldCheck,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronDown,
  Star,
  Zap,
  FileWarning,
  Server,
  Usb,
} from "lucide-react";

const problems = [
  {
    icon: HardDrive,
    title: "Hard Disk Failure",
    desc: "Clicking sound, not detected, bad sectors, mechanical HDD failure recovery",
    color: "from-red-500 to-orange-600",
  },
  {
    icon: Database,
    title: "SSD Data Recovery",
    desc: "Failed SSD, not booting, corrupted storage, NVMe and SATA SSD recovery",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: FolderOpen,
    title: "Deleted / Formatted Files",
    desc: "Accidentally deleted files, formatted partition, recycle bin emptied",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Laptop,
    title: "Dead Laptop / PC",
    desc: "System not turning on but data is important — we recover from dead devices",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Usb,
    title: "Pendrive & Memory Card",
    desc: "Corrupted USB drives, memory cards, external HDD not showing files",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: AlertTriangle,
    title: "Virus / Ransomware",
    desc: "Files encrypted, hidden, or damaged due to malware and ransomware attacks",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: FileWarning,
    title: "Partition Loss",
    desc: "Missing drives, partition table errors, raw file system recovery",
    color: "from-sky-500 to-blue-500",
  },
  {
    icon: Server,
    title: "Business Data Recovery",
    desc: "Office systems, accounts data, client files and critical business documents",
    color: "from-slate-600 to-slate-800",
  },
];

const steps = [
  {
    step: "01",
    title: "Free Evaluation",
    desc: "We check your device/storage and tell you whether recovery is possible.",
  },
  {
    step: "02",
    title: "Clear Quotation",
    desc: "You get a transparent recovery cost before we start any work.",
  },
  {
    step: "03",
    title: "Safe Recovery Process",
    desc: "Our technicians recover data using proper tools without further damage.",
  },
  {
    step: "04",
    title: "Data Delivery",
    desc: "Recovered files are handed over securely on your preferred storage.",
  },
];

const faqs = [
  {
    q: "Is my data safe during the recovery process?",
    a: "Yes. We follow a data-first approach. We do not format or overwrite your drive. Recovery is done carefully to avoid further data loss.",
  },
  {
    q: "Can you recover data from a laptop that does not turn on?",
    a: "In many cases yes. If the storage drive is healthy, we can remove it and recover data even if the laptop/PC is dead.",
  },
  {
    q: "How long does data recovery take?",
    a: "Simple cases (deleted files, formatted drives) may take a few hours. Complex HDD/SSD failures can take 1–4 days depending on the condition.",
  },
  {
    q: "Do you recover data from SSD and NVMe drives?",
    a: "Yes. We handle HDD, SSD, NVMe, external drives, pendrives and memory cards.",
  },
  {
    q: "What if data cannot be recovered?",
    a: "We first evaluate the device. If recovery is not possible, we inform you honestly. You only pay when recovery is successful as per discussion.",
  },
];

export default function DataRecoveryPage() {
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
              <HardDrive className="w-4 h-4" />
              Professional Data Recovery
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Lost Your Important Data?
              <span className="block text-cyan-300">We Can Help Recover It</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              From failed hard disks and SSDs to deleted files and dead laptops —  
              we recover critical personal and business data with care and confidentiality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
              >
                Get Free Evaluation
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
                Confidential & Secure
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-cyan-300" />
                Fast Evaluation
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-cyan-300" />
                HDD • SSD • USB • Cards
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
              Data Loss Cases We Handle
            </h2>
            <p className="text-slate-600 text-lg">
              We recover data from a wide range of devices and failure situations.
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
              How Our Data Recovery Process Works
            </h2>
            <p className="text-slate-600 text-lg">
              Safe, transparent and professional recovery from evaluation to delivery.
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
                Why Choose Us for Data Recovery?
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We understand how critical your files are — personal memories, 
                office documents, accounts data or client work. Our process is careful and confidential.
              </p>

              <div className="space-y-4">
                {[
                  "Free initial evaluation of your device",
                  "No recovery, no charge policy (as discussed)",
                  "HDD, SSD, NVMe, USB & memory card support",
                  "Recovery from dead laptops and PCs",
                  "Business and personal data handled securely",
                  "Transparent pricing before work starts",
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
                  title: "Secure Handling",
                  desc: "Your data privacy is protected throughout the process",
                  gradient: "from-emerald-500 to-teal-600",
                },
                {
                  icon: Clock,
                  title: "Fast Evaluation",
                  desc: "Quick check to know recovery possibility and cost",
                  gradient: "from-blue-500 to-cyan-600",
                },
                {
                  icon: HardDrive,
                  title: "All Storage Types",
                  desc: "HDD, SSD, external drives, pendrives & cards",
                  gradient: "from-violet-500 to-indigo-600",
                },
                {
                  icon: Star,
                  title: "Personal & Business",
                  desc: "Home users and office data recovery support",
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
              Common questions about our data recovery service.
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
            Need to Recover Important Files?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Don’t risk further data loss. Get a free evaluation and know if your files can be recovered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Get Free Evaluation
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