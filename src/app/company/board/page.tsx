import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProfileCard } from "@/components/ui/ProfileCard";
import { images } from "@/lib/images";

// NOTE: Placeholder profiles for layout/demo purposes only.
// Replace with real board member names, titles, photos, and bios before launch.
const boardMembers = [
  {
    photo: images.chairman,
     name: "Rituraj Kishore Sinha", 
  title: "Group Managing Director", 
  bio: "Over 20 years transforming SIS Limited into a multinational security leader, championing technology integration, cross-border acquisitions, and large-scale formal employment across the Asia-Pacific region.", 
  },
  {
  photo: images.ceo,
  name: "Dhiraj Singh",
  title: "Chief Executive Officer",
  bio: "An IIT Bombay graduate and veteran business leader with over 25 years of experience leading multi-thousand crore enterprises, driving massive operational growth, technology-backed security solutions, and people-first workplace culture across SIS Group Enterprises.",
},
  // {
  //   photo: "https://picsum.photos/seed/onesis-board-2/600/750",
  //   name: "Anjali Sharma",
  //   title: "Independent Director",
  //   bio: "Brings two decades of experience in corporate governance and risk management, having served on the boards of several listed Indian enterprises.",
  // },
  // {
  //   photo: "https://picsum.photos/seed/onesis-board-3/600/750",
  //   name: "Vikram Nair",
  //   title: "Non-Executive Director",
  //   bio: "Former operations leader in the infrastructure sector, advising on facility management strategy and pan-India delivery networks.",
  // },
  // {
  //   photo: "https://picsum.photos/seed/onesis-board-4/600/750",
  //   name: "Sunita Rao",
  //   title: "Independent Director, Finance",
  //   bio: "Chartered accountant with deep expertise in financial governance, statutory compliance, and audit oversight for large service organizations.",
  // },
  // {
  //   photo: "https://picsum.photos/seed/onesis-board-5/600/750",
  //   name: "Arvind Kapoor",
  //   title: "Executive Director",
  //   bio: "Oversees group-wide technology and operations strategy, with a background in scaling Group Companies Managed service models nationally.",
  // },
];

export const metadata = {
  title: "Board of Directors | OneSIS",
};

export default function BoardPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <PageHero
          eyebrow="Company"
          heading={
            <>
              Board of <span className="accent">Directors</span>
            </>
          }
          description="Governance and leadership guiding OneSIS's strategy, accountability, and long-term growth."
          backgroundImage={images.boardBanner}
        />

        <section className="py-20">
          <Container>
            <Eyebrow>Illustrative Profiles</Eyebrow>
            <p className="mt-3 max-w-lg text-[13.5px] leading-relaxed text-[var(--color-muted)]">
              Names, photos, and bios shown below are placeholders for layout
              purposes and will be replaced with the confirmed Board of
              Directors ahead of launch.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {boardMembers.map((member) => (
                <ProfileCard key={member.name} {...member} />
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[var(--color-cream)] py-16">
          <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-md text-[15px] leading-relaxed text-[var(--color-body)]">
              For governance or investor queries, reach out to our team directly.
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