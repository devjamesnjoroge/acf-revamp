import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import YouthSpotlight from "./components/YouthSpotlight";
import UpcomingEvents from "./components/UpcomingEvents";

export default function Home() {
  return (
    <div>
      <Hero />
      <QuickLinks />
      <YouthSpotlight />
      <UpcomingEvents />
      
    </div>
  );
}