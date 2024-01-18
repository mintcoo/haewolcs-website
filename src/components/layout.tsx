import React, { ReactNode } from "react";
import Navbar from "./navbar";
import MainCarousel from "./maincarousel";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="w-full h-screen mx-auto bg-gray-300">
      <Navbar />
      <MainCarousel />
      <div className="px-16">{children}</div>
    </div>
  );
}

export default Layout;
