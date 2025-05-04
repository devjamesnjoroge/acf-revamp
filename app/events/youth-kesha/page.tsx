"use client";

import { FaArrowRight, FaFire } from "react-icons/fa";
import Link from "next/link";

const YouthKesha = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Ignite Your Faith at Kesha Night!
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Introduction */}
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
          Join us for National Youth Kesha Night, a powerful evening of worship, prayer, and connection designed specifically for teens and young adults. Kesha Night is all about encountering God, building community, and growing in faith through dynamic worship and inspiring moments.
        </p>

        {/* When & Where */}
        <div className="mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            When & Where
          </h2>
          <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100 text-center">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                <FaFire className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">National Youth Kesha Night</h3>
            </div>
            <p className="text-gray-800 text-lg leading-relaxed font-sans mb-2">
              <span className="font-semibold">Date:</span> [TBD - Please provide the date]
            </p>
            <p className="text-gray-800 text-lg leading-relaxed font-sans mb-2">
              <span className="font-semibold">Time:</span> 7:00 PM - 6:00 AM
            </p>
            <p className="text-gray-800 text-lg leading-relaxed font-sans mb-2">
              <span className="font-semibold">Location:</span> Langa Langa Parish
            </p>
            <p className="text-gray-800 text-lg leading-relaxed font-sans">
              All are warmly welcome.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <Link
            href="/youth-kesha"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group animate-pulse hover:animate-none"
            aria-label="Join Youth Kesha Night"
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
              "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"10\" cy=\"10\" r=\"1\" fill=\"%23FDBA74\"/%3E%3C/svg%3E') repeat",
          }}
        ></div>
      </div>
    </section>
  );
};

export default YouthKesha;