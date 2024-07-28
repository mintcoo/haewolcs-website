"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// ------ 카테고리 리스트 ------
const CATEGORY_LIST = [
  { url: "/", title: "홈" },
  { url: "/introduction", title: "해월씨에스" },
  { url: "/infoguide", title: "진료안내" },
  { url: "/therapies", title: "암통합치료" },
  { url: "/navigate", title: "오시는길" },
];

// ------ 내브바 메뉴 리스트 ------
const NAVBAR_MENU_LIST = [
  [],
  [
    { url: "/", title: "의원안내" },
    { url: "/introduction", title: "인사말" },
  ],
  [{ url: "/", title: "진료안내" }],
  [
    { url: "/", title: "암 통합치료" },
    { url: "/introduction", title: "고주파 온열치료" },
    { url: "/introduction", title: "면역증강 치료" },
    { url: "/introduction", title: "항산화 치료" },
  ],
  [],
];

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
      <ul className="flex sticky top-0 left-0 right-0 z-50 bg-stone-700 h-full">
        {CATEGORY_LIST.map(category => (
          <Link
            onMouseOver={onMouseOver}
            href={category.url}
            key={category.title}
            className={`nav-menu-tap text-white hover:text-sky-200 w-full`}
          >
            {category.title}
          </Link>
        ))}
      </ul>
      <Transition show={open}>
        <ul
          className={`fixed left-0 right-0 z-40 flex text-white bg-black text-2vw lg:text-1vw opacity-70 h-20vh font-bold trans-expand`}
        >
          {NAVBAR_MENU_LIST.map((menus, index) => (
            <li
              key={index}
              className="w-1/5 h-full border-r-2 border-red-500 f-c-c-c first:border-l-2"
            >
              {menus.map(menu => (
                <Link
                  className="w-full text-center bg-sky-800"
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
  // return (
  //   <div onMouseLeave={onMouseLeave}>
  //     <ul className="sticky top-0 left-0 right-0 z-50 flex bg-stone-700 h-10vh">
  //       {CATEGORY_LIST.map(category => (
  //         <Link
  //           onMouseOver={onMouseOver}
  //           href={category.url}
  //           key={category.title}
  //           className={`nav-menu-tap text-white hover:text-sky-200 w-full`}
  //         >
  //           {category.title}
  //         </Link>
  //       ))}
  //     </ul>
  //     {selected ? (
  //       <ul
  //         className={`fixed left-0 right-0 z-40 flex text-white bg-black text-2vw lg:text-1vw opacity-70 h-20vh font-bold animate-expand `}
  //       >
  //         {NAVBAR_MENU_LIST.map((menus, index) => (
  //           <li
  //             key={index}
  //             className="w-1/5 h-full border-r-2 border-red-500 f-c-c-c first:border-l-2"
  //           >
  //             {menus.map(menu => (
  //               <Link
  //                 className="w-full text-center bg-sky-800"
  //                 href={menu.url}
  //                 key={menu.title}
  //               >
  //                 {menu.title}
  //               </Link>
  //             ))}
  //           </li>
  //         ))}
  //       </ul>
  //     ) : null}
  //   </div>
  // );
}
