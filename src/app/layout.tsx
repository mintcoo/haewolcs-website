import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { headers } from "next/headers";

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
  const headersList = headers();
  const headerPathname = headersList.get("x-pathname") || "";
  console.log(headerPathname, "먼데패스네음@@@");
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <div className="w-full min-h-screen">
          <Navbar />
          {headerPathname !== "/" && <Header />}

          <div className="lg:px-16 xl:px-44">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
