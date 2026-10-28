import { Mail } from "lucide-react";
import { congress } from "@/data/site";
import { LinkButton } from "@/components/ui";

export function OrganizationContact({ inverse = false }: { inverse?: boolean }) {
  if (!congress.contactEmail) return <p className={`text-sm leading-6 ${inverse ? "text-slate-300" : "text-slate-500"}`}>Le contact officiel de l’organisation sera communiqué prochainement.</p>;
  return <LinkButton href={`mailto:${congress.contactEmail}`} variant="secondary"><Mail size={17} className="mr-2" />Contacter l’organisation</LinkButton>;
}
