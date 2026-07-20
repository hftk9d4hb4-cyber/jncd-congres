export const congress = {
  shortName: "JNCD",
  name: "Journées Niçoises de Chirurgie Digestive",
  edition: "35e édition",
  dateLabel: "Dates à confirmer",
  city: "Nice",
  venue: "Université Côte d’Azur / CHU de Nice — lieu à confirmer",
  theme: "Innovation, expertise et transmission en chirurgie digestive",
  contactEmail: "jncd@chu-nice.fr",
};

export type ProgramItem = {
  time: string;
  title: string;
  type: "Conférence" | "Table ronde" | "Session" | "Pause" | "Atelier";
  speakers?: string;
  room?: string;
};

export const programDays: { id: string; label: string; eyebrow: string; items: ProgramItem[] }[] = [
  {
    id: "jour-1",
    label: "Journée 1",
    eyebrow: "Chirurgie d’urgence et innovation",
    items: [
      { time: "08:00", title: "Accueil des participants et café", type: "Pause", room: "Hall principal" },
      { time: "08:45", title: "Ouverture des 35es JNCD", type: "Session", speakers: "Comité d’organisation", room: "Auditorium" },
      { time: "09:00", title: "Chirurgie digestive d’urgence : quelles évolutions en 2027 ?", type: "Conférence", speakers: "Invité d’honneur — à confirmer", room: "Auditorium" },
      { time: "09:40", title: "Ischémie mésentérique aiguë : diagnostic, revascularisation et damage control", type: "Table ronde", speakers: "Experts nationaux — programme provisoire", room: "Auditorium" },
      { time: "10:40", title: "Pause et visite de l’espace partenaires", type: "Pause", room: "Forum" },
      { time: "11:15", title: "Traumatismes abdominaux complexes : stratégies multidisciplinaires", type: "Session", speakers: "Chirurgie, radiologie interventionnelle, réanimation", room: "Auditorium" },
      { time: "12:30", title: "Déjeuner", type: "Pause", room: "Espace restauration" },
      { time: "14:00", title: "Ateliers parallèles : simulation, vidéo et décisions opératoires", type: "Atelier", speakers: "Places limitées — inscription préalable", room: "Salles ateliers" },
      { time: "16:15", title: "Chirurgie robotique en urgence : état de l’art et perspectives", type: "Conférence", speakers: "Orateur à confirmer", room: "Auditorium" },
      { time: "19:30", title: "Dîner du congrès", type: "Pause", room: "Lieu à confirmer" },
    ],
  },
  {
    id: "jour-2",
    label: "Journée 2",
    eyebrow: "Oncologie, paroi et pratiques de demain",
    items: [
      { time: "08:30", title: "Accueil", type: "Pause", room: "Hall principal" },
      { time: "09:00", title: "Cancer digestif : personnaliser la stratégie chirurgicale", type: "Session", speakers: "Experts multidisciplinaires", room: "Auditorium" },
      { time: "10:10", title: "Pause et visite de l’espace partenaires", type: "Pause", room: "Forum" },
      { time: "10:40", title: "Chirurgie de la paroi abdominale : reconstruction, robotique et prévention", type: "Table ronde", speakers: "Programme provisoire", room: "Auditorium" },
      { time: "12:00", title: "Conférence de clôture : transmettre l’expertise chirurgicale", type: "Conférence", speakers: "Invité à confirmer", room: "Auditorium" },
      { time: "12:40", title: "Prix JNCD et clôture", type: "Session", speakers: "Comité scientifique", room: "Auditorium" },
    ],
  },
];

export const speakers = [
  { initials: "PB", name: "Pr Patrick Baqué", role: "Chef de service", institution: "CHU de Nice", topic: "Ouverture scientifique" },
  { initials: "DM", name: "Pr Damien Massalou", role: "Chirurgien viscéral et digestif", institution: "CHU de Nice · Université Côte d’Azur", topic: "Chirurgie d’urgence et paroi abdominale" },
  { initials: "AR", name: "Intervenant à confirmer", role: "Expert national", institution: "Centre invité", topic: "Chirurgie robotique" },
  { initials: "OI", name: "Orateur international", role: "Invité d’honneur", institution: "Institution à confirmer", topic: "Innovation en chirurgie digestive" },
  { initials: "RI", name: "Expert en radiologie interventionnelle", role: "Radiologue interventionnel", institution: "Centre partenaire", topic: "Revascularisation et hémostase" },
  { initials: "REA", name: "Expert en réanimation", role: "Médecin intensiviste", institution: "Centre partenaire", topic: "Prise en charge périopératoire" },
];

export const partners = [
  { name: "CHU de Nice", category: "Partenaire institutionnel", status: "À confirmer" },
  { name: "Université Côte d’Azur", category: "Partenaire académique", status: "À confirmer" },
  { name: "Sociétés savantes", category: "Partenaires scientifiques", status: "À confirmer" },
  { name: "Partenaires industriels", category: "Soutien au congrès", status: "Dossier à venir" },
];
