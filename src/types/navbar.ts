// ------ 카테고리 리스트 ------
export interface ICategories {
  url: string;
  title: string;
}
// ------ 네브바 메뉴 --------
export interface INavbarMenu {
  [key: string]: ICategories[];
}
