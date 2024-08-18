"use client";

import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/lib/constants";
import { ICategories } from "@/types/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SubNavbar from "./SubNavbar";

export default function Header() {
  const path = usePathname();
  const [subNavMenus, setSubNavMenus] = useState<ICategories[]>([]);

  // 서브 메뉴바 안의 내용 바꾸기
  const changeSubNavbar = (path: string) => {
    CATEGORY_LIST.forEach(category => {
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
      {path !== "/" && path !== "/admin" && (
        <>
          <div className="min-h-40 h-25vh bg-red-100 lg:text-lg f-c-c-c">
            {" "}
            사진{" "}
          </div>
          {path !== "/navigate" && <SubNavbar subNavMenus={subNavMenus} />}
        </>
      )}
    </>
  );
}
