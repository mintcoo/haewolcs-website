"use client";

import CarouselEditor from "@/components/edit/CarouselEditor";
import { db } from "@/lib/firebase";
import { ICarouselImage } from "@/types/edit";
import { Unsubscribe } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Edit() {
  const [carouselImages, setCarouselImages] = useState<{
    mainCarousel: ICarouselImage[];
    facilityCarousel: ICarouselImage[];
    haewolCarousel: ICarouselImage[];
    externalCarousel: ICarouselImage[];
    nearbyCarousel: ICarouselImage[];
  }>({
    mainCarousel: [],
    facilityCarousel: [],
    haewolCarousel: [],
    externalCarousel: [],
    nearbyCarousel: [],
  });

  const fetchImages = async (carouselName: string) => {
    const carouselQuery = query(collection(db, carouselName), orderBy("index"));

    const unsubscribe = await onSnapshot(carouselQuery, (snapshot) => {
      const imageUrls = snapshot.docs.map((doc, idx) => {
        const { url, name } = doc.data();
        return {
          url,
          id: doc.id,
          index: idx,
          ref: doc.ref,
          name,
        };
      });
      setCarouselImages((prev) => ({
        ...prev,
        [carouselName]: imageUrls,
      }));
    });

    return unsubscribe;
  };

  // 이미지 받아와서 세팅
  useEffect(() => {
    let unsubscribeMain: Unsubscribe | null = null;
    let unsubscribeFacility: Unsubscribe | null = null;
    let unsubscribeHaewol: Unsubscribe | null = null;
    let unsubscribeExternal: Unsubscribe | null = null;
    let unsubscribeNearby: Unsubscribe | null = null;

    const fetchAndSetImages = async () => {
      unsubscribeMain = await fetchImages("mainCarousel");
      unsubscribeFacility = await fetchImages("facilityCarousel");
      unsubscribeHaewol = await fetchImages("haewolCarousel");
      unsubscribeExternal = await fetchImages("externalCarousel");
      unsubscribeNearby = await fetchImages("nearbyCarousel");
    };

    fetchAndSetImages();
    // 실시간 감지 이벤트 해제
    return () => {
      unsubscribeMain && unsubscribeMain();
      unsubscribeFacility && unsubscribeFacility();
      unsubscribeHaewol && unsubscribeHaewol();
      unsubscribeExternal && unsubscribeExternal();
      unsubscribeNearby && unsubscribeNearby();
    };
  }, []);

  return (
    <div className="border min-h-screen p-8 bg-gray-100 mt-[10vh]">
      <CarouselEditor
        imageList={carouselImages.mainCarousel}
        carouselName="mainCarousel"
      />
      <CarouselEditor
        imageList={carouselImages.facilityCarousel}
        carouselName="facilityCarousel"
      />
      <CarouselEditor
        imageList={carouselImages.haewolCarousel}
        carouselName="haewolCarousel"
      />
      <CarouselEditor
        imageList={carouselImages.externalCarousel}
        carouselName="externalCarousel"
      />
      <CarouselEditor
        imageList={carouselImages.nearbyCarousel}
        carouselName="nearbyCarousel"
      />
      {/* <Loading /> */}
    </div>
  );
}
