"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { db } from "@/lib/firebase";

// ------ 캐러셀 세팅 ------
const carouselSetting = {
  infinite: true,
  autoplay: true,
  fade: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function MainCarousel() {
  const path = usePathname();
  const [mainCaroImages, setMainCaroImages] = useState<string[]>([]);

  // 메인 캐러셀 이미지 받아와서 세팅
  const getCarouselImages = async () => {
    let imageUrls: string[] = [];
    const mainCarouselQuery = query(
      collection(db, "mainCarousel"),
      orderBy("index"),
    );

    const querySnapshot = await getDocs(mainCarouselQuery);
    querySnapshot.forEach((doc) => {
      const { url } = doc.data();
      imageUrls.push(url);
    });

    setMainCaroImages(imageUrls);
  };

  useEffect(() => {
    getCarouselImages();
  }, []);

  return (
    <>
      {path === "/" && (
        <Slider
          {...carouselSetting}
          className="overflow-hidden mx-auto w-full h-screen"
          // className="overflow-hidden  w-screen"
        >
          {mainCaroImages.map((imageUrl, index) => {
            return (
              <div className="relative h-screen">
                <Image
                  src={imageUrl}
                  alt={`carousel image ${index}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}
