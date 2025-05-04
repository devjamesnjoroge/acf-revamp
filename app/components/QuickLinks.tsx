"use client";

import Link from "next/link";
import { FaChurch, FaUsers, FaCalendar, FaDonate } from "react-icons/fa";

const QuickLinks = () => {
  const links = [
    {
      name: "Watch Live",
      href: "/watch-live",
      icon: (
        <FaChurch className="text-4xl group-hover:scale-110 transition-all duration-300" />
      ),
    },
    {
      name: "Youth Hub",
      href: "/youth-hub",
      icon: (
        <FaUsers className="text-4xl group-hover:scale-110 transition-all duration-300" />
      ),
    },
    {
      name: "Events",
      href: "/events",
      icon: (
        <FaCalendar className="text-4xl group-hover:scale-110 transition-all duration-300" />
      ),
    },
    {
      name: "Give",
      href: "/give",
      icon: (
        <FaDonate className="text-4xl group-hover:scale-110 transition-all duration-300" />
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900 tracking-tight font-serif">
          Get Connected
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {links.map((link) => (
            <div
              key={link.name}
              className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50"
            >
              <div className="flex flex-col items-center">
                <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <div className="text-orange-400 group-hover:text-orange-500">
                    {link.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center mb-4">
                  {link.name}
                </h3>
                <Link
                  href={link.href}
                  className="w-full"
                  aria-label={`Visit ${link.name} page`}
                >
                  <button
                    className="w-full px-6 py-3 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl hover:animate-none"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-3"
        style={{
          background:
            'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23FED7AA"/%3E%3C/svg%3E\') repeat',
        }}
      ></div>
    </section>
  );
};

export default QuickLinks;
