import FacilityCarousel from "@/components/home/FacilityCarousel";
import MainCarousel from "@/components/home/MainCarousel";
import NaverMap from "@/components/home/NaverMap";
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
