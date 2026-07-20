import type { Metadata } from "next";
import { CalendarClock, Download, Mail } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { Card, Container, LinkButton } from "@/components/ui";
import { congress } from "@/data/site";

export const metadata: Metadata = { title: "Programme" };

export default function ProgrammePage() {
  return (
    <>
      <PageHero
        eyebrow="Programme scientifique"
        title="Le programme sera publié prochainement"
        description="Les thématiques, horaires, formats pédagogiques et sessions sont en cours de définition par le comité scientifique."
        imageSrc="/images/nice/promenade-coucher-de-soleil.jpg"
        imageAlt="La Promenade des Anglais et la baie de Nice au coucher du soleil"
        imagePosition="center"
      />
      <section className="bg-slate-50 py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Card className="p-8 text-center sm:p-12">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-sky-50 text-sky-700"><CalendarClock size={30} /></div>
            <h2 className="mt-7 text-3xl font-semibold tracking-tight text-slate-950">Programmation en cours</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">Cette page accueillera le programme détaillé par journée, avec les sessions, les modérateurs, les intervenants, les ateliers et les temps dédiés aux partenaires.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-500"><Download size={17} className="mr-2" />Programme PDF à venir</span>
              <LinkButton href={`mailto:${congress.contactEmail}`} variant="secondary"><Mail size={17} className="mr-2" />Contacter l’organisation</LinkButton>
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
