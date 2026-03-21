'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Leaf, Globe } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Scan', href: '/scan' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 glassmorphism border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl gradient-text">
          <Leaf size={28} className="text-green-600" />
          KRUSHI SCAN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Right side icons */}
        <div className="hidden md:flex items-center gap-6">
          {/* Language Selector */}
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <Globe size={20} />
              <span className="text-sm font-medium uppercase">{language}</span>
            </button>
            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-40">
              {['EN', 'HI', 'KN', 'MR'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setLanguage(lang.toLowerCase());
                    setIsLanguageOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors ${
                    language === lang.toLowerCase() ? 'bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {lang === 'EN' && 'English'}
                  {lang === 'HI' && 'हिंदी'}
                  {lang === 'KN' && 'ಕನ್ನಡ'}
                  {lang === 'MR' && 'मराठी'}
                </button>
              ))}
            </div>
          </div>
          <DarkModeToggle />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              aria-label="Toggle language menu"
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              <Globe size={20} />
            </button>
            {isLanguageOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-40">
                {['EN', 'HI', 'KN', 'MR'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang.toLowerCase());
                      setIsLanguageOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-sm ${
                      language === lang.toLowerCase() ? 'bg-green-50 dark:bg-green-900/50 text-green-600 dark:text-green-400 font-semibold' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {lang === 'EN' && 'English'}
                    {lang === 'HI' && 'हिंदी'}
                    {lang === 'KN' && 'ಕನ್ನಡ'}
                    {lang === 'MR' && 'मराठी'}
                  </button>
                ))}
              </div>
            )}
          </div>
          <DarkModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4 px-4 animate-slideInLeft">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
