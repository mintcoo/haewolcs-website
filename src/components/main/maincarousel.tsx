import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";

function MainCarousel() {
  // ------ 캐러셀 세팅 ------
  const carouselSetting = {
    infinite: true,
    autoplay: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="absolute z-10 mt-16 ml-64 text-white text-2.5vw w-30vw text-stroke font-dokdo hidden 2xl:flex">
        새벽
        <br /> 그믐달 바다에 뜨다 지면
        <br /> 밝아오는 나날들 스치고
        <br /> 어느새 차오르는 보름달
        <br /> 바다는
        <br /> 밤마다 어느 달 품어
        <br /> 해월이 되다
      </div>
      <Slider
        {...carouselSetting}
        className="overflow-hidden mx-auto w-full xl:max-h-[85vh] xl:w-[85%]"
      >
        <StaticImage
          layout="fullWidth"
          src="../../images/hospital.jpg"
          alt="hospital"
          aspectRatio={16 / 9}
        />
        <StaticImage
          layout="fullWidth"
          src="../../images/terrace.jpg"
          alt="terrace"
          aspectRatio={16 / 9}
        />
        <StaticImage
          layout="fullWidth"
          src="../../images/walking.jpg"
          alt="walking"
          aspectRatio={16 / 9}
        />
      </Slider>
    </>
  );
}

export default MainCarousel;
