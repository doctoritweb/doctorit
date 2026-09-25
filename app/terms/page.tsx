"use client";

import Link from "next/link";
import { FileText, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <section className="bg-gradient-to-br from-[#021964] via-[#022978] to-[#03adeb] text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-100 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-cyan-300" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-10 text-slate-700 leading-relaxed">

            {/* 1. Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                Welcome to DoctorIT. These Terms of Service (“Terms”) govern your use of our 
                website and the repair, setup and IT support services we provide.
              </p>
              <p className="mt-3">
                By accessing our website or using our services, you agree to be bound by these Terms. 
                If you do not agree with any part of these Terms, please do not use our services.
              </p>
            </div>

            {/* 2. Services */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Services</h2>
              <p>
                DoctorIT provides laptop, desktop and printer repair services, data recovery, 
                hardware upgrades, network setup, PC installation and related IT support for 
                home users, small businesses and industries.
              </p>
              <p className="mt-3">
                We reserve the right to refuse service at our discretion, including but not limited to 
                cases involving illegal activities, damaged devices beyond repair, or incomplete information.
              </p>
            </div>

            {/* 3. Quotations & Pricing */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Quotations & Pricing</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All quotations provided are estimates based on the information available at the time.</li>
                <li>Final charges may vary if additional issues are discovered during diagnosis or repair.</li>
                <li>We will inform you of any significant changes in cost before proceeding with additional work.</li>
                <li>Prices are quoted in Sri Lankan Rupees (LKR) unless otherwise stated.</li>
              </ul>
            </div>

            {/* 4. Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Payment Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is generally required upon completion of the service before the device is released.</li>
                <li>For larger projects or bulk work, advance payment or staged payments may be required.</li>
                <li>We accept cash, bank transfer and other payment methods as agreed.</li>
                <li>Devices may be retained until full payment is received.</li>
              </ul>
            </div>

            {/* 5. Device Handling */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Device Handling & Customer Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>You are responsible for backing up all important data before submitting a device for repair.</li>
                <li>DoctorIT is not responsible for any data loss that occurs during diagnosis or repair, unless caused by our proven negligence.</li>
                <li>Please remove any SIM cards, memory cards, or personal accessories before handing over the device.</li>
                <li>You must provide accurate information about the device and the issue.</li>
              </ul>
            </div>

            {/* 6. Warranty */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Repair Warranty</h2>
              <p>
                We provide a limited service warranty on most repairs (typically up to 90 days), 
                covering the specific issue that was repaired.
              </p>
              <p className="mt-3">The warranty does <strong>not</strong> cover:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>New issues unrelated to the original repair</li>
                <li>Physical damage, liquid damage, or misuse after the device is returned</li>
                <li>Software problems, viruses, or issues caused by third-party applications</li>
                <li>Normal wear and tear</li>
              </ul>
              <p className="mt-3">
                Warranty claims must be made within the stated warranty period and the device 
                must be returned to us for inspection.
              </p>
            </div>

            {/* 7. Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, DoctorIT shall not be liable for any 
                indirect, incidental, special or consequential damages, including but not limited to 
                loss of data, loss of profits, or business interruption arising from the use of our services.
              </p>
              <p className="mt-3">
                Our total liability for any claim related to a service shall not exceed the amount 
                paid by you for that specific service.
              </p>
            </div>

            {/* 8. On-site Services */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. On-site Services</h2>
              <p>
                For on-site visits (home, office or industrial locations), additional travel charges 
                may apply depending on the distance. You agree to provide a safe working environment 
                and necessary access to the premises and equipment.
              </p>
            </div>

            {/* 9. Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Intellectual Property</h2>
              <p>
                All content on this website (text, logos, images, design) is the property of DoctorIT 
                and is protected by copyright and other intellectual property laws. 
                You may not copy, reproduce or distribute any content without our prior written permission.
              </p>
            </div>

            {/* 10. Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of 
                Sri Lanka. Any disputes arising from these Terms or our services shall be subject 
                to the exclusive jurisdiction of the courts of Sri Lanka.
              </p>
            </div>

            {/* 11. Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. 
                The updated version will be posted on this page with a revised “Last updated” date. 
                Continued use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* 12. Contact */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Us</h2>
              <p className="mb-5">
                If you have any questions about these Terms of Service, please contact us:
              </p>

              <div className="space-y-3 text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>No.1014/1/1, Vihara Mawatha, Kelaniya, Sri Lanka</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href="tel:+94777143928" className="hover:text-blue-600 transition">
                    +94 777 143 928
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href="mailto:doctoritweb@gmail.com" className="hover:text-blue-600 transition">
                    doctoritweb@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}