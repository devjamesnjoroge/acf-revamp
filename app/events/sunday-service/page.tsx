import { FiClock, FiCalendar, FiMapPin } from "react-icons/fi";
import { FaChurch } from "react-icons/fa";

const ServicePage = () => {
  const parishes = [
    { name: "Nyamathi Parish - Head Office", icon: <FaChurch /> },
    { name: "Nairobi Parish", icon: <FiMapPin /> },
    { name: "Central Parish", icon: <FiMapPin /> },
    { name: "Langa Langa Parish", icon: <FiMapPin /> },
    { name: "Bahati Parish", icon: <FiMapPin /> },
    { name: "Maella Parish", icon: <FiMapPin /> },
    { name: "Gakoe Parish", icon: <FiMapPin /> },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-orange-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
            <FaChurch className="inline-block mr-4 text-orange-600" />
            Sunday Services
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Your journey of faith starts here. Join us for uplifting services in
            our churches nationwide.
          </p>
        </div>
      </div>

      {/* Service Times */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-100">
            <FiClock className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold text-black mb-4">
              Sunday School Service
            </h2>
            <p className="text-orange-600 text-xl font-semibold mb-4">
              8:30 AM - 10:00 AM
            </p>
            <p className="text-gray-600">
              Engaging Bible study and fellowship for all ages
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-orange-100">
            <FiClock className="text-4xl text-orange-600 mb-4" />
            <h2 className="text-2xl font-bold text-black mb-4">Main Service</h2>
            <p className="text-orange-600 text-xl font-semibold mb-4">
              10:00 AM - 12:30 PM
            </p>
            <p className="text-gray-600">
              Worship, preaching, and communion service
            </p>
          </div>
        </div>

        {/* Midweek Section */}
        <div className="text-center mb-20">
          <FiCalendar className="text-4xl text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-black mb-4">
            Midweek Fellowship
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our vibrant weekday fellowships scheduled according to member
            agreements. A spiritual refreshment you don't want to miss!
          </p>
        </div>

        {/* Parishes Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-black mb-12">
            Our Parishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parishes.map((parish, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-white hover:bg-orange-50 transition-all border border-orange-100"
              >
                <span className="text-orange-600 text-xl mb-3 block">
                  {parish.icon}
                </span>
                <h3 className="text-lg font-semibold text-black">
                  {parish.name}
                </h3>
                {parish.name.includes("Head Office") && (
                  <span className="text-sm text-orange-600 mt-2 block">
                    Main Administration Center
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
