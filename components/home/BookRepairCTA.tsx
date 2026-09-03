import Link from "next/link";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function BookRepairCTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-blue-700 to-blue-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Repair Your Device?
        </h2>

        <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Get expert diagnosis and fast repair service. Book now and let our technicians take care of everything.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Primary Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-800 hover:bg-blue-50 px-8 py-3.5 rounded-xl font-semibold text-lg transition shadow-lg"
          >
            Book a Repair
            <ArrowRight className="w-5 h-5" />
          </Link>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>

          {/* Call Button */}
          <a
            href="tel:+91XXXXXXXXXX"
            className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3.5 rounded-xl font-semibold text-lg transition"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>

        </div>

      </div>
    </section>
  );
}