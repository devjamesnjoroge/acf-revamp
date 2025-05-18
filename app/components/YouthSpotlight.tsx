"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const YouthSpotlight = () => {
  return (
    <section
      className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden"
      aria-labelledby="youth-spotlight-heading"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
          <div className="md:w-1/2 relative group aspect-[4/3]">
            <div className="overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:border-orange-400 border border-gray-100 bg-gradient-to-br from-white to-orange-50">
              <Image
                src="/youth-group.jpeg"
                fill
                alt="Diverse group of young people participating in community service activities"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-orange-400/20 via-orange-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </div>

          <div className="md:w-1/2 space-y-6 px-4 sm:px-0">
            <h2
              id="youth-spotlight-heading"
              className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-serif"
            >
              Youth Spotlight
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-[600px] font-sans">
              Our vibrant youth community blends faith, fellowship, and service
              through dynamic worship nights, impactful outreach programs, and
              unforgettable social events designed for spiritual growth.
            </p>
            <Link
              href="/youth"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-400 text-white rounded-full hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl group hover:animate-none"
              aria-label="Explore youth programs and activities"
            >
              <span className="text-lg font-medium font-sans">
                Discover Youth Programs
              </span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
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

export default YouthSpotlight;
