import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CategoryCard } from "@/components/ui/CategoryCard";

const specializedServices = [
  {
    title: "CapEx & Civil Upgradation",
    items: [
      "Structural Strengthening",
      "Waterproofing",
      "Road & Pavement Works",
      "Boundary Walls",
      "Facade Repairs",
      "Landscape Development",
    ],
  },
  {
    title: "Retrofitting Services",
    items: [
      "MEP System Replacement",
      "BMS & EMS Integration",
      "Pipeline Upgrades",
      "RECD Installation",
      "Equipment Commissioning",
    ],
  },
  {
    title: "Smart Maintenance",
    items: [
      "Robotic HVAC Duct Cleaning",
      "Thermography",
      "Ultrasonic Leak Detection",
      "Seepage Scanning",
      "Laser Rust Removal",
    ],
  },
  {
    title: "Project Management Consultancy (PMC)",
    items: [
      "Project Planning",
      "Cost Estimation",
      "Construction Supervision",
      "QA/QC",
      "Risk Management",
      "Final Handover",
    ],
  },
  {
    title: "Design & Build",
    items: [
      "Architectural Design",
      "Interior Design",
      "MEP Engineering",
      "Procurement",
      "Fit-Out Execution",
      "Post-Completion Support",
    ],
  },
  {
    title: "Renovation & Refurbishment",
    items: [
      "Lobby Modernization",
      "Clubhouse Renovation",
      "Commercial Interior Upgrades",
      "HVAC Ducting",
      "Epoxy Flooring",
      "Industrial Painting",
    ],
  },
];

export const metadata = {
  title: "Specialized Services | OneSIS Solutions",
  description:
    "Specialized engineering, refurbishment, and infrastructure services that extend beyond traditional facility management.",
};

export default function SpecializedServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Solutions"
          heading={
            <>
              Beyond Maintenance —{" "}
              <span className="accent">Specialized Engineering Solutions</span>
            </>
          }
          description="OneSIS delivers specialized engineering, refurbishment, and infrastructure services that extend beyond traditional facility management. Our multidisciplinary teams support clients in upgrading, modernizing, and future-proofing their built assets through technically advanced solutions."
        />

        <section className="py-20">
          <Container>
            <Eyebrow>Specialized Services</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
              Six Disciplines of{" "}
              <span className="accent">Technical Depth</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {specializedServices.map((service) => (
                <CategoryCard
                  key={service.title}
                  title={service.title}
                  items={service.items}
                />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[var(--color-cream)] py-16">
          <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">
              See these capabilities at work across real client engagements.
            </p>
            <Link
              href="/solutions/case-studies"
              className="inline-flex items-center gap-2 bg-[var(--color-brand)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              View Case Studies
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}