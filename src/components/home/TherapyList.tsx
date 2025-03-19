import { THERAPY_LIST } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function TherapyList() {
  const router = useRouter();

  const onClickTherapy = (url: string) => {
    router.push(url);
  };

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col md:flex-row h-full my-10 md:my-20 px-4 md:px-8 text-contents-responsive"
    >
      <div className="flex flex-col items-start justify-center w-full md:w-30vw mb-8 md:mb-0">
        <div className="w-16 md:w-1/6 h-1 mb-2 xl:mb-8 haewol-blue-bg"></div>
        <div className="font-semibold haewol-darkblue-title text-title-responsive">
          해월씨에스
          <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            의
          </span>{" "}
          <span className="haewol-orange-color">치료</span>
        </div>
        <div className="mt-4 text-gray-500  ">
          암치료에 관한 맞춤형 통합 치료를 진행합니다
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 flex-1 place-items-center">
        {THERAPY_LIST.map((therapy, index) => {
          console.log(therapy);
          return (
            <div
              onClick={() => onClickTherapy(therapy.url)}
              key={index}
              className="w-[35vw] h-[35vw] md:w-[25vw] md:h-[25vw] lg:w-[16vw] lg:h-[16vw] 
              rounded-full f-c-c shadow-md 
              transition-all duration-300 ease-in-out hover:scale-105 
              group cursor-pointer relative 
              overflow-hidden"
            >
              {/* 이미지가 들어갈 공간 */}
              <div className="absolute inset-0 w-full h-full m-auto">
                <Image
                  src={therapy.image}
                  alt={therapy.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* 반투명한 오버레이 */}
              <div className="absolute inset-0 group-hover:bg-white/90 transition-all duration-300"></div>
              {/* 텍스트 컨텐츠 */}
              <div
                className="relative flex flex-col items-center gap-3 p-1 text-sub-title-responsive
                         transition-all duration-300"
              >
                <div
                  className="font-bold text-white drop-shadow-md 
                           group-hover:haewol-orange-color text-center leading-tight"
                >
                  {therapy.name}
                </div>
                <div
                  className="opacity-0 group-hover:opacity-100 
                         transition-all duration-300
                         w-20 h-0.5 haewol-orange-bg"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
