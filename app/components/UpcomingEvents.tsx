"use client";

import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Youth Kesha Night",
      date: "[TBD - Please provide the date]",
      time: "7:00 PM - 6:00 AM",
      href: "/youth-kesha",
    },
    {
      title: "Sunday Service",
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      href: "/sunday-service",
    },
    {
      title: "Community Outreach",
      date: "[TBD - Please provide the date]",
      time: "9:00 AM",
      href: "/events",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-900 tracking-tight font-serif">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <article
              key={event.title}
              className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50"
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col items-center">
                  <div className="bg-orange-50 p-3 rounded-full mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                    <FaCalendarAlt className="text-orange-400 text-2xl group-hover:text-orange-500 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                    {event.title}
                  </h3>
                </div>

                <div className="flex flex-col items-center text-gray-600">
                  <div className="bg-orange-50 p-3 rounded-full mb-2 group-hover:bg-gray-100 transition-colors duration-300">
                    <FaClock className="text-orange-400 text-2xl group-hover:text-orange-500 transition-colors duration-300" />
                  </div>
                  <time className="text-lg font-sans text-center">
                    {event.date} • {event.time}
                  </time>
                </div>

                <Link
                  href={event.href}
                  className="w-full"
                  aria-label={`View details for ${event.title}`}
                >
                  <h2
                    className="w-full px-4 py-2 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-all duration-300 text-lg font-medium font-sans shadow-lg hover:shadow-xl group hover:animate-none text-center"
                    aria-label={`Navigate to ${event.title} details`}
                  >
                    <span className="inline-flex items-center gap-2">
                      View Details
                      <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </h2>
                </Link>
              </div>
            </article>
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

export default UpcomingEvents;
