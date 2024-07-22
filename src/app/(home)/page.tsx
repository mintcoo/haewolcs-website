import FacilityCarousel from "@/components/Home/FacilityCarousel";
import MainCarousel from "@/components/Home/MainCarousel";
import NaverMap from "@/components/Home/NaverMap";
import TherapyList from "@/components/home/TherapyList";

export default function Home() {
  return (
    <>
      <MainCarousel />
      <div>메인페이지</div>
      <TherapyList />
      <FacilityCarousel />
      <NaverMap />
    </>
  );
}
