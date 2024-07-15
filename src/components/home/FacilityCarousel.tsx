"use client";

import Image from "next/image";
import Slider from "react-slick";

// ------ 캐러셀 세팅 ------
const carouselSetting = {
  customPaging: function (i: number) {
    return (
      <a>
        <img src="/images/test01.png" alt={`${i}`} />
      </a>
    );
  },
  dots: true,
  dotsClass: "slick-thumb slick-dots",
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
      <Slider {...carouselSetting} className=" mx-auto w-full xl:w-[90%]">
        <Image src="/images/test01.png" alt="cinna" width={700} height={475} />

        <Image
          // layout="responsive"
          src="/images/hospital.jpg"
          alt="hospital"
          width={700}
          height={475}
        />

        <Image
          // layout="responsive"
          src="/images/terrace.jpg"
          alt="terrace"
          width={700}
          height={475}
        />
        <Image
          // layout="responsive"
          src="/images/walking.jpg"
          alt="walking"
          width={700}
          height={475}
        />
      </Slider>
    </>
  );
}
