"use client";

import {
  FaArrowRight,
  FaHandsHelping,
  FaTv,
  FaBuilding,
  FaMobileAlt,
  FaCreditCard,
  FaChurch,
  FaHeart,
} from "react-icons/fa";
import Link from "next/link";

const Give = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight font-serif">
            Partner with Us in Kingdom Impact
          </h1>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-700 mb-6 font-sans leading-relaxed">
            Giving is more than a financial transaction — it&apos;s a spiritual act
            of worship, obedience, and love. At ACF, we are grateful for the
            generosity of faithful individuals like you, whose giving enables us
            to carry out the vision God has entrusted to us.
          </p>
          <p className="text-lg text-gray-700 font-sans leading-relaxed">
            We give because God first gave to us — His love, His Son, His grace,
            and His provision. Your tithes and offerings directly support the
            work of the ministry, helping us fulfill our mission to reach the
            lost, disciple believers, and serve the community.
          </p>
        </div>

        {/* What Your Giving Supports */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            What Your Giving Supports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaHandsHelping className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Community Outreach
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Food drives, education programs, youth mentorship.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaTv className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Media & Technology
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Live streaming, online platforms, and digital evangelism.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaBuilding className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Facility Development
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Construction, renovation, and equipment for our physical spaces.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-32 h-1 bg-orange-500 mx-auto mb-12 rounded-full"></div>

        {/* Ways to Give */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10 font-serif">
            Ways to Give
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaMobileAlt className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Mobile Giving
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Send your gift via Mpesa/Paybill or mobile banking.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaCreditCard className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Online Giving
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Use our secure online platform (Visa, Mastercard, bank
                transfer).
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaChurch className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  In-Person Giving
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                During services or through the church office.
              </p>
            </div>
            <div className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-102 hover:border-orange-500 bg-gradient-to-br from-white to-orange-100">
              <div className="flex flex-col items-center mb-6">
                <div className="bg-orange-100 p-4 rounded-full mb-4 group-hover:bg-orange-50 transition-colors duration-300">
                  <FaHeart className="text-orange-500 text-3xl group-hover:text-orange-600 group-hover:scale-110 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 font-serif tracking-tight text-center">
                  Designated Giving
                </h3>
              </div>
              <p className="text-gray-800 text-lg leading-relaxed font-sans text-center">
                Specify if your gift is for a special project or mission.
              </p>
            </div>
          </div>
        </div>

        {/* Bible Verse */}
        <div className="mb-20 max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg bg-gradient-to-br from-white to-orange-100 text-center">
            <p className="text-xl text-gray-800 font-serif leading-relaxed italic">
              “Honor the Lord with your wealth, with the firstfruits of all your
              crops; then your barns will be filled to overflowing…”
            </p>
            <p className="text-lg text-gray-700 font-sans mt-4">
              — Proverbs 3:9-10
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="w-16 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-serif leading-relaxed">
            Your giving makes an eternal difference. Thank you for being a
            generous partner in God&apos;s work.
          </p>
          <Link
            href="/give"
            className="inline-flex items-center gap-3 px-10 py-5 text-lg font-medium text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl group animate-pulse hover:animate-none"
            aria-label="Give now"
          >
            <span>Give Now</span>
            <FaArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Subtle Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            background:
              'url(\'data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="1" fill="%23FDBA74"/%3E%3C/svg%3E\') repeat',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Give;
