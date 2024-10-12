"use client";

import { CATEGORY_LIST, NAVBAR_MENU_LIST } from "@/lib/constants";
import { ICategories } from "@/types/navbar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SubNavbar from "./SubNavbar";
import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "@/lib/firebase";
import Image from "next/image";
import HeadImageTitle from "./HeadImageTitle";

export default function Header() {
  const path = usePathname();
  const imageRef = ref(storage, `headImages/${path.slice(1)}.jpg`); // 이미지 경로 설정
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

  const [imageUrl, setImageURL] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getDownloadURL(imageRef);
        setImageURL(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [imageRef]);

  return (
    <>
      {path !== "/" && path !== "/admin" && path !== "/edit" && (
        <>
          <HeadImageTitle imageUrl={imageUrl} path={path} />
          {path !== "/navigate" && <SubNavbar subNavMenus={subNavMenus} />}
        </>
      )}
    </>
  );
}
