"use client";

import Image from "next/image";
import Slider from "react-slick";

// ------ 캐러셀 세팅 ------
const carouselSetting = {
  customPaging: function (i: number) {
    const thumbnailImages = [
      "/images/test01.png",
      "/images/hospital.jpg",
      "/images/terrace.jpg",
      "/images/walking.jpg",
    ];
    return (
      <a>
        <Image src={thumbnailImages[i]} alt={`thumbnail-${i}`} fill />
      </a>
    );
  },
  dots: true,
  dotsClass: "slick-dots slick-thumb ",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export default function FacilityCarousel() {
  return (
    <>
      <div className="w-full bg-pink-100 f-c-c-c">
        <div className="font-semibold text-gray-700 text-3vw ">
          해월씨에스 <span className="text-orange-300">둘러보기</span>
        </div>
        <div className="mt-4 text-gray-500 text-1.2vw">
          암치료에 관한 맞춤형 통합 치료를 진행합니다
        </div>
      </div>
      <Slider
        {...carouselSetting}
        className=" mx-auto w-full xl:w-[90%] bg-slate-400"
      >
        <div className="relative h-[60vh]">
          <Image
            src="/images/test01.png"
            alt="cinna"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-[60vh]">
          <Image
            // layout="responsive"
            src="/images/hospital.jpg"
            alt="hospital"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-[60vh]">
          <Image
            // layout="responsive"
            src="/images/terrace.jpg"
            alt="terrace"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="relative h-[60vh]">
          <Image
            // layout="responsive"
            src="/images/walking.jpg"
            alt="walking"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </Slider>
    </>
  );
}
