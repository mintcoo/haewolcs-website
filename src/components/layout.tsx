import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

interface ILayoutProps {
  children: ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="w-full min-h-screen ">
      <Navbar />

      <div className="lg:px-16 xl:px-44">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
