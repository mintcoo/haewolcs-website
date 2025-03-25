import Footer from "@/components/Footer";
import Header from "@/components/Header";

import Modal from "@/components/common/Modal";
import MainCarousel from "@/components/home/MainCarousel";
import Navbar from "@/components/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen">
      <Modal />
      <Navbar />
      <MainCarousel />
      <Header />

      <div className="lg:px-24 xl:px-44 2xl:px-72">{children}</div>
      <Footer />
    </div>
  );
}
