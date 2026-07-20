"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { congress } from "@/data/site";
import { Container, LinkButton } from "@/components/ui";

const links = [
  ["Programme", "/programme"],
  ["Intervenants", "/intervenants"],
  ["Informations", "/infos-pratiques"],
  ["Partenaires", "/partenaires"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="border-b border-amber-200 bg-amber-50 py-2 text-center text-xs font-semibold text-amber-900">Prototype privé · données, dates et tarifs provisoires</div>
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-bold tracking-tight text-white shadow-lg shadow-slate-900/15">JN</span>
          <span className="hidden sm:block"><span className="block text-sm font-bold tracking-tight text-slate-950">{congress.shortName} · {congress.edition}</span><span className="block text-xs text-slate-500">Chirurgie digestive · Nice</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {links.map(([label, href]) => <Link key={href} href={href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950">{label}</Link>)}
          <Link href="/admin" className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-950">Administration</Link>
        </nav>
        <div className="hidden lg:block"><LinkButton href="/inscription">S’inscrire</LinkButton></div>
        <button className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </Container>
      {open ? <div className="border-t border-slate-200 bg-white lg:hidden"><Container className="grid gap-1 py-5">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100">{label}</Link>)}<Link href="/admin" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-100">Administration</Link><LinkButton href="/inscription" className="mt-2" >S’inscrire</LinkButton></Container></div> : null}
    </header>
  </>;
}
