"use client";

import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/common/constants";
import { INavbarMenu } from "@/types/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const path = usePathname();
  const [subNavTitles, setSubNavTitles] = useState<INavbarMenu[]>([]);

  const switchSubNavbar = (path: string) => {
    CATEGORY_LIST.forEach(category => {
      if (category.url === path) {
        console.log(category.title, "타이틀이라도 ");
        console.log(NAVBAR_MENU_LIST[category.title]);
      }
    });
  };

  useEffect(() => {
    switchSubNavbar(path);
  }, [path]);

  return (
    <>
      {path !== "/" && (
        <>
          <div className="h-64 bg-red-100 lg:text-lg f-c-c-c"> 사진 </div>
          <div className="h-20 bg-blue-100 lg:text-lg f-c-c-c"></div>
        </>
      )}
    </>
  );
}
