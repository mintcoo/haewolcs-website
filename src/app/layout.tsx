import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  // weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>
        <div className="w-full min-h-screen">
          <Navbar />

          <div className="lg:px-16 xl:px-44">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
