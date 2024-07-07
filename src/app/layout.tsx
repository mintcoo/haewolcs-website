import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="w-full min-h-screen">
          <Navbar />

          <div className="lg:px-16 xl:px-44">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
