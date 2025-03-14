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
        className={`h-14 lg:h-5vh bg-orange-100 text-sm md:text-base lg:text-lg f-c-c rounded-lg`}
      >
        {subNavMenus.map((menu) => {
          const isSelected = path === menu.url;

          return (
            <Tab
              key={menu.title}
              onClick={() => router.push(menu.url)}
              className={({ selected }) =>
                `px-4 py-2  ${getTabWidth(subNavMenus.length)} lg:w-40 h-full text-center cursor-pointer rounded-t-lg outline-none transition-all duration-300 
              ${
                isSelected
                  ? "bg-white text-black"
                  : "bg-transparent text-gray-800  hover:bg-orange-200"
              }`
              }
            >
              {menu.title}
            </Tab>
          );
        })}
      </TabList>
    </TabGroup>
  );
}
