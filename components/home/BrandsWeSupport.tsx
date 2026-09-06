"use client";

import { useState } from "react";
import {
  SiHp,
  SiDell,
  SiLenovo,
  SiAsus,
  SiAcer,
  SiSamsung,
  SiMsi,
} from "react-icons/si";
import {
  ArrowRight,
  CheckCircle2,
  Laptop,
  ShieldCheck,
  Wrench,
  Clock,
  Building2,
} from "lucide-react";
import Link from "next/link";

const brands = [
  {
    name: "HP",
    icon: SiHp,
    tagline: "Business & Everyday Computing",
    description:
      "Full repair support for HP laptops, desktops, all-in-ones and printers including Pavilion, EliteBook, ProBook and Omen series.",
    devices: ["Laptops", "Desktops", "Printers", "All-in-One"],
    gradient: "from-blue-500 to-cyan-500",
    light: "bg-blue-50",
    text: "text-blue-700",
    border: "border-blue-200",
    ring: "ring-blue-500/30",
  },
  {
    name: "Dell",
    icon: SiDell,
    tagline: "Pro & Precision Series",
    description:
      "Expert service for Dell XPS, Latitude, Inspiron, Precision workstations and Alienware gaming systems.",
    devices: ["Laptops", "Desktops", "Workstations", "Gaming"],
    gradient: "from-sky-500 to-blue-600",
    light: "bg-sky-50",
    text: "text-sky-700",
    border: "border-sky-200",
    ring: "ring-sky-500/30",
  },
  {
    name: "Lenovo",
    icon: SiLenovo,
    tagline: "ThinkPad & IdeaPad Experts",
    description:
      "Specialized in ThinkPad, IdeaPad, Legion gaming and ThinkCentre desktop repairs with genuine parts.",
    devices: ["ThinkPad", "IdeaPad", "Legion", "Desktops"],
    gradient: "from-red-500 to-rose-500",
    light: "bg-red-50",
    text: "text-red-700",
    border: "border-red-200",
    ring: "ring-red-500/30",
  },
  {
    name: "ASUS",
    icon: SiAsus,
    tagline: "ROG & Everyday Performance",
    description:
      "Complete support for ROG, TUF Gaming, ZenBook, VivoBook and ExpertBook series laptops and desktops.",
    devices: ["ROG", "TUF", "ZenBook", "VivoBook"],
    gradient: "from-slate-700 to-slate-900",
    light: "bg-slate-100",
    text: "text-slate-800",
    border: "border-slate-300",
    ring: "ring-slate-500/30",
  },
  {
    name: "Acer",
    icon: SiAcer,
    tagline: "Aspire • Predator • Nitro",
    description:
      "Reliable repair service for Acer Aspire, Swift, Predator and Nitro gaming laptops and desktops.",
    devices: ["Aspire", "Predator", "Nitro", "Swift"],
    gradient: "from-green-500 to-emerald-500",
    light: "bg-green-50",
    text: "text-green-700",
    border: "border-green-200",
    ring: "ring-green-500/30",
  },
  {
    name: "IBM",
    icon: Building2,
    tagline: "Enterprise & Legacy Systems",
    description:
      "Professional support for IBM ThinkPad legacy systems, enterprise desktops and business computing hardware.",
    devices: ["ThinkPad Legacy", "Enterprise", "Desktops", "Servers"],
    gradient: "from-blue-700 to-indigo-800",
    light: "bg-indigo-50",
    text: "text-indigo-800",
    border: "border-indigo-200",
    ring: "ring-indigo-500/30",
  },
  {
    name: "Samsung",
    icon: SiSamsung,
    tagline: "Galaxy Book & Displays",
    description:
      "Service support for Samsung Galaxy Book laptops, monitors and related computing devices.",
    devices: ["Galaxy Book", "Monitors", "Tablets"],
    gradient: "from-indigo-500 to-blue-500",
    light: "bg-indigo-50",
    text: "text-indigo-700",
    border: "border-indigo-200",
    ring: "ring-indigo-500/30",
  },
  {
    name: "MSI",
    icon: SiMsi,
    tagline: "Gaming Powerhouse",
    description:
      "Specialized gaming laptop and desktop repairs for MSI GS, GE, Raider, Stealth and desktop series.",
    devices: ["Gaming Laptops", "Desktops", "Monitors"],
    gradient: "from-rose-500 to-red-600",
    light: "bg-rose-50",
    text: "text-rose-700",
    border: "border-rose-200",
    ring: "ring-rose-500/30",
  },
];

export default function BrandsWeSupport() {
  const [activeBrand, setActiveBrand] = useState(brands[0]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-slate-100 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-5">
            <CheckCircle2 className="w-4 h-4 text-blue-600" />
            Multi-Brand Authorized Support
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Brands We Support
          </h2>
          <p className="text-slate-600 text-lg md:text-xl">
            Click any brand to see the devices we repair and service
          </p>
        </div>

        {/* Advanced Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left - Brand Selector */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
            {brands.map((brand) => {
              const Icon = brand.icon;
              const isActive = activeBrand.name === brand.name;

              return (
                <button
                  key={brand.name}
                  onClick={() => setActiveBrand(brand)}
                  onMouseEnter={() => setActiveBrand(brand)}
                  className={`
                    relative flex flex-col items-center justify-center gap-2
                    p-4 rounded-2xl border-2 transition-all duration-300
                    min-h-[110px]
                    ${
                      isActive
                        ? `${brand.light} ${brand.border} shadow-lg scale-[1.03] ring-2 ${brand.ring}`
                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-md"
                    }
                  `}
                >
                  <div
                    className={`
                      w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300
                      ${
                        isActive
                          ? `bg-gradient-to-br ${brand.gradient} text-white shadow-md`
                          : "bg-slate-100 text-slate-600"
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      isActive ? brand.text : "text-slate-700"
                    }`}
                  >
                    {brand.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right - Active Brand Preview Panel */}
          <div className="lg:col-span-7">
            <div
              key={activeBrand.name}
              className="relative h-full bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden min-h-[380px] flex flex-col"
            >
              {/* Gradient Header */}
              <div
                className={`h-28 md:h-32 bg-gradient-to-r ${activeBrand.gradient} relative`}
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />

                <div className="relative h-full flex items-end px-6 md:px-8 pb-2">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                      <activeBrand.icon className="w-8 h-8 text-slate-800" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-sm">
                        {activeBrand.name}
                      </h3>
                      <p className="text-white/90 text-sm font-medium">
                        {activeBrand.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {activeBrand.description}
                </p>

                {/* Devices */}
                <div className="mb-8">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    Devices We Service
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeBrand.devices.map((device) => (
                      <span
                        key={device}
                        className={`inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-lg ${activeBrand.light} ${activeBrand.text} border ${activeBrand.border}`}
                      >
                        <Laptop className="w-3.5 h-3.5" />
                        {device}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Trust points */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 mb-1.5" />
                    <span className="text-xs font-medium text-slate-600">
                      Warranty
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50">
                    <Wrench className="w-5 h-5 text-blue-500 mb-1.5" />
                    <span className="text-xs font-medium text-slate-600">
                      Genuine Parts
                    </span>
                  </div>
                  <div className="flex flex-col items-center text-center p-3 rounded-xl bg-slate-50">
                    <Clock className="w-5 h-5 text-violet-500 mb-1.5" />
                    <span className="text-xs font-medium text-slate-600">
                      24-48 Hrs
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${activeBrand.gradient} hover:opacity-90 text-white px-6 py-3 rounded-xl font-semibold text-sm transition shadow-lg group`}
                  >
                    Book {activeBrand.name} Repair
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-500 text-sm mt-12">
          + We also support many other brands. Contact us if yours is not
          listed.
        </p>
      </div>
    </section>
  );
}