import type { Metadata } from "next";
import { ProgramTabs } from "@/components/program-tabs";
import { PageHero } from "@/components/page-shell";
import { Container } from "@/components/ui";

export const metadata: Metadata = { title: "Programme" };

export default function ProgrammePage() {
  return (
    <>
      <PageHero
        eyebrow="Programme provisoire"
        title="Deux journées de chirurgie digestive académique"
        description="Cette première trame permet de tester la lecture du programme sur ordinateur, tablette et téléphone. Les horaires, intervenants et lieux sont provisoires."
        imageSrc="/images/nice/promenade-coucher-de-soleil.jpg"
        imageAlt="La Promenade des Anglais et la baie de Nice au coucher du soleil"
        imagePosition="center"
      />
      <section className="bg-slate-50 py-16 sm:py-24">
        <Container>
          <ProgramTabs />
        </Container>
      </section>
    </>
  );
}
