import Image from "next/image";
import Link from "next/link";
import { congress } from "@/data/site";
import { Container } from "@/components/ui";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="relative h-28 overflow-hidden border-b border-white/10 sm:h-36">
        <Image
          src="/images/nice/baie-des-anges-fleurs.jpg"
          alt="La baie de Nice vue depuis les hauteurs"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/55 to-sky-950/35" />
        <Container className="relative flex h-full items-center">
          <p className="max-w-xl text-sm font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-base">Nice · Méditerranée · Chirurgie digestive</p>
        </Container>
      </div>

      <div className="py-14">
        <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-bold text-slate-950">JN</span>
              <span className="font-semibold text-white">{congress.name}</span>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">Prototype de la plateforme officielle des {congress.edition}. Les informations publiées dans cette version sont provisoires.</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">Navigation</h3>
            <div className="grid gap-2 text-sm">
              <Link href="/programme">Programme</Link>
              <Link href="/inscription">Inscription</Link>
              <Link href="/infos-pratiques">Informations pratiques</Link>
              <Link href="/admin">Administration</Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-white">Organisation</h3>
            <p className="text-sm leading-6 text-slate-400">Service de chirurgie viscérale et digestive<br />CHU de Nice<br />Université Côte d’Azur</p>
          </div>
        </Container>
        <Container className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 JNCD · Version de test privée</p>
          <Link href="/mentions-legales">Mentions légales et confidentialité</Link>
        </Container>
      </div>
    </footer>
  );
}
