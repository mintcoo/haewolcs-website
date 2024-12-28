import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAdmin = request.cookies.get("admin")?.value;

  // 임시로 관리자 아니면 로그인페이지로
  if (isAdmin !== "true") {
    return new NextResponse("접근 권한이 없습니다", { status: 403 });
  }

  // 관리자가 아니면 관리자 페이지 접근 불가
  if (isAdmin !== "true" && pathname.startsWith("/edit")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
