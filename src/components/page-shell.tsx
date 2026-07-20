import Image from "next/image";
import type { ReactNode } from "react";
import { Badge, Container } from "@/components/ui";

type ImagePosition = "center" | "top" | "bottom";

const imagePositionClasses: Record<ImagePosition, string> = {
  center: "object-center",
  top: "object-top",
  bottom: "object-bottom",
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  imageSrc,
  imageAlt,
  imagePosition = "center",
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: ImagePosition;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#eef9ff_52%,#fff_100%)] py-16 sm:py-24">
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-sky-200/30 blur-3xl" />
      <Container
        className={
          imageSrc
            ? "relative grid items-center gap-10 lg:grid-cols-[1.04fr_.96fr] lg:gap-14"
            : "relative"
        }
      >
        <div>
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          {children}
        </div>
        {imageSrc ? (
          <div className="relative min-h-[260px] overflow-hidden rounded-[2rem] border border-white/70 bg-slate-200 shadow-2xl shadow-slate-900/10 sm:min-h-[340px]">
            <Image
              src={imageSrc}
              alt={imageAlt ?? "Vue de Nice"}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className={`object-cover ${imagePositionClasses[imagePosition]}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-white/5" />
          </div>
        ) : null}
      </Container>
    </section>
  );
}
