"use client";

import {
  FaArrowRight,
  FaPray,
  FaRocket,
  FaUsers,
  FaPaintBrush,
  FaHandsHelping,
  FaCampground,
  FaGlobe,
} from "react-icons/fa";
import Link from "next/link";

const YouthHub = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Empowering a Generation to Know God, Live Boldly, and Lead
            Courageously
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Introduction */}
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
          At ACFC, we believe that young people are not just the church of
          tomorrow — they are the church of today. The Youth Hub is our
          dedicated ministry for teenagers and young adults, providing a safe,
          vibrant, and spirit-filled environment where they can explore faith,
          build friendships, discover their purpose, and rise as Kingdom
          influencers.
        </p>

        {/* Foundational Pillars */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            Our Foundational Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaPray className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight">
                  Faith Formation
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Discipling young people to build a strong spiritual foundation.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaRocket className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight">
                  Leadership Development
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Training and empowering youth to lead in church, school, work,
                and society.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaUsers className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight">
                  Community & Fellowship
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Creating spaces for deep, lasting relationships and peer
                support.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaPaintBrush className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight">
                  Creative Expression
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Allowing youth to use their gifts and talents to serve and
                glorify God.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-32 h-1 bg-orange-500 mx-auto mb-12 rounded-full"></div>

        {/* Core Programs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            Core Programs & Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaHandsHelping className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight">
                  Mentorship Circles
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Connecting youth with mature spiritual leaders.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaCampground className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight">
                  Youth Conferences & Camps
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Designed for spiritual impact and fun.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaGlobe className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight">
                  Outreach Missions
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                To schools, communities, and vulnerable groups.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-serif leading-relaxed">
            Whether you&apos;re in high school, on tertiary level or, just
            starting your career, or figuring out your path — the Youth Hub is a
            place where you belong, where your voice matters, and where your
            future is shaped by God&apos;s purpose. We&apos;re building a
            generation that will rise in love, truth, and power.
          </p>
          <Link
            href="/youth-hub"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group animate-pulse hover:animate-none"
            aria-label="Join the Youth Hub"
          >
            <span>Join Us</span>
            <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Subtle Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            background:
              'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23FDBA74"/%3E%3C/svg%3E\') repeat',
          }}
        ></div>
      </div>
    </section>
  );
};

export default YouthHub;
