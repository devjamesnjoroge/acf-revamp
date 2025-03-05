"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const YouthSpotlight = () => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <Image
            src="/youth-group.jpeg" // Replace with your image
            height={400}
            width={500}
            alt="Youth Group"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-black text-3xl md:text-4xl font-bold mb-4">
            Youth Spotlight
          </h2>
          <p className="text-gray-500 text-lg mb-6">
            Our youth group is where faith, fun, and friendship collide. Join us
            for worship nights, service projects, and more!
          </p>
          <Link href="/youth">
            <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-500 transition-colors duration-300">
              Learn More <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default YouthSpotlight;
