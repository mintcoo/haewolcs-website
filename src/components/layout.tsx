import React, { ReactNode } from "react";
import Navbar from "./navbar";
import MainCarousel from "./main/maincarousel";
import Footer from "./footer";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="w-full h-screen min-h-screen ">
      <Navbar />
      <MainCarousel />
      <div className="h-screen px-16 xl:px-44">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
