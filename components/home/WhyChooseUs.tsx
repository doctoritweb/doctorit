"use client";

import React, { useRef, useState } from "react";
import {
  ShieldCheck,
  Clock,
  Wrench,
  BadgeCheck,
  Headphones,
  ThumbsUp,
  LucideIcon,
} from "lucide-react";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Expert Technicians",
    description:
      "Our certified engineers have years of experience in laptop, desktop and printer repairs.",
    icon: Wrench,
  },
  {
    id: 2,
    title: "Genuine Spare Parts",
    description: "We use only original and high-quality spare parts for all repairs.",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "Service Warranty",
    description: "All repairs come with up to 90 days warranty for your peace of mind.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "Fast Turnaround",
    description: "Most common repairs are completed within 24 to 48 hours.",
    icon: Clock,
  },
  {
    id: 5,
    title: "Transparent Pricing",
    description: "No hidden charges. You get a clear quotation before we start any work.",
    icon: ThumbsUp,
  },
  {
    id: 6,
    title: "Friendly Support",
    description: "Our team is always ready to help you via call, WhatsApp or in-store visit.",
    icon: Headphones,
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Position for the cursor-tracking spotlight, as a percentage
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    setSpotlight({ x: px, y: py, active: true });

    // Subtle 3D tilt based on cursor position relative to card center
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 6; // max ~6deg
    const rotateX = -((y - midY) / midY) * 6;

    setStyle({
      transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`,
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)",
    });
    setSpotlight((s) => ({ ...s, active: false }));
  }

  const Icon = feature.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
      className="group relative overflow-hidden bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl p-7 transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out will-change-transform hover:shadow-xl hover:shadow-blue-100"
    >
      {/* Cursor-tracking spotlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(220px circle at ${spotlight.x}% ${spotlight.y}%, rgba(37, 99, 235, 0.12), transparent 70%)`,
        }}
      />

      <div className="relative">
        <div className="w-14 h-14 bg-white group-hover:bg-blue-600 border border-slate-200 group-hover:border-blue-600 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 shadow-sm group-hover:scale-110 group-hover:rotate-3">
          <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>

        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-slate-600 text-lg">
            We are committed to providing reliable, fast and affordable IT repair services
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}