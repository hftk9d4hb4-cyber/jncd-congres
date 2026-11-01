import { CalendarPlus } from "lucide-react";
import { cn } from "@/lib/cn";

const calendars = [
  { label: "Congrès global", dates: "3, 4 et 5 juin 2027", file: "35es-jncd-2027.ics" },
  { label: "Congrès — vendredi", dates: "Vendredi 4 juin 2027", file: "congres-vendredi-2027.ics" },
  { label: "Congrès + accréditation", dates: "Vendredi 4 et samedi 5 juin 2027", file: "congres-accreditation-2027.ics" },
];

export function AgendaButton({ className }: { className?: string }) {
  return <div role="group" aria-label="Ajouter à mon agenda : choisir une période" className={cn("flex flex-wrap gap-3", className)}>
    {calendars.map(({ label, dates, file }) => <a key={file} href={`/agenda/${file}`} download className="inline-flex min-h-14 max-w-full items-center gap-3 rounded-2xl border border-brand/25 bg-white px-4 py-3 text-brand hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"><CalendarPlus size={20} aria-hidden="true" className="shrink-0" /><span><span className="block text-sm font-semibold">{label}</span><span className="mt-1 block text-xs">{dates}</span><span className="sr-only"> — télécharger le fichier iCalendar</span></span></a>)}
  </div>;
}
