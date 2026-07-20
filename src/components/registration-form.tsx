"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button, Card, FieldLabel, Input, Select, Textarea } from "@/components/ui";

type Registration = {
  id: string;
  createdAt: string;
  firstName: string;
  lastName: string;
  email: string;
  profession: string;
  institution: string;
  category: string;
  attendance: string;
  dinner: string;
  dietary: string;
  status: string;
  amount: number;
};

function saveLocal(registration: Registration) {
  const current = JSON.parse(localStorage.getItem("jncd-demo-registrations") ?? "[]") as Registration[];
  localStorage.setItem("jncd-demo-registrations", JSON.stringify([registration, ...current]));
}

export function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Registration | null>(null);
  const [error, setError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); setError("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/registrations", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!response.ok) throw new Error("Impossible d’enregistrer cette inscription.");
      const registration = await response.json() as Registration;
      saveLocal(registration);
      setResult(registration);
      event.currentTarget.reset();
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Une erreur est survenue.");
    } finally { setLoading(false); }
  }

  if (result) return <Card className="p-7 sm:p-10"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700"><CheckCircle2 size={28} /></div><h2 className="mt-6 text-2xl font-semibold text-slate-950">Inscription test enregistrée</h2><p className="mt-3 text-slate-600">Le dossier <strong className="font-mono text-slate-950">{result.id}</strong> a été ajouté à la base locale de démonstration de ce navigateur.</p><div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">Aucun paiement réel n’a été déclenché. Le raccordement Stripe sera activé après validation des tarifs et de l’entité d’encaissement.</div><div className="mt-7 flex flex-wrap gap-3"><Button onClick={() => setResult(null)}>Nouvelle inscription</Button><Link href="/admin" className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-300 px-5 text-sm font-semibold text-slate-900">Voir l’administration</Link></div></Card>;

  return <form onSubmit={submit} className="space-y-7">
    <Card className="p-6 sm:p-8"><h2 className="text-xl font-semibold text-slate-950">Identité et activité professionnelle</h2><div className="mt-6 grid gap-5 sm:grid-cols-2"><div><FieldLabel htmlFor="firstName">Prénom *</FieldLabel><Input id="firstName" name="firstName" required autoComplete="given-name" /></div><div><FieldLabel htmlFor="lastName">Nom *</FieldLabel><Input id="lastName" name="lastName" required autoComplete="family-name" /></div><div><FieldLabel htmlFor="email">Adresse électronique *</FieldLabel><Input id="email" name="email" type="email" required autoComplete="email" /></div><div><FieldLabel htmlFor="profession">Profession *</FieldLabel><Input id="profession" name="profession" required placeholder="Chirurgien, interne, IBODE…" /></div><div className="sm:col-span-2"><FieldLabel htmlFor="institution">Établissement *</FieldLabel><Input id="institution" name="institution" required placeholder="CHU, CH, clinique, université…" /></div></div></Card>
    <Card className="p-6 sm:p-8"><h2 className="text-xl font-semibold text-slate-950">Participation</h2><div className="mt-6 grid gap-5 sm:grid-cols-2"><div><FieldLabel htmlFor="category">Catégorie *</FieldLabel><Select id="category" name="category" required defaultValue=""><option value="" disabled>Sélectionner</option><option>Senior</option><option>Interne / docteur junior</option><option>Étudiant</option><option>Personnel paramédical</option><option>Invité / partenaire</option></Select></div><div><FieldLabel htmlFor="attendance">Journées *</FieldLabel><Select id="attendance" name="attendance" required defaultValue="Deux journées"><option>Deux journées</option><option>Journée 1</option><option>Journée 2</option></Select></div><div><FieldLabel htmlFor="dinner">Dîner du congrès *</FieldLabel><Select id="dinner" name="dinner" required defaultValue="Non"><option>Non</option><option>Oui</option><option>Oui, avec un accompagnant</option></Select></div><div><FieldLabel htmlFor="dietary">Contraintes alimentaires</FieldLabel><Input id="dietary" name="dietary" placeholder="Aucune, végétarien, allergies…" /></div><div className="sm:col-span-2"><FieldLabel htmlFor="comments">Informations complémentaires</FieldLabel><Textarea id="comments" name="comments" placeholder="Bon de commande, accessibilité, commentaire administratif…" /></div></div></Card>
    <Card className="p-6 sm:p-8"><label className="flex items-start gap-3 text-sm leading-6 text-slate-700"><input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-slate-300 accent-slate-950" /><span>J’accepte que les informations saisies soient utilisées pour tester le parcours d’inscription JNCD. Dans cette version, elles restent enregistrées uniquement dans le navigateur utilisé.</span></label><div className="mt-5 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600"><ShieldCheck className="mt-0.5 shrink-0 text-sky-700" size={19} /><p>Mode démonstration : aucun paiement, aucune facture et aucun courriel réel. La future version utilisera Stripe Checkout, une base PostgreSQL et des courriels transactionnels.</p></div></Card>
    {error ? <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">{error}</p> : null}
    <Button type="submit" disabled={loading} className="w-full sm:w-auto">{loading ? <><Loader2 className="mr-2 animate-spin" size={18} />Enregistrement…</> : "Enregistrer l’inscription test"}</Button>
  </form>;
}
