"use client";

import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const EventsSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header with soul */}
      <header className="mb-10 text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
          Something Special is Always Happening Here
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-orange-500"></div>
      </header>

      {/* Heartfelt intro */}
      <article className="mx-auto max-w-3xl space-y-6 text-center font-sans text-lg text-gray-700">
        <p>
          Life pulses here — vibrant, diverse, a dance between spirit and community. Our events are the rhythm that invites you closer, to grow, serve, and discover your calling.
        </p>
        <p>
          Each gathering is a spark: worship ignited, hands united, hearts aligned — all to honor God and build His Kingdom.
        </p>
      </article>

      {/* Event cards grid */}
      <div className="mb-12 mt-12 grid gap-8 md:grid-cols-2">
        {[{
          title: "Types of Events You'll Find",
          icon: <FaCalendarAlt className="text-orange-500 text-3xl transition-colors duration-300 group-hover:text-orange-600" />,
          items: [
            "Spiritual Growth Events: Annual conferences, women’s and youth gatherings, Youth Kesha",
            "Fellowship: Weddings, Youth Sundays",
            "Leadership & Ministry Training",
            "Special Services: Children’s dedications, baptisms, Thanksgiving, Celebration Sundays",
          ],
        }, {
          title: "Why You Should Attend",
          icon: <FaCalendarAlt className="text-orange-500 text-3xl transition-colors duration-300 group-hover:text-orange-600" />,
          items: [
            "Discover fresh revelation and spiritual encouragement",
            "Connect with kindred spirits and forge deep bonds",
            "Learn new skills and serve with impact",
            "Grow in confidence, character, and calling",
          ],
        }].map(({ title, icon, items }) => (
          <div
            key={title}
            className="group rounded-xl border border-gray-100 bg-gradient-to-br from-white to-orange-50 p-8 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-6 flex items-center gap-3">
              {icon}
              <h3 className="font-serif text-2xl font-semibold text-gray-900">{title}</h3>
            </div>
            <ul className="list-inside list-disc space-y-3 font-sans text-base text-gray-700">
              {items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Invitation to journey */}
      <div className="text-center">
        <Link
          href="/events"
          aria-label="Explore all events"
          className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-lg font-medium text-white shadow-md transition-all duration-300 hover:bg-orange-600 hover:shadow-lg"
        >
          <span>Explore All Events</span>
          <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>

    {/* Whisper of pattern */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-5"
      style={{
        background:
          'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23F97316"/%3E%3C/svg%3E\') repeat',
      }}
    />
  </section>
);

export default EventsSection;
