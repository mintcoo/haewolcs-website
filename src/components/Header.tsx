"use client";

import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/common/constants";
import { ICategories } from "@/types/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SubNavbar from "./SubNavbar";

export default function Header() {
  const path = usePathname();
  const [subNavMenus, setSubNavMenus] = useState<ICategories[]>([]);

  const switchSubNavbar = (path: string) => {
    CATEGORY_LIST.forEach(category => {
      if (category.url === path) {
        setSubNavMenus(NAVBAR_MENU_LIST[category.title]);
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
