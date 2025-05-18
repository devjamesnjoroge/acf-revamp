import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChurch } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const email = "info@ambassadorsofchristfellowship.com";
  const displayedEmail =
    email.length > 28 ? email.slice(0, 10) + "..." + email.slice(-10) : email;

  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-10">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
          {/* Church Info */}
          <address className="not-italic flex flex-col items-center md:items-start text-center md:text-left space-y-3">
            <div className="flex items-center gap-3 mb-2">
              <FaChurch className="text-2xl text-orange-500" />
              <h3 className="text-xl font-bold text-white">
                Ambassadors of Christ
              </h3>
            </div>
            <p className="flex items-center gap-2 text-sm">
              <FaMapMarkerAlt className="text-orange-400" />
              Naivasha, P.O BOX 361-20117
            </p>
            <a
              href="tel:+0703656466"
              className="flex items-center gap-2 text-sm hover:text-orange-400 transition-colors"
            >
              <FaPhone className="text-orange-400" />
              (070) 365-6466
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-sm hover:text-orange-400 transition-colors"
            >
              <FaEnvelope className="text-orange-400" />
              {displayedEmail}
            </a>
          </address>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3 text-sm">
                {[
                  ["Sermons", "/sermons"],
                  ["Youth Hub", "/youth"],
                  ["Events", "/events"],
                  ["Give", "/give"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="hover:text-orange-400 transition-colors duration-300"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Service Times */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-4">Service Times</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="block font-medium text-orange-400">
                  Sunday
                </span>
                <time dateTime="2025-01-01T10:00">10:00 AM</time>
              </div>
              <div>
                <span className="block font-medium text-orange-400">
                  Wednesday
                </span>
                <time dateTime="2025-01-01T19:00">7:00 PM</time>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ambassadors of Christ Fellowship Church
          <span className="mx-2">•</span>
          All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
