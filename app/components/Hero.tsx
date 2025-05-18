import { FaChurch, FaHandsHelping, FaBible } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 text-gray-900 py-20 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Church Icon + Name */}
        <div className="flex flex-col items-center gap-4">
          <FaChurch className="text-orange-600 text-6xl drop-shadow-md" />
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Ambassadors of Christ Fellowship Church
          </h1>
          <p className="max-w-2xl text-base md:text-lg mt-2 text-orange-800/90">
            A Christ-centered community growing in faith, love, and service.
            Join us as we worship, connect, and transform lives.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-6">
          <Link href="/events/sunday-service">
            <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 transition-colors duration-300 rounded-xl font-semibold text-lg text-white shadow-lg">
              Join Us This Sunday
            </button>
          </Link>
        </div>

        {/* Iconic Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 text-orange-900">
          <div className="flex flex-col items-center space-y-3">
            <FaBible className="text-3xl text-orange-500" />
            <h3 className="text-lg font-semibold">
              Biblical Teaching
            </h3>
            <p className="text-sm text-center max-w-xs">
              Rooted in Scripture, guided by truth, transforming hearts through the Word of God.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <FaHandsHelping className="text-3xl text-orange-500" />
            <h3 className="text-lg font-semibold">
              Community Support
            </h3>
            <p className="text-sm text-center max-w-xs">
              Embracing one another with kindness and care in every season of life.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-3">
            <FaChurch className="text-3xl text-orange-500" />
            <h3 className="text-lg font-semibold">
              Spirit-Filled Worship
            </h3>
            <p className="text-sm text-center max-w-xs">
              Encounter the presence of God through heartfelt praise and prayer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
