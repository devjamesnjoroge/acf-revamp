"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const YouthSpotlight = () => {
  return (
    <section
      className="py-12 lg:py-16 bg-white"
      aria-labelledby="youth-spotlight-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          <div className="md:w-1/2 relative group aspect-[4/3]">
            <div className="overflow-hidden rounded-lg shadow-lg h-full">
              <Image
                src="/youth-group.jpeg"
                fill
                alt="Diverse group of young people participating in community service activities"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="md:w-1/2 space-y-6 px-4 sm:px-0">
            <h2
              id="youth-spotlight-heading"
              className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
            >
              Youth Spotlight
            </h2>
            <p className="text-lg text-gray-600 md:text-xl leading-relaxed max-w-[600px]">
              Our vibrant youth community blends faith, fellowship, and service
              through dynamic worship nights, impactful outreach programs, and
              unforgettable social events designed for spiritual growth.
            </p>
            <Link
              href="/youth"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              aria-label="Explore youth programs and activities"
            >
              <span className="font-medium">Discover Youth Programs</span>
              <FaArrowRight className="transition-transform duration-300 hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouthSpotlight;
