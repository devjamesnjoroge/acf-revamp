"use client";

import { FaCalendarAlt, FaClock } from "react-icons/fa";

const UpcomingEvents = () => {
  const events = [
    { title: "Youth Worship Night", date: "March 20, 2025", time: "6:00 PM" },
    { title: "Sunday Service", date: "March 23, 2025", time: "10:00 AM" },
    { title: "Community Outreach", date: "March 29, 2025", time: "9:00 AM" },
  ];

  return (
    <section className="bg-gray-300 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white p-6 rounded-lg border border-gray-500 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaCalendarAlt className="text-black text-2xl" />
                <h3 className="text-black text-xl md:text-2xl font-semibold">
                  {event.title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-base md:text-lg">
                <FaClock className="text-black" />
                <p>
                  {event.date} | {event.time}
                </p>
              </div>
              <button className="mt-4 w-full py-2 bg-black text-white rounded-md hover:bg-gray-500 transition-colors duration-300 text-sm md:text-base font-medium">
                Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
