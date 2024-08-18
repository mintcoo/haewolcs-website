"use client";

import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/lib/constants";
import { authService } from "@/lib/firebase";
import { Button, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  // 현재 나의 페이지 url정보 가져오자
  const path = usePathname();

  const [open, setOpen] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const onMouseOver = () => setOpen(true);
  const onMouseLeave = () => setOpen(false);

  // 로그아웃
  const onClickLogout = () => {
    // try {
    //   return authService.signOut();
    // } catch (error) {
    //   console.error("Error signing out with Google", error);
    // }
  };

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    // 유저가 로그인했는지 여부 체크
    authService.onAuthStateChanged(user => {
      if (user) {
        console.log(user, "로그인 되어있음 ㅋ");
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
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
            {CATEGORY_LIST.map(category => (
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
            {isAdmin && (
              <div className="flex items-end">
                <div className="text-sky-100 h-full flex items-end">
                  한창순 원장님, 어서오세요
                </div>
                <Button
                  onClick={onClickLogout}
                  className="rounded bg-sky-600 px-2 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
                >
                  로그아웃
                </Button>
              </div>
            )}
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
                  {subMenus.map(menu => (
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
    </>
  );
}
