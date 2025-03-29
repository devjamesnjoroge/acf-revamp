"use client";

import { FaCalendarAlt, FaClock, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const UpcomingEvents = () => {
  const events = [
    {
      title: "Youth Worship Night",
      date: "March 20, 2025",
      time: "6:00 PM",
      href: "/events/youth-worship",
    },
    {
      title: "Sunday Service",
      date: "March 23, 2025",
      time: "10:00 AM",
      href: "/events/sunday-service",
    },
    {
      title: "Community Outreach",
      date: "March 29, 2025",
      time: "9:00 AM",
      href: "/events/community-outreach",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900 tracking-tight">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <article
              key={event.title}
              className="group bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCalendarAlt className="text-blue-600 text-2xl transition-colors duration-300 group-hover:text-blue-700" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {event.title}
                </h3>
              </div>

              <div className="flex items-center gap-3 text-gray-600 mb-6">
                <FaClock className="flex-shrink-0" />
                <time className="text-base">
                  {event.date} • {event.time}
                </time>
              </div>

              <Link
                href={event.href}
                className="inline-flex items-center gap-2 w-full px-4 py-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
                aria-label={`View details for ${event.title}`}
              >
                <span>View Details</span>
                <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
