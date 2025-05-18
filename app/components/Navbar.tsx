"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Leaders", href: "/leaders" },
    { name: "Youth", href: "/youth-hub" },
    { name: "Teachings", href: "/" },
    { name: "Media", href: "/" },
  ];

  return (
    <header className="relative z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-transform hover:scale-[1.03]"
        >
          <Image
            src="/logo.jpeg"
            alt="Church logo"
            width={52}
            height={52}
            className="rounded-full shadow-md"
          />
          <div className="text-gray-900 leading-tight">
            <p className="uppercase font-bold text-sm">Ambassadors Of</p>
            <p className="uppercase text-xs tracking-wide">Christ Fellowship</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="uppercase text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 shadow-sm px-6 py-4 space-y-3 transition-all duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block uppercase text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
