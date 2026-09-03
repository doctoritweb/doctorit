import { 
  ShieldCheck, 
  Clock, 
  Wrench, 
  BadgeCheck, 
  Headphones, 
  ThumbsUp 
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Expert Technicians",
    description: "Our certified engineers have years of experience in laptop, desktop and printer repairs.",
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

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
            <div
              key={feature.id}
              className="group bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-2xl p-7 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white group-hover:bg-blue-600 border border-slate-200 group-hover:border-blue-600 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 shadow-sm">
                <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}