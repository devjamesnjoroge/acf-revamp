"use client";

import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Youth Kesha Night",
      date: "[TBD - Please provide the date]",
      time: "7:00 PM - 6:00 AM",
      href: "/events/youth-kesha",
    },
    {
      title: "Sunday Service",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      href: "/events/sunday-service",
    },
    {
      title: "Annual Convention",
      date: "[TBD - Please provide the date]",
      time: "9:00 AM",
      href: "/events/annual-convention",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-gray-800 tracking-tight font-serif">
          📅 Upcoming Events
        </h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="group relative overflow-hidden backdrop-blur-lg border border-orange-200/40 bg-white/70 rounded-3xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="bg-white/40 p-4 rounded-full shadow-sm transition-colors duration-300 group-hover:bg-orange-100">
                  <FaCalendarAlt className="text-orange-500 text-3xl" />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight">
                  {event.title}
                </h3>

                <div className="flex flex-col items-center text-gray-700 space-y-2">
                  <div className="bg-white/40 p-3 rounded-full shadow-sm transition-colors duration-300 group-hover:bg-orange-100">
                    <FaClock className="text-orange-500 text-xl" />
                  </div>
                  <time className="text-base md:text-lg font-medium">
                    {event.date} • {event.time}
                  </time>
                </div>

                <Link
                  href={event.href}
                  aria-label={`View details for ${event.title}`}
                >
                  <button className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-orange-500 text-white font-semibold text-base hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg group">
                    View Details
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ✨ Subtle Decorative Background Texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23FDBA74'/%3E%3C/svg%3E\") repeat",
        }}
      />
    </section>
  );
};

export default UpcomingEvents;
