"use client";

import { LAT, LNG } from "@/lib/constants";
import { useEffect } from "react";
import NaverMapScript from "../script/NaverMapScript";

export default function NaverMap() {
  // 네이버 지도 생성
  useEffect(() => {
    if (window.naver && window.naver.maps?.LatLng) {
      const mapOptions = {
        center: new naver.maps.LatLng(LAT, LNG),
        zoom: 17,
      };

      const map = new naver.maps.Map("map", mapOptions);
      new naver.maps.Marker({
        position: new naver.maps.LatLng(LAT, LNG),
        map: map,
      });
      new naver.maps.Marker({
        position: new naver.maps.LatLng(LAT, LNG),
        map: map,
        icon: {
          url: "/images/logo3.png",
          size: new naver.maps.Size(200, 53),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(-40, 50),
        },
      });
    }
  }, []);

  return (
    <>
      <div className="w-full f-c-c-c my-8 md:my-16">
        <div className="font-semibold text-gray-700 text-title-responsive">
          해월씨에스 <span className="haewol-orange-color">오시는 길</span>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="w-full flex justify-center mt-8 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] "
      >
        <div id="map" className="w-full h-full shadow-lg "></div>
        <NaverMapScript />
      </div>
    </>
  );
}
