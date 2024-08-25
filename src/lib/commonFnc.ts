"use server";

import { cookies } from "next/headers";

// import { useModalStore } from "@/store/useModalStroe";
// import { IGlobalModalProps } from "@/types/commonFnc";

// export function globalModal({ title }: IGlobalModalProps) {
//   const { setIsModalOpen, setModalParams } = useModalStore();
//   setIsModalOpen(true);
//   setModalParams(title);
// }

export async function checkAdminAuth(bool: boolean) {
  cookies().set("admin", `${bool}`, {
    path: "/",
    httpOnly: true,
    maxAge: 24 * 60 * 60,
  });
}
