import { Link } from "gatsby";
import React, { ReactNode } from "react";
import { Tab } from "@headlessui/react";

interface ILayoutProps {
  children: ReactNode;
}

interface ICategores {
  url: string;
  title: string;
}

const categories: ICategores[] = [
  { url: "/", title: "홈" },
  { url: "/introduction", title: "의원소개" },
  { url: "/infoguide", title: "진료안내" },
];

function Layout({ children }: ILayoutProps) {
  return (
    <div className="w-full h-screen px-16 mx-auto bg-gray-300">
      <Tab.Group>
        <Tab.List className="flex w-4/5 p-4 bg-blue-900 justify-evenly">
          {categories.map((category) => (
            <Tab
              key={category.title}
              className={({ selected }) =>
                selected
                  ? "bg-white text-blue-700 shadow w-full"
                  : "text-blue-100 hover:bg-white/[0.12] hover:text-white w-full"
              }
            >
              {category.title}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* <ul className="flex w-full text-4xl font-bold bg-black justify-evenly text-violet-600">
        <li>
          <Link to={"/"}>홈으로</Link>
        </li>
        <li>
          <Link to={"/introduction"}>의원소개</Link>
        </li>
        <li>
          <Link to={"/infoguide"}>진료안내</Link>
        </li>
      </ul> */}
      {children}
    </div>
  );
}

export default Layout;
