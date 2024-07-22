"use client";

import { useEffect } from "react";
import NaverMapScript from "../Scripts/NaverMapScript";

export default function NaverMap() {
  useEffect(() => {
    if (typeof naver !== "undefined" || naver.maps) {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 16,
      };

      const map = new naver.maps.Map("map", mapOptions);
    }
  }, []);
  // useEffect(() => {
  //   const initializeMap = () => {
  //     if (typeof naver === "undefined" || !naver.maps) {
  //       console.log("Naver Maps is not loaded");
  //       return;
  //     }

  //     const mapOptions = {
  //       center: new naver.maps.LatLng(37.3595704, 127.105399),
  //       zoom: 16,
  //     };

  //     const map = new naver.maps.Map("map", mapOptions);
  //   };

  //   const scriptCheckInterval = setInterval(() => {
  //     if (typeof naver !== "undefined" && naver.maps) {
  //       clearInterval(scriptCheckInterval);
  //       initializeMap();
  //     }
  //   }, 100);

  //   return () => {
  //     clearInterval(scriptCheckInterval);
  //   };
  // }, []);
  return (
    // <div className="w-full h-[80vh] bg-green-200 shadow-lg">
    <>
      <div id="map" className="w-full h-96"></div>
      <NaverMapScript />
    </>

    // </div>
  );
}
