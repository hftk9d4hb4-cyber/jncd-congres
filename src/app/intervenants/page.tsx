import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { Card, Container } from "@/components/ui";
import { speakers } from "@/data/site";

export const metadata: Metadata = { title: "Intervenants" };

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Comité scientifique"
        title="Intervenants et modérateurs"
        description="La structure est prête à accueillir photographies, biographies, affiliations, déclarations de liens d’intérêts et sessions associées."
        imageSrc="/images/nice/port-de-nice.jpg"
        imageAlt="Vue aérienne du port de Nice"
        imagePosition="center"
      />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <Card key={speaker.name} className="p-7">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[linear-gradient(135deg,#0f172a,#075985)] text-sm font-bold text-white">
                {speaker.initials}
              </div>
              <h2 className="mt-6 text-xl font-semibold text-slate-950">{speaker.name}</h2>
              <p className="mt-2 text-sm font-semibold text-sky-700">{speaker.role}</p>
              <p className="mt-1 text-sm text-slate-500">{speaker.institution}</p>
              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Thématique</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{speaker.topic}</p>
              </div>
            </Card>
          ))}
        </Container>
      </section>
    </>
  );
}
