'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaDiscord, FaBars, FaTimes, FaYoutube } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/ground-system', label: 'Ground System' },
  { href: '/defensive-system', label: 'Defensive System' },
  { href: '/aerial-system', label: 'Aerial System' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center font-bold text-xl">
              A
            </div>
            <span className="font-bold text-xl tracking-tight">AirCharged</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-purple-400 transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://youtube.com/@AirCharged"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
            >
              <FaYoutube className="text-lg text-red-500" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] px-4 py-2 rounded-lg font-medium transition-all hover:-translate-y-0.5"
            >
              <FaDiscord className="text-lg" />
              Join Discord
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050505] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-purple-400 py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#5865F2] hover:bg-[#4752C4] px-4 py-3 rounded-lg font-medium mt-4"
            >
              <FaDiscord className="text-lg" />
              Join Discord
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
