"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUp, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { useState, useEffect } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";

export default function Footer() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`Subscribed: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">
      
      {/* Soft glow decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Column 1 - About */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src={logo}
                alt="DoctorIT Logo"
                width={180}
                height={120}
                className="rounded-lg"
                priority
              />
            </Link>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              Professional laptop, desktop & printer repair services.  
              We also sell quality computer parts and accessories.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/doctorit.lk", label: "Facebook", hover: "hover:bg-blue-600" },
                { icon: FaInstagram, href: "#", label: "Instagram", hover: "hover:bg-pink-600" },
                { icon: FaYoutube, href: "#", label: "YouTube", hover: "hover:bg-red-600" },
                { icon: FaWhatsapp, href: "https://wa.me/94777143928", label: "WhatsApp", hover: "hover:bg-green-600" },
                { icon: FaTiktok, href: "https://vm.tiktok.com/ZS9SGtk3kmhhE-6FB8R/", label: "TikTok", hover: "hover:bg-black" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 
                    flex items-center justify-center text-slate-300 
                    ${social.hover} hover:text-white hover:border-transparent 
                    hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                // { name: "Products", href: "/products" },
                { name: "Services", href: "/#services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-500 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-5">Our Services</h4>
            <ul className="space-y-3">
              {[
                { name: "Laptop Repair", href: "/services/laptop-repair" },
                { name: "Desktop Repair", href: "/services/desktop-repair" },
                { name: "Printer Repair", href: "/services/printer-repair" },
                { name: "Data Recovery", href: "/services/data-recovery" },
                { name: "Hardware Upgrade", href: "/services/pc-setup-upgrade" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-500 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-5">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <MapPin className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-400 text-sm leading-relaxed pt-1.5">
                    No.1014/1/1, Vihara Mawatha,
                    Kelaniya, (11600) Sri Lanka.
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Phone className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <a href="tel:+94727348466" className="text-slate-400 hover:text-blue-400 transition text-sm">
                    +94 727348466
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Mail className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <a href="mailto:info@doctorit.lk" className="text-slate-400 hover:text-blue-400 transition text-sm">
                    info@doctorit.lk
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300">
                    <Clock className="w-4 h-4 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-400 text-sm">Mon - Sat: 9:30 AM - 5:30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          
          <p>© {new Date().getFullYear()} DoctorIT. All rights reserved.</p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-blue-400 transition duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition duration-300">
                Terms of Service
              </Link>
            </div>

            {/* Developer Credit */}
            <p className="text-slate-500">
              Developed by{" "}
              <a
                href="https://cb95.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition font-medium"
              >
                cb95.xyz
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl bg-blue-600 text-white 
          flex items-center justify-center shadow-lg shadow-blue-600/30
          hover:bg-blue-500 hover:-translate-y-1 hover:shadow-blue-500/40
          transition-all duration-300 ${
            showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}