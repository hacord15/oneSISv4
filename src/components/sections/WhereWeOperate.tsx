import Image from "next/image";
import { whereWeOperate } from "@/lib/content";
import { images } from "@/lib/images";

export function WhereWeOperate() {
  return (
    <section id="operate" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2">
        <div className="relative aspect-[4/5] lg:row-span-2 lg:aspect-auto">
          <Image
            src={images.operateOne}
            alt="OneSIS field staff at work"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            src={images.operateTwo}
            alt="Corporate interior maintained by OneSIS"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] lg:aspect-auto">
          <Image
            src={images.operateThree}
            alt="Office corridor managed by OneSIS"
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center bg-[var(--color-cream)] px-6 py-14 sm:px-10 lg:col-span-2 lg:px-16">
          <h2 className="font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
            {whereWeOperate.heading}{" "}
            <span className="accent">{whereWeOperate.headingAccent}</span>
          </h2>
          <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-[var(--color-body)]">
            {whereWeOperate.body}
          </p>
        </div>
      </div>
    </section>
  );
}
