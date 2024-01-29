import { Link } from "gatsby";
import React, { useState } from "react";

interface ICategores {
  url: string;
  title: string;
}

function Navbar() {
  const categories: ICategores[] = [
    { url: "/", title: "홈" },
    { url: "/introduction", title: "해월씨에스" },
    { url: "/infoguide", title: "진료안내" },
    { url: "/therapies", title: "암통합치료" },
    { url: "/navigate", title: "오시는길" },
  ];

  const [selected, setSelected] = useState<boolean>(false);

  const onMouseOver = () => setSelected(true);
  const onMouseOut = () => setSelected(false);

  return (
    <>
      <ul className="sticky top-0 left-0 right-0 z-50 flex bg-stone-700 h-10vh">
        {categories.map((category) => (
          <Link
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            to={category.url}
            key={category.title}
            className={`nav-menu-tap text-white hover:text-sky-200 w-full`}
          >
            {category.title}
          </Link>
        ))}
      </ul>
      {selected ? (
        <div className="fixed left-0 right-0 z-50 flex bg-black opacity-70 h-10vh"></div>
      ) : null}
    </>
  );
}

export default Navbar;
