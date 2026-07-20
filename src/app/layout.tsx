import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";


export const metadata: Metadata = {
  title: { default: "JNCD · 35e édition", template: "%s · JNCD" },
  description: "Prototype privé du site des Journées Niçoises de Chirurgie Digestive.",
  robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false, noimageindex: true } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}><body className="min-h-screen bg-white text-slate-950 antialiased"><SiteHeader /><main>{children}</main><SiteFooter /></body></html>;
}
