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
  icons: {
    icon: "/favicon.ico",
  },
  description: "암 통합치료 해월씨에스 의원 ",
  openGraph: {
    title: "해월씨에스 의원",
    description: "암 통합치료 해월씨에스 의원 ",
    url: "https://해월씨에스.com",
    siteName: "해월씨에스 의원",
    images: [
      {
        url: "https://해월씨에스.com/images/opengraph.png",
        width: 1100,
        height: 740,
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
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
