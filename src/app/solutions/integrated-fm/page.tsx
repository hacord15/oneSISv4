import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Stock placeholders (free Unsplash License) — swap for real OneSIS site
// photography before launch. Just replace the `image` strings below.
const serviceCategories = [
  {
    title: "Security Services",
    image:
      "https://images.unsplash.com/photo-1643123182527-3bd30840e7ed?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "CCTV security camera mounted to a building ceiling",
    items: [
      "Manned Guarding",
      "Electronic Surveillance",
      "Monitoring & Control",
      "Access Management",
      "Emergency Response Teams",
    ],
  },
  {
    title: "Housekeeping & Soft Services",
    image:
      "https://images.unsplash.com/photo-1758448721205-8465cebc26af?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Spotless modern building lobby and corridor",
    items: [
      "Mechanized Cleaning",
      "Waste Management",
      "Pest Control",
      "Landscaping & Horticulture",
      "Janitorial Services",
    ],
  },
  {
    title: "Technical / MEP Services",
    image:
      "https://images.unsplash.com/photo-1771902985060-6133bb4b2eb6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rooftop HVAC units on a commercial building",
    items: [
      "Utility Operations & Maintenance",
      "Preventive & Breakdown Maintenance",
      "AMC Management",
      "Energy Audits",
      "Mechanical Equipment O&M",
    ],
  },
  {
    title: "Administration Support",
    image:
      "https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern reception desk with elevator bank",
    items: [
      "Reception Services",
      "Office Administration",
      "Mailroom Management",
      "Catering Support",
      "Production & Workforce Support",
    ],
  },
  {
    title: "EHS & Compliance",
    image:
      "https://images.unsplash.com/photo-1595306394931-b35768661692?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fire extinguisher mounted on a wall",
    items: [
      "Safety Officers Deployment",
      "Fire Safety Management",
      "First Aid & Emergency Response",
      "PPE Compliance",
      "Environmental, Health & Safety Audits",
    ],
  },
  {
    title: "Technology & Analytics",
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Data reporting dashboard on a screen",
    items: [
      "One Point App",
      "iOPS Platform",
      "FACTECH Integration",
      "E-Checklists",
      "Attendance Dashboards",
      "CMMS & CRM Reporting",
    ],
  },
];

const platforms = [
  {
    name: "One Point App",
    description:
      "A centralized platform providing real-time monitoring of service delivery, task management, inspections, issue tracking, and site-level reporting.",
  },
  {
    name: "iOPS Platform",
    description:
      "Operational intelligence platform for Tier-II staff performance monitoring, workforce productivity tracking, and KPI management.",
  },
  {
    name: "FACTECH / CMMS",
    description:
      "Cloud-based computerized maintenance management system enabling preventive maintenance, asset lifecycle management, work orders, complaint management, and equipment tracking.",
  },
  {
    name: "E-Attendance",
    description:
      "Biometric and Aadhaar-enabled attendance with bank account verification for seamless onboarding and workforce management.",
  },
];

const governance = [
  {
    tier: "01",
    title: "Site / Regional Team",
    image:
      "https://images.unsplash.com/photo-1758518727653-5650fd9e146c?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Site manager discussing a checklist on a clipboard",
    items: [
      "Daily operational supervision",
      "Weekly performance reviews",
      "Escalation management",
      "SLA monitoring",
    ],
  },
  {
    tier: "02",
    title: "Account Management Lead",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Two professionals shaking hands in an office",
    items: [
      "Monthly business reviews",
      "Client coordination",
      "Issue resolution",
      "Performance reporting",
    ],
  },
  {
    tier: "03",
    title: "Executive Sponsor",
    image:
      "https://images.unsplash.com/photo-1758518729685-f88df7890776?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Executives in a business meeting reviewing reports",
    items: [
      "Quarterly Business Reviews (QBRs)",
      "Long-term strategic planning",
      "Executive governance",
      "Business transformation initiatives",
    ],
  },
  {
    tier: "04",
    title: "Bi-Annual Partnership Review",
    image:
      "https://images.unsplash.com/photo-1758873271321-4d6b3526ef42?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Team collaborating around a table with documents",
    items: [
      "Leadership workshops",
      "Portfolio planning",
      "Innovation roadmap",
      "Continuous improvement reviews",
    ],
  },
];

export const metadata = {
  title: "Integrated Facility Management | OneSIS Solutions",
  description:
    "End-to-end Integrated Facility Management services bringing together people, processes, technology, and governance under a single service agreement.",
};

export default function IntegratedFMPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Solutions"
          heading={
            <>
              Full-Suite Facility Management,{" "}
              <span className="accent">Delivered as One</span>
            </>
          }
          description="OneSIS delivers end-to-end Integrated Facility Management (IFM) services that bring together people, processes, technology, and governance under a single service agreement. Our integrated delivery model ensures consistent service quality, SLA-driven performance, regulatory compliance, and operational excellence across every facility."
        />

        {/* Service categories */}
        <section className="py-20">
          <Container>
            <Eyebrow>Service Categories</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
              Six Disciplines, <span className="accent">One Agreement</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {serviceCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={cat.image}
                      alt={cat.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-[16px] font-semibold text-[var(--color-ink)]">
                      {cat.title}
                    </h3>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {cat.items.map((item) => (
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

        {/* Technology platform */}
        <section className="bg-[var(--color-cream)] py-20">
          <Container>
            <Eyebrow>Technology Platform</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
              Real-Time <span className="accent">Operational Intelligence</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 divide-y divide-[var(--color-border)] border border-[var(--color-border)] bg-white sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              {platforms.map((p) => (
                <div key={p.name} className="p-8">
                  <h3 className="text-[16px] font-semibold text-[var(--color-ink)]">
                    {p.name}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[var(--color-body)]">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Governance model */}
        <section className="py-20">
          <Container>
            <Eyebrow>Governance Model</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
              Accountability at{" "}
              <span className="accent">Every Level</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
              {governance.map((g) => (
                <div key={g.tier} className="group overflow-hidden">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={g.image}
                      alt={g.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="px-6 py-10 sm:px-8">
                    <span className="font-display text-4xl text-[var(--color-muted-2)]">
                      {g.tier}
                    </span>
                    <h3 className="mt-4 text-[15px] font-semibold text-[var(--color-ink)]">
                      {g.title}
                    </h3>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {g.items.map((item) => (
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