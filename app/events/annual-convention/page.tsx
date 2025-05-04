"use client";

import {
  FaArrowRight,
  FaBible,
  FaMusic,
  FaUsers,
  FaChild,
  FaCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";

const AnnualConvention = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Welcome to ACF Annual Convention
          </h1>
          <div className="w-24 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Introduction */}
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
          Join us for a transformative time of worship, fellowship, and
          spiritual renewal at the 2025 ACF Annual Convention! This cherished
          gathering brings our church family and community together to celebrate
          God’s faithfulness, deepen our faith, and inspire one another to live
          out His calling with purpose. Whether you’re a longtime member or a
          first-time visitor, we welcome you to experience powerful worship,
          anointed preaching, and meaningful connections.
        </p>

        {/* Event Details */}
        <div className="mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            Event Details
          </h2>
          <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50 text-center">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                <FaCalendarAlt className="text-orange-400 text-3xl group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                2025 ACF Annual Convention
              </h3>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed font-sans mb-2">
              <span className="font-semibold">Date:</span> [TBD - Please provide
              the date]
            </p>
            <p className="text-gray-800 text-lg leading-relaxed font-sans mb-2">
              <span className="font-semibold">Location:</span> Nyamathi Ground
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-32 h-1 bg-orange-400 mx-auto mb-12 rounded-full"></div>

        {/* What to Expect */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <FaBible className="text-orange-400 text-3xl group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Inspiring Messages
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Hear from dynamic speakers who will share biblical insights and
                practical wisdom to strengthen your walk with Christ.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <FaMusic className="text-orange-400 text-3xl group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Powerful Worship
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Lift your voice with our worship team and guest artists as we
                exalt God together.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <FaUsers className="text-orange-400 text-3xl group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Breakout Sessions
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Choose from workshops on topics like prayer, family, leadership,
                and outreach, tailored for all ages and stages of faith.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-400 bg-gradient-to-br from-white to-orange-50">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-50 p-4 rounded-full mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                  <FaChild className="text-orange-400 text-3xl group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Youth and Children’s Programs
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Engaging activities and teaching for kids and teens to grow in
                faith.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="w-16 h-1 bg-orange-400 mx-auto mb-6 rounded-full"></div>
          <Link
            href="/annual-convention"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-medium text-white bg-orange-400 rounded-full hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl group animate-pulse hover:animate-none"
            aria-label="Join the ACF Annual Convention"
          >
            <span>Join Us</span>
            <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Subtle Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-3"
          style={{
            background:
              'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23FED7AA"/%3E%3C/svg%3E\') repeat',
          }}
        ></div>
      </div>
    </section>
  );
};

export default AnnualConvention;
