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
     name: "Mr. Rituraj Kishore Sinha", 
  title: "Group Managing Director", 
  bio: "Mr. Sinha has been serving as the Managing Director of the Company. He is an alumnus of the Doon School, and Leeds University Business School, United Kingdom. Since joining the SIS Group in 2002, he has played a vital role in driving the Company’s exponential growth, leading it to become a Market leader in Security, Facility Management and Cash Logistics Solutions across India, Australia, Singapore and New Zealand.", 
  },
  {
  photo: images.ceo,
  name: "Mr. Dhiraj Singh",
  title: "Chief Executive Officer",
  bio: "Mr. Dhiraj prior to joining SIS Group Enterprises, he successfully established and led several startup businesses in the infrastructure and services sectors. After completing his Mechanical Engineering from IIT Mumbai and MBA and MIM from Tulane and Thunderbird respectively in the USA, he worked with companies like Eicher, Laitram, Tata Steel and Bechtel. He then headed BD for Bovis Lend Lease and was the Country Head for Laing O’Rourke, before he founded vKarma Capital (a PE fund of DLF) and became Senior Advisor with McKinsey and Simplex Infrastructures.",
},
  {
    photo:images.brijesh ,
    name: "Mr. Brajesh Kumar",
    title: "Chief Financial Officer (CFO)",
    bio: "Mr. Brajesh, a qualified CA, worked as Proprietor/Partner of M/s P.B. and Co, Chartered Accountants and Partner of M/s S.K.Nayak and Co with 10 years of experience in Audit, Accounting, Taxation and Company Law Matters. Presently heading over 250 members team handling various Finance and Accounts functions of SIS, has been part of core member team in ERP implementation, Private Equity Transactions and IPO Process of SIS. He also received the award of “Outstanding Individual Contribution” for SIS Group Enterprises for 2011-12.",
  },
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