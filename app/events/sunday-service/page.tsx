"use client";

import {
  FaArrowRight,
  FaMusic,
  FaBible,
  FaPray,
  FaCoffee,
} from "react-icons/fa";
import Link from "next/link";

const SundayService = () => {
  return (
    <section className="relative py-16 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Header */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold font-serif text-gradient bg-gradient-to-r from-orange-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent select-none">
            Welcome to Our Sunday Worship
          </h1>
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-12 h-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 animate-pulse"></div>
            <div className="w-6 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse delay-200"></div>
          </div>
          <p className="mt-8 text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-xl mx-auto">
            Join us every Sunday to worship, pray, and grow in faith — a warm
            community waiting for you, whether you're a lifelong believer or a
            curious visitor.
          </p>
        </header>

        {/* Service Times */}
        <section className="mb-20 max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold font-serif text-center mb-12 text-gray-900 tracking-tight">
            Service Times
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {[
              { title: "Sunday School Service", time: "8:00 AM - 9:30 AM" },
              { title: "Main Worship Service", time: "10:00 AM - 12:00 PM" },
            ].map(({ title, time }) => (
              <div
                key={title}
                className="group relative bg-white rounded-3xl p-12 shadow-lg border border-gray-200 cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-3"
              >
                <h3 className="text-3xl font-serif font-bold text-orange-500 group-hover:text-pink-500 mb-3">
                  {title}
                </h3>
                <p className="text-xl font-light text-gray-800 tracking-wide">
                  {time}
                </p>
                <div className="absolute top-6 right-6 opacity-10 text-7xl select-none pointer-events-none transition-opacity group-hover:opacity-30">
                  {/* A subtle oversized time icon can be added here */}⏰
                </div>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-gray-600 text-base font-medium tracking-wide italic">
            All services are held in-person with warm smiles waiting.
          </p>
        </section>

        {/* What to Expect */}
        <section className="mb-24 max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold font-serif text-center mb-14 text-gray-900 tracking-tight">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <FaMusic className="text-orange-500 text-4xl" />,
                title: "Worship",
                desc: "Uplifting music from our praise team — contemporary beats meet timeless hymns.",
              },
              {
                icon: <FaBible className="text-orange-500 text-4xl" />,
                title: "Sermon",
                desc: "A Bible-based message that resonates with your everyday life.",
              },
              {
                icon: <FaPray className="text-orange-500 text-4xl" />,
                title: "Prayer",
                desc: "Seeking God’s guidance and lifting up community needs together.",
              },
              {
                icon: <FaCoffee className="text-orange-500 text-4xl" />,
                title: "Fellowship",
                desc: "Warm conversations and coffee to refresh your spirit and friendships.",
              },
            ].map(({ icon, title, desc }) => (
              <article
                key={title}
                className="bg-white rounded-3xl p-10 shadow-lg border border-gray-200 hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-tr from-orange-200 to-pink-100 p-5 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                    {icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold font-serif text-center mb-3 text-gray-900">
                  {title}
                </h3>
                <p className="text-center text-gray-700 text-base leading-relaxed font-light">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* First Time Visiting */}
        <section className="mb-24 max-w-3xl mx-auto text-center bg-gradient-to-tr from-orange-100 to-pink-100 rounded-3xl shadow-xl p-12 border border-orange-300">
          <h2 className="text-4xl font-serif font-bold mb-6 text-orange-600">
            First Time Visiting?
          </h2>
          <p className="text-lg font-light text-gray-800 mb-4 max-w-xl mx-auto">
            We’re thrilled you’re thinking of joining us! Come as you are —
            casual, dressed up, or somewhere in between.
          </p>
        </section>

        {/* Get Involved */}
        <section className="mb-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold font-serif text-center mb-12 text-gray-900 tracking-tight">
            Get Involved
          </h2>
          <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10">
            <p className="text-center text-lg font-light text-gray-700 mb-6">
              Sunday worship is just the start! Dive deeper and connect with our
              vibrant community.
            </p>
            <p className="text-center text-lg font-light text-gray-700 mb-8">
              Visit any of our welcoming parishes:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-orange-600 font-semibold text-lg list-disc list-inside max-w-md mx-auto">
              {[
                "Nyamathi Parish",
                "Central Parish",
                "Nairobi Parish",
                "Langa Langa Parish",
                "Gakoe Parish",
                "Maiella Parish",
                "Bahati Parish",
              ].map((parish) => (
                <li
                  key={parish}
                  className="hover:text-pink-500 cursor-pointer transition-colors"
                >
                  {parish}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-4 px-12 py-5 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            aria-label="Get involved"
          >
            <span>Get Involved</span>
            <FaArrowRight className="text-xl" />
          </Link>
        </div>

        {/* Subtle Background Pattern */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            background:
              'url(\'data:image/svg+xml,%3Csvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="12" cy="12" r="2" fill="%23FDBA74" fill-opacity="0.3"/%3E%3C/svg%3E\') repeat',
          }}
        />
      </div>
    </section>
  );
};

export default SundayService;
