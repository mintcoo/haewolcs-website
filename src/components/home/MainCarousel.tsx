"use client";

import { getImages, IImageInfo } from "@/services/common/imagesService";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function MainCarousel() {
  const path = usePathname();
  const [mainCaroImages, setMainCaroImages] = useState<IImageInfo[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ------ 캐러셀 세팅 ------
  const carouselSetting = {
    infinite: mainCaroImages.length > 1,
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
    const imageUrls = await getImages("mainCarousel");

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
          className="overflow-hidden mx-auto w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen"
          // className="overflow-hidden  w-screen"
        >
          {mainCaroImages.map((imageInfo, index) => {
            return (
              <div
                key={index}
                className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen"
              >
                <Image
                  src={imageInfo.url}
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
