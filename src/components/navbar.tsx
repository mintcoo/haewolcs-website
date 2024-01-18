import { Link } from "gatsby";
import React, { useState } from "react";

interface ICategores {
  url: string;
  title: string;
}

function Navbar() {
  const categories: ICategores[] = [
    { url: "/", title: "홈" },
    { url: "/introduction", title: "해월씨에스소개" },
    { url: "/infoguide", title: "진료안내" },
  ];

  const [selected, setSelected] = useState<boolean>(false);

  return (
    <ul className="sticky top-0 left-0 right-0 z-10 flex bg-stone-700 h-1/10">
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
  );
}

export default Navbar;
