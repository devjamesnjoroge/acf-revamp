"use client";

import { FaArrowRight, FaMusic, FaBible, FaPray, FaCoffee } from "react-icons/fa";
import Link from "next/link";

const SundayService = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Welcome to Our Sunday Worship
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Introduction */}
        <p className="text-center text-gray-700 text-lg mb-12 max-w-3xl mx-auto font-sans leading-relaxed">
          Join us every Sunday as we come together to worship, pray, and grow in faith. Our Sunday services are a time to connect with God and our community, whether you&apos;re a lifelong member or visiting for the first time. We can&apos;t wait to share this special time with you!
        </p>

        {/* Service Times */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            Service Times
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center mb-4">
                Sunday School Service
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                8:00 AM - 9:30 AM
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center mb-4">
                Main Worship Service
              </h3>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                10:00 AM - 12:00 PM
              </p>
            </div>
          </div>
          <p className="text-center text-gray-700 text-lg mt-6 font-sans">
            All services are held in-person.
          </p>
        </div>

        {/* Divider */}
        <div className="w-32 h-1 bg-orange-500 mx-auto mb-12 rounded-full"></div>

        {/* What to Expect */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaMusic className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">Worship</h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Uplifting music led by our praise team, featuring a mix of contemporary and traditional songs.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaBible className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">Sermon</h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                A Bible-based message that&apos;s relevant to everyday life, delivered by Our Great Men of God.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaPray className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">Prayer</h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                A time to seek God&apos;s guidance and lift up our community&apos;s needs.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaCoffee className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">Fellowship</h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Connect with others over coffee and refreshments after the service.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-32 h-1 bg-orange-500 mx-auto mb-12 rounded-full"></div>

        {/* First Time Visiting */}
        <div className="mb-20 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            First Time Visiting?
          </h2>
          <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg bg-gradient-to-br from-white to-orange-100 text-center">
            <p className="text-lg text-gray-800 font-sans leading-relaxed mb-4">
              We&apos;re so glad you&apos;re considering joining us!
            </p>
            <p className="text-lg text-gray-800 font-sans leading-relaxed">
              <span className="font-semibold">Dress:</span> Come as you are—whether that&apos;s casual or dressed up, you&apos;re welcome here.
            </p>
          </div>
        </div>

        {/* Get Involved */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            Get Involved
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg bg-gradient-to-br from-white to-orange-100">
              <p className="text-lg text-gray-800 font-sans leading-relaxed mb-4 text-center">
                Sunday worship is just the beginning! Explore ways to deepen your faith and connect with our community.
              </p>
              <p className="text-lg text-gray-800 font-sans leading-relaxed mb-4 text-center">
                You can visit us in the following parishes:
              </p>
              <ul className="text-gray-800 text-lg font-sans leading-relaxed list-disc list-inside mx-auto max-w-md">
                <li>Nyamathi Parish</li>
                <li>Central Parish</li>
                <li>Nairobi Parish</li>
                <li>Langa Langa Parish</li>
                <li>Gakoe Parish</li>
                <li>Maiella Parish</li>
                <li>Bahati Parish</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <Link
            href="/get-involved"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group animate-pulse hover:animate-none"
            aria-label="Get involved"
          >
            <span>Get Involved</span>
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

export default SundayService;