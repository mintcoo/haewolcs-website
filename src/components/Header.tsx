"use client";

import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/lib/constants";
import { ICategories } from "@/types/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SubNavbar from "./SubNavbar";
import HeadImageTitle from "./HeadImageTitle";

export default function Header() {
  const path = usePathname();

  const [subNavMenus, setSubNavMenus] = useState<ICategories[]>([]);

  // 서브 메뉴바 안의 내용 바꾸기
  const changeSubNavbar = (path: string) => {
    CATEGORY_LIST.forEach((category) => {
      if (category.url === path) {
        setSubNavMenus(NAVBAR_MENU_LIST[category.title]);
      }
    });
  };

  useEffect(() => {
    changeSubNavbar(path);
  }, [path]);

  return (
    <>
      {path !== "/" && path !== "/admin" && path !== "/edit" && (
        <>
          <HeadImageTitle path={path} />
          {path !== "/navigate" && (
            <SubNavbar subNavMenus={subNavMenus} path={path} />
          )}
        </>
      )}
    </>
  );
}
