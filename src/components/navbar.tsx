"use client";

import { ICategories } from "@/types/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ------ 카테고리 리스트 ------
const CATEGORY_LIST = [
  { url: "/", title: "홈" },
  { url: "/introduction", title: "해월씨에스" },
  { url: "/infoguide", title: "진료안내" },
  { url: "/therapies", title: "암통합치료" },
  { url: "/navigate", title: "오시는길" },
];

export default function Navbar() {
  // 현재 나의 페이지 url정보 가져오자
  const path = usePathname();

  return (
    <>
      <ul className="sticky top-0 left-0 right-0 z-50 flex bg-stone-700 h-10vh">
        {CATEGORY_LIST.map((category: ICategories) => (
          <Link
            // onMouseOver={onMouseOver}
            href={category.url}
            key={category.title}
            className={`nav-menu-tap text-white hover:text-sky-200 w-full`}
          >
            {category.title}
          </Link>
        ))}
      </ul>
    </>
  );
}
