import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Laptop Repair",
    rating: 5,
    comment:
      "My laptop screen was broken. They replaced it the same day with genuine parts. Excellent service and fair price!",
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Data Recovery",
    rating: 5,
    comment:
      "I thought I lost all my important files. They recovered everything successfully. Highly recommended!",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Desktop Repair",
    rating: 5,
    comment:
      "My PC was very slow. They upgraded the SSD and cleaned it properly. Now it works like new. Great work!",
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 text-lg">
            Real feedback from people who trusted us with their devices
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-7 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-5">
                <Quote className="w-8 h-8 text-blue-600 opacity-80" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-slate-700 leading-relaxed mb-6">
                "{review.comment}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}