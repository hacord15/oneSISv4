import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { images } from "@/lib/images";

// NOTE: Placeholder profiles for layout/demo purposes only.
// Replace with real management team names, titles, photos, and bios before launch.
const managementTeam = [
  {
    photo: "https://picsum.photos/seed/onesis-mgmt-1/600/750",
    name: "Karan Mehta",
    title: "Chief Executive Officer",
    bio: "Leads overall strategy and execution across OneSIS's four core verticals, with a background scaling technology-driven service businesses.",
  },
  {
    photo: "https://picsum.photos/seed/onesis-mgmt-2/600/750",
    name: "Priya Iyer",
    title: "Chief Operating Officer",
    bio: "Responsible for day-to-day service delivery, SLA performance, and operational governance across all 29 states.",
  },
  {
    photo: "https://picsum.photos/seed/onesis-mgmt-3/600/750",
    name: "Rohan Gupta",
    title: "Chief Financial Officer",
    bio: "Oversees financial planning, contract structuring, and reporting, bringing prior experience in listed business-services enterprises.",
  },
  {
    photo: "https://picsum.photos/seed/onesis-mgmt-4/600/750",
    name: "Neha Verma",
    title: "Chief Human Resources Officer",
    bio: "Leads workforce strategy for 320K+ permanent staff, including training, compliance, and the M-Trainer learning platform.",
  },
  {
    photo: "https://picsum.photos/seed/onesis-mgmt-5/600/750",
    name: "Sanjay Patel",
    title: "Chief Technology Officer",
    bio: "Drives the One Point App, iOPS, and FACTECH platforms that power real-time operational visibility across every client site.",
  },
  {
    photo: "https://picsum.photos/seed/onesis-mgmt-6/600/750",
    name: "Divya Menon",
    title: "VP, Operations",
    bio: "Manages regional delivery teams and site-level accountability, translating group strategy into on-the-ground execution.",
  },
];

export const metadata = {
  title: "Management Team | OneSIS",
};

export default function ManagementPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Company"
          heading={
            <>
              Management <span className="accent">Team</span>
            </>
          }
          description="The leadership team responsible for OneSIS's day-to-day operations, technology, and client accountability."
          backgroundImage={images.managementTeamBanner}
        />

        <section className="py-20">
          <Container>
            <Eyebrow>Illustrative Profiles</Eyebrow>
            <p className="mt-3 max-w-lg text-[13.5px] leading-relaxed text-[var(--color-muted)]">
              Names, photos, and bios shown below are placeholders for layout
              purposes and will be replaced with the confirmed management
              team ahead of launch.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {managementTeam.map((member) => (
                <ProfileCard key={member.name} {...member} />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[var(--color-cream)] py-16">
          <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">
              For leadership or partnership queries, reach out to our team directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--color-brand)] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:bg-[var(--color-brand-dark)]"
            >
              Contact Us
            </Link>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}