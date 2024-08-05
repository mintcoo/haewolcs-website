"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const path = usePathname();

  return (
    <>
      {path === "/" && (
        <Slider
          {...carouselSetting}
          className="overflow-hidden mx-auto w-full xl:max-h-[80vh] xl:w-[90%]"
        >
          <div className="relative h-[80vh]">
            <Image
              src="/images/hospital.jpg"
              alt="hospital"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative h-[80vh]">
            <Image
              src="/images/terrace.jpg"
              alt="terrace"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="relative h-[80vh]">
            <Image
              src="/images/walking.jpg"
              alt="walking"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </Slider>
      )}
    </>
  );
}
