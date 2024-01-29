import { Link } from "gatsby";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { categoryListState, navbarMenuListState } from "../store/atom";

function Navbar() {
  const categories = useRecoilValue(categoryListState);
  const menusData = useRecoilValue(navbarMenuListState);

  const [selected, setSelected] = useState<boolean>(false);

  const onMouseOver = () => setSelected(true);
  const onMouseLeave = () => setSelected(false);

  return (
    <div onMouseLeave={onMouseLeave}>
      <ul className="sticky top-0 left-0 right-0 z-50 flex bg-stone-700 h-10vh">
        {categories.map((category) => (
          <Link
            onMouseOver={onMouseOver}
            to={category.url}
            key={category.title}
            className={`nav-menu-tap text-white hover:text-sky-200 w-full`}
          >
            {category.title}
          </Link>
        ))}
      </ul>
      {/* <ul
        className={`${
          selected ? "fixed" : "hidden"
        } fixed left-0 right-0 z-40 flex font-bold text-white bg-black text-1vw animate-moving opacity-70`}
      >
        {menusData.map((menus, index) => (
          <li
            key={index}
            className="w-1/5 h-full border-r-2 border-red-500 f-c-c-c bg-sky-800 first:border-l-2"
          >
            {menus.map((menu) => (
              <Link to={menu.url} key={menu.title}>
                {menu.title}
              </Link>
            ))}
          </li>
        ))}
      </ul> */}
      {selected ? (
        <ul
          className={`fixed left-0 right-0 z-40 flex font-bold text-white bg-black text-1vw animate-moving opacity-70 h-20vh`}
        >
          {menusData.map((menus, index) => (
            <li
              key={index}
              className="w-1/5 h-full border-r-2 border-red-500 f-c-c-c first:border-l-2"
            >
              {menus.map((menu) => (
                <Link
                  className="w-full text-center bg-sky-800"
                  to={menu.url}
                  key={menu.title}
                >
                  {menu.title}
                </Link>
              ))}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Navbar;
