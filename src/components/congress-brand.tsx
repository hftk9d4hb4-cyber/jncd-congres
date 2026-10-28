import Image from "next/image";
import { congress } from "@/data/site";

export function CongressBrand({ large = false, inverse = false }: { large?: boolean; inverse?: boolean }) {
  return <span className={`flex min-w-0 items-center ${large ? "gap-5" : "gap-3"}`}>
    <Image src="/images/brand/service-chirurgie-nice.jpeg" alt="Logo du service de chirurgie viscérale et digestive du CHU de Nice" width={1024} height={1024} sizes={large ? "160px" : "64px"} className={`shrink-0 rounded-full bg-white object-contain ${large ? "h-28 w-28 sm:h-40 sm:w-40" : "h-14 w-14 sm:h-16 sm:w-16"}`} />
    <span className="min-w-0">
      <span className={`block font-bold tracking-tight ${inverse ? "text-white" : "text-brand-deep"} ${large ? "text-3xl sm:text-4xl" : "text-lg"}`}>{congress.shortName}</span>
      <span className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${inverse ? "bg-white/10 text-white" : "bg-brand-light text-brand"}`}>{congress.edition}</span>
    </span>
  </span>;
}
