import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Stethoscope, Users, Handshake } from "lucide-react";
import { Badge, Card, Container, LinkButton, SectionHeading } from "@/components/ui";
import { CongressBrand } from "@/components/congress-brand";
import { congress } from "@/data/site";

const values = [
  { Icon: Stethoscope, title: "Partager l’expertise", text: "Un rendez-vous consacré à la chirurgie viscérale et digestive et aux échanges entre professionnels." },
  { Icon: Users, title: "Transmettre et échanger", text: "Une rencontre entre chirurgiens, jeunes praticiens et équipes impliquées dans les soins." },
  { Icon: Handshake, title: "Construire les rencontres", text: "Un espace pour les partenaires et industriels qui contribuent au financement du congrès, dans le respect de l’indépendance scientifique." },
];

export default function HomePage() {
  return <>
    <section className="relative overflow-hidden bg-brand-light py-12 sm:py-20 lg:py-24">
      <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-14">
        <div>
          <Badge>{congress.edition} · Nice</Badge>
          <h1 className="mt-6 max-w-3xl text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.045em] text-brand-deep sm:text-6xl xl:text-7xl">Journées Niçoises de <span className="text-brand">Chirurgie Digestive</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Le rendez-vous de la chirurgie digestive à Nice. Une nouvelle édition se prépare autour du partage d’expertise et de la transmission.</p>
          <div className="mt-8 flex flex-wrap gap-3"><LinkButton href="/programme">Le programme à venir <ArrowRight size={17} className="ml-2" /></LinkButton><LinkButton href="/partenaires" variant="secondary">Sponsors et partenaires</LinkButton></div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-brand-deep"><span className="flex items-center gap-2"><CalendarDays size={18} />{congress.dateLabel}</span><span className="flex items-center gap-2"><MapPin size={18} />{congress.city} · {congress.venue.toLowerCase()}</span></div>
        </div>
        <figure className="relative min-h-[380px] overflow-hidden rounded-3xl bg-brand-deep sm:min-h-[500px]">
          <Image src="/images/nice/baie-des-anges-vue-generale.jpg" alt="Vue panoramique de Nice et de la baie des Anges" fill preload sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/95 via-brand-deep/10 to-transparent" />
          <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-9"><p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Ancrées à Nice, ouvertes au partage</p><p className="mt-3 text-2xl font-semibold leading-snug text-white">{congress.theme}</p><span className="mt-5 block h-1 w-12 rounded-full bg-brand-cyan" /></figcaption>
        </figure>
      </Container>
    </section>
    <section className="border-y border-brand/10 bg-white py-7"><Container className="grid gap-5 sm:grid-cols-3">{[["Dates et lieu", "À confirmer"], ["Programme scientifique", "En préparation"], ["Inscriptions", "Ouverture à venir"]].map(([label, value]) => <div key={label} className="border-l-2 border-brand-cyan pl-4"><p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{label}</p><p className="mt-2 text-lg font-semibold text-brand-deep">{value}</p></div>)}</Container></section>
    <section className="py-16 sm:py-24"><Container><SectionHeading eyebrow="Les JNCD" title="Une rencontre portée par la chirurgie digestive niçoise" description="Retrouvez progressivement les informations de la 35e édition. Le programme et les intervenants seront publiés après leur validation." /><div className="mt-10 grid gap-5 md:grid-cols-3">{values.map(({ Icon, title, text }) => <Card key={title} className="p-7"><Icon className="text-brand" size={26} /><h3 className="mt-5 text-xl font-semibold text-brand-deep">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{text}</p></Card>)}</div></Container></section>
    <section className="bg-brand-light py-16 sm:py-24"><Container className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center"><div><CongressBrand large /><p className="mt-6 max-w-md text-sm leading-7 text-slate-600">Service de chirurgie viscérale et digestive du CHU de Nice. Une identité commune au service et au congrès, déclinée pour la 35e édition.</p></div><div className="grid gap-4 sm:grid-cols-2">{[{ title: "Programme", text: "Sessions et horaires seront annoncés après validation.", href: "/programme" }, { title: "Intervenants", text: "Les orateurs et modérateurs seront présentés après confirmation.", href: "/intervenants" }].map(({ title, text, href }) => <Card key={href} className="flex flex-col p-6"><Badge className="w-fit">À venir</Badge><h2 className="mt-5 text-2xl font-semibold text-brand-deep">{title}</h2><p className="mb-6 mt-3 text-sm leading-7 text-slate-600">{text}</p><LinkButton href={href} variant="secondary" className="mt-auto">En savoir plus</LinkButton></Card>)}</div></Container></section>
    <section className="bg-brand-deep py-16 text-white"><Container className="grid items-center gap-8 lg:grid-cols-[1fr_auto]"><div><p className="text-xs font-semibold uppercase tracking-widest text-white/70">Sponsors et partenaires industriels</p><h2 className="mt-4 text-3xl font-semibold">Prendre part aux 35es JNCD</h2><p className="mt-4 max-w-2xl leading-7 text-white/80">Les modalités de soutien et le dossier partenaire seront précisés par l’organisation.</p></div><LinkButton href="/partenaires" className="border border-white/30 bg-white text-brand-deep hover:bg-brand-light">Découvrir les partenariats <ArrowRight size={17} className="ml-2" /></LinkButton></Container></section>
  </>;
}
