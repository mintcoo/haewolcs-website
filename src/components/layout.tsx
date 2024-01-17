import { Link } from "gatsby";
import React, { ReactNode, useState } from "react";
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
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <div className="w-full h-screen px-16 mx-auto bg-gray-300">
      <ul className="sticky top-0 left-0 right-0 flex bg-stone-700 h-1/10">
        {categories.map((category) => (
          <Link
            to={category.url}
            key={category.title}
            className={`nav-menu-tap
              ${
                selected
                  ? "text-sky-200 w-full"
                  : "text-white hover:text-sky-200 w-full"
              }`}
          >
            {category.title}
          </Link>
        ))}
      </ul>
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
