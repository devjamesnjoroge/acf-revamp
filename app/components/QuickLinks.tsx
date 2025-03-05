"use client";

import Link from "next/link";
import { FaChurch, FaUsers, FaCalendar, FaDonate } from "react-icons/fa";

const QuickLinks = () => {
  const links = [
    {
      name: "Watch Live",
      href: "/sermons",
      icon: <FaChurch className="text-3xl" />,
    },
    {
      name: "Youth Hub",
      href: "/youth",
      icon: <FaUsers className="text-3xl" />,
    },
    {
      name: "Events",
      href: "/events",
      icon: <FaCalendar className="text-3xl" />,
    },
    { name: "Give", href: "/give", icon: <FaDonate className="text-3xl" /> },
  ];

  return (
    <section className="bg-gray-300 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight">
          Get Connected
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {links.map((link) => (
            <div
              key={link.name}
              className="flex flex-col items-center p-6 bg-white rounded-lg border border-gray-500 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-black mb-4">{link.icon}</div>
              <h3 className="text-black text-lg md:text-xl font-semibold mb-4 text-center">
                {link.name}
              </h3>
              <Link href={link.href}>
                <button className="w-full px-8 cursor-pointer py-2 bg-black text-white rounded-md hover:bg-gray-500 transition-colors duration-300 text-sm md:text-base font-medium">
                  Go
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
