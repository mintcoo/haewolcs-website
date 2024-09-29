"use client";

import CarouselEditor from "@/components/edit/CarouselEditor";
import { db } from "@/lib/firebase";
import { ICarouselImage } from "@/types/edit";
import { Unsubscribe } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Edit() {
  const [mainCaroImages, setMainCaroImages] = useState<ICarouselImage[]>([]);

  const fetchImages = async (carouselName: string) => {
    const carouselQuery = query(collection(db, carouselName), orderBy("index"));

    const unsubscribe = await onSnapshot(carouselQuery, (snapshot) => {
      const imageUrls = snapshot.docs.map((doc, idx) => {
        const { url } = doc.data();
        return {
          url,
          id: doc.id,
          index: idx,
          ref: doc.ref,
        };
      });
      setMainCaroImages(imageUrls);
    });

    return unsubscribe;
  };

  // 이미지 받아와서 세팅
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    const fetchAndSetImages = async () => {
      unsubscribe = await fetchImages("mainCarousel");
    };

    fetchAndSetImages();
    // 실시간 감지 이벤트 해제
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  return (
    <div className="border h-screen p-8 bg-gray-100">
      <CarouselEditor imageList={mainCaroImages} carouselName="mainCarousel" />

      {/* <Loading /> */}
    </div>
  );
}
