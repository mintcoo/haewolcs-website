import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Slider from "react-slick";

function FacilityCarousel() {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "test01.png" }) {
        publicURL
        childImageSharp {
          resize(width: 40) {
            src
            tracedSVG
            width
            height
            aspectRatio
            originalName
          }
        }
      }
    }
  `);

  // ------ 캐러셀 세팅 ------
  const carouselSetting = {
    customPaging: function (i: number) {
      return (
        <a>
          {/* <img src={`../../images/test0${i + 1}.jpg`} alt={`${i}`} /> */}
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
  );
}

export default FacilityCarousel;
