"use client";

import { useEffect } from "react";
import NaverMapScript from "../Scripts/NaverMapScript";
import { LAT, LNG } from "@/common/constants";

export default function NaverMap() {
  // 네이버 지도 생성
  useEffect(() => {
    if (window.naver) {
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
          url: "/images/test01.png",
          size: new naver.maps.Size(200, 52),
          origin: new naver.maps.Point(0, 0),
          anchor: new naver.maps.Point(-50, 50),
        },
      });
    }
  }, []);

  return (
    <div className="flex justify-center w-full h-[80vh] ">
      <div id="map" className="w-[90%] h-full shadow-lg "></div>
      <NaverMapScript />
    </div>
  );
}
