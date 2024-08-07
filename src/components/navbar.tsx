"use client";

import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/common/constants";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  // 현재 나의 페이지 url정보 가져오자
  const path = usePathname();

  const [open, setOpen] = useState<boolean>(false);

  const onMouseOver = () => setOpen(true);
  const onMouseLeave = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <div
      onMouseLeave={onMouseLeave}
      className="sticky top-0 left-0 right-0 z-50 h-10vh"
    >
      <ul className="flex justify-center sticky top-0 left-0 right-0 z-50 bg-stone-700 h-full">
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
      </ul>
      <Transition show={open}>
        <ul
          className={`fixed left-0 right-0 z-40 flex justify-center text-white bg-black text-2vw lg:text-1vw opacity-70 h-20vh font-bold trans-expand`}
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
  );
}
