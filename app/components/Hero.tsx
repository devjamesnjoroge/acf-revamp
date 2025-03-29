import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-[70vh]">
        <video
          src="/hero.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4 lg:max-w-[85%]">
            Ambassadors of Christ Fellowship Church
          </h1>
          <Link href="/">
            <button className="mt-6 px-5 py-2 bg-white text-[#000000] rounded-lg text-lg font-medium hover:bg-orange-600 hover:text-white transition-colors duration-300">
              Connect
            </button>
          </Link>
        </div>
      </div>
      {/* Additional content can go here */}
    </div>
  );
};

export default Hero;
