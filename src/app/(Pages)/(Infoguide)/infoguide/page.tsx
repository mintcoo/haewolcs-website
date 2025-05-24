import SubTitle from "@/components/common/SubTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "진료안내",
};

export default function InfoGuide() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">진료안내</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="진료안내" />
      {/* 입원 안내 메시지 */}
      <div className="infoguide-text-size haewol-darkblue-title my-4 md:my-8">
        저희 해월씨에스의원은{" "}
        <span className="font-bold infoguide-text-size haewol-darkblue-title">
          환자분들의 편의를 위해
        </span>
        <br />
        <span className="font-bold infoguide-text-size haewol-darkblue-title">
          장기 입원
        </span>
        외에{" "}
        <span className="font-bold infoguide-text-size haewol-darkblue-title">
          단기 입원
        </span>
        도 가능하도록 운영하고 있습니다.
      </div>

      <div className="max-w-5xl mx-auto p-2 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* 진료시간 섹션 */}
          <div className="space-y-8">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <h3 className="infoguide-text-size font-semibold text-gray-800">
                평일
              </h3>
              <p className="infoguide-text-size text-gray-700">09:00 - 17:30</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <h3 className="infoguide-text-size font-semibold text-gray-800">
                토요일
              </h3>
              <p className="infoguide-text-size text-gray-700">09:00 - 15:00</p>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <h3 className="infoguide-text-size font-semibold text-gray-800">
                점심시간
              </h3>
              <p className="infoguide-text-size text-gray-700">12:30 - 13:30</p>
            </div>
            <div className="mt-6 text-center bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-600 font-medium text-lg">
                ※ 일요일 및 명절은 휴진입니다
              </p>
            </div>
          </div>

          {/* 진료상담 및 예약 안내 섹션 */}
          <div className="h-full">
            <div className="h-full bg-blue-50  rounded-2xl p-8 flex flex-col justify-between">
              <div className="space-y-4 md:space-y-10">
                <h2 className="infoguide-text-size font-bold text-gray-800">
                  상담 및 예약 안내
                </h2>
                <p className="text-2xl md:text-4xl font-bold text-blue-600">
                  051) 710-7090
                </p>
              </div>
              <div className="text-base md:text-lg text-gray-600">
                ※ 전화 상담 및 예약은 24시간 가능합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
