"use client";

import Image from "next/image";
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

const youthLeaders = [
  { id: 1, name: "Lilian Wanjiru", role: "Vice Secretary", image: "/y1.jpg" },
  { id: 2, name: "Flora Njeri", role: "Chairlady", image: "/y2.jpg" },
  { id: 3, name: "Mary Wangari", role: "Treasurer", image: "/y3.jpg" },
  { id: 4, name: "Simon Kamau", role: "Chairman", image: "/y4.jpg" },
];

const pillars = [
  {
    icon: FaPray,
    title: "Faith Formation",
    description:
      "Discipling young people to build a strong spiritual foundation.",
  },
  {
    icon: FaRocket,
    title: "Leadership Development",
    description:
      "Training and empowering youth to lead in church, school, work, and society.",
  },
  {
    icon: FaUsers,
    title: "Community & Fellowship",
    description:
      "Creating spaces for deep, lasting relationships and peer support.",
  },
  {
    icon: FaPaintBrush,
    title: "Creative Expression",
    description:
      "Allowing youth to use their gifts and talents to serve and glorify God.",
  },
];

const programs = [
  {
    icon: FaHandsHelping,
    title: "Mentorship Circles",
    description: "Connecting youth with mature spiritual leaders.",
  },
  {
    icon: FaCampground,
    title: "Youth Conferences & Camps",
    description: "Designed for spiritual impact and fun.",
  },
  {
    icon: FaGlobe,
    title: "Outreach Missions",
    description: "To schools, communities, and vulnerable groups.",
  },
];

const YouthHub = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Youth Leaders Section */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight font-serif mb-8">
            Our Youth Leaders — Cool, Committed, and In Charge
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {youthLeaders.map(({ id, name, role, image }) => (
              <div
                key={id}
                className="bg-gradient-to-tr from-orange-400 to-orange-600 p-1 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                <div className="bg-white rounded-3xl p-6 flex flex-col items-center space-y-4">
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-orange-500 shadow-inner transform transition-transform duration-300 hover:scale-105">
                    <Image
                      src={image}
                      alt={name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 font-serif tracking-tight">
                    {name}
                  </h3>
                  <p className="text-orange-600 font-semibold">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-serif">
            Empowering a Generation to Know God, Live Boldly, and Lead
            Courageously
          </h1>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
        </div>

        {/* Introduction */}
        <p className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed font-sans mb-16">
          At ACFC, we believe young people are not just the church of tomorrow —
          they are the church of today. The Youth Hub is a vibrant ministry
          offering a safe, spirit-filled space to explore faith, build
          friendships, discover purpose, and rise as Kingdom influencers.
        </p>

        {/* Foundational Pillars */}
        <div className="mb-20">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12 font-serif tracking-wide">
            Our Foundational Pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default"
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-gradient-to-tr from-orange-300 to-orange-500 p-5 rounded-full text-white group-hover:scale-110 transform transition-transform duration-300 shadow-md">
                    <Icon className="text-4xl" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 font-serif tracking-tight">
                    {title}
                  </h3>
                </div>
                <p className="text-center text-gray-700 font-sans leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>
        </div>

        {/* Core Programs */}
        <div className="mb-24">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-12 font-serif tracking-wide">
            Core Programs & Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
            {programs.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-default"
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="bg-gradient-to-tr from-orange-300 to-orange-500 p-5 rounded-full text-white group-hover:scale-110 transform transition-transform duration-300 shadow-md">
                    <Icon className="text-4xl" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900 font-serif tracking-tight">
                    {title}
                  </h3>
                </div>
                <p className="text-center text-gray-700 font-sans leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-6 w-16 h-1 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 mx-auto"></div>
          <p className="text-gray-700 text-xl font-serif mb-10 leading-relaxed">
            Whether you&apos;re in high school, at tertiary level, just starting
            your career, or figuring out your path — the Youth Hub is a place
            where you belong, your voice matters, and your future is shaped by
            God&apos;s purpose. We&apos;re building a generation that will rise
            in love, truth, and power.
          </p>
          <Link
            href="/youth-hub"
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full px-12 py-4 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            aria-label="Join the Youth Hub"
          >
            <span>Join Us</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Subtle Background Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            background:
              'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23FDBA74"/%3E%3C/svg%3E\') repeat',
          }}
        />
      </div>
    </section>
  );
};

export default YouthHub;
