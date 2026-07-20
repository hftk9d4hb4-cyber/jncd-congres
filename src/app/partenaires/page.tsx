import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Download, Handshake, Mail, Presentation, Store, Users } from "lucide-react";
import { PageHero } from "@/components/page-shell";
import { Badge, Card, Container, LinkButton, SectionHeading } from "@/components/ui";
import { congress } from "@/data/site";

export const metadata: Metadata = {
  title: "Sponsors et partenaires industriels",
  description: "Partenariat industriel et soutien aux Journées Niçoises de Chirurgie Digestive.",
};

const opportunities = [
  {
    icon: Store,
    title: "Espace d’exposition",
    description: "Présence sur l’espace partenaires, échanges avec les participants et présentation des solutions de l’entreprise.",
  },
  {
    icon: Presentation,
    title: "Visibilité scientifique",
    description: "Possibilités de symposium, atelier ou démonstration, sous réserve de validation par le comité d’organisation.",
  },
  {
    icon: Users,
    title: "Rencontres professionnelles",
    description: "Accès privilégié à une communauté de chirurgiens, internes, équipes paramédicales et acteurs hospitalo-universitaires.",
  },
];

const levels = [
  {
    name: "Partenaire principal",
    label: "Niveau 1",
    description: "Visibilité prioritaire sur les supports du congrès et présence renforcée sur le site et l’espace d’exposition.",
  },
  {
    name: "Partenaire associé",
    label: "Niveau 2",
    description: "Présence sur les supports numériques et possibilité de disposer d’un espace partenaire pendant le congrès.",
  },
  {
    name: "Soutien institutionnel",
    label: "Sur mesure",
    description: "Partenariat adapté aux sociétés savantes, institutions, associations et acteurs académiques.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsors et partenaires"
        title="Soutenir les 35es Journées Niçoises de Chirurgie Digestive"
        description="Les partenaires industriels contribuent à la réalisation du congrès dans un cadre transparent, indépendant et respectueux de l’intégrité scientifique."
        imageSrc="/images/nice/place-massena-panorama.jpg"
        imageAlt="Vue panoramique de la place Masséna à Nice"
        imagePosition="center"
      />

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Partenariat"
            title="Associer votre entreprise à un rendez-vous chirurgical académique"
            description="Le dispositif de partenariat sera construit avec chaque industriel selon ses objectifs, dans le respect des règles applicables aux manifestations scientifiques et aux relations avec les professionnels de santé."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {opportunities.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="p-7">
                <Icon className="text-sky-700" size={26} />
                <h2 className="mt-6 text-xl font-semibold text-slate-950">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Formules"
            title="Des niveaux de soutien modulables"
            description="Les montants, prestations et conditions seront précisés dans le dossier partenaire définitif."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {levels.map((level) => (
              <Card key={level.name} className="flex min-h-64 flex-col p-7">
                <Badge className="w-fit border-slate-200 bg-slate-50 text-slate-600">{level.label}</Badge>
                <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{level.name}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">{level.description}</p>
                <p className="mt-auto pt-8 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Tarification à venir</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
          <Card className="relative min-h-96 overflow-hidden border-0 bg-slate-950 p-8 text-white sm:p-10">
            <div className="absolute inset-0 opacity-25">
              <Image src="/images/nice/port-de-nice.jpg" alt="Port de Nice" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950/90 to-sky-950/70" />
            <div className="relative flex h-full flex-col">
              <Handshake className="text-sky-300" size={30} />
              <h2 className="mt-8 max-w-xl text-3xl font-semibold tracking-tight">Construisons un partenariat adapté à votre entreprise</h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Le comité d’organisation étudiera les demandes de stands, ateliers, symposiums et supports de communication. Toute intervention scientifique restera soumise à une validation éditoriale indépendante.</p>
              <div className="mt-auto flex flex-wrap gap-3 pt-10">
                <LinkButton href={`mailto:${congress.contactEmail}`} className="bg-white text-slate-950 hover:bg-slate-100"><Mail size={17} className="mr-2" />Contacter l’organisation</LinkButton>
                <span className="inline-flex items-center rounded-full border border-white/25 px-5 py-3 text-sm font-semibold text-white/80"><Download size={17} className="mr-2" />Dossier partenaire à venir</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 sm:p-10">
            <Building2 className="text-sky-700" size={30} />
            <h2 className="mt-7 text-2xl font-semibold tracking-tight text-slate-950">Partenaires de l’édition</h2>
            <p className="mt-4 text-sm leading-6 text-slate-600">Les logos des partenaires confirmés seront affichés ici, classés selon leur niveau de soutien, avec un lien vers leur site institutionnel.</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {["Partenaire principal", "Partenaire associé", "Soutien scientifique", "Soutien institutionnel"].map((label) => (
                <div key={label} className="grid min-h-28 place-items-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 text-center text-xs font-semibold text-slate-400">
                  {label}<br />Logo à venir
                </div>
              ))}
            </div>
          </Card>
        </Container>
      </section>
    </>
  );
}
