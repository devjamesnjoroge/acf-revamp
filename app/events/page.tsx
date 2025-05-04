"use client";

import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const EventsSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Something Special is Always Happening Here
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Introductory Text */}
        <p className="text-center text-gray-700 text-lg mb-6 max-w-3xl mx-auto font-sans">
          The life of the church is vibrant, diverse, and deeply connected to
          both spiritual growth and community impact. Through our events, we
          create opportunities for people to experience God, deepen
          relationships, serve others, and walk in their calling.
        </p>
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto font-sans">
          Our events are designed to inspire, equip, and unite. From
          spirit-filled worship nights to hands-on community service, every
          gathering at ACF serves a greater purpose — to glorify God and build
          His Kingdom.
        </p>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
            <div className="flex items-center gap-3 mb-6">
              <FaCalendarAlt className="text-orange-500 text-3xl transition-colors duration-300 group-hover:text-orange-600" />
              <h3 className="text-2xl font-semibold text-gray-900 font-serif">
                Types of Events You&apos;ll Find
              </h3>
            </div>
            <ul className="text-gray-700 text-base list-disc list-inside space-y-3 font-sans">
              <li>
                Spiritual Growth Events: Annual conferences, women&apos;s and
                youth conferences, Youth Kesha
              </li>
              <li>Fellowship Gatherings: Weddings, Youth Sundays</li>
              <li>Leadership & Ministry Training</li>
              <li>
                Special Services: Children&apos;s dedications, baptism services,
                Thanksgiving Days, Celebration Sundays
              </li>
            </ul>
          </div>
          <div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
            <div className="flex items-center gap-3 mb-6">
              <FaCalendarAlt className="text-orange-500 text-3xl transition-colors duration-300 group-hover:text-orange-600" />
              <h3 className="text-2xl font-semibold text-gray-900 font-serif">
                Why You Should Attend
              </h3>
            </div>
            <ul className="text-gray-700 text-base list-disc list-inside space-y-3 font-sans">
              <li>Discover fresh revelation and spiritual encouragement</li>
              <li>
                Connect with like-minded believers and form meaningful
                relationships
              </li>
              <li>Learn new skills and serve the community with impact</li>
              <li>Grow in confidence, character, and calling</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg group"
            aria-label="Explore all events"
          >
            <span>Explore All Events</span>
            <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      {/* Subtle Background Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background:
            'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23F97316"/%3E%3C/svg%3E\') repeat',
        }}
      ></div>
    </section>
  );
};

export default EventsSection;
