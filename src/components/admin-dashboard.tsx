"use client";
import { useEffect, useMemo, useState } from "react";
import { Download, RefreshCw, Trash2, Users, Utensils, WalletCards, CalendarDays } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button, Card } from "@/components/ui";

type Registration = { id: string; createdAt: string; firstName: string; lastName: string; email: string; profession: string; institution: string; category: string; attendance: string; dinner: string; status: string; amount: number };

const samples: Registration[] = [
  { id: "JNCD35-TEST-0003", createdAt: "2026-07-19T08:30:00.000Z", firstName: "Claire", lastName: "Martin", email: "claire.martin@example.test", profession: "Chirurgienne", institution: "CHU partenaire", category: "Senior", attendance: "Deux journées", dinner: "Oui", status: "Paiement test", amount: 320 },
  { id: "JNCD35-TEST-0002", createdAt: "2026-07-18T14:10:00.000Z", firstName: "Nicolas", lastName: "Robert", email: "nicolas.robert@example.test", profession: "Interne", institution: "Université partenaire", category: "Interne / docteur junior", attendance: "Deux journées", dinner: "Non", status: "En attente", amount: 140 },
  { id: "JNCD35-TEST-0001", createdAt: "2026-07-17T09:05:00.000Z", firstName: "Sophie", lastName: "Bernard", email: "sophie.bernard@example.test", profession: "IBODE", institution: "CH de démonstration", category: "Personnel paramédical", attendance: "Journée 1", dinner: "Oui", status: "Invitée", amount: 0 },
];

export function AdminDashboard() {
  const [registrations, setRegistrations] = useState<Registration[]>(samples);
  useEffect(() => { const timer = window.setTimeout(() => { const local = JSON.parse(localStorage.getItem("jncd-demo-registrations") ?? "[]") as Registration[]; setRegistrations([...local, ...samples]); }, 0); return () => window.clearTimeout(timer); }, []);
  const stats = useMemo(() => ({ total: registrations.length, dinner: registrations.filter((r) => r.dinner.startsWith("Oui")).length, amount: registrations.reduce((s, r) => s + (r.amount || 0), 0), twoDays: registrations.filter((r) => r.attendance === "Deux journées").length }), [registrations]);
  function reset() { localStorage.removeItem("jncd-demo-registrations"); setRegistrations(samples); }
  function exportCsv() { const columns = ["id","createdAt","firstName","lastName","email","profession","institution","category","attendance","dinner","status","amount"] as const; const csv = [columns.join(";"), ...registrations.map((r) => columns.map((key) => `"${String(r[key] ?? "").replaceAll('"','""')}"`).join(";"))].join("\n"); const blob = new Blob(["\ufeff" + csv], { type: "text/csv;charset=utf-8" }); const url = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = url; a.download = "jncd-inscriptions-demo.csv"; a.click(); URL.revokeObjectURL(url); }
  const statCards: Array<{ label: string; value: string | number; Icon: LucideIcon }> = [
    { label: "Participants", value: stats.total, Icon: Users },
    { label: "Dîner", value: stats.dinner, Icon: Utensils },
    { label: "Deux journées", value: stats.twoDays, Icon: CalendarDays },
    { label: "Montant simulé", value: `${stats.amount.toLocaleString("fr-FR")} €`, Icon: WalletCards },
  ];
  return <div className="space-y-8">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{statCards.map(({ label, value, Icon }) => <Card key={String(label)} className="p-5"><div className="flex items-center justify-between"><p className="text-sm font-medium text-slate-500">{String(label)}</p><Icon size={19} className="text-sky-700" /></div><p className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{String(value)}</p></Card>)}</div>
    <Card className="overflow-hidden"><div className="flex flex-col gap-4 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-semibold text-slate-950">Inscriptions de démonstration</h2><p className="mt-1 text-sm text-slate-500">Les nouvelles inscriptions créées dans ce navigateur apparaissent ici.</p></div><div className="flex flex-wrap gap-2"><Button variant="secondary" onClick={() => location.reload()}><RefreshCw size={16} className="mr-2" />Actualiser</Button><Button variant="secondary" onClick={exportCsv}><Download size={16} className="mr-2" />Exporter CSV</Button><Button variant="ghost" onClick={reset}><Trash2 size={16} className="mr-2" />Réinitialiser</Button></div></div>
      <div className="overflow-x-auto"><table className="w-full min-w-[920px] text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr>{["Dossier","Participant","Établissement","Catégorie","Participation","Dîner","Statut"].map((h) => <th key={h} className="px-5 py-4 font-semibold">{h}</th>)}</tr></thead><tbody className="divide-y divide-slate-200">{registrations.map((r) => <tr key={r.id} className="hover:bg-slate-50/70"><td className="px-5 py-4 font-mono text-xs font-semibold text-slate-700">{r.id}</td><td className="px-5 py-4"><p className="font-semibold text-slate-950">{r.firstName} {r.lastName}</p><p className="text-xs text-slate-500">{r.email}</p></td><td className="px-5 py-4 text-slate-600">{r.institution}</td><td className="px-5 py-4 text-slate-600">{r.category}</td><td className="px-5 py-4 text-slate-600">{r.attendance}</td><td className="px-5 py-4 text-slate-600">{r.dinner}</td><td className="px-5 py-4"><span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{r.status}</span></td></tr>)}</tbody></table></div>
    </Card>
  </div>;
}
