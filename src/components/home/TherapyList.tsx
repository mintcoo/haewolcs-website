import { THERAPY_LIST } from "@/lib/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TherapyList() {
  const router = useRouter();

  const onClickTherapy = (url: string) => {
    router.push(url);
  };

  return (
    <div data-aos="fade-up" className="flex h-full  my-20">
      <div className="flex flex-col items-start justify-center w-30vw">
        <div className="w-1/6 h-1 mb-2 xl:mb-8 haewol-blue-bg"></div>
        <div className="font-semibold text-gray-700 text-2.5vw ">
          해월씨에스의 <span className="haewol-orange-color">치료</span>
        </div>
        <div className="mt-4 text-gray-500 text-1.1vw">
          암치료에 관한 맞춤형 통합 치료를 진행합니다
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 flex-1 place-items-cente">
        {THERAPY_LIST.map((therapy, index) => {
          return (
            <div
              onClick={() => onClickTherapy(therapy.url)}
              key={index}
              className="w-[16vw] h-[16vw] rounded-full f-c-c shadow-md 
             transition-all duration-300 ease-in-out hover:scale-105 
             group cursor-pointer relative 
             overflow-hidden "
            >
              {/* 이미지가 들어갈 공간 */}
              <div className="absolute inset-0 w-full h-3/4 m-auto">
                <Image
                  src={therapy.image}
                  alt={therapy.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* 반투명한 오버레이 */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-orange-100 via-white/25 to-transparent
                         group-hover:bg-white/90 transition-all duration-300"
              ></div>
              {/* 텍스트 컨텐츠 */}
              <div
                className="relative flex flex-col items-center gap-3 p-4
                           translate-y-[-75%] group-hover:translate-y-[10%] 
                           transition-all duration-300"
              >
                <div
                  className="font-bold text-1.5vw haewol-darkblue-title
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
