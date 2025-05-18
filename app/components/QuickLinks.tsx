"use client";

import Link from "next/link";
import { FaChurch, FaUsers, FaCalendar, FaDonate } from "react-icons/fa";

const QuickLinks = () => {
  const links = [
    {
      name: "Watch Live",
      href: "/watch-live",
      icon: <FaChurch />, 
    },
    {
      name: "Youth Hub",
      href: "/youth-hub",
      icon: <FaUsers />, 
    },
    {
      name: "Events",
      href: "/events",
      icon: <FaCalendar />, 
    },
    {
      name: "Give",
      href: "/give",
      icon: <FaDonate />, 
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-orange-50 to-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-orange-600 sm:text-4xl font-serif">
            Get Connected
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-700">
            Discover ways to engage, grow, and give back. Whether you&apos;re new or a regular, there&apos;s always a next step.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <article
              key={link.name}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-orange-400 hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-500 text-3xl group-hover:bg-orange-200 transition">
                  {link.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 font-serif">
                  {link.name}
                </h3>
                <Link href={link.href} aria-label={`Visit ${link.name} page`} className="mt-4 w-full">
                  <button
                    className="w-full rounded-full bg-orange-500 px-5 py-2.5 text-white font-medium transition hover:bg-orange-600"
                    aria-label={`Navigate to ${link.name}`}
                  >
                    Explore
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background:
            "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%23FDBA74\"/%3E%3C/svg%3E') repeat",
        }}
      ></div>
    </section>
  );
};

export default QuickLinks;
