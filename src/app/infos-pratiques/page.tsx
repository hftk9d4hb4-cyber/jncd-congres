import Image from "next/image";
import { AgendaButton } from "@/components/agenda-button";
import type { Metadata } from "next";
import { BedDouble, CalendarDays, MapPin, TrainFront, Utensils, Accessibility, Mail } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { Card, Container, LinkButton } from "@/components/ui";
import { congress } from "@/data/site";

export const metadata: Metadata = { title: "Informations pratiques" };

const info = [
  [CalendarDays, "Dates du congrès", congress.dateLabel],
  [MapPin, "Lieu du congrès", `${congress.venue} · Campus Pasteur · ${congress.address}. L’entrée dédiée au congrès et les salles seront précisées ultérieurement.`],
  [TrainFront, "Venir à Nice", "Tramway T1, arrêt « Hôpital Pasteur », puis rejoindre la Faculté à pied. Depuis la gare ou l’aéroport, consultez le calculateur d’itinéraire Lignes d’Azur pour préparer votre trajet. Les dessertes seront à revérifier avant le congrès."],
  [MapPin, "En voiture et stationnement", "Accès par l’A8, sortie 55 Nice-Est, puis direction du secteur Pasteur. La Faculté indique notamment le parking Valombrose. Vérifiez les conditions d’accès, tarifs et disponibilités avant votre venue ; aucune place n’est réservée par l’organisation."],
  [BedDouble, "Hébergement", "Chaque participant réserve son hébergement. Le site proposera une liste indicative d’hôtels avec liens directs, sans collecte ni paiement des nuitées."],
  [Utensils, "Dîner du congrès", "Les modalités d’une éventuelle soirée seront communiquées après validation."],
  [Accessibility, "Accessibilité", "Les besoins spécifiques pourront être signalés lors de l’inscription afin d’anticiper l’accueil des participants."],
  [Mail, "Contact", congress.contactEmail || "Le contact officiel sera communiqué prochainement."],
] as const;

export default function PracticalPage() {
  return (
    <>
      <PageHero
        eyebrow="Préparer sa venue"
        title="Informations pratiques"
        description="Une page unique pour le lieu, les transports, l’hébergement autonome, le dîner et les contacts utiles."
      ><div className="mt-7"><AgendaButton /><p className="mt-3 text-sm text-slate-500">Choisissez la période à ajouter à votre agenda. Les événements couvrent des journées entières ; les horaires seront précisés avec le programme.</p></div></PageHero>
      <section className="py-16 sm:py-24">
        <Container>
          <Card className="mb-10 p-6 sm:p-8"><h2 className="text-2xl font-semibold text-brand-deep">Rejoindre la Faculté de médecine</h2><p className="mt-3 leading-7 text-slate-600">{congress.address} · Campus Pasteur</p><div className="mt-5 flex flex-wrap gap-3"><LinkButton href={congress.mapUrl}>Ouvrir le plan</LinkButton><LinkButton href={congress.accessUrl} variant="secondary">Accès officiel de la Faculté</LinkButton><LinkButton href="https://www.lignesdazur.com/" variant="secondary">Préparer mon trajet</LinkButton></div><p className="mt-4 text-xs leading-6 text-slate-500">Source : page d’accès de la Faculté de médecine, consultée le 1er novembre 2026. L’entrée du congrès et l’accueil accessible seront confirmés par l’organisation.</p></Card>
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
                <p className="mt-2 text-2xl font-semibold">Les ruelles et les couleurs du Vieux-Nice</p>
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
