"use client";

import Image from "next/image";
import Slider from "react-slick";

// ------ 캐러셀 세팅 ------
const carouselSetting = {
  infinite: true,
  // autoplay: true,
  fade: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

export default function MainCarousel() {
  return (
    <Slider
      {...carouselSetting}
      className="overflow-hidden mx-auto w-full xl:max-h-[85vh] xl:w-[85%]"
    >
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
  );
}
