import Image from "next/image";
import type { Metadata } from "next";
import { BedDouble, MapPin, TrainFront, Utensils, Accessibility, Mail } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { Card, Container } from "@/components/ui";
import { congress } from "@/data/site";

export const metadata: Metadata = { title: "Informations pratiques" };

const info = [
  [MapPin, "Lieu du congrès", congress.venue],
  [TrainFront, "Venir à Nice", "Accès depuis l’aéroport Nice Côte d’Azur, la gare Nice-Ville et le réseau de tramway. Les itinéraires seront précisés après confirmation du lieu."],
  [BedDouble, "Hébergement", "Chaque participant réserve son hébergement. Le site proposera une liste indicative d’hôtels avec liens directs, sans collecte ni paiement des nuitées."],
  [Utensils, "Dîner du congrès", "Réservation possible dans le formulaire d’inscription. Le lieu, le tarif et la capacité seront confirmés ultérieurement."],
  [Accessibility, "Accessibilité", "Les besoins spécifiques pourront être signalés lors de l’inscription afin d’anticiper l’accueil des participants."],
  [Mail, "Contact", `Adresse provisoire : ${congress.contactEmail}`],
] as const;

export default function PracticalPage() {
  return (
    <>
      <PageHero
        eyebrow="Préparer sa venue"
        title="Informations pratiques"
        description="Une page unique pour le lieu, les transports, l’hébergement autonome, le dîner et les contacts utiles."
      />
      <section className="py-16 sm:py-24">
        <Container>
          <div className="mb-12 grid gap-5 lg:grid-cols-[1.22fr_.78fr]">
            <figure className="group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm sm:min-h-[390px]">
              <Image
                src="/images/nice/tramway-place-massena.jpg"
                alt="Le tramway sur la place Masséna à Nice"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">Mobilité</p>
                <p className="mt-2 text-2xl font-semibold">Un centre-ville directement desservi par le tramway</p>
              </figcaption>
            </figure>
            <figure className="group relative min-h-[300px] overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm sm:min-h-[390px]">
              <Image
                src="/images/nice/vieux-nice.jpg"
                alt="Une rue colorée du Vieux-Nice"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-200">Découvrir Nice</p>
                <p className="mt-2 text-2xl font-semibold">Le Vieux-Nice à quelques minutes du congrès</p>
              </figcaption>
            </figure>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {info.map(([Icon, title, text]) => (
              <Card key={title} className="p-7">
                <Icon className="text-sky-700" size={25} />
                <h2 className="mt-5 text-xl font-semibold text-slate-950">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
