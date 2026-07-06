import { Container } from "@/components/ui/Container";
import { nav } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border-soft)] bg-[var(--color-offwhite)]/95 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        {/* Left Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/assests/logo_oneSIS.jpeg"
            alt="OneSIS Logo"
            width={180}
            height={60}
            className="object-contain"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <div key={link.label} className="group relative">
              <Link
                href={link.href}
                className="flex items-center gap-1 py-6 text-[14px] font-medium text-[var(--color-body)] transition-colors hover:text-[var(--color-brand)]"
              >
                {link.label}

                {"children" in link && link.children && (
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>

              {"children" in link && link.children && (
                <div className="invisible absolute left-0 top-full z-50 min-w-[250px] rounded-lg border border-gray-200 bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-5 py-3 text-sm text-gray-700 transition-colors hover:bg-red-50 hover:text-[var(--color-brand)]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
  <Link href="https://sisindia.com/" target="_blank" rel="noreferrer" className="shrink-0">
            <Image
              src="/assests/main-logo.png"
              alt="SIS Logo"
              width={180}
              height={60}
              className="object-contain"
              priority
            />
          </Link>

           <Link
            href="#DownloadCompanyProfile"
            className="inline-flex items-center rounded bg-[var(--color-brand)] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[var(--color-brand-dark)]"
          >
            {nav.cta}
          </Link>

        

         
        </div>
      </Container>
    </header>
  );
}