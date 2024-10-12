"use client";

import { useModal } from "@/hooks/useModal";
import { checkAdminAuth } from "@/lib/commonServerFnc";
import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/lib/constants";
import { authService } from "@/lib/firebase";
import { Button, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Navbar() {
  const path = usePathname();
  const router = useRouter();
  const { openModal } = useModal();
  const [open, setOpen] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const onMouseOver = () => setOpen(true);
  const onMouseLeave = () => setOpen(false);

  // 로그아웃
  const onClickLogout = () => {
    openModal("알림", "로그아웃 하시겠습니까?", async () => {
      try {
        await authService.signOut();
        handleAdminAuth(false);
        openModal("알림", "로그아웃 하였습니다");
      } catch (error) {
        openModal("알림", "로그아웃에 실패하였습니다");
        console.log("Error signing out with Google", error);
      }
    });
  };
  // 관리자 여부 cookie 세팅
  const handleAdminAuth = async (isAdmin: boolean) => {
    await checkAdminAuth(isAdmin);
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

  // 페이지 변경 시 스크롤 위치 최상단
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      {path !== "/admin" && (
        <div
          onMouseLeave={onMouseLeave}
          className="sticky top-0 left-0 right-0 z-40 h-10vh"
        >
          <ul className="flex justify-center sticky top-0 left-0 right-0 z-40 bg-white h-full border-b lg:px-16 xl:px-24 2xl:px-48">
            {CATEGORY_LIST.map((category) => (
              <Link
                onMouseOver={onMouseOver}
                href={category.url}
                key={category.title}
                className={`nav-menu-tap hover:haewol-orange-color w-1/6 ${category.title === "홈" && "mr-28"}`}
              >
                {category.title === "홈" ? (
                  <div className="relative w-full h-full bg-white">
                    <Image
                      src="/images/logo.png"
                      alt="haewol_logo"
                      fill
                      style={{ objectFit: "contain", minWidth: "10rem" }}
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
              className={`fixed left-0 right-0 z-30 flex justify-center bg-white text-2vw opacity-95 h-20vh trans-expand lg:text-1vw  lg:px-16 xl:px-24 2xl:px-48`}
            >
              {Object.entries(NAVBAR_MENU_LIST).map(([categori, subMenus]) => (
                <li
                  key={categori}
                  className={`w-1/6 h-full flex flex-col ${categori === "홈" && "mr-28"} border-t-2 border-transparent ${categori !== "홈" && "hover:border-amber-400"} transition duration-200 `}
                >
                  {subMenus.map((menu) => (
                    <Link
                      className="w-full h-1/5 f-c-c text-center hover:haewol-orange-color first:mt-2"
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
        <div className="fixed bottom-4 right-4">
          <div>한창순 원장님, 어서오세요</div>
          <div className=" flex items-end gap-1">
            <Button
              onClick={() => {
                router.push("/edit");
              }}
              className="btn-white px-7 py-1"
            >
              관리
            </Button>
            <Button onClick={onClickLogout} className="btn-dark-blue px-4 py-1">
              로그아웃
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
