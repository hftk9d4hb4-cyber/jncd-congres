// Informations éditoriales validées ; compléter ici après décision de l’organisation.
export const congress = {
  shortName: "JNCD",
  name: "Journées Niçoises de Chirurgie Digestive",
  edition: "35e édition",
  dateLabel: "3, 4 et 5 juin 2027",
  city: "Nice",
  venue: "Faculté de médecine de Nice",
  address: "28 avenue Valombrose, 06107 Nice Cedex 2",
  accessUrl: "https://medecine.univ-cotedazur.fr/informations-pratiques/acces",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Facult%C3%A9+de+m%C3%A9decine+28+avenue+Valombrose+Nice",
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

// Choix du prototype : les modalités et tarifs définitifs restent à valider.
export const fullAttendance = "Trois journées";
export const attendanceOptions = [
  { value: fullAttendance, label: "Les trois journées · 3, 4 et 5 juin" },
  { value: "2027-06-03", label: "Jeudi 3 juin 2027" },
  { value: "2027-06-04", label: "Vendredi 4 juin 2027" },
  { value: "2027-06-05", label: "Samedi 5 juin 2027" },
] as const;
