"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Leaders", href: "/leaders" },
    { name: "Explore", href: "/" },
    { name: "Teachings", href: "/" },
    { name: "Media", href: "/" },
  ];

  return (
    <div className="bg-white">
      {/* Navbar Container */}
      <div className="flex px-4 sm:px-8 lg:px-16 py-4 lg:py-8 items-center justify-between">
        {/* Logo Section */}
        <div className="logo flex items-center justify-center gap-3">
          <Image
            src={"/logo.jpeg"}
            height={58}
            width={60}
            alt=""
            className="rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
          <span className="uppercase">
            <span className="font-bold">Ambassadors Of</span>
            <br />
            <span className="font-normal text-[0.8rem]">Christ Fellowship</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center items-center gap-8 lg:gap-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="uppercase hover:text-blue-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FiX className="text-2xl" />
            ) : (
              <FiMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-50 px-4 py-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 uppercase hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
