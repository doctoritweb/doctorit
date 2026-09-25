"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Laptop,
  Monitor,
  Printer,
  Wifi,
  Building2,
  Factory,
  Star,
  Quote,
  Network,
  Server,
  Cable,
} from "lucide-react";

const categories = [
  "All",
  "Network",
  "Business",
  "Industrial",
  "Laptop Repair",
  "Desktop / PC",
  "Printer",
];

const projects = [
  // ===== NETWORK =====
  {
    id: 1,
    title: "Enterprise WiFi & Structured Cabling – 3 Floors",
    category: "Network",
    client: "Private Hospital",
    description:
      "Complete enterprise-grade WiFi coverage, VLAN segmentation and structured cabling across 3 floors with 12 departments.",
    tags: ["Enterprise WiFi", "VLAN", "Structured Cabling"],
    result: "Full coverage • High reliability",
  },
  {
    id: 2,
    title: "Office Network Redesign – 28 Workstations",
    category: "Network",
    client: "Corporate Office, Colombo",
    description:
      "Full network redesign including managed switches, dual-band WiFi, firewall configuration and centralized monitoring.",
    tags: ["LAN", "Managed Switches", "Firewall"],
    result: "Zero downtime migration",
  },
  {
    id: 3,
    title: "Multi-Branch Network Standardization",
    category: "Network",
    client: "Retail Chain – 9 Branches",
    description:
      "Standardized network architecture, VPN connectivity and remote management across 9 retail locations.",
    tags: ["Multi-site", "VPN", "Remote Management"],
    result: "All branches connected in 12 days",
  },

  // ===== BUSINESS =====
  {
    id: 4,
    title: "Complete Office IT Setup – 18 Workstations",
    category: "Business",
    client: "Accounting Firm",
    description:
      "End-to-end office IT setup: workstations, shared printers, network, backup system and staff onboarding support.",
    tags: ["Workstation Setup", "Shared Printing", "Backup"],
    result: "Fully operational in 4 days",
  },
  {
    id: 5,
    title: "POS & Network Rollout – Fashion Retail",
    category: "Business",
    client: "Fashion Retail Brand",
    description:
      "Deployed POS systems, inventory network and secure connectivity across multiple retail outlets.",
    tags: ["POS", "Retail Network", "Security"],
    result: "Smooth multi-branch launch",
  },
  {
    id: 6,
    title: "Professional Services Office Digitization",
    category: "Business",
    client: "Law & Consulting Firm",
    description:
      "Modernized office infrastructure with secure file sharing, network printers and remote access capability.",
    tags: ["Secure Sharing", "Remote Access", "Printers"],
    result: "Improved team productivity",
  },

  // ===== INDUSTRIAL =====
  {
    id: 7,
    title: "Bulk Workstation Deployment – 42 Units",
    category: "Industrial",
    client: "Manufacturing Company",
    description:
      "Large-scale deployment of ruggedized workstations with OS imaging, software packaging and factory floor network integration.",
    tags: ["Bulk Deployment", "Imaging", "Factory Network"],
    result: "Completed in 5 days",
  },
  {
    id: 8,
    title: "Factory Network Infrastructure",
    category: "Industrial",
    client: "Industrial Plant",
    description:
      "Designed and installed industrial-grade network with switches, access points and structured cabling for production areas.",
    tags: ["Industrial Network", "Cabling", "Switches"],
    result: "Stable production connectivity",
  },
  {
    id: 9,
    title: "Warehouse IT & CCTV Network Integration",
    category: "Industrial",
    client: "Logistics Warehouse",
    description:
      "Integrated warehouse management systems, barcode scanners and CCTV network into a unified infrastructure.",
    tags: ["Warehouse", "CCTV", "System Integration"],
    result: "Centralized monitoring achieved",
  },

  // ===== OTHER =====
  {
    id: 10,
    title: "Complete Laptop Overhaul – Dell XPS 15",
    category: "Laptop Repair",
    client: "Private Client",
    description:
      "Motherboard-level repair, screen replacement, thermal service and SSD upgrade.",
    tags: ["Motherboard", "Screen", "SSD"],
    result: "Fully restored • 90-day warranty",
  },
  {
    id: 11,
    title: "Data Recovery – Failed RAID Array",
    category: "Desktop / PC",
    client: "Design Studio",
    description:
      "Recovered 1.8TB of critical design files from a failed RAID 5 array.",
    tags: ["Data Recovery", "RAID"],
    result: "100% data recovered",
  },
  {
    id: 12,
    title: "University Printer Fleet Maintenance",
    category: "Printer",
    client: "University Campus",
    description:
      "Ongoing maintenance of 28 laser printers with priority SLA support.",
    tags: ["Laser Printers", "SLA"],
    result: "99.4% uptime",
  },
];

const stats = [
  { number: "1000+", label: "Business Clients" },
  { number: "25+", label: "Network Projects" },
  { number: "10+", label: "Industrial Deployments" },
  { number: "14+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Ruwan Jayasinghe",
    role: "Factory IT Coordinator",
    content:
      "We needed 40+ workstations deployed quickly across our production floor. DoctorIT delivered on time with clean documentation and proper network integration.",
  },
  {
    name: "Kasun Perera",
    role: "Operations Manager – Retail Chain",
    content:
      "They standardized the network and POS systems across all our branches. Professional, fast and very reliable support.",
  },
  {
    name: "Dr. Nadeesha Fernando",
    role: "Clinic Director",
    content:
      "Complete network and printer setup for our multi-department clinic. Excellent planning and execution with minimal disruption.",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Our Work
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Portfolio
              <span className="block text-cyan-300">Network • Business • Industrial</span>
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Specialized in enterprise network infrastructure, corporate office setups 
              and large-scale industrial IT deployments across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* ========== STATS ========== */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">
                  {stat.number}
                </div>
                <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOCUS AREAS ========== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Network Infrastructure</h3>
              <p className="text-slate-600 text-sm">
                Enterprise WiFi, structured cabling, managed switches, VLANs and multi-site connectivity.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-100 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Business & Corporate</h3>
              <p className="text-slate-600 text-sm">
                Complete office IT setups, workstation deployment, shared systems and multi-branch solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Industrial Solutions</h3>
              <p className="text-slate-600 text-sm">
                Bulk PC deployment, factory networks, warehouse systems and large-scale infrastructure.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========== MAJOR CLIENTS ========== */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Trusted by Organizations</h2>
            <p className="text-slate-600">Network • Business • Industrial clients across Sri Lanka</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {[
              { initials: "MF", name: "Metro Factory Ltd", type: "Manufacturing" },
              { initials: "SC", name: "Summit Corporate", type: "Corporate Office" },
              { initials: "HC", name: "HealthCare Plus", type: "Hospital" },
              { initials: "RT", name: "Retail Trend", type: "Multi-Branch" },
              { initials: "NL", name: "Nexus Logistics", type: "Warehouse" },
              { initials: "UE", name: "Unity Education", type: "Institute" },
              { initials: "PS", name: "ProServe Lanka", type: "Professional" },
              { initials: "TC", name: "TechCorp Solutions", type: "IT Services" },
            ].map((client, i) => (
              <div key={i} className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-2xl p-5 h-32 hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-2 shadow">
                  <span className="text-white font-bold">{client.initials}</span>
                </div>
                <h4 className="font-semibold text-slate-800 text-sm text-center">{client.name}</h4>
                <p className="text-xs text-slate-500">{client.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROJECTS ========== */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Selected Projects
            </h2>
            <p className="text-slate-600 text-lg">
              Focused on Network, Business and Industrial solutions
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-400"
              >
                <div className="h-44 bg-gradient-to-br from-slate-100 to-slate-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.category === "Network" && <Wifi className="w-14 h-14 text-slate-300" />}
                    {project.category === "Business" && <Building2 className="w-14 h-14 text-slate-300" />}
                    {project.category === "Industrial" && <Factory className="w-14 h-14 text-slate-300" />}
                    {project.category === "Laptop Repair" && <Laptop className="w-14 h-14 text-slate-300" />}
                    {project.category === "Desktop / PC" && <Monitor className="w-14 h-14 text-slate-300" />}
                    {project.category === "Printer" && <Printer className="w-14 h-14 text-slate-300" />}
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{project.client}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-600">
                    <CheckCircle className="w-4 h-4" />
                    {project.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Client Feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((item, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-8 relative">
                <Quote className="w-10 h-10 text-blue-100 absolute top-6 right-6" />
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">“{item.content}”</p>
                <div>
                  <div className="font-bold text-slate-900">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-20 bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Network, Business or Industrial IT Support?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            From enterprise networks to full office and factory deployments — we deliver professional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all hover:-translate-y-0.5 shadow-lg"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+94777143928"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              Call +94 727348466
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}