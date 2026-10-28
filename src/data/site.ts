// Informations éditoriales validées ; compléter ici après décision de l’organisation.
export const congress = {
  shortName: "JNCD",
  name: "Journées Niçoises de Chirurgie Digestive",
  edition: "35e édition",
  dateLabel: "Dates à confirmer",
  city: "Nice",
  venue: "Lieu à confirmer",
  theme: "Le partage d’expertise en chirurgie digestive, à Nice",
  contactEmail: "", // Renseigner uniquement l’adresse officielle validée.
};

export type ProgramItem = {
  time: string;
  title: string;
  type: "Conférence" | "Table ronde" | "Session" | "Pause" | "Atelier";
  speakers?: string;
  room?: string;
};
export const programDays: { id: string; label: string; eyebrow: string; items: ProgramItem[] }[] = [];
export const speakers: { initials: string; name: string; role: string; institution: string; topic: string }[] = [];
export const partners: { name: string; category: string; status: string }[] = [];
