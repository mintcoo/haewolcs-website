import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Modal from "@/components/common/Modal";
import MainCarousel from "@/components/home/MainCarousel";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  // weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 해월씨에스의원",
    default: "해월씨에스의원",
  },
  description: "암치료 통합 전문 해월씨에스 의원",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <div className="w-full min-h-screen">
          <Modal />
          <Navbar />
          <MainCarousel />
          <Header />

          <div className="lg:px-16 xl:px-24 2xl:px-48">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
