import Image from "next/image";
import { ArrowRight, CalendarDays, MapPin, Stethoscope, Users, ShieldCheck } from "lucide-react";
import { Badge, Card, Container, LinkButton, SectionHeading } from "@/components/ui";
import { congress } from "@/data/site";

export default function HomePage() {
  return <>
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_75%_15%,rgba(125,211,252,.20),transparent_28%),linear-gradient(135deg,#f8fafc_0%,#ffffff_48%,#eef8ff_100%)] py-16 sm:py-24 lg:py-28">
      <div className="absolute left-[68%] top-20 h-[420px] w-[420px] rounded-full border border-sky-200/60" />
      <div className="absolute left-[73%] top-28 h-[310px] w-[310px] rounded-full border border-slate-300/60" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <Badge>{congress.edition}</Badge>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-7xl lg:text-[5.1rem] lg:leading-[.98]">
            Journées Niçoises de <span className="text-sky-700">Chirurgie Digestive</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">Un congrès chirurgical académique consacré au partage d’expertise, à l’innovation et à la transmission entre professionnels de la chirurgie digestive.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <LinkButton href="/inscription">Tester l’inscription <ArrowRight size={17} className="ml-2" /></LinkButton>
            <LinkButton href="/programme" variant="secondary">Découvrir le programme</LinkButton>
          </div>
          <div className="mt-10 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:gap-7">
            <span className="flex items-center gap-2"><CalendarDays size={18} className="text-sky-700" />{congress.dateLabel}</span>
            <span className="flex items-center gap-2"><MapPin size={18} className="text-sky-700" />{congress.city}</span>
          </div>
        </div>

        <div className="relative min-h-[440px] overflow-hidden rounded-[2.25rem] border border-white/80 bg-slate-200 shadow-2xl shadow-slate-900/15 sm:min-h-[520px]">
          <Image
            src="/images/nice/baie-des-anges-vue-generale.jpg"
            alt="Vue panoramique de Nice et de la baie des Anges"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 44vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-200">Fil directeur</p>
            <h2 className="mt-3 max-w-md text-2xl font-semibold tracking-tight sm:text-3xl">{congress.theme}</h2>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-white/90">
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-sm">Urgence</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-sm">Oncologie</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-sm">Robotique</span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-2 backdrop-blur-sm">Paroi</span>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <section className="border-y border-slate-200 bg-white py-8"><Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["35e","édition"],["2","journées"],["4","axes scientifiques"],["1","dîner du congrès"]].map(([n,l]) => <div key={l} className="flex items-baseline gap-3 border-l-2 border-sky-500 pl-4"><span className="text-3xl font-semibold tracking-tight text-slate-950">{n}</span><span className="text-sm text-slate-500">{l}</span></div>)}</Container></section>

    <section className="py-20 sm:py-28"><Container><SectionHeading eyebrow="Le congrès" title="Une rencontre scientifique conçue par et pour les équipes chirurgicales" description="Les JNCD réunissent chirurgiens, internes, personnels paramédicaux et partenaires autour de situations cliniques complexes, d’innovations techniques et de retours d’expérience structurés." /><div className="mt-12 grid gap-5 md:grid-cols-3">{[
      [Stethoscope,"Expertise clinique","Des sessions centrées sur les décisions opératoires, les stratégies multidisciplinaires et les données récentes."],
      [Users,"Transmission","Un dialogue direct entre équipes universitaires, centres experts, jeunes chirurgiens et professionnels paramédicaux."],
      [ShieldCheck,"Qualité et sécurité","Une approche moderne de la chirurgie intégrant simulation, facteurs humains, protocoles et évaluation des pratiques."],
    ].map(([Icon,title,text]) => <Card key={String(title)} className="p-7"><Icon className="text-sky-700" size={25} /><h3 className="mt-6 text-xl font-semibold text-slate-950">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{String(text)}</p></Card>)}</div></Container></section>

    <section className="bg-slate-50 py-20 sm:py-28"><Container><SectionHeading eyebrow="Programme scientifique" title="Une programmation en cours de construction" description="Le comité scientifique définit actuellement les thématiques, les formats et les intervenants de la 35e édition." /><div className="mt-10 grid gap-5 md:grid-cols-2"><Card className="p-7"><p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Programme</p><h3 className="mt-3 text-2xl font-semibold text-slate-950">Publication prochaine</h3><p className="mt-4 text-sm leading-6 text-slate-600">Les sessions, horaires et ateliers seront mis en ligne dès leur validation.</p><div className="mt-6"><LinkButton href="/programme" variant="secondary">Consulter la page programme</LinkButton></div></Card><Card className="p-7"><p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-700">Intervenants</p><h3 className="mt-3 text-2xl font-semibold text-slate-950">Faculty en préparation</h3><p className="mt-4 text-sm leading-6 text-slate-600">Les orateurs et modérateurs seront présentés après confirmation de leur participation.</p><div className="mt-6"><LinkButton href="/intervenants" variant="secondary">Consulter la page intervenants</LinkButton></div></Card></div></Container></section>

    <section className="bg-slate-950 py-20 text-white"><Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-300">Parcours de démonstration</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">Testez l’inscription, le dîner et l’export administratif.</h2><p className="mt-4 max-w-2xl text-slate-300">Les données sont conservées uniquement dans votre navigateur. Aucun paiement ni courriel réel n’est déclenché.</p></div><div className="flex flex-wrap gap-3"><LinkButton href="/inscription" className="bg-white text-slate-950 hover:bg-slate-100">Tester l’inscription</LinkButton><LinkButton href="/admin" variant="secondary" className="border-white/30 bg-transparent text-white hover:border-white">Ouvrir l’administration</LinkButton></div></Container></section>
  </>;
}
