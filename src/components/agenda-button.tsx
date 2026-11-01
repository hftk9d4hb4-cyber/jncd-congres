import { CalendarPlus } from "lucide-react";
import { cn } from "@/lib/cn";

export function AgendaButton({ className }: { className?: string }) {
  return <a href="/agenda/35es-jncd-2027.ics" download className={cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-brand/25 bg-white px-5 py-3 text-sm font-semibold text-brand hover:bg-brand-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4", className)}><CalendarPlus size={18} aria-hidden="true" />Ajouter à mon agenda<span className="sr-only"> — télécharger le fichier iCalendar pour les 3, 4 et 5 juin 2027</span></a>;
}
