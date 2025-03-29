import Image from "next/image";

const LeadersPage = () => {
  const leaders = [
    {
      id: 1,
      name: "Mwaura Kang'ethe",
      role: "Nairobi Parish",
      image: "/b1.jpg",
    },
    {
      id: 2,
      name: "Joseph Mwangi",
      role: "Naivasha Parish",
      image: "/b2.jpg",
    },
    {
      id: 3,
      name: "Paul Mohair Njoroge",
      role: "Gakoe Parish",
      image: "/b3.jpg",
    },
    {
      id: 5,
      name: "Josphat Wamiti",
      role: "Maella Parish",
      image: "/b5.jpg",
    },
    {
      id: 6,
      name: "John Mathenge",
      role: "Bahati Parish",
      image: "/b6.jpg",
    },
    {
      id: 7,
      name: "Samuel Roro",
      role: "Central Parish",
      image: "/b7.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Church Leadership
        </h1>

        {/* Bishop Section */}
        <div className="mb-16 relative group">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1 shadow-xl">
            <div className="bg-white rounded-xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
                <Image
                  src="/b4.jpg"
                  alt="Bishop David Mwangi"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Bishop Joseph Mwaura
                </h2>
                <p className="text-xl text-orange-600 font-semibold mb-4">
                  Bishop
                </p>
                <p className="text-gray-600 max-w-prose">
                  Leading our diocese with wisdom and grace, Bishop Mwaura
                  provides spiritual guidance and oversight to our church and
                  the broader community.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -top-4 -right-4 bg-gold-500 text-white px-6 py-2 rounded-full shadow-md transform rotate-12">
            Presiding Bishop
          </div>
        </div>

        {/* Pastors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders
            .filter((leader) => leader.role !== "Diocesan Bishop")
            .map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {leader.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{leader.role}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeadersPage;
