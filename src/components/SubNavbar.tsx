import { ICategories } from "@/types/navbar";

interface ISubNavbarProps {
  subNavMenus: ICategories[];
}

// 서브 네브바
export default function SubNavbar({ subNavMenus }: ISubNavbarProps) {
  return (
    <ul className="min-h-10 h-5vh lg:text-lg f-c-c">
      {subNavMenus.map(menu => {
        return (
          <li
            key={menu.title}
            className="border border-black w-40 h-full cursor-pointer f-c-c hover:haewol-orange-bg"
          >
            {menu.title}
          </li>
        );
      })}
    </ul>
  );
}
