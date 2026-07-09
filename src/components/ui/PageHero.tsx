import { ReactNode } from "react";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  heading,
  description,
}: {
  eyebrow: string;
  heading: ReactNode;
  description?: string;
}) {
  return (
    <section className="bg-[var(--color-ink)] px-6 pb-14 pt-24 sm:px-10 lg:px-16">
      <Container className="px-0">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-[2.25rem] leading-[1.16] text-white sm:text-[3rem]">
          {heading}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}