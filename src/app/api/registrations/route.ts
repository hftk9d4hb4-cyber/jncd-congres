import { NextResponse } from "next/server";

const prices: Record<string, number> = { "Senior": 320, "Interne / docteur junior": 140, "Étudiant": 60, "Personnel paramédical": 120, "Invité / partenaire": 0 };

export async function POST(request: Request) {
  const body = await request.json();
  const required = ["firstName", "lastName", "email", "profession", "institution", "category", "attendance", "dinner"];
  if (required.some((key) => !String(body[key] ?? "").trim())) return NextResponse.json({ error: "Champs obligatoires manquants" }, { status: 400 });
  const suffix = `${Date.now().toString().slice(-6)}${Math.floor(Math.random() * 90 + 10)}`;
  return NextResponse.json({
    id: `JNCD35-TEST-${suffix}`,
    createdAt: new Date().toISOString(),
    firstName: String(body.firstName), lastName: String(body.lastName), email: String(body.email), profession: String(body.profession), institution: String(body.institution), category: String(body.category), attendance: String(body.attendance), dinner: String(body.dinner), dietary: String(body.dietary ?? ""),
    status: "En attente de paiement test",
    amount: prices[String(body.category)] ?? 0,
  }, { status: 201 });
}
