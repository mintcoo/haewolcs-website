"use client";

import { getImages, IImageInfo } from "@/services/common/imagesService";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function FacilityCarousel() {
  const [facilityCaroImages, setFacilityCaroImages] = useState<IImageInfo[]>(
    [],
  );

  // ------ 캐러셀 세팅 ------
  const carouselSetting = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            src={facilityCaroImages[i].url}
            alt={`thumbnail-${i}`}
            fill
            // style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-black opacity-50 transition-opacity duration-200 hover:opacity-0 slick-thumbnail-overlay" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: facilityCaroImages.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // 시설 캐러셀 이미지 받아와서 세팅
  const getCarouselImages = async () => {
    const imageInfos = await getImages("facilityCarousel");

    setFacilityCaroImages(imageInfos);
  };

  useEffect(() => {
    getCarouselImages();
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="w-full f-c-c-c my-8 md:my-16">
        <div className="font-semibold text-gray-700 text-title-responsive">
          해월씨에스 <span className="haewol-orange-color">둘러보기</span>
        </div>
        <div className="mt-4 text-gray-500 text-contents-responsive">
          쾌적하고 편안한 환경에서 최선의 치료를 약속드립니다
        </div>
      </div>
      <Slider
        {...carouselSetting}
        className=" mx-auto w-full xl:w-[85%] overflow-x-hidden "
      >
        {facilityCaroImages.map((imageInfo, index) => {
          return (
            <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh]">
              <Image
                src={imageInfo.url}
                alt={`facility image ${index}`}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute bottom-0 left-0 border border-white w-1/5 h-[10%] bg-white bg-opacity-60 z-10 haewol-darkblue-title f-c-c-c text-contents-responsive font-semibold">
                {imageInfo.name}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
