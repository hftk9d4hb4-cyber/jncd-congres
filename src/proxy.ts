import { NextRequest, NextResponse } from "next/server";

async function digest(value: string) {
  const data = new TextEncoder().encode(value);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/acces") || pathname.startsWith("/api/access") || pathname.startsWith("/_next") || pathname === "/favicon.ico") return NextResponse.next();
  const password = process.env.JNCD_PREVIEW_PASSWORD ?? "JNCD35-demo";
  const secret = process.env.JNCD_COOKIE_SECRET ?? "jncd-private-preview-secret";
  const expected = await digest(`${password}:${secret}`);
  if (request.cookies.get("jncd_preview_access")?.value !== expected) return NextResponse.redirect(new URL("/acces", request.url));
  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

export const config = { matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"] };
