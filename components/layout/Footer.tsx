import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 - About */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              DoctorIT
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Professional laptop, desktop & printer repair services. 
              We also sell quality computer parts and accessories.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition">
                <FaYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-blue-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-400 transition">Services</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-400 transition">Products</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-400 transition">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/laptop-repair" className="hover:text-blue-400 transition">Laptop Repair</Link>
              </li>
              <li>
                <Link href="/services/desktop-repair" className="hover:text-blue-400 transition">Desktop Repair</Link>
              </li>
              <li>
                <Link href="/services/printer-repair" className="hover:text-blue-400 transition">Printer Repair</Link>
              </li>
              <li>
                <Link href="/services/data-recovery" className="hover:text-blue-400 transition">Data Recovery</Link>
              </li>
              <li>
                <Link href="/services/hardware-upgrade" className="hover:text-blue-400 transition">Hardware Upgrade</Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>123, IT Market, Your City, State - 000000</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-blue-400 transition">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:info@doctorit.com" className="hover:text-blue-400 transition">
                  info@doctorit.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span>Mon - Sat: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} DoctorIT. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-400 transition">Terms of Service</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}