import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { AnchorStrip } from "@/components/sections/AnchorStrip";
import { About } from "@/components/sections/About";
import { CoreVerticals } from "@/components/sections/CoreVerticals";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { RepairAndInterior } from "@/components/sections/RepairAndInterior";
import { PropertyManagement } from "@/components/sections/PropertyManagement";
import { FourOutcomes } from "@/components/sections/FourOutcomes";
import { Accountability } from "@/components/sections/Accountability";
import { WhereWeOperate } from "@/components/sections/WhereWeOperate";
import { TechPlatforms } from "@/components/sections/TechPlatforms";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AnchorStrip />
        <About />
        <CoreVerticals />
        <StatsStrip />
        <RepairAndInterior />
        <PropertyManagement />
        <FourOutcomes />
        <Accountability />
        <WhereWeOperate />
        <TechPlatforms />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
