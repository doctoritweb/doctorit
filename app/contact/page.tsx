"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can later connect to email service or API
    console.log(formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* ========== HERO SECTION ========== */}
      <section className="bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Have a device issue? Reach out to us — we’re happy to help.
          </p>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* ========== LEFT: Contact Info ========== */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                You can call us, message us on WhatsApp, or fill out the form. 
                We’ll get back to you as soon as possible.
              </p>

              {/* Contact Cards */}
              <div className="space-y-5">

                {/* Phone */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-12 h-12 bg-[#022978] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <a href="tel:+91XXXXXXXXXX" className="text-[#022978] hover:underline font-medium">
                      +91 XXXXX XXXXX
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">WhatsApp</h4>
                    <a 
                      href="https://wa.me/91XXXXXXXXXX" 
                      target="_blank"
                      className="text-green-600 hover:underline font-medium"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-12 h-12 bg-[#022978] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:info@doctorit.com" className="text-[#022978] hover:underline font-medium">
                      info@doctorit.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-12 h-12 bg-[#022978] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Address</h4>
                    <p className="text-slate-600">
                      123, IT Market Road,<br />
                      Your City, State - 000000
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="w-12 h-12 bg-[#022978] text-white rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Working Hours</h4>
                    <p className="text-slate-600">
                      Monday – Saturday: 10:00 AM – 8:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* ========== RIGHT: Contact Form ========== */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send us a Message
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600">Thank you. We will contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#022978] focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#022978] focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#022978] focus:ring-2 focus:ring-blue-100 outline-none transition"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#022978] focus:ring-2 focus:ring-blue-100 outline-none transition bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="laptop-repair">Laptop Repair</option>
                      <option value="desktop-repair">Desktop Repair</option>
                      <option value="printer-repair">Printer Repair</option>
                      <option value="data-recovery">Data Recovery</option>
                      <option value="hardware-upgrade">Hardware Upgrade</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your issue..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#022978] focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#021964] via-[#022978] to-[#03adeb] hover:opacity-90 text-white font-semibold py-3.5 rounded-xl transition shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========== MAP PLACEHOLDER ========== */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full h-80 bg-slate-200 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="text-center text-slate-500">
              <MapPin className="w-10 h-10 mx-auto mb-3 opacity-50" />
              <p className="font-medium">Google Map will be here</p>
              <p className="text-sm">Add your Google Maps embed code later</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}