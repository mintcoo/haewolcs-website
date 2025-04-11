"use client";

import { getImages, IImageInfo } from "@/services/common/imagesService";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Slider from "react-slick";

export default function HaewolIntroduction() {
  const [selectedImages, setSelectedImages] = useState<IImageInfo[]>([]);
  const [selectedCarouselName, setSelectedCarouselName] =
    useState<string>("haewolCarousel");

  const [mainSliderIndex, setMainSliderIndex] = useState(0);
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbSliderRef = useRef<Slider | null>(null);

  // 메인 슬라이더 설정
  const mainSettings = {
    dots: false, // 기본 dots 비활성화
    infinite: selectedImages.length > 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: (current: number, next: number) => {
      setMainSliderIndex(next);
      if (thumbSliderRef.current) {
        thumbSliderRef.current.slickGoTo(next);
      }
    },
  };

  // 썸네일 슬라이더 설정
  const thumbSettings = {
    dots: false,
    infinite: selectedImages.length > 1,
    speed: 500,
    slidesToShow: 5, // 한 번에 보여줄 썸네일 개수
    slidesToScroll: 1,

    swipeToSlide: true,
    centerMode: selectedImages.length > 3,
    centerPadding: "0px",
    arrows: selectedImages.length > 3,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: selectedImages.length > 3,
        },
      },
    ],
  };

  // 캐러셀 이미지 받아와서 세팅
  const getCarouselImages = async (carouselName: string) => {
    const imageInfos = await getImages(carouselName);

    setSelectedImages(imageInfos);
  };

  useEffect(() => {
    getCarouselImages(selectedCarouselName);
  }, [selectedCarouselName]);

  return (
    <div className="contents-layout">
      <div className="sub-menu-title">해월 미리보기</div>
      <div className="sub-menu-title-bar"></div>
      <div className="flex justify-center gap-4 mb-8 text-sm md:text-lg">
        <button
          onClick={() => setSelectedCarouselName("haewolCarousel")}
          className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 ${
            selectedCarouselName === "haewolCarousel"
              ? "bg-orange-400 text-white shadow-lg"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          내부 시설
        </button>
        <button
          onClick={() => setSelectedCarouselName("externalCarousel")}
          className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-medium transition-all duration-300 ${
            selectedCarouselName === "externalCarousel"
              ? "bg-orange-400 text-white shadow-lg"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          외부 전경
        </button>
      </div>
      {/* 메인 슬라이드 */}
      <div className="mx-auto w-full xl:w-[85%]">
        <Slider ref={mainSliderRef} {...mainSettings}>
          {selectedImages.map((imageInfo, index) => (
            <div key={index} className="relative aspect-[16/10]">
              <Image
                src={imageInfo.url}
                alt={`haewol image ${index}`}
                fill
                style={{ objectFit: "contain" }}
              />
              <div className="absolute bottom-0 left-0 border border-white w-1/5 h-[8%] md:h-[10%] bg-white z-10 haewol-darkblue-title f-c-c-c text-xs md:text-xl font-semibold">
                {imageInfo.name}
              </div>
            </div>
          ))}
        </Slider>
        {/* 썸네일 슬라이더 */}
        <div className="mt-4">
          <Slider ref={thumbSliderRef} {...thumbSettings}>
            {selectedImages.map((imageInfo, index) => (
              <div
                key={index}
                className={`px-1 cursor-pointer`}
                onClick={() => {
                  if (mainSliderRef.current) {
                    mainSliderRef.current.slickGoTo(index);
                  }
                }}
              >
                <div className="relative h-[8vh] md:h-[15vh]">
                  <Image
                    src={imageInfo.url}
                    alt={`thumbnail-${index}`}
                    fill
                    className="object-cover rounded"
                  />
                  <div
                    className={`absolute inset-0  bg-black  rounded hover:opacity-0 transition-all duration-300 ${mainSliderIndex === index ? "opacity-0" : " opacity-70"}`}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
