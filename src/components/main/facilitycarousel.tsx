import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Slider from "react-slick";

function FacilityCarousel() {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "test01.png" }) {
        publicURL
      }
    }
  `);

  // ------ 캐러셀 세팅 ------
  const carouselSetting = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={data.myImage.publicURL} alt={`${i}`} />
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
  return (
    <>
      <div className="bg-pink-100 f-c-c-c w-30vw">
        <div className="font-semibold text-gray-700 text-3vw ">
          해월씨에스 <span className="text-orange-300">시설소개</span>
        </div>
        <div className="mt-4 text-gray-500 text-1.2vw">
          암치료에 관한 맞춤형 통합 치료를 진행합니다
        </div>
      </div>
      <Slider {...carouselSetting} className=" mx-auto w-full xl:w-[90%]">
        <StaticImage src="../../images/test01.png" alt="cinna" />

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

export default FacilityCarousel;
