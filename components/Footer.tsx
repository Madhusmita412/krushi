import Link from 'next/link';
import { Leaf, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Leaf size={24} className="text-green-400" />
              KRUSHI SCAN
            </Link>
            <p className="text-slate-400">
              Empowering farmers with AI-powered agriculture solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-green-400">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/scan" className="hover:text-green-400 transition-colors">
                  Disease Detection
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-green-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4 text-green-400">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-green-400 transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-green-400">Contact</h4>
            <ul className="space-y-2">
              <li className="flex gap-2 items-start">
                <Mail size={18} className="text-green-400 mt-0.5" />
                <a href="mailto:hello@krushiscan.com" className="hover:text-green-400 transition-colors">
                  hello@krushiscan.com
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Phone size={18} className="text-green-400 mt-0.5" />
                <span>+91 XXXX XXX XXX</span>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={18} className="text-green-400 mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} KRUSHI SCAN. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
