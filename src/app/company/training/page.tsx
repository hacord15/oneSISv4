import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";

const programs = [
  {
    title: "Functional Training",
    description:
      "Cleaning best practices, PSARA security training (198 hrs vs 160 hrs required), first aid, fire prevention, emergency response, and workplace safety.",
  },
  {
    title: "Technical Training",
    description:
      "Tools & equipment maintenance, in-house skill development for repair and maintenance operations.",
  },
  {
    title: "Soft Skills Training",
    description:
      "Communication, gesture & posture, POSH compliance, ethics, personal hygiene, grooming standards.",
  },
];

const platformFeatures = [
  "Real-time monitoring",
  "Visual proof of training",
  "Employee coverage tracking",
];

export const metadata = {
  title: "Training & Development | OneSIS",
  description:
    "Functional, technical, and soft-skills training programs, powered by the proprietary M-Trainer digital platform.",
};

export default function TrainingPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Company"
          heading={
            <>
              Training &amp; <span className="accent">Development</span>
            </>
          }
        />

        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {programs.map((p) => (
                <div key={p.title} className="px-6 py-10 sm:px-8">
                  <h3 className="text-[16px] font-semibold text-[var(--color-ink)]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-body)]">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* M-Trainer platform highlight */}
        <section className="bg-[var(--color-cream)] py-20">
          <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Eyebrow>Digital Platform</Eyebrow>
              <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
                <span className="accent">M-Trainer</span>, Built for the Field
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-[var(--color-body)]">
                A mobile training platform for on-site staff, ensuring
                consistent skill upgradation and verifiable compliance across
                every OneSIS deployment.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-1 divide-y divide-[var(--color-border)] border border-[var(--color-border)] bg-white">
                {platformFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-4 px-6 py-5 text-[14px] font-medium text-[var(--color-ink)]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}