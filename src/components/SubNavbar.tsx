import { ICategories } from "@/types/navbar";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import { useRouter } from "next/navigation";

interface ISubNavbarProps {
  subNavMenus: ICategories[];
  path: string;
}

// 서브 네브바
export default function SubNavbar({ subNavMenus, path }: ISubNavbarProps) {
  const router = useRouter();

  const getTabWidth = (menuLength: number) => {
    switch (menuLength) {
      case 2:
        return "w-1/2";
      case 3:
        return "w-1/3";
      case 4:
        return "w-1/4";
      case 5:
        return "w-1/5";
      case 6:
        return "w-1/6";
      default:
        return "w-40";
    }
  };

  return (
    <TabGroup>
      <TabList
        className={` bg-orange-100 text-sm md:text-base lg:text-lg f-c-c rounded-lg `}
      >
        {subNavMenus.map((menu) => {
          // story의 게시글 url도 isSelected true로 처리
          const isSelected =
            // story 게시글
            (path.startsWith("/story/") &&
              !path.includes("/story/haewol") &&
              menu.url === "/story") ||
            // haewol 게시글
            (path.startsWith("/story/haewol/") &&
              menu.url === "/story/haewol") ||
            // therapies 메뉴 (정확히 /therapies일 때만)
            (menu.url === "/therapies" && path === "/therapies") ||
            // therapies 하위 페이지 (therapies/항목명 형식)
            (path.startsWith("/therapies/") &&
              path.split("/").length === 3 &&
              menu.url === path) ||
            // 그 외 정확한 경로 매칭
            path === menu.url;

          return (
            <Tab
              key={menu.title}
              onClick={() => router.push(menu.url)}
              className={({ selected }) =>
                `px-1 py-2  ${getTabWidth(subNavMenus.length)} lg:w-48 h-full text-center cursor-pointer rounded-t-lg outline-none transition-all duration-300 
              ${
                isSelected
                  ? "bg-white text-black"
                  : "bg-transparent text-gray-800  hover:bg-orange-200"
              }`
              }
            >
              {menu.title.split(/(치료|요법)/).map((part, index) =>
                part === "치료" || part === "요법" ? (
                  <span key={index} className="md:inline block w-full">
                    {part}
                  </span>
                ) : (
                  part
                ),
              )}
            </Tab>
          );
        })}
      </TabList>
    </TabGroup>
  );
}
