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
    <section className="bg-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Experience the Presence of God — Anytime, Anywhere
          </h1>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center text-gray-700 text-lg font-sans mb-10 space-y-5">
          <p>
            Welcome to our Live Streaming Portal — your digital sanctuary.
            Whether near or far, connect with a community that worships boldly,
            teaches deeply, and welcomes wholly.
          </p>
          <p>
            We know life can be busy, but worship shouldn&apos;t be a luxury.
            That&apos;s why we bring you spirit-filled, soul-renewing services
            straight to your screen — real-time, anytime.
          </p>
        </div>

        {/* Live Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            Our Live Services Include
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                Icon: FaCross,
                title: "Sunday Worship Service",
                description:
                  "Spirit-led worship, life-giving preaching, and Holy Spirit encounters.",
              },
              {
                Icon: FaBook,
                title: "Midweek Fellowship & Teaching",
                description:
                  "Dive deeper midweek with teachings, prayer, and connection.",
              },
              {
                Icon: FaMicrophone,
                title: "Special Conferences",
                description:
                  "Watch impactful events with visiting ministers and fresh anointing.",
              },
            ].map(({ Icon, title, description }, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 rounded-2xl border border-gray-100 shadow hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="text-orange-500 text-3xl group-hover:text-orange-600 transition-colors" />
                  <h3 className="text-xl font-semibold text-gray-900 font-serif">
                    {title}
                  </h3>
                </div>
                <p className="text-gray-700 text-base font-sans">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            What You Can Expect
          </h2>
          <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50 p-10 rounded-2xl max-w-5xl mx-auto border border-orange-100 shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "A welcoming live chat to engage with other viewers and share prayer requests",
                "Real-time prayer and response support from our online ministry team",
                "On-demand access to past sermons through our media archive",
                "Compatibility with mobile, desktop, and smart TV platforms",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 text-gray-700 text-lg font-sans"
                >
                  <FaCheckCircle className="text-orange-500 mt-1" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-serif leading-relaxed">
            God’s power knows no distance — join us live and let His presence
            meet you wherever you are.
          </p>
          <Link
            href="/live"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg group"
            aria-label="Watch live now"
          >
            <span>Explore</span>
            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            background:
              "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23F97316'/%3E%3C/svg%3E\") repeat",
          }}
        />
      </div>
    </section>
  );
};

export default WatchLive;
