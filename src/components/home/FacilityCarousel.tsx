"use client";

import Image from "next/image";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { db } from "@/lib/firebase";

export default function FacilityCarousel() {
  const [facilityCaroImages, setFacilityCaroImages] = useState<string[]>([]);

  // ------ 캐러셀 세팅 ------
  const carouselSetting = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            src={facilityCaroImages[i]}
            alt={`thumbnail-${i}`}
            fill
            // style={{ objectFit: "cover" }}
          />
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

  // 시설 캐러셀 이미지 받아와서 세팅
  const getCarouselImages = async () => {
    let imageUrls: string[] = [];
    const carouselQuery = query(
      collection(db, "facilityCarousel"),
      orderBy("index"),
    );

    const querySnapshot = await getDocs(carouselQuery);
    querySnapshot.forEach((doc) => {
      const { url } = doc.data();
      imageUrls.push(url);
    });

    setFacilityCaroImages(imageUrls);
  };

  useEffect(() => {
    getCarouselImages();
  }, []);

  return (
    <div data-aos="fade-up">
      <div className="w-full bg-pink-100 f-c-c-c">
        <div className="font-semibold text-gray-700 text-2.5vw ">
          해월씨에스 <span className="haewol-orange-color">둘러보기</span>
        </div>
        <div className="mt-4 text-gray-500 text-1.1vw">
          암치료에 관한 맞춤형 통합 치료를 진행합니다
        </div>
      </div>
      <Slider
        {...carouselSetting}
        className=" mx-auto w-full xl:w-[85%] bg-slate-400"
      >
        {facilityCaroImages.map((imageUrl, index) => {
          return (
            <div className="relative h-[65vh]">
              <Image
                src={imageUrl}
                alt={`facility image ${index}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
