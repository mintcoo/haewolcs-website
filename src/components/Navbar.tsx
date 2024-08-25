"use client";

import { checkAdminAuth } from "@/lib/commonFnc";
import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/lib/constants";
import { authService } from "@/lib/firebase";
import { useModalStore } from "@/store/useModalStore";
import { Button, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const { setModalOpen } = useModalStore();
  const [open, setOpen] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const onMouseOver = () => setOpen(true);
  const onMouseLeave = () => setOpen(false);

  // 로그아웃
  const onClickLogout = () => {
    setModalOpen("알림", "로그아웃 하시겠습니까?", async () => {
      try {
        await authService.signOut();
        handleAdminAuth(false);
        setModalOpen("알림", "로그아웃 하였습니다");
      } catch (error) {
        setModalOpen("알림", "로그아웃에 실패하였습니다");
        console.log("Error signing out with Google", error);
      }
    });
  };
  // 관리자 여부 cookie 세팅
  const handleAdminAuth = async (bool: boolean) => {
    await checkAdminAuth(bool);
  };

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    // 유저가 로그인 여부 체크
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsAdmin(true);
        handleAdminAuth(true);
      } else {
        setIsAdmin(false);
        handleAdminAuth(false);
      }
    });
  }, []);

  return (
    <>
      {path !== "/admin" && (
        <div
          onMouseLeave={onMouseLeave}
          className="sticky top-0 left-0 right-0 z-40 h-10vh"
        >
          <ul className="flex justify-center sticky top-0 left-0 right-0 z-40 bg-stone-700 h-full">
            {CATEGORY_LIST.map((category) => (
              <Link
                onMouseOver={onMouseOver}
                href={category.url}
                key={category.title}
                className={`nav-menu-tap text-white hover:text-sky-200 w-1/6`}
              >
                {category.title === "홈" ? (
                  <div className="relative w-full h-full bg-white">
                    <Image
                      src="/images/logo.png"
                      alt="haewol_logo"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                ) : (
                  category.title
                )}
              </Link>
            ))}
          </ul>
          <Transition show={open}>
            <ul
              className={`fixed left-0 right-0 z-30 flex justify-center text-white bg-black text-2vw lg:text-1vw opacity-70 h-20vh font-bold trans-expand`}
            >
              {Object.entries(NAVBAR_MENU_LIST).map(([categori, subMenus]) => (
                <li
                  key={categori}
                  className="w-1/6 h-full border-r-2 border-red-500 flex flex-col first:border-l-2"
                >
                  {subMenus.map((menu) => (
                    <Link
                      className="w-full h-1/5 f-c-c text-center bg-sky-800"
                      href={menu.url}
                      key={menu.title}
                    >
                      {menu.title}
                    </Link>
                  ))}
                </li>
              ))}
            </ul>
          </Transition>
        </div>
      )}
      {isAdmin && (
        <div className="fixed bottom-4 right-4 flex items-end gap-1">
          <div>한창순 원장님, 어서오세요</div>
          <Button
            onClick={() => {
              router.push("/edit");
            }}
            className="btn-white px-4 py-1"
          >
            관리
          </Button>
          <Button onClick={onClickLogout} className="btn-dark-blue px-4 py-1">
            로그아웃
          </Button>
        </div>
      )}
    </>
  );
}
