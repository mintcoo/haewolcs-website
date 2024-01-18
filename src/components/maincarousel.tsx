import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import { PageProps, graphql, useStaticQuery } from "gatsby";

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

  const data = useStaticQuery<Queries.ImageUrlQuery>(graphql`
    query ImageUrl {
      allFile {
        nodes {
          publicURL
        }
      }
    }
  `);

  console.log(data, "epdlxj");
  return (
    <Slider {...carouselSetting}>
      {data?.allFile?.nodes.map((image, index) => (
        <img key={index} src={image.publicURL!} alt={image.publicURL!} />
      ))}
    </Slider>
  );
}

export default MainCarousel;
