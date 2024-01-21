import { StaticImage } from "gatsby-plugin-image";
import React from "react";
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

function MainCarousel() {
  return (
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
  );
}

export default MainCarousel;
