import React, { ReactNode } from "react";
import Navbar from "./navbar";
import MainCarousel from "./maincarousel";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="w-full h-screen min-h-screen">
      <Navbar />
      <MainCarousel />
      <div className="px-16 lg:px-44">{children}</div>
    </div>
  );
}

export default Layout;
