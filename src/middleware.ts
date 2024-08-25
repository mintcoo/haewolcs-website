import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdmin = request.cookies.get("admin")?.value;

  if (isAdmin === "true" && pathname.startsWith("/edit")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
