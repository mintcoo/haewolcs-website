"use client";
import FacilityCarousel from "@/components/home/FacilityCarousel";
import NaverMap from "@/components/home/NaverMap";
import TherapyList from "@/components/home/TherapyList";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
    // 창 위치 재조절 세팅
    setTimeout(() => {
      AOS.refresh();
    }, 3000);
  }, []);

  return (
    <>
      <TherapyList />
      <FacilityCarousel />
      <NaverMap />
    </>
  );
}
