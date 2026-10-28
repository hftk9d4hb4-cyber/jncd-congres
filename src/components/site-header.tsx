"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CongressBrand } from "@/components/congress-brand";
import { Container, LinkButton } from "@/components/ui";

const links = [["Programme", "/programme"], ["Intervenants", "/intervenants"], ["Informations", "/infos-pratiques"], ["Partenaires", "/partenaires"]] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    function escape(event: KeyboardEvent) { if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); } }
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  const navLinks = links.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={() => setOpen(false)} className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${pathname === href ? "bg-brand-light text-brand" : "text-slate-600 hover:bg-brand-light hover:text-brand"}`}>{label}</Link>);
  return <>
    <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:p-4">Aller au contenu</a>
    <div className="border-b border-brand/10 bg-brand-light px-4 py-2 text-center text-xs font-medium text-brand-deep">Prévisualisation privée · informations en cours de validation · inscriptions non ouvertes</div>
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <Container className="flex h-24 items-center justify-between gap-3">
        <Link href="/" aria-label="JNCD · 35e édition · Accueil" className="shrink-0" onClick={() => setOpen(false)}><CongressBrand /></Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">{navLinks}</nav>
        <div className="hidden lg:block"><LinkButton href="/inscription" variant="secondary">Inscription · démonstration</LinkButton></div>
        <button ref={toggle} type="button" className="grid h-11 w-11 place-items-center rounded-full border border-brand/20 text-brand lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={open} aria-controls="navigation-mobile" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
      </Container>
      {open ? <nav id="navigation-mobile" aria-label="Navigation mobile" className="border-t border-slate-200 bg-white lg:hidden"><Container className="grid gap-1 py-5">{navLinks}<LinkButton href="/inscription" variant="secondary">Inscription · démonstration</LinkButton></Container></nav> : null}
    </header>
  </>;
}
