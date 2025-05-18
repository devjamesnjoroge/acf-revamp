"use client";

import {
  FaArrowRight,
  FaBible,
  FaMusic,
  FaUsers,
  FaChild,
  FaCalendarAlt,
} from "react-icons/fa";
import Link from "next/link";

const AnnualConvention = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header — The trumpet call */}
        <header className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Welcome to ACF Annual Convention
          </h1>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-orange-400"></div>
        </header>

        {/* Introduction — The warm embrace */}
        <p className="mx-auto mb-12 max-w-3xl text-center font-sans text-lg leading-relaxed text-gray-700">
          Join us for a soul-stirring journey of worship, fellowship, and
          renewal at the 2025 ACF Annual Convention! This cherished gathering
          unites hearts in celebration of God’s faithfulness, deepens our
          spiritual roots, and ignites a collective passion to live out His
          purpose. Whether a familiar face or new in the flock, prepare to be
          moved by stirring worship, powerful preaching, and vibrant community.
        </p>

        {/* Event Details — The crystal clear beacon */}
        <section className="mb-20 max-w-2xl mx-auto text-center">
          <h2 className="mb-10 font-serif text-3xl font-bold text-gray-900">
            Event Details
          </h2>
          <article className="group relative rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-orange-50 p-10 shadow-md transition duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-400">
            <div className="mb-6 flex flex-col items-center">
              <div className="mb-4 rounded-full bg-orange-50 p-4 transition-colors duration-300 group-hover:bg-gray-100">
                <FaCalendarAlt className="text-orange-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-orange-500 text-3xl" />
              </div>
              <h3 className="font-serif text-center text-2xl font-semibold text-gray-900 tracking-tight">
                2025 ACF Annual Convention
              </h3>
            </div>
            <p className="mb-2 font-sans text-lg leading-relaxed text-gray-800">
              <strong>Date:</strong> [TBD - Please provide the date]
            </p>
            <p className="font-sans text-lg leading-relaxed text-gray-800">
              <strong>Location:</strong> Nyamathi Ground
            </p>
          </article>
        </section>

        {/* Divider — The pause before the feast */}
        <div className="mx-auto mb-12 h-1 w-32 rounded-full bg-orange-400"></div>

        {/* What to Expect — The treasure map */}
        <section className="mb-20">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold text-gray-900">
            What to Expect
          </h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FaBible,
                title: "Inspiring Messages",
                desc: "Hear dynamic speakers weaving biblical insights with practical wisdom to ignite your spiritual journey.",
              },
              {
                icon: FaMusic,
                title: "Powerful Worship",
                desc: "Lift your voice alongside our worship team and guest artists, exaltation in perfect harmony.",
              },
              {
                icon: FaUsers,
                title: "Breakout Sessions",
                desc: "Dive deep into workshops on prayer, leadership, family, and outreach—crafted for every stage of faith.",
              },
              {
                icon: FaChild,
                title: "Youth & Children’s Programs",
                desc: "Engaging, faith-growing activities tailored for kids and teens to nurture the next generation.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <article
                key={title}
                className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-orange-50 p-10 shadow-md transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-orange-400 hover:shadow-2xl"
              >
                <div className="mb-6 flex flex-col items-center">
                  <div className="mb-4 rounded-full bg-orange-50 p-4 transition-colors duration-300 group-hover:bg-gray-100">
                    <Icon className="text-orange-400 text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:text-orange-500" />
                  </div>
                  <h3 className="font-serif text-center text-2xl font-semibold text-gray-900 tracking-tight">
                    {title}
                  </h3>
                </div>
                <p className="font-sans text-center text-lg leading-relaxed text-gray-800">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action — The trumpet’s final call */}
        <div className="text-center">
          <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-orange-400"></div>
          <Link
            href="/annual-convention"
            aria-label="Join the ACF Annual Convention"
            className="group inline-flex items-center gap-3 rounded-full bg-orange-400 px-10 py-5 text-lg font-medium text-white shadow-lg transition duration-300 hover:bg-orange-500 hover:shadow-xl animate-pulse hover:animate-none"
          >
            <span>Join Us</span>
            <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Subtle Background Texture — the whisper of grace */}
        <div
          className="absolute inset-0 pointer-events-none opacity-3"
          style={{
            background:
              'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23FED7AA"/%3E%3C/svg%3E\') repeat',
          }}
        />
      </div>
    </section>
  );
};

export default AnnualConvention;
