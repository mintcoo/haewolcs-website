"use client";

import { getImages, IImageInfo } from "@/services/common/imagesService";
import Image from "next/image";
import { useEffect, useState } from "react";

import Slider from "react-slick";

export default function HaewolIntroduction() {
  const [selectedImages, setSelectedImages] = useState<IImageInfo[]>([]);
  const [selectedCarouselName, setSelectedCarouselName] =
    useState<string>("haewolCarousel");

  // ------ 캐러셀 세팅 ------
  const carouselSetting = {
    customPaging: function () {
      return (
        <a>
          <Image
            src={selectedImages[selectedImages.length - 1].url}
            alt={`thumbnail-${selectedImages.length - 1}`}
            fill
            // style={{ objectFit: "cover" }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb ",
    infinite: selectedImages.length > 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setSelectedCarouselName("haewolCarousel")}
          className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
            selectedCarouselName === "haewolCarousel"
              ? "bg-orange-400 text-white shadow-lg"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          내부 시설
        </button>
        <button
          onClick={() => setSelectedCarouselName("externalCarousel")}
          className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
            selectedCarouselName === "externalCarousel"
              ? "bg-orange-400 text-white shadow-lg"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
          }`}
        >
          외부 전경
        </button>
      </div>
      <Slider {...carouselSetting} className=" mx-auto w-full xl:w-[85%] ">
        {selectedImages.map((imageInfo, index) => (
          <div key={index} className="relative h-[65vh]">
            <Image
              src={imageInfo.url}
              alt={`haewol image ${index}`}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute bottom-0 left-0 border border-white w-1/5 h-[10%] bg-white bg-opacity-60 z-10 haewol-darkblue-title f-c-c-c text-xl font-semibold">
              {imageInfo.name}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
