import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { RegistrationForm } from "@/components/registration-form";
import { Card, Container } from "@/components/ui";

export const metadata: Metadata = { title: "Inscription" };

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        eyebrow="Mode test"
        title="Inscription aux 35es JNCD"
        description="Ce formulaire teste le parcours participant. Les tarifs, catégories et conditions seront ajustés avant l’ouverture officielle."
        imageSrc="/images/nice/place-massena.jpg"
        imageAlt="La place Masséna à Nice"
        imagePosition="center"
      />
      <section className="bg-slate-50 py-16 sm:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1fr_340px]">
          <RegistrationForm />
          <aside className="space-y-5">
            <Card className="p-6">
              <h2 className="font-semibold text-slate-950">Tarifs provisoires</h2>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex justify-between border-b border-slate-200 pb-3"><span className="text-slate-600">Senior</span><strong>320 €</strong></div>
                <div className="flex justify-between border-b border-slate-200 pb-3"><span className="text-slate-600">Interne / DJ</span><strong>140 €</strong></div>
                <div className="flex justify-between border-b border-slate-200 pb-3"><span className="text-slate-600">Paramédical</span><strong>120 €</strong></div>
                <div className="flex justify-between"><span className="text-slate-600">Dîner</span><strong>À confirmer</strong></div>
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="font-semibold text-slate-950">Hébergement</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">L’hébergement sera réservé et réglé directement par chaque participant. Une sélection d’hôtels et des liens externes seront proposés dans les informations pratiques.</p>
            </Card>
          </aside>
        </Container>
      </section>
    </>
  );
}
