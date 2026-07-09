import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CategoryCard } from "@/components/ui/CategoryCard";

const serviceAreas = [
  {
    title: "Common Area Management",
    lead: "Maintenance of",
    items: [
      "Lobbies",
      "Corridors",
      "Elevators",
      "Parking Areas",
      "Facades",
      "Landscaped Spaces",
    ],
  },
  {
    title: "HVAC & MEP Operations",
    items: [
      "Preventive Maintenance",
      "Building Management Systems (BMS)",
      "HVAC Operations",
      "Energy Optimization",
      "Inventory Management",
    ],
  },
  {
    title: "Security & Access Control",
    items: [
      "Visitor Management",
      "Parking Control",
      "Integrated Surveillance",
      "Perimeter Security",
    ],
  },
  {
    title: "Statutory Compliance",
    items: [
      "Government Liaison",
      "NOCs",
      "Labour Compliance",
      "Environmental Compliance",
    ],
  },
  {
    title: "Housekeeping & Sanitation",
    items: [
      "High-frequency Cleaning",
      "Waste Disposal",
      "Plumbing",
      "Carpentry",
      "Minor Civil Repairs",
    ],
  },
  {
    title: "Tenant & Resident Services",
    items: [
      "Business Centre Management",
      "Sports Facilities",
      "Clubhouse Operations",
      "Transport Coordination",
      "Helpdesk Support",
    ],
  },
  {
    title: "Emergency & Safety",
    items: [
      "Disaster Preparedness",
      "Fire Safety Audits",
      "BCP Compliance",
      "Emergency Response Teams",
    ],
  },
  {
    title: "Reporting & Reviews",
    items: [
      "Monthly Dashboards",
      "Energy Reports",
      "Compliance Tracking",
      "Stakeholder Review Meetings",
    ],
  },
];

export const metadata = {
  title: "Property Management | OneSIS Solutions",
  description:
    "Comprehensive property management for residential, commercial, mixed-use, and institutional developments — backed by technology, governance, and the SIS Group.",
};

export default function PropertyManagementPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Solutions"
          heading={
            <>
              End-to-End Property Operations.{" "}
              <span className="accent">One Trusted Partner.</span>
            </>
          }
          description="OneSIS provides comprehensive property management solutions for residential, commercial, mixed-use, and institutional developments. From day-to-day operations to long-term asset optimization, our teams deliver seamless services backed by technology, governance, and the expertise of the SIS Group."
        />

        <section className="py-20">
          <Container>
            <Eyebrow>Service Areas</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
              Eight Areas of <span className="accent">Ownership</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceAreas.map((area) => (
                <CategoryCard
                  key={area.title}
                  title={area.title}
                  lead={area.lead}
                  items={area.items}
                />
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}