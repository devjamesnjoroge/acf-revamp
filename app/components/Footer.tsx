import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChurch } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* Church Contact Information */}
          <address className="not-italic flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <FaChurch
                className="text-2xl text-orange-500"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold text-white">
                Ambassadors of Christ
              </h3>
            </div>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="flex-shrink-0" aria-hidden="true" />
              <span>Naivasha, P.O BOX 361-20117</span>
            </p>
            <a
              href="tel:+0703656466"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-300"
              aria-label="Call us"
            >
              <FaPhone className="flex-shrink-0" aria-hidden="true" />
              <span>(070) 365-6466</span>
            </a>
            <a
              href="mailto:info@ambassadorsofchristfellowship.com"
              className="flex items-center gap-2 hover:text-orange-400 transition-colors duration-300"
              aria-label="Email us"
            >
              <FaEnvelope className="flex-shrink-0" aria-hidden="true" />
              <span>info@ambassadorsofchristfellowship.com</span>
            </a>
          </address>

          {/* Quick Links */}
          <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {[
                  ["Sermons", "/sermons"],
                  ["Youth Hub", "/youth"],
                  ["Events", "/events"],
                  ["Give", "/give"],
                ].map(([title, href]) => (
                  <li key={title}>
                    <Link
                      href={href}
                      className="hover:text-orange-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-px bg-gray-700 -mr-6" />
          </div>

          {/* Service Times */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Service Times</h3>
            <div className="space-y-3">
              <time
                dateTime="2025-01-01T10:00"
                className="block"
                aria-label="Sunday service time"
              >
                Sunday: 10:00 AM
              </time>
              <time
                dateTime="2025-01-01T19:00"
                className="block"
                aria-label="Wednesday service time"
              >
                Wednesday: 7:00 PM
              </time>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Ambassadors of Christ Fellowship Church
            <span className="mx-2">•</span>
            <span>All rights reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
