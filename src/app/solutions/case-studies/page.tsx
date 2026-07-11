import Image from "next/image";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tag } from "@/components/ui/Tag";

// Stock placeholders – replace with real project photography
const caseStudies = [
  {
    name: "DTC Southern Heights",
    location: "Kolkata",
    category: "Property Management",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern commercial building facade",
    description:
      "Structural façade restoration across approximately 98,247 sq. ft. of commercial development, completed with minimal disruption to daily operations while ensuring safety and quality compliance.",
  },
  {
    name: "United Beverages",
    location: "Bangalore",
    category: "Design & Build",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern laboratory interior with workstations",
    description:
      "Complete transformation of an R&D laboratory, including modular furniture installation, acoustic treatments, lacquered glass finishes, and premium interior fit-outs.",
  },
  {
    name: "Elite Garden Vista",
    location: "Kolkata",
    category: "Property Management",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "High-rise residential towers under restoration",
    description:
      "High-rise residential façade restoration involving 22 residential towers. Scope included structural analysis, repair works, and colour consistency improvements.",
  },
  {
    name: "Prozone Palms",
    location: "Nagpur",
    category: "Specialized Civil",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Parking garage with new flooring",
    description:
      "Execution of phased parking facility upgrades, high-performance flooring systems, waterproofing treatments, navigation marking, and zero-downtime implementation.",
  },
  {
    name: "Digit Insurance",
    location: "Pan India",
    category: "IFM / Technical",
    image:
      "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "HVAC system and ductwork",
    description:
      "Comprehensive HVAC audits and CAMC implementation, including insulation upgrades, VFD reconfiguration, valve replacement, and energy efficiency improvements across multiple locations.",
  },
  {
    name: "Urban Square Mall",
    category: "PMC",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern mall interior with escalators",
    description:
      "Managed common area renovations, washroom refurbishment, lobby improvements, multi-contractor coordination, quality assurance, and successful project handover.",
  },
];

const additionalProject = {
  name: "Paharpur Cooling Towers",
  category: "Specialized Technical Services",
  image:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
  imageAlt: "Industrial cooling towers",
  items: ["RECD Installation", "CPCB-II Compliance", "Electrical Safety Upgrades"],
};

export const metadata = {
  title: "Case Studies | OneSIS Solutions",
  description:
    "Featured project case studies across property management, design & build, specialized civil, IFM, and PMC engagements.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Solutions"
          heading={
            <>
              Featured Project <span className="accent">Case Studies</span>
            </>
          }
          description="A sample of how OneSIS's integrated delivery model plays out on real sites — across property management, design & build, specialized civil, and technical engagements."
        />

        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {caseStudies.map((project) => (
                <div
                  key={project.name}
                  className="group overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-7">
                    <Tag className="w-fit px-2.5 py-1 text-[10px]">
                      {project.category}
                    </Tag>
                    <h3 className="mt-4 font-display text-xl text-[var(--color-ink)]">
                      {project.name}
                    </h3>
                    {project.location && (
                      <div className="mt-1 text-[11.5px] font-semibold uppercase tracking-[0.06em] text-[var(--color-muted)]">
                        {project.location}
                      </div>
                    )}
                    <p className="mt-3 text-[13.5px] leading-relaxed text-[var(--color-body)]">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Additional featured project */}
        <section className="bg-[var(--color-cream)] py-20">
          <Container>
            <Eyebrow>Additional Featured Project</Eyebrow>
            <div className="mt-6 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white transition duration-300 hover:shadow-lg">
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={additionalProject.image}
                  alt={additionalProject.imageAlt}
                  fill
                  sizes="(min-width: 768px) 100vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 sm:p-10">
                <Tag className="w-fit px-2.5 py-1 text-[10px]">
                  {additionalProject.category}
                </Tag>
                <h3 className="mt-4 font-display text-2xl text-[var(--color-ink)]">
                  {additionalProject.name}
                </h3>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {additionalProject.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-[14px] text-[var(--color-body)]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}