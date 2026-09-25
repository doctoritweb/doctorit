"use client";

import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-6 h-6 text-cyan-300" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg max-w-none">

          <div className="space-y-10 text-slate-700 leading-relaxed">

            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
              <p>
                DoctorIT (“we”, “our”, or “us”) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, store and protect your 
                personal information when you use our website, contact us, or use our 
                laptop, desktop, printer repair and IT support services.
              </p>
              <p className="mt-3">
                By using our website or services, you agree to the terms of this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              
              <h3 className="text-lg font-semibold text-slate-800 mt-5 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Physical address (when required for on-site service)</li>
                <li>Device details (brand, model, serial number, issue description)</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mt-5 mb-2">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>IP address</li>
                <li>Browser type and device information</li>
                <li>Pages visited and time spent on our website</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Provide repair, setup and IT support services</li>
                <li>Communicate with you regarding your service request</li>
                <li>Send service updates, quotations and invoices</li>
                <li>Improve our website and customer experience</li>
                <li>Respond to inquiries and provide customer support</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Sharing of Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Sharing of Information</h2>
              <p>
                We do <strong>not</strong> sell, rent or trade your personal information to third parties.
              </p>
              <p className="mt-3">We may share your information only in the following cases:</p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>With trusted service partners when necessary to complete your repair (e.g. specialized parts suppliers)</li>
                <li>When required by law or legal process</li>
                <li>To protect our rights, safety, or property</li>
              </ul>
            </div>

            {/* Data Storage & Security */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Storage & Security</h2>
              <p>
                We take reasonable technical and organizational measures to protect your 
                personal information from unauthorized access, loss, misuse or alteration.
              </p>
              <p className="mt-3">
                However, no method of transmission over the internet or electronic storage 
                is 100% secure. While we strive to protect your data, we cannot guarantee 
                absolute security.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Cookies</h2>
              <p>
                Our website may use cookies and similar technologies to improve user 
                experience, analyze website traffic and understand how visitors use our site.
              </p>
              <p className="mt-3">
                You can control or disable cookies through your browser settings. 
                Note that disabling cookies may affect some features of the website.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Rights</h2>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal data (subject to legal requirements)</li>
                <li>Withdraw consent for marketing communications at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us using the details below.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites (e.g. social media). 
                We are not responsible for the privacy practices or content of those websites. 
                We encourage you to read their privacy policies.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Children’s Privacy</h2>
              <p>
                Our services are not directed to children under the age of 16. 
                We do not knowingly collect personal information from children. 
                If you believe we have collected such information, please contact us 
                so we can delete it.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. 
                Any changes will be posted on this page with an updated “Last updated” date. 
                We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Us</h2>
              <p className="mb-5">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please contact us:
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