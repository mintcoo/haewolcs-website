import { atom, selector } from "recoil";

export interface ITherapies {
  name: string;
}

interface ICategories {
  url: string;
  title: string;
}

interface INavbarMenus {
  url: string;
  title: string;
}

// ------ 치료 프로그램 리스트------
export const therapyListState = atom<ITherapies[]>({
  key: "therapyList",
  default: [
    { name: "암 통합치료" },
    { name: "고주파 온열치료" },
    { name: "면역증강 치료" },
    { name: "항산화 치료" },
  ],
});
// ------ 카테고리 리스트 ------
export const categoryListState = atom<ICategories[]>({
  key: "categoryList",
  default: [
    { url: "/", title: "홈" },
    { url: "/introduction", title: "해월씨에스" },
    { url: "/infoguide", title: "진료안내" },
    { url: "/therapies", title: "암통합치료" },
    { url: "/navigate", title: "오시는길" },
  ],
});

// ------ 내브바 메뉴 리스트 ------
export const navbarMenuListState = atom<INavbarMenus[][]>({
  key: "navbarMenuList",
  default: [
    [],
    [
      { url: "/", title: "의원안내" },
      { url: "/introduction", title: "원장인사말" },
    ],
    [{ url: "/", title: "진료안내" }],
    [
      { url: "/", title: "암 통합치료" },
      { url: "/introduction", title: "고주파 온열치료" },
      { url: "/introduction", title: "면역증강 치료" },
    ],
    [],
  ],
});
