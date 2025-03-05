import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaChurch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Church Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <FaChurch className="text-2xl" />
              <h3 className="text-xl font-bold">Ambassadors of Christ</h3>
            </div>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> Naivasha, P.O BOX 361-20117
            </p>
            <p className="flex items-center gap-2">
              <FaPhone /> (070) 365-6466
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@ambassadorsofchristfellowship
            </p>
          </div>

          {/* Quick Links with Vertical Line */}
          <div className="relative flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/sermons" className="hover:text-gray-300 transition-colors">Sermons</a></li>
              <li><a href="/youth" className="hover:text-gray-300 transition-colors">Youth Hub</a></li>
              <li><a href="/events" className="hover:text-gray-300 transition-colors">Events</a></li>
              <li><a href="/give" className="hover:text-gray-300 transition-colors">Give</a></li>
            </ul>
            {/* <div className="hidden md:block absolute left-[-2rem] lg:left-[-3rem] top-0 bottom-0 w-px bg-gray-500"></div> */}
          </div>

          {/* Service Times */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Service Times</h3>
            <p>Sunday: 10:00 AM</p>
            <p>Wednesday: 7:00 PM</p>
          </div>
        </div>

        {/* Horizontal Line and Copyright */}
        <div className="mt-10">
          <hr className="border-gray-500 mb-6" />
          <p className="text-center text-sm">
            © 2025 Ambassadors of Christ Fellowship Church
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;