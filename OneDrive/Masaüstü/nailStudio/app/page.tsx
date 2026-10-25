import Hero from "@/components/home/Hero";
import CategoryMarquee from "@/components/home/CategoryMarquee";
import SloganBlock from "@/components/home/SloganBlock";
import TriptychStrip from "@/components/home/TriptychStrip";
import CategoryCapsules from "@/components/home/CategoryCapsules";
import FeaturedScalloped from "@/components/home/FeaturedScalloped";
import CircleFavorites from "@/components/home/CircleFavorites";
import ServicesEditorial from "@/components/home/ServicesEditorial";
import MeetArtist from "@/components/home/MeetArtist";
import CustomerLove from "@/components/home/CustomerLove";
import HoursAndLocation from "@/components/home/HoursAndLocation";
import Policies from "@/components/home/Policies";
import InstagramStrip from "@/components/home/InstagramStrip";

export default function Home() {
  return (
    <>
      <Hero />
      <MeetArtist />
      <CategoryMarquee />
      <SloganBlock />
      <TriptychStrip />
      <CategoryCapsules />
      <FeaturedScalloped />
      <CircleFavorites />
      <ServicesEditorial />
      <CustomerLove />
      <HoursAndLocation />
      <Policies />
      <InstagramStrip />
    </>
  );
}
