"use server";

import { cookies } from "next/headers";

// 관리자 쿠키 세팅
export async function checkAdminAuth(isAdmin: boolean) {
  cookies().set("admin", `${isAdmin}`, {
    path: "/",
    httpOnly: true,
    maxAge: 24 * 60 * 60,
  });
}
