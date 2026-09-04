"use client";

import React, { useMemo, useRef, useState } from "react";
import { Star, Quote, ThumbsUp, ChevronDown } from "lucide-react";

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  comment: string;
  helpful: number;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Laptop Repair",
    rating: 5,
    comment:
      "My laptop screen was broken. They replaced it the same day with genuine parts. Excellent service and fair price!",
    helpful: 6,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Data Recovery",
    rating: 5,
    comment:
      "I thought I lost all my important files. They recovered everything successfully. Highly recommended!",
    helpful: 9,
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Desktop Repair",
    rating: 5,
    comment:
      "My PC was very slow. They upgraded the SSD and cleaned it properly. Now it works like new. Great work!",
    helpful: 4,
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const [helpfulCount, setHelpfulCount] = useState(review.helpful);
  const [voted, setVoted] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const isLong = review.comment.length > 110;
  const displayText =
    isLong && !expanded ? review.comment.slice(0, 110).trim() + "…" : review.comment;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setSpotlight({ x: (x / rect.width) * 100, y: (y / rect.height) * 100, active: true });

    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 5;
    const rotateX = -((y - midY) / midY) * 5;

    setTiltStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.015)`,
    });
  }

  function handleMouseLeave() {
    setTiltStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
    });
    setSpotlight((s) => ({ ...s, active: false }));
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className="group relative overflow-hidden bg-slate-50 border border-slate-200 rounded-2xl p-7 cursor-pointer transition-[background-color,border-color,box-shadow,transform] duration-300 ease-out will-change-transform hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100 flex flex-col"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(220px circle at ${spotlight.x}% ${spotlight.y}%, rgba(37, 99, 235, 0.10), transparent 70%)`,
        }}
      />

      <div className="relative flex flex-col flex-1">
        <div className="mb-5">
          <Quote className="w-8 h-8 text-blue-600 opacity-80 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110" />
        </div>

        <StarRow rating={review.rating} />

        <p className="text-slate-700 leading-relaxed mb-2 flex-1">"{displayText}"</p>

        {isLong && (
          <button
            onClick={() => setExpanded((e) => !e)}
            className="text-sm font-medium text-blue-600 hover:text-blue-700 mb-4 self-start flex items-center gap-1"
          >
            {expanded ? "Show less" : "Read more"}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        )}

        <div className="flex items-center justify-between gap-3 mt-2 pt-5 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg transition-transform duration-300 group-hover:scale-110">
              {review.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-slate-900">{review.name}</h4>
              <p className="text-sm text-slate-500">{review.role}</p>
            </div>
          </div>

          <button
            onClick={() => {
              if (voted) return;
              setVoted(true);
              setHelpfulCount((c) => c + 1);
            }}
            disabled={voted}
            className={`flex items-center gap-1 text-sm px-2.5 py-1.5 rounded-full border transition-colors ${
              voted
                ? "border-blue-200 bg-blue-50 text-blue-600"
                : "border-slate-200 text-slate-500 hover:border-blue-200 hover:text-blue-600"
            }`}
          >
            <ThumbsUp className={`w-3.5 h-3.5 ${voted ? "fill-blue-600" : ""}`} />
            {helpfulCount}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CustomerReviews() {
  const [filter, setFilter] = useState<string>("All");

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(reviews.map((r) => r.role)))],
    []
  );

  const filtered = useMemo(
    () => (filter === "All" ? reviews : reviews.filter((r) => r.role === filter)),
    [filter]
  );

  const avgRating = (
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-lg mb-2">
            Real feedback from people who trusted us with their devices
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-slate-900">{avgRating}</span>
            <span>average across {reviews.length} reviews</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                filter === cat
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "border-slate-200 text-slate-600 hover:border-blue-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-slate-500">No reviews in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}