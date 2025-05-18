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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-indigo-900 mb-16 drop-shadow-md">
          Church Leadership
        </h1>

        {/* Bishop Section */}
        <div className="mb-20 relative group max-w-4xl mx-auto rounded-3xl bg-white bg-opacity-30 backdrop-blur-md border border-indigo-200 shadow-xl p-8 flex flex-col md:flex-row items-center gap-10 hover:shadow-2xl transition-shadow duration-500">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-8 border-gradient-to-br from-orange-400 to-indigo-600 shadow-lg transform group-hover:scale-105 transition-transform duration-500">
            <Image
              src="/b4.jpg"
              alt="Bishop Joseph Mwaura"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent rounded-full" />
          </div>

          <div className="text-center md:text-left max-w-xl">
            <h2 className="text-4xl font-extrabold text-indigo-900 mb-2 drop-shadow-sm">
              Bishop Joseph Mwaura
            </h2>
            <p className="text-xl font-semibold text-orange-600 mb-6 tracking-wide">
              Presiding Bishop
            </p>
            <p className="text-indigo-800/90 text-lg leading-relaxed">
              Leading our diocese with wisdom and grace, Bishop Mwaura provides
              spiritual guidance and oversight to our church and the broader
              community.
            </p>
          </div>

          <div className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-400 via-indigo-600 to-purple-700 text-white px-8 py-3 rounded-full shadow-lg transform rotate-12 font-semibold tracking-widest drop-shadow-lg select-none pointer-events-none">
            ✨ Presiding Bishop ✨
          </div>
        </div>

        {/* Pastors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              className="relative rounded-2xl bg-white bg-opacity-20 backdrop-blur-sm border border-indigo-100 shadow-md hover:shadow-xl transition-shadow duration-400 cursor-pointer group overflow-hidden"
            >
              <div className="relative w-full h-72 rounded-t-2xl overflow-hidden">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-indigo-900 mb-1 drop-shadow-sm">
                  {leader.name}
                </h3>
                <p className="text-orange-600 font-medium tracking-wide">
                  {leader.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadersPage;
