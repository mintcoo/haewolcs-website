import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(
    pathname,
    request.cookies.get("isAdmin")?.value,
    "먼저 보자 유알엘",
  );
}
