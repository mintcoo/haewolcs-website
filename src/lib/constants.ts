import { ICategories, INavbarMenu } from "@/types/navbar";

// ----- 위도 및 경도 ------
export const LAT = 35.160865; // 위도
export const LNG = 129.1840298; // 경도

// ------ 카테고리 리스트 ------
export const CATEGORY_LIST: ICategories[] = [
  { url: "/", title: "홈" },
  { url: "/introduction", title: "해월씨에스 의원" },
  { url: "/infoguide", title: "진료안내" },
  { url: "/therapies", title: "암통합치료" },
  { url: "/story", title: "해월이야기" },
  { url: "/navigate", title: "오시는길" },
];

// ------ 내브바 메뉴 리스트 ------
export const NAVBAR_MENU_LIST: INavbarMenu = {
  홈: [],
  "해월씨에스 의원": [
    { url: "/introduction", title: "의원 소개" },
    { url: "/introduction/profile", title: "원장 약력" },
    { url: "/introduction/haewol", title: "해월 미리보기" },
  ],
  진료안내: [{ url: "/infoguide", title: "진료안내" }],
  암통합치료: [
    // { url: "/therapies", title: "암의 발생기전" },
    { url: "/therapies", title: "암 통합치료" },
    { url: "/therapies/high-frequency", title: "고주파 온열치료" },
    { url: "/therapies/immunity", title: "면역증강 치료" },
    { url: "/therapies/antioxidant", title: "항산화 치료" },
    { url: "/therapies/vitamin", title: "고용량 Vitamin C 요법" },
  ],
  해월이야기: [
    { url: "/story", title: "환우들과 함께" },
    { url: "/story/haewol", title: "도란도란" },
  ],
  오시는길: [],
};

// ------ 치료 프로그램 리스트------
export const THERAPY_LIST = [
  {
    url: "/therapies/high-frequency",
    name: "고주파 온열치료",
    image: "/images/therapies/frequency.png",
  },

  {
    url: "/therapies/immunity",
    name: "면역증강 치료",
    image: "/images/therapies/immunity.png",
  },
  {
    url: "/therapies/antioxidant",
    name: "항산화 치료",
    image: "/images/therapies/antioxidant.png",
  },
  {
    url: "/therapies/vitamin",
    name: "고용량 Vitamin C 요법",
    image: "/images/therapies/vitamin.png",
  },
];

// 이미지 파일 최대 업로드 용량
export const FILE_MAX_SIZE = 20 * 1024 * 1024;
