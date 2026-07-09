import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";

const keyStats = [
  { value: "₹16,000 Cr", label: "Revenue" },
  { value: "3.5 Lakh+", label: "Employees" },
  { value: "16", label: "Companies" },
  { value: "368", label: "Offices" },
  { value: "29", label: "States" },
];

const rankings = [
  { rank: "#1", label: "Security Solutions" },
  { rank: "#1", label: "Facility Management" },
  { rank: "#2", label: "Cash Logistics" },
];

const groupCompanies = [
  "SIS India",
  "Terminix SIS",
  "MSS Security",
  "Henderson",
  "SIS Cash Services",
  "Dusters Total Solutions",
  "Rare Hospitality",
];

export const metadata = {
  title: "About SIS Group | OneSIS",
  description:
    "SIS Group is India's largest listed security and business services enterprise, operating across 16 group companies with a pan-India and international presence.",
};

export default function SISGroupPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Company"
          heading={
            <>
              A Billion-Dollar Listed{" "}
              <span className="accent">Indian Multinational</span>
            </>
          }
          description="SIS Group is India's largest listed security and business services enterprise, operating across 16 group companies with a pan-India and international presence."
        />

        {/* Rankings + revenue */}
        <section className="py-20">
          <Container className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[15px] leading-relaxed text-[var(--color-body)]">
                Ranked <strong className="font-semibold text-[var(--color-ink)]">#157</strong> in
                Fortune India 500 and{" "}
                <strong className="font-semibold text-[var(--color-ink)]">#163</strong> in ET 500,
                SIS commands leadership positions across:
              </p>

              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {rankings.map((r) => (
                  <div key={r.label} className="border border-[var(--color-border)] p-6">
                    <div className="font-display text-3xl text-[var(--color-brand)]">
                      {r.rank}
                    </div>
                    <div className="mt-2 text-[13px] font-semibold text-[var(--color-ink)]">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[15px] leading-relaxed text-[var(--color-body)]">
                With ₹20,059 Crore in revenue and over 3.5 lakh employees, the Group delivers
                world-class services across 29 states, 630+ districts, and 368 offices.
              </p>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-[var(--color-border)] bg-[var(--color-cream)] p-8">
                <Eyebrow>Key Statistics</Eyebrow>
                <div className="mt-6 grid grid-cols-2 divide-x divide-y divide-[var(--color-border)] border border-[var(--color-border)] bg-white">
                  {keyStats.map((s) => (
                    <div key={s.label} className="p-5">
                      <div className="font-display text-2xl text-[var(--color-brand)]">
                        {s.value}
                      </div>
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-[var(--color-muted)]">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Group companies */}
        <section className="bg-[var(--color-cream)] py-20">
          <Container>
            <Eyebrow>Group Companies</Eyebrow>
            <h2 className="mt-4 font-display text-[2rem] text-[var(--color-ink)] sm:text-[2.5rem]">
              16 Companies, <span className="accent">One Ecosystem</span>
            </h2>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {groupCompanies.map((c) => (
                <div
                  key={c}
                  className="flex items-center border border-[var(--color-border)] bg-white px-5 py-6 text-[14px] font-semibold text-[var(--color-ink)]"
                >
                  {c}
                </div>
              ))}
              <div className="flex items-center border border-dashed border-[var(--color-muted-2)] px-5 py-6 text-[14px] text-[var(--color-muted)]">
                &amp; more…
              </div>
            </div>
          </Container>
        </section>

        {/* CTA strip */}
        <section className="py-16">
          <Container className="flex flex-col items-start justify-between gap-6 border-t border-[var(--color-border)] pt-10 sm:flex-row sm:items-center">
            <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">
              Want to know how OneSIS draws on the strength of the wider SIS Group?
            </p>
            <Link
              href="/company/onesis"
              className="inline-flex items-center gap-2 bg-[var(--color-brand)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              About OneSIS
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}