"use client";

import { getImages, IImageInfo } from "@/services/common/imagesService";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export default function FacilityCarousel() {
  const [facilityCaroImages, setFacilityCaroImages] = useState<IImageInfo[]>(
    [],
  );
  const [mainSliderIndex, setMainSliderIndex] = useState(0);
  const mainSliderRef = useRef<Slider | null>(null);
  const thumbSliderRef = useRef<Slider | null>(null);

  // 메인 슬라이더 설정
  const mainSettings = {
    dots: false, // 기본 dots 비활성화
    infinite: facilityCaroImages.length > 1,
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
    infinite: facilityCaroImages.length > 1,
    speed: 500,
    slidesToShow: 5, // 한 번에 보여줄 썸네일 개수
    slidesToScroll: 1,

    swipeToSlide: true,
    centerMode: facilityCaroImages.length > 5,
    centerPadding: "0px",
    arrows: facilityCaroImages.length > 5,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: facilityCaroImages.length > 3,
        },
      },
    ],
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
        <div className="font-semibold haewol-darkblue-title text-title-responsive">
          해월씨에스 <span className="haewol-orange-color">둘러보기</span>
        </div>
        <div className="mt-4 text-gray-500 text-contents-responsive">
          쾌적하고 편안한 환경에서 최선의 치료를 약속드립니다
        </div>
      </div>

      <div className=" mx-auto w-full xl:w-[85%] overflow-x-hidden ">
        <Slider ref={mainSliderRef} {...mainSettings}>
          {facilityCaroImages.map((imageInfo, index) => {
            return (
              // <div className="relative h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[65vh]">
              <div key={index} className="relative aspect-[16/10]">
                <Image
                  src={imageInfo.url}
                  alt={`facility image ${index}`}
                  fill
                  style={{ objectFit: "contain" }}
                />
                <div className="absolute bottom-0 left-0 border border-white w-1/3 md:w-1/5 h-[8%] md:h-[10%] bg-white z-10 haewol-darkblue-title f-c-c-c text-base md:text-xl font-semibold">
                  {imageInfo.name}
                </div>
              </div>
            );
          })}
        </Slider>

        {/* 썸네일 슬라이더 */}
        <div className="mt-4">
          <Slider ref={thumbSliderRef} {...thumbSettings}>
            {facilityCaroImages.map((imageInfo, index) => (
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
