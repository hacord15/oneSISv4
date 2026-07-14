"use client";

import { useState } from "react";
import Link from "next/link";

// NOTE: Placeholder job listings for layout/demo purposes only.
// Replace with real openings (or wire up to an ATS feed) before launch.
const jobs = [
  {
    title: "Facility Manager",
    department: "Operations",
    location: "Mumbai",
    type: "Full-time",
    experience: "5–8 yrs",
  },
  {
    title: "MEP Technician",
    department: "Technical",
    location: "Bangalore",
    type: "Full-time",
    experience: "2–4 yrs",
  },
  {
    title: "Security Supervisor",
    department: "Security",
    location: "Delhi NCR",
    type: "Full-time",
    experience: "3–5 yrs",
  },
  {
    title: "HR Executive",
    department: "Corporate",
    location: "Kolkata",
    type: "Full-time",
    experience: "1–3 yrs",
  },
  {
    title: "Housekeeping Supervisor",
    department: "Operations",
    location: "Pune",
    type: "Full-time",
    experience: "2–4 yrs",
  },
  {
    title: "Business Development Manager",
    department: "Corporate",
    location: "Mumbai",
    type: "Full-time",
    experience: "6–9 yrs",
  },
  {
    title: "Electrical Engineer",
    department: "Technical",
    location: "Chennai",
    type: "Full-time",
    experience: "3–6 yrs",
  },
  {
    title: "Site Safety Officer",
    department: "EHS",
    location: "Hyderabad",
    type: "Full-time",
    experience: "4–7 yrs",
  },
];

const departments = ["All", "Operations", "Technical", "Security", "Corporate", "EHS"];

export function OpeningsList() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? jobs : jobs.filter((job) => job.department === active);

  return (
    <div>
      {/* Department filter */}
      <div className="flex flex-wrap gap-2">
        {departments.map((dept) => (
          <button
            key={dept}
            type="button"
            onClick={() => setActive(dept)}
            className={`border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.06em] transition-colors ${
              active === dept
                ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white"
                : "border-[var(--color-border)] text-[var(--color-body)] hover:border-[var(--color-ink)] hover:text-[var(--color-ink)]"
            }`}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Listings */}
      <div className="mt-8 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        {filtered.map((job) => (
          <div
            key={job.title + job.location}
            className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h3 className="text-[16px] font-semibold text-[var(--color-ink)]">
                {job.title}
              </h3>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-[var(--color-muted)]">
                <span>{job.department}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-muted-2)]" />
                <span>{job.location}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-muted-2)]" />
                <span>{job.type}</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-muted-2)]" />
                <span>{job.experience}</span>
              </div>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 border border-[var(--color-ink)]/25 px-5 py-2.5 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]"
            >
              Apply Now
            </Link>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="py-10 text-center text-[14px] text-[var(--color-muted)]">
            No openings in this department right now.
          </p>
        )}
      </div>
    </div>
  );
}