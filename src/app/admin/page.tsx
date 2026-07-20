import type { Metadata } from "next";
import { PageHero } from "@/components/page-shell";
import { AdminDashboard } from "@/components/admin-dashboard";
import { Container } from "@/components/ui";
export const metadata: Metadata = { title: "Administration" };
export default function AdminPage() { return <><PageHero eyebrow="Administration · démonstration" title="Pilotage des inscriptions" description="Ce tableau de bord simule le suivi des participants, du dîner, des recettes et des exports. Il sera ensuite sécurisé par une authentification nominative." /><section className="bg-slate-50 py-16 sm:py-24"><Container><AdminDashboard /></Container></section></>; }
