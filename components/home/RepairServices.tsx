"use client";

import Link from "next/link";
import {
  Laptop,
  Monitor,
  Printer,
  HardDrive,
  Wifi,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Clock,
  Wrench,
  Sparkles,
  Home,
  Building2,
  Factory,
  Server,
  Network,
  Settings,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Laptop Repair",
    description:
      "Screen, battery, hinge, keyboard, motherboard & overheating repair for personal and business laptops.",
    icon: Laptop,
    href: "/services/laptop-repair",
    gradient: "from-blue-500 to-blue-600",
    light: "bg-blue-50",
    text: "text-blue-600",
    border: "group-hover:border-blue-400",
    shadow: "group-hover:shadow-blue-200/60",
  },
  {
    id: 2,
    title: "Desktop / PC Repair",
    description:
      "Full desktop repair — power issues, motherboard, GPU, RAM, storage and performance problems.",
    icon: Monitor,
    href: "/services/desktop-repair",
    gradient: "from-indigo-500 to-indigo-600",
    light: "bg-indigo-50",
    text: "text-indigo-600",
    border: "group-hover:border-indigo-400",
    shadow: "group-hover:shadow-indigo-200/60",
  },
  {
    id: 3,
    title: "Printer Repair",
    description:
      "Home & office printer repair — inkjet, laser, network printers, paper jam and quality issues.",
    icon: Printer,
    href: "/services/printer-repair",
    gradient: "from-violet-500 to-violet-600",
    light: "bg-violet-50",
    text: "text-violet-600",
    border: "group-hover:border-violet-400",
    shadow: "group-hover:shadow-violet-200/60",
  },
  {
    id: 4,
    title: "Data Recovery",
    description:
      "Recover files from failed HDD/SSD, dead laptops, formatted drives and accidental deletion.",
    icon: HardDrive,
    href: "/services/data-recovery",
    gradient: "from-cyan-500 to-cyan-600",
    light: "bg-cyan-50",
    text: "text-cyan-600",
    border: "group-hover:border-cyan-400",
    shadow: "group-hover:shadow-cyan-200/60",
  },
  {
    id: 5,
    title: "Network & WiFi Setup",
    description:
      "Home WiFi, office LAN, router/switch setup, range improvement and network troubleshooting.",
    icon: Wifi,
    href: "/services/network-repair",
    gradient: "from-sky-500 to-sky-600",
    light: "bg-sky-50",
    text: "text-sky-600",
    border: "group-hover:border-sky-400",
    shadow: "group-hover:shadow-sky-200/60",
  },
  {
    id: 6,
    title: "PC Setup & Upgrades",
    description:
      "Complete PC setup for home users — OS, software, drivers, SSD/RAM upgrade and speed boost.",
    icon: Cpu,
    href: "/services/pc-setup-upgrade",
    gradient: "from-blue-600 to-indigo-600",
    light: "bg-blue-50",
    text: "text-blue-700",
    border: "group-hover:border-blue-500",
    shadow: "group-hover:shadow-blue-200/60",
  },
];

const audiences = [
  {
    icon: Home,
    title: "Home & Personal Users",
    desc: "Laptop/desktop repair, printer service, WiFi setup, data recovery and PC installation for individuals and families.",
    points: [
      "Laptop & desktop repair",
      "Home WiFi & printer setup",
      "Data recovery",
      "SSD / RAM upgrades",
    ],
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Building2,
    title: "Small Business & Offices",
    desc: "Reliable IT support for shops, clinics, small offices and startups — systems, printers and basic office network.",
    points: [
      "Office PC & printer support",
      "Small office network setup",
      "Software & system setup",
      "Quick on-site support",
    ],
    gradient: "from-indigo-500 to-violet-600",
  },
  {
    icon: Factory,
    title: "Small & Large Industries",
    desc: "Structured IT services for factories, warehouses and companies — bulk PC deployment, network infrastructure and maintenance.",
    points: [
      "Bulk PC / workstation setup",
      "Office & factory network",
      "Switch, router & cabling",
      "System deployment at scale",
    ],
    gradient: "from-slate-700 to-slate-900",
  },
];

export default function RepairServices() {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 overflow-hidden bg-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-5 py-2 rounded-full mb-5 border border-blue-100">
            <Sparkles className="w-4 h-4" />
            Professional IT & Repair Services
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-5 tracking-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              Repair Services
            </span>
          </h2>

          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            From home users to small offices and large industries — we provide 
            repair, setup and network solutions at every level.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className={`group relative bg-white rounded-3xl p-8 border border-slate-200 
                hover:-translate-y-2 hover:shadow-2xl ${service.shadow} ${service.border}
                transition-all duration-500 overflow-hidden`}
            >
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.gradient} 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div
                className={`absolute inset-0 ${service.light} opacity-0 group-hover:opacity-60 
                  transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} 
                    flex items-center justify-center mb-6 shadow-lg
                    group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                >
                  <service.icon className="w-8 h-8 text-white" strokeWidth={1.8} />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed text-[15px]">
                  {service.description}
                </p>

                <div className={`flex items-center gap-2 text-sm font-semibold ${service.text}`}>
                  <span className="group-hover:underline underline-offset-4 decoration-2">
                    View Details
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Who We Serve - 3 Levels */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              We Serve Every Level
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Whether you are a home user, small business or industrial company — 
              we have the right IT service for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {audiences.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:bg-white hover:shadow-xl hover:border-slate-300 transition-all duration-400"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} 
                    flex items-center justify-center mb-6 shadow-md
                    group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h4>

                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {item.desc}
                </p>

                <ul className="space-y-2.5">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industrial Capabilities */}
        <div className="mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-10 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-white/10">
                <Factory className="w-4 h-4" />
                For Industries & Companies
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Industrial & Corporate IT Services
              </h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                We support small and large industries with practical IT infrastructure 
                services — from single office setup to multi-system deployment.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-all"
              >
                Request Business Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Server, title: "Bulk PC Deployment", desc: "Multiple systems setup & configuration" },
                { icon: Network, title: "Office / Factory Network", desc: "LAN, WiFi, switches & structured cabling" },
                { icon: Settings, title: "System Configuration", desc: "Software, drivers & office tools setup" },
                { icon: Building2, title: "Business IT Support", desc: "Ongoing support for offices & units" },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
                  <item.icon className="w-6 h-6 text-blue-400 mb-3" />
                  <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              icon: ShieldCheck,
              title: "Warranty on Repairs",
              desc: "Up to 90 days service warranty",
              gradient: "from-emerald-500 to-teal-600",
            },
            {
              icon: Clock,
              title: "Fast Turnaround",
              desc: "Most repairs done in 24-48 hours",
              gradient: "from-blue-500 to-cyan-600",
            },
            {
              icon: Wrench,
              title: "Expert Technicians",
              desc: "Experienced & certified engineers",
              gradient: "from-violet-500 to-indigo-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group flex items-center gap-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 
                hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} 
                  flex items-center justify-center flex-shrink-0 shadow-md
                  group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">{item.title}</h4>
                <p className="text-sm text-slate-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-14 text-center">
          <Link
            href="/services"
            className="group relative inline-flex items-center gap-3 px-9 py-4 rounded-2xl font-semibold text-lg text-white
              bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600
              hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500
              shadow-xl shadow-blue-300/40 hover:shadow-blue-400/50
              hover:-translate-y-1 transition-all duration-400 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}