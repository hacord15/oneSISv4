import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CategoryCard } from "@/components/ui/CategoryCard";

const process = [
  { step: "01", title: "Concept design & space planning" },
  { step: "02", title: "Design & Build (D&B) execution" },
  { step: "03", title: "Furniture, fixtures & fit-out" },
  { step: "04", title: "IT & AV infrastructure integration" },
  { step: "05", title: "Civil upgrades & retrofitting" },
  { step: "06", title: "Handover, snagging & FM transition" },
];

const categories = [
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
    title: "Retrofitting",
    items: [
      "MEP System Replacement",
      "BMS & EMS Integration",
      "Pipeline Upgrades",
      "RECD Installation",
      "Equipment Commissioning",
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
];

const stats = [
  { value: "320K+", label: "Permanent Staff" },
  { value: "630+", label: "Districts" },
  { value: "368", label: "Offices" },
];

export const metadata = {
  title: "Corporate Interior Solutions | OneSIS Solutions",
  description:
    "Design-led, project-managed fitout solutions from concept to handover for corporate spaces — Design & Build, Retrofitting, and PMC under one accountable partner.",
};

export default function CorporateInteriorSolutionsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Solutions"
          heading={
            <>
              Corporate <span className="accent">Interior Solutions</span>
            </>
          }
          description="Design-led, project-managed fitout solutions from concept to handover for corporate spaces."
          backgroundImage="https://picsum.photos/seed/onesis-cis-hero/1800/900"
        />

        {/* Fitout process */}
        <section className="py-20">
          <Container>
            <Eyebrow>Our Fitout Process</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
              From Blank Floor Plate to{" "}
              <span className="accent">Fully Operational</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
              {process.map((p) => (
                <div key={p.step} className="px-6 py-10 sm:px-8">
                  <span className="font-display text-4xl text-[var(--color-muted-2)]">
                    {p.step}
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold leading-snug text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                </div>
              ))}
            </div>
          </Container>
        </section>

     

        {/* Service categories */}
        <section className="bg-[var(--color-cream)] py-20">
          <Container>
            <Eyebrow>Service Categories</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
              Three Disciplines,{" "}
              <span className="accent">One Delivery Team</span>
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <CategoryCard key={cat.title} title={cat.title} items={cat.items} />
              ))}
            </div>
          </Container>
        </section>

        {/* Stats */}
        <section className="border-y border-[var(--color-border)] bg-white">
          <Container>
            <div className="grid grid-cols-3 divide-x divide-[var(--color-border)]">
              {stats.map((stat) => (
                <div key={stat.label} className="px-6 py-10 text-center sm:px-8">
                  <div className="font-display text-3xl text-[var(--color-brand)] sm:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-muted)]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="bg-[var(--color-cream)] py-16">
          <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">
              See a Design &amp; Build engagement in action, or talk to our
              fitout team about your space.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/solutions/case-studies"
                className="inline-flex items-center gap-2 border border-[var(--color-ink)]/25 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
              >
                View Case Studies
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[var(--color-brand)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-brand-dark)]"
              >
                Talk to Our Team
              </Link>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}