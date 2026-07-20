import { NextResponse } from "next/server";
import { createHash } from "node:crypto";

function expectedCookie(password: string) {
  const secret = process.env.JNCD_COOKIE_SECRET ?? "jncd-private-preview-secret";
  return createHash("sha256").update(`${password}:${secret}`).digest("hex");
}

export async function POST(request: Request) {
  const data = await request.formData();
  const password = String(data.get("password") ?? "");
  const expectedPassword = process.env.JNCD_PREVIEW_PASSWORD ?? "JNCD35-demo";
  if (password !== expectedPassword) return NextResponse.redirect(new URL("/acces?erreur=1", request.url), 303);
  const response = NextResponse.redirect(new URL("/", request.url), 303);
  response.cookies.set("jncd_preview_access", expectedCookie(expectedPassword), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge: 60 * 60 * 24 * 7, path: "/" });
  return response;
}

export function getExpectedAccessCookie() {
  const password = process.env.JNCD_PREVIEW_PASSWORD ?? "JNCD35-demo";
  return expectedCookie(password);
}
