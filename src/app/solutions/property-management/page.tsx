import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Stock placeholders (free Unsplash License) – replace with real OneSIS photography
const serviceAreas = [
  {
    title: "Common Area Management",
    lead: "Maintenance of",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern apartment lobby with reception desk",
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
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "HVAC technician inspecting rooftop units",
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
    image:
      "https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Surveillance camera mounted on a building",
    items: [
      "Visitor Management",
      "Parking Control",
      "Integrated Surveillance",
      "Perimeter Security",
    ],
  },
  {
    title: "Statutory Compliance",
    image:
      "https://images.unsplash.com/photo-1595306394931-b35768661692?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Stack of compliance documents and a pen",
    items: [
      "Government Liaison",
      "NOCs",
      "Labour Compliance",
      "Environmental Compliance",
    ],
  },
  {
    title: "Housekeeping & Sanitation",
    image:
      "https://images.unsplash.com/photo-1758448721205-8465cebc26af?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Clean and polished hotel corridor",
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
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Receptionist assisting a visitor",
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
    image:
      "https://images.unsplash.com/photo-1595306394931-b35768661692?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fire extinguisher and safety sign",
    items: [
      "Disaster Preparedness",
      "Fire Safety Audits",
      "BCP Compliance",
      "Emergency Response Teams",
    ],
  },
  {
    title: "Reporting & Reviews",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Business dashboard on a laptop screen",
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
                <div
                  key={area.title}
                  className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={area.image}
                      alt={area.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[16px] font-semibold text-[var(--color-ink)]">
                      {area.title}
                    </h3>
                    {area.lead && (
                      <p className="mt-1 text-sm text-[var(--color-muted)]">
                        {area.lead}
                      </p>
                    )}
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {area.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[13px] text-[var(--color-body)]"
                        >
                          <span className="mt-2 h-px w-3 shrink-0 bg-[var(--color-brand)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}