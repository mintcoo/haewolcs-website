import FacilityCarousel from "@/components/Home/FacilityCarousel";
import NaverMap from "@/components/Home/NaverMap";
import TherapyList from "@/components/home/TherapyList";

export default function Home() {
  return (
    <>
      <div>메인페이지</div>
      <TherapyList />
      <FacilityCarousel />
      <NaverMap />
    </>
  );
}
