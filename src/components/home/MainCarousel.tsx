"use client";

import { getMainCarouselImages } from "@/services/main/mainService";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function MainCarousel() {
  const path = usePathname();
  const [mainCaroImages, setMainCaroImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ------ 캐러셀 세팅 ------
  const carouselSetting = {
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 9500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current: number, next: number) => {
      setCurrentSlide(next);
    },
  };

  // 메인 캐러셀 이미지 받아와서 세팅
  const getCarouselImages = async () => {
    const imageUrls = await getMainCarouselImages();

    setMainCaroImages(imageUrls);
  };

  useEffect(() => {
    getCarouselImages();
  }, []);

  return (
    <>
      {path === "/" && (
        <Slider
          pauseOnHover={false}
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
                  className={`${currentSlide === index ? "animate-zoomout" : ""}`}
                />
              </div>
            );
          })}
        </Slider>
      )}
    </>
  );
}
