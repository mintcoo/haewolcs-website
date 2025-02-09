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
  return (
    <TabGroup>
      <TabList className="min-h-10 h-5vh bg-orange-100 lg:text-lg f-c-c space-x-2 rounded-lg">
        {subNavMenus.map((menu) => {
          const isSelected = path === menu.url;

          return (
            <Tab
              key={menu.title}
              onClick={() => router.push(menu.url)}
              className={({ selected }) =>
                `px-4 py-2 w-40 text-center cursor-pointer rounded-t-lg outline-none transition-all duration-300 
              ${
                isSelected
                  ? "bg-white text-black transform scale-110"
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
