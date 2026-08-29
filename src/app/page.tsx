import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import StatsBar from "@/components/Home/StatsBar";
import TrustIntro from "@/components/Home/TrustIntro";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ServicesGrid from "@/components/Home/ServicesGrid";
import BrandsShowcase from "@/components/Home/BrandsShowcase";
import CarKeyBrands from "@/components/Home/CarKeyBrands";
import SmartKeyProgramming from "@/components/Home/SmartKeyProgramming";
import PrecisionKeyCutting from "@/components/Home/PrecisionKeyCutting";
import HowItWorks from "@/components/Home/HowItWorks";
import BulletSection from "@/components/Home/BulletSection";
import AreasCovered from "@/components/Home/AreasCovered";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/Home/FAQ";
import EmergencyCTA from "@/components/Home/EmergencyCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Key Making Dubai | Locksmith Services in Dubai",
  description:
    "Trusted locksmith and key making services in Dubai. Car, house, apartment, office, and safe lock services, available 24/7.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <CarKeyBrands />
      <SmartKeyProgramming />
      <PrecisionKeyCutting />
      <BrandsShowcase />
      <HowItWorks />
      <BulletSection
        eyebrow="Key & Lock Types"
        title="Key Cutting & Locksmith Services for Every Vehicle and Lock Type"
        bullets={[
          "Sedans, SUVs, and crossovers",
          "Luxury: BMW, Mercedes-Benz, Audi, Porsche, Jaguar, Land Rover",
          "Apartment and house door locks",
          "Office and commercial locks",
          "Safes and padlocks",
          "Remote and transponder car keys",
        ]}
      />
      <StatsBar />
      <TrustIntro />
      <WhyChooseUs />
      <ServicesGrid />
      <BulletSection
        eyebrow="Lock & Key Care Tips"
        title="Keep Your Locks and Keys Working Smoothly"
        reverse
        bullets={[
          "Lubricate stiff or sticky locks regularly",
          "Avoid forcing a key that doesn't turn easily",
          "Keep spare keys cut before you actually need them",
          "Have car key batteries checked if the remote feels weak",
          "Schedule a lock health check every 6 months",
        ]}
      />
      <BulletSection
        eyebrow="Warning Signs"
        title="Do You Need a Locksmith in Dubai?"
        bullets={[
          "Key sticks or is difficult to turn in the lock",
          "Lock feels loose or wobbly on the door",
          "Car remote no longer unlocks the vehicle",
          "Key has snapped or is visibly worn",
          "You've lost a key or moved into a new property",
        ]}
      />
      <AreasCovered />
      <Testimonials />
      <FAQ />
      <EmergencyCTA />
    </>
  );
}
