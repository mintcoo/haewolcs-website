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
    template: "%s | 해월씨에스 의원",
    default: "해월씨에스 의원",
  },
  description: "암 통합치료 해월씨에스 의원 ",
  openGraph: {
    title: "해월씨에스 의원",
    description: "암 통합치료 해월씨에스 의원 ",
    url: "https://해월씨에스.com",
    siteName: "해월씨에스 의원",
    images: [
      {
        url: "https://해월씨에스.com/images/logo3.png",
        width: 800,
        height: 600,
        alt: "해월씨에스 의원 로고",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
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

          <div className="lg:px-24 xl:px-44 2xl:px-72">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
