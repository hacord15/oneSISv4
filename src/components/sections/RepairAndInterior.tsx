// version 1 with img 



// import Image from "next/image";
// import { Eyebrow } from "@/components/ui/Eyebrow";
// import { hardcoreRepair, officeInterior } from "@/lib/content";
// import { images } from "@/lib/images";

// export function RepairAndInterior() {
//   return (
//     <section className="grid grid-cols-1 lg:grid-cols-2">
//       {/* Left: Hardcore Repair — dark photo panel */}
//       <div className="relative flex min-h-[560px] flex-col justify-end overflow-hidden bg-[var(--color-ink)] px-6 py-12 sm:px-10 lg:min-h-[640px] lg:px-16 lg:py-16">
//         <Image
//           src={images.repairSpotlight}
//           alt="Hardcore repair and maintenance crew on site"
//           fill
//           sizes="(min-width: 1024px) 50vw, 100vw"
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/95 via-[var(--color-ink)]/50 to-[var(--color-ink)]/10" />

//         <div className="relative max-w-md">
//           <Eyebrow>{hardcoreRepair.eyebrow}</Eyebrow>
//           <h2 className="mt-4 font-display text-3xl leading-[1.12] text-white sm:text-4xl">
//             {hardcoreRepair.heading}
//             <br />
//             {hardcoreRepair.headingAccent}
//           </h2>
//           <p className="mt-5 text-[14.5px] leading-relaxed text-white/70">
//             {hardcoreRepair.body}
//           </p>
//           <ul className="mt-6 flex flex-col">
//             {hardcoreRepair.checklist.map((item) => (
//               <li
//                 key={item}
//                 className="flex items-center gap-4 border-t border-white/15 py-3.5 text-[14px] text-white/80 last:border-b"
//               >
//                 <span className="h-px w-4 shrink-0 bg-[var(--color-brand)]" />
//                 {item}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Right: Office Interior Management — light panel */}
//       <div className="flex flex-col justify-center bg-[var(--color-cream)] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
//         <div className="max-w-md">
//           <Eyebrow>{officeInterior.eyebrow}</Eyebrow>
//           <h2 className="mt-4 font-display text-3xl leading-[1.12] text-[var(--color-ink)] sm:text-4xl">
//             {officeInterior.heading}
//             <br />
//             <span className="accent">{officeInterior.headingAccent}</span>
//           </h2>
//           <p className="mt-5 text-[14.5px] leading-relaxed text-[var(--color-body)]">
//             {officeInterior.body}
//           </p>
//           <ul className="mt-6 flex flex-col">
//             {officeInterior.checklist.map((item) => (
//               <li
//                 key={item}
//                 className="flex items-center gap-4 border-t border-[var(--color-border)] py-3.5 text-[14px] text-[var(--color-body)] last:border-b"
//               >
//                 <span className="h-px w-4 shrink-0 bg-[var(--color-brand)]" />
//                 {item}
//               </li>
//             ))}
//           </ul>

//           <div className="mt-8 grid grid-cols-3 gap-3">
//             {officeInterior.stats.map((stat) => (
//               <div key={stat.label} className="bg-white px-4 py-5 text-center">
//                 <div className="font-display text-2xl text-[var(--color-brand)]">
//                   {stat.value}
//                 </div>
//                 <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--color-muted)]">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// version 2 with no img(removed by sachin sir )
 
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { hardcoreRepair, propertyManagement } from "@/lib/content";

export function RepairAndInterior() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {/* Left: Hardcore Repair — light panel with ghost numeral */}
      <div className="relative flex min-h-[560px] flex-col items-center justify-center overflow-hidden bg-white px-6 py-12 sm:px-10 lg:min-h-[640px] lg:border-r lg:border-[var(--color-border)] lg:px-16 lg:py-16">
        {/* <span
          aria-hidden
          className="pointer-events-none absolute -bottom-12 -right-6 select-none font-display text-[16rem] leading-none text-[var(--color-muted-2)]/25 sm:text-[20rem]"
        >
          01
        </span> */}

        <div className="relative max-w-md mx-auto">
          <Eyebrow>{hardcoreRepair.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-[1.12] text-[var(--color-ink)] sm:text-4xl">
            {hardcoreRepair.heading}
            <br />
            <span className="accent">{hardcoreRepair.headingAccent}</span>
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-[var(--color-body)]">
            {hardcoreRepair.body}
          </p>
          <ul className="mt-6 flex flex-col">
            {hardcoreRepair.checklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-t border-[var(--color-border)] py-3.5 text-[14px] text-[var(--color-body)] last:border-b"
              >
                <span className="h-px w-4 shrink-0 bg-[var(--color-brand)]" />
                {item}
              </li>
            ))}
          </ul>
          <TextLink href="/solutions/integrated-fm" className="mt-7">
            Explore Integrated Facilities Management
          </TextLink>
        </div>
      </div>

      {/* Right: Office Interior Management — cream panel */}
      <div className="flex flex-col items-center justify-center bg-[var(--color-cream)] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
        <div className="max-w-md mx-auto">
          <Eyebrow>{propertyManagement.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl leading-[1.12] text-[var(--color-ink)] sm:text-4xl">
            {propertyManagement.heading}
            <br />
            <span className="accent">{propertyManagement.headingAccent}</span>
          </h2>
          <p className="mt-5 text-[14.5px] leading-relaxed text-[var(--color-body)]">
            {propertyManagement.body}
          </p>
          <ul className="mt-6 flex flex-col">
            {propertyManagement.checklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-4 border-t border-[var(--color-border)] py-3.5 text-[14px] text-[var(--color-body)] last:border-b"
              >
                <span className="h-px w-4 shrink-0 bg-[var(--color-brand)]" />
                {item}
              </li>
            ))}
          </ul>
          <TextLink href="/solutions/property-management" className="mt-7">
            Explore Property Management & Operations
          </TextLink>

          {/* <div className="mt-8 grid grid-cols-3 gap-3">
            {officeInterior.stats.map((stat) => (
              <div key={stat.label} className="bg-white px-4 py-5 text-center">
                <div className="font-display text-2xl text-[var(--color-brand)]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-[var(--color-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}




// version 3 with img( by sheetanshu sir )
// import Image from "next/image";
// import { Eyebrow } from "@/components/ui/Eyebrow";
// import { TextLink } from "@/components/ui/TextLink";
// import { hardcoreRepair, propertyManagement } from "@/lib/content";
// import { images } from "@/lib/images";

// function AssetTag({ code, label }: { code: string; label: string }) {
//   return (
//     <div className="flex items-center gap-2 bg-[var(--color-ink)] px-3 py-2 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)]">
//       <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-[var(--color-brand)]">
//         {code}
//       </span>
//       <span className="h-3 w-px bg-white/25" />
//       <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-white/85">
//         {label}
//       </span>
//     </div>
//   );
// }

// function ServiceCard({
//   src,
//   alt,
//   code,
//   label,
//   eyebrow,
//   heading,
//   headingAccent,
//   body,
//   checklist,
//   href,
//   linkLabel,
//   borderRight,
// }: {
//   src: string;
//   alt: string;
//   code: string;
//   label: string;
//   eyebrow: string;
//   heading: string;
//   headingAccent: string;
//   body: string;
//   checklist: string[];
//   href: string;
//   linkLabel: string;
//   borderRight?: boolean;
// }) {
//   return (
//     <div
//       className={`flex gap-6 px-6 py-10 sm:gap-8 sm:px-10 sm:py-14 lg:px-12 lg:py-16 ${
//         borderRight ? "lg:border-r" : ""
//       } border-[var(--color-border)]`}
//     >
//       {/* Image — vertical, left side */}
//       <div className="group relative h-[420px] w-[38%] shrink-0 overflow-hidden sm:h-[480px] lg:h-[560px]">
//         <Image
//           src={src}
//           alt={alt}
//           fill
//           sizes="(min-width: 1024px) 22vw, 40vw"
//           className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 via-transparent to-transparent" />
//         <div className="absolute bottom-4 left-4 right-4">
//           <AssetTag code={code} label={label} />
//         </div>
//       </div>

//       {/* Content — right side */}
//       <div className="flex flex-1 flex-col justify-center">
//         <Eyebrow>{eyebrow}</Eyebrow>
//         <h2 className="mt-4 font-display text-2xl leading-[1.15] text-[var(--color-ink)] sm:text-[1.85rem]">
//           {heading}
//           <br />
//           <span className="accent">{headingAccent}</span>
//         </h2>
//         <p className="mt-4 text-[14px] leading-relaxed text-[var(--color-body)]">
//           {body}
//         </p>
//         <ul className="mt-6 flex flex-col">
//           {checklist.map((item) => (
//             <li
//               key={item}
//               className="flex items-center gap-3 border-t border-[var(--color-border)] py-3 text-[13.5px] text-[var(--color-body)] last:border-b"
//             >
//               <span className="h-px w-4 shrink-0 bg-[var(--color-brand)]" />
//               {item}
//             </li>
//           ))}
//         </ul>
//         <div className="mt-7">
//           <TextLink href={href}>{linkLabel}</TextLink>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function RepairAndInterior() {
//   return (
//     <section className="w-full border-y border-[var(--color-border)] bg-white">
//       <div className="grid grid-cols-1 lg:grid-cols-2">
//         <ServiceCard
//           borderRight
//           src={images.repairSpotlight}
//           alt="Hardcore repair and maintenance crew on site"
//           code="SVC—01"
//           label="Repair & Maintenance"
//           eyebrow={hardcoreRepair.eyebrow}
//           heading={hardcoreRepair.heading}
//           headingAccent={hardcoreRepair.headingAccent}
//           body={hardcoreRepair.body}
//           checklist={hardcoreRepair.checklist}
//           href="/solutions/integrated-fm"
//           linkLabel="Explore Integrated Facilities Management"
//         />

//         <ServiceCard
//           src={images.propertyManagement}
//           alt="Office interior and property management operations"
//           code="SVC—02"
//           label="Property Management"
//           eyebrow={propertyManagement.eyebrow}
//           heading={propertyManagement.heading}
//           headingAccent={propertyManagement.headingAccent}
//           body={propertyManagement.body}
//           checklist={propertyManagement.checklist}
//           href="/solutions/property-management"
//           linkLabel="Explore Property Management & Operations"
//         />
//       </div>
//     </section>
//   );
// }