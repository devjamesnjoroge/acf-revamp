"use client";

import {
  FaArrowRight,
  FaCross,
  FaBook,
  FaMicrophone,
  FaCheckCircle,
} from "react-icons/fa";
import Link from "next/link";

const WatchLive = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Experience the Presence of God — Anytime, Anywhere
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Introduction */}
        <p className="text-center text-gray-700 text-lg mb-6 max-w-3xl mx-auto font-sans">
          Welcome to our Live Streaming Portal, the digital doorway to our
          church family. Whether you&apos;re joining from across the globe or right
          around the corner, our goal is to create a seamless worship experience
          that draws you closer to God and connects you with a vibrant community
          of believers.
        </p>
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto font-sans">
          In a fast-paced world, we understand that not everyone can be
          physically present in the sanctuary each week. That&apos;s why we bring
          church to you — through our high-quality, real-time broadcasts that
          keep you spiritually nourished, inspired, and connected.
        </p>

        {/* Live Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            Our Live Services Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-100">
              <div className="flex items-center gap-4 mb-4">
                <FaCross className="text-orange-500 text-3xl transition-colors duration-300 group-hover:text-orange-600" />
                <h3 className="text-xl font-medium text-gray-900 font-serif">
                  Sunday Worship Service
                </h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-sans">
                A vibrant service with spirit-led worship, Bible-based
                preaching, and Holy Spirit encounters.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-100">
              <div className="flex items-center gap-4 mb-4">
                <FaBook className="text-orange-500 text-3xl transition-colors duration-300 group-hover:text-orange-600" />
                <h3 className="text-xl font-medium text-gray-900 font-serif">
                  Midweek Fellowship & Teaching
                </h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-sans">
                A refreshing midweek service for deeper study of the Word,
                prayer, and spiritual empowerment.
              </p>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-white to-orange-100">
              <div className="flex items-center gap-4 mb-4">
                <FaMicrophone className="text-orange-500 text-3xl transition-colors duration-300 group-hover:text-orange-600" />
                <h3 className="text-xl font-medium text-gray-900 font-serif">
                  Special Conferences
                </h3>
              </div>
              <p className="text-gray-700 text-base leading-relaxed font-sans">
                Watch exclusive broadcasts of our signature events featuring
                ministers of the Gospel.
              </p>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            What You Can Expect
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg bg-gradient-to-br from-white to-orange-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="text-gray-700 text-lg list-none space-y-4 font-sans">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-orange-500 text-xl flex-shrink-0 mt-1" />
                    <span>
                      A welcoming live chat to engage with other viewers and
                      share prayer requests
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-orange-500 text-xl flex-shrink-0 mt-1" />
                    <span>
                      Real-time prayer and response support from our online
                      ministry team
                    </span>
                  </li>
                </ul>
                <ul className="text-gray-700 text-lg list-none space-y-4 font-sans">
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-orange-500 text-xl flex-shrink-0 mt-1" />
                    <span>
                      On-demand access to past sermons through our media archive
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="text-orange-500 text-xl flex-shrink-0 mt-1" />
                    <span>
                      Compatibility with mobile, desktop, and smart TV platforms
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-serif leading-relaxed">
            We believe God&apos;s power is not limited by space — He moves wherever
            people gather in His name. Whether you&apos;re worshipping from your
            living room, office, or on the go, we invite you to join us in
            encountering His presence, truth, and love.
          </p>
          <Link
            href="/live"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group animate-pulse hover:animate-none"
            aria-label="Watch live now"
          >
            <span>Explore</span>
            <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Subtle Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            background:
              'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23F97316"/%3E%3C/svg%3E\') repeat',
          }}
        ></div>
      </div>
    </section>
  );
};

export default WatchLive;
