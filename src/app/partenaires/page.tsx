import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { Badge, Card, Container } from "@/components/ui";
import { partners } from "@/data/site";
export const metadata: Metadata = { title: "Partenaires" };
export default function PartnersPage() { return <><PageHero eyebrow="Soutiens" title="Partenaires institutionnels, scientifiques et industriels" description="La page pourra présenter les niveaux de partenariat, les logos, les liens externes et le dossier partenaire téléchargeable." /><section className="bg-slate-50 py-16 sm:py-24"><Container className="grid gap-5 sm:grid-cols-2">{partners.map((partner) => <Card key={partner.name} className="flex min-h-52 flex-col justify-between p-7"><div><div className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-200 bg-white text-xs font-bold text-slate-500">LOGO</div><h2 className="mt-6 text-xl font-semibold text-slate-950">{partner.name}</h2><p className="mt-2 text-sm text-slate-600">{partner.category}</p></div><div className="mt-6"><Badge className="border-slate-200 bg-slate-50 text-slate-600">{partner.status}</Badge></div></Card>)}</Container></section></>; }
