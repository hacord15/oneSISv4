import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Tag } from "@/components/ui/Tag";
import { images } from "@/lib/images";

const mediaCoverage = [
  "Industry rankings",
  "CXO interviews",
  "FM service reports",
  "OneSIS features",
];

const industryInsights = [
  "Facility Management trends",
  "EHS",
  "Sustainability",
  "Smart buildings",
];

const awards = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "OHSAS 18001",
  "SA 8000",
  "ISO 18788:2015",
  "Industry Rankings & Accolades",
];

export const metadata = {
  title: "News & Media | OneSIS",
  description:
    "Press releases, media coverage, industry insights, and awards & recognition from OneSIS.",
};

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Company"
          heading={
            <>
              News &amp; <span className="accent">Media</span>
            </>
          }
          backgroundImage={images.newsBanner}
        />

        <section className="py-20">
          <Container className="grid gap-12 lg:grid-cols-12">
            {/* Press releases */}
            <div className="lg:col-span-7">
              <Eyebrow>Press Releases</Eyebrow>
              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[var(--color-body)]">
                Announcements on new client wins, landmark contracts,
                geographic expansion, and technology partnerships.
              </p>
              <div className="mt-7 border border-dashed border-[var(--color-muted-2)] px-6 py-8 text-[14px] text-[var(--color-muted)]">
                No press releases published yet — check back soon.
              </div>
            </div>

            {/* Media coverage + industry insights */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-5">
              <div>
                <Eyebrow>Media Coverage</Eyebrow>
                <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--color-body)]">
                  Curated third-party coverage including:
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {mediaCoverage.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13.5px] text-[var(--color-body)]"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-[var(--color-brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Eyebrow>Industry Insights</Eyebrow>
                <p className="mt-4 text-[13.5px] leading-relaxed text-[var(--color-body)]">
                  Thought leadership by OneSIS leadership covering:
                </p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {industryInsights.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13.5px] text-[var(--color-body)]"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-[var(--color-brand)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* Awards & recognition */}
        <section className="bg-[var(--color-cream)] py-20">
          <Container>
            <Eyebrow>Awards &amp; Recognition</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
              Certified to a <span className="accent">Global Standard</span>
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {awards.map((a) => (
                <Tag key={a} className="px-4 py-2 text-[12px]">
                  {a}
                </Tag>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}