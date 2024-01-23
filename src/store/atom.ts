import { atom, selector } from "recoil";

export interface ITherapies {
  name: string;
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
