import NaverMap from "@/components/home/NaverMap";
import {
  CallOutlined,
  EventNote,
  PinDropOutlined,
  TrainOutlined,
} from "@mui/icons-material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길",
};

export default function Navigate() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">오시는 길</div>
      <div className="sub-menu-title-bar"></div>
      <div className="w-full f-c-c-c">
        <NaverMap />
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 my-10">
          <div className="space-y-8">
            {/* 주소 정보 */}
            <div className="flex items-center hover:bg-gray-50 p-4 rounded-lg transition-colors">
              <PinDropOutlined className="text-blue-600 w-8 h-8" />
              <div className="ml-6">
                <p className="text-gray-500 font-medium">주소</p>
                <p className="text-gray-900 text-lg font-medium mt-1">
                  부산 해운대구 달맞이길 227(중동 1480-2)
                </p>
              </div>
            </div>

            {/* 대표번호 */}
            <div className="flex items-center hover:bg-gray-50 p-4 rounded-lg transition-colors">
              <CallOutlined className="text-blue-600 w-8 h-8" />
              <div className="ml-6">
                <p className="text-gray-500 font-medium">대표번호</p>
                <p className="text-gray-900 text-lg font-medium mt-1">
                  051-710-7090
                </p>
              </div>
            </div>

            {/* 진료시간 */}
            <div className="flex items-start hover:bg-gray-50 p-4 rounded-lg transition-colors">
              <EventNote className="text-blue-600 w-8 h-8" />
              <div className="ml-6">
                <p className="text-gray-500 font-medium">진료시간</p>
                <div className="mt-2 space-y-3 text-lg">
                  <div className="flex justify-between max-w-xs gap-2">
                    <span className="text-gray-700 w-20">평일</span>
                    <span className="text-gray-900 font-medium">
                      09:00 - 17:00
                    </span>
                  </div>
                  <div className="flex justify-between max-w-xs">
                    <span className="text-gray-700 w-20">토요일</span>
                    <span className="text-gray-900 font-medium">
                      09:00 - 17:00
                    </span>
                  </div>
                  <div className="flex justify-between max-w-xs text-blue-600">
                    <span className="w-20">점심시간</span>
                    <span className="font-medium">12:30 - 13:30</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 대중교통 */}
            <div className="flex items-center hover:bg-gray-50 p-4 rounded-lg transition-colors">
              <TrainOutlined className="text-blue-600 w-8 h-8" />
              <div className="ml-6">
                <p className="text-gray-500 font-medium">대중교통</p>
                <p className="text-gray-900 text-lg font-medium mt-1">
                  장산역 6번출구 마을버스{" "}
                  <span className="text-blue-600">2번, 7번</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="w-full border-t-2 border-b-2 py-4 f-c-c-c my-10 gap-5">
<div className="flex font-semibold text-xl">
  <PinDropOutlined fontSize="large" color="primary" />
  <p className="w-40 mx-10 align-bottom ">주소</p>
  <div className="w-96 font-normal">
    부산 해운대구 달맞이길 227(중동 1480-2)
  </div>
</div>
<div className="flex font-semibold text-xl">
  <CallOutlined fontSize="large" color="primary" />
  <div className="w-40 mx-10">대표번호</div>
  <div className="w-96 font-normal">051)710-7090</div>
</div>
<div className="flex font-semibold text-xl">
  <EventNote fontSize="large" color="primary" />
  <div className="w-40 mx-10">진료시간</div>
  <div className="w-96 text-lg">
    <div className="text-xl">평일</div>
    <div className="pl-8 font-normal">09:00 - 17:00</div>
    <div className="text-xl">토요일</div>
    <div className="pl-8 font-normal">09:00 - 17:00</div>
    <div className="text-xl">점심시간</div>
    <div className="pl-8 font-normal">12:30 - 13:30</div>
  </div>
</div>
</div>
<div className="w-full border-b-2 f-c-c-c">
<div className="flex font-semibold text-xl">
  <TrainOutlined fontSize="large" color="primary" />
  <div className="w-40 mx-10">대중교통</div>
  <div className="w-96 text-lg font-normal">
    장산역 6번출구 마을버스{" "}
    <span className="font-bold">2번, 7번</span>
  </div>
</div>
</div> */
}
