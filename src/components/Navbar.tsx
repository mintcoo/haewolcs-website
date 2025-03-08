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
          className="fixed top-0 left-0 right-0 z-40 h-[7vh] sm:h-10vh"
        >
          {/* 모바일 햄버거 메뉴 */}
          <div className="sm:hidden flex items-center justify-between px-4 h-full bg-white border-b">
            <Link href="/" className="relative w-32 h-full">
              <Image
                src="/images/logo.png"
                alt="haewol_logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </Link>
            <button onClick={() => setOpen(!open)} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 mr-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* 데스크탑 메뉴 */}
          <ul className="hidden sm:flex justify-center fixed sm:sticky top-0 left-0 right-0 z-40 bg-white h-full border-b lg:px-16 xl:px-24 2xl:px-48">
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

          {/* 데스크탑 드롭다운 메뉴 */}
          <Transition show={open && window.innerWidth >= 640}>
            <ul className="hidden sm:flex fixed left-0 right-0 z-30 border-b justify-center bg-white text-2vw opacity-95 h-20vh trans-expand pb-4 md:text-1.5vw lg:text-1.2vw xl:text-1vw lg:px-16 xl:px-24 2xl:px-48">
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

          {/* 모바일 드롭다운 메뉴 */}
          <Transition
            show={open && window.innerWidth < 640}
            enter="transition ease-out duration-200"
            enterFrom="transform translate-x-full"
            enterTo="transform translate-x-0"
            leave="transition ease-in duration-150"
            leaveFrom="transform translate-x-0"
            leaveTo="transform translate-x-full"
          >
            <div className="sm:hidden fixed top-[7vh] sm:top-[10vh] right-0 w-2/3 h-[90vh] bg-white border-l shadow-lg z-50 overflow-y-auto">
              {CATEGORY_LIST.filter((category) => category.title !== "홈").map(
                (category) => (
                  <div key={category.title} className="border-b">
                    <Link
                      href={category.url}
                      className="block px-6 py-3 font-medium hover:haewol-orange-color"
                    >
                      {category.title}
                    </Link>
                    <div className="pl-10 pb-2">
                      {NAVBAR_MENU_LIST[category.title]?.map((menu) => (
                        <Link
                          href={menu.url}
                          key={menu.title}
                          className="block py-1.5 hover:haewol-orange-color"
                          onClick={() => setOpen(false)}
                        >
                          {menu.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </Transition>
        </div>
      )}
      {isAdmin && (
        <div className="fixed bottom-4 right-4 z-50 ">
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
