"use client";

import Link from "next/link";
import { FaChurch, FaUsers, FaCalendar, FaDonate } from "react-icons/fa";

const QuickLinks = () => {
  const links = [
    {
      name: "Watch Live",
      href: "/sermons",
      icon: <FaChurch className="text-3xl md:text-4xl" />,
    },
    {
      name: "Youth Hub",
      href: "/youth",
      icon: <FaUsers className="text-3xl md:text-4xl" />,
    },
    {
      name: "Events",
      href: "/events",
      icon: <FaCalendar className="text-3xl md:text-4xl" />,
    },
    {
      name: "Give",
      href: "/give",
      icon: <FaDonate className="text-3xl md:text-4xl" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 tracking-tight">
          Get Connected
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {links.map((link) => (
            <div
              key={link.name}
              className="group flex flex-col items-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-orange-600 mb-4 transition-colors duration-300 group-hover:text-orange-700">
                {link.icon}
              </div>
              <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-4 text-center">
                {link.name}
              </h3>
              <Link
                href={link.href}
                className="w-full"
                aria-label={`Visit ${link.name} page`}
              >
                <button
                  className="w-full px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-300 text-sm md:text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  aria-label={`Navigate to ${link.name}`}
                >
                  Explore
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
