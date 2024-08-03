"use client";

import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/common/constants";
import { Transition } from "@headlessui/react";
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
          {Object.entries(NAVBAR_MENU_LIST).map(([categori, subMenus]) => (
            <li
              key={categori}
              className="w-1/5 h-full border-r-2 border-red-500 f-c-c-c first:border-l-2"
            >
              {subMenus.map(menu => (
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
