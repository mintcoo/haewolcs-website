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
    <Slider
      {...carouselSetting}
      className="overflow-hidden mx-auto w-full lg:max-h-[85vh] lg:w-[85%]"
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
  );
}

export default MainCarousel;
