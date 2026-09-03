import { Search, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Book a Repair",
    description: "Call us, WhatsApp, or fill the form. Tell us the issue with your device.",
    icon: Search,
  },
  {
    id: 2,
    title: "Diagnosis & Quote",
    description: "Our expert technicians will diagnose the problem and give you a clear price.",
    icon: Wrench,
  },
  {
    id: 3,
    title: "Repair & Delivery",
    description: "We repair your device with genuine parts and return it tested & ready.",
    icon: CheckCircle,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-howitworks-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 text-lg">
            Getting your device repaired is simple and hassle-free
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-blue-200 z-0"></div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative z-10 text-center">
              
              {/* Number + Icon */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-14 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition shadow-lg shadow-blue-200"
          >
            Book a Repair Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
}