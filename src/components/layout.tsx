import { Link } from "gatsby";
import React, { ReactNode } from "react";
import { Tab } from "@headlessui/react";

interface ILayoutProps {
  children: ReactNode;
}

const categories = [
  { url: "/", title: "홈" },
  { url: "/introduction", title: "의원소개" },
  { url: "/infoguide", title: "진료안내" },
];

function Layout({ children }: ILayoutProps) {
  return (
    <div className="w-full h-screen px-16 mx-auto bg-gray-300">
      <div className="w-full px-2 py-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 rounded-xl bg-blue-900/20">
            {categories.map((category) => (
              <Tab
                key={category.title}
                className={({ selected }) =>
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                }
              >
                <Link to={category.url}>{category.title}</Link>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {categories.map((category) => (
              <Tab.Panel
              // key={idx}
              // className={classNames(
              //   "rounded-xl bg-white p-3",
              //   "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              // )}
              >
                {/* <ul>
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative p-3 rounded-md hover:bg-gray-100"
                    >
                      <h3 className="text-sm font-medium leading-5">
                        {post.title}
                      </h3>

                      <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{post.date}</li>
                        <li>&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li>&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul>

                      <a
                        href="#"
                        className={classNames(
                          "absolute inset-0 rounded-md",
                          "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                        )}
                      />
                    </li>
                  ))}
                </ul> */}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      {/* <Tab.Group>
        <Tab.List>
          <Tab>
            <Link to={"/"}>홈으로</Link>
          </Tab>
          <Tab>
            <Link to={"/introduction"}>의원소개</Link>
          </Tab>
          <Tab>
            <Link to={"/infoguide"}>진료안내</Link>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group> */}

      {children}
    </div>
  );
}

export default Layout;
