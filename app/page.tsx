import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import QuickLinks from "./components/QuickLinks";
import YouthSpotlight from "./components/YouthSpotlight";
import UpcomingEvents from "./components/UpcomingEvents";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <QuickLinks />
      <YouthSpotlight />
      <UpcomingEvents />
      <Footer />
    </div>
  );
}