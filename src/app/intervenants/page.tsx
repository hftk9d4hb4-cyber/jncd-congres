import type { Metadata } from "next";
import { Mail, UserRoundSearch } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { Card, Container, LinkButton } from "@/components/ui";
import { congress } from "@/data/site";

export const metadata: Metadata = { title: "Intervenants" };

export default function SpeakersPage() {
  return (
    <>
      <PageHero
        eyebrow="Comité scientifique"
        title="Les intervenants seront annoncés prochainement"
        description="Les orateurs, modérateurs et experts invités sont en cours de sélection. Leurs profils seront publiés après confirmation."
        imageSrc="/images/nice/port-de-nice.jpg"
        imageAlt="Vue aérienne du port de Nice"
        imagePosition="center"
      />
      <section className="py-16 sm:py-24">
        <Container className="max-w-4xl">
          <Card className="p-8 text-center sm:p-12">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-sky-50 text-sky-700"><UserRoundSearch size={30} /></div>
            <h2 className="mt-7 text-3xl font-semibold tracking-tight text-slate-950">Faculty en préparation</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600">Chaque fiche présentera la photographie, l’affiliation, une courte biographie, les sessions associées et, lorsque nécessaire, les déclarations de liens d’intérêts.</p>
            <div className="mt-8 flex justify-center"><LinkButton href={`mailto:${congress.contactEmail}`} variant="secondary"><Mail size={17} className="mr-2" />Contacter le comité d’organisation</LinkButton></div>
          </Card>
        </Container>
      </section>
    </>
  );
}
