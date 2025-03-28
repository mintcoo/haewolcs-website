import NaverMap from "@/components/home/NaverMap";
import {
  CallOutlined,
  DirectionsBusOutlined,
  DirectionsCarOutlined,
  InfoOutlined,
  PinDropOutlined,
  TrainOutlined,
} from "@mui/icons-material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는 길",
};

export default function Navigate() {
  return (
    <div className="md:contents-layout">
      <div className="w-full f-c-c-c">
        <NaverMap />
        <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 md:p-8 my-10">
          <div className="space-y-4">
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

            {/* 지하철 */}
            <div className="flex items-center hover:bg-gray-50 p-4 rounded-lg transition-colors">
              <TrainOutlined className="text-blue-600 w-8 h-8" />
              <div className="ml-6">
                <p className="text-gray-500 font-medium">지하철</p>
                <p className="text-gray-900 text-lg font-medium mt-1">
                  장산역 <span className="text-blue-600">(8번 출구)</span>
                </p>
                <p className="text-gray-700 mt-1">
                  → NC 백화점앞에서 마을버스{" "}
                  <span className="text-blue-600">2번, 7번, 10번</span> →
                  추리문학관 하차
                </p>
              </div>
            </div>

            {/* 버스 */}
            <div className="flex items-center hover:bg-gray-50 p-4 rounded-lg transition-colors">
              <DirectionsBusOutlined className="text-green-600 w-8 h-8" />
              <div className="ml-6">
                <p className="text-gray-500 font-medium">버스</p>
                <p className="text-gray-900 text-lg font-medium mt-1">
                  <span className="text-green-600">39, 100, 141, 1003</span>
                </p>
                <p className="text-gray-700">
                  → 미포 문탠로드입구 → 마을버스{" "}
                  <span className="text-green-600">2번, 7번, 10번</span> →
                  추리문학관 하차
                </p>
                <p className="text-gray-900 text-lg font-medium mt-2">
                  <span className="text-green-600">139, 200</span>
                </p>
                <p className="text-gray-700">
                  → 동백초등학교 하차 → 마을버스{" "}
                  <span className="text-green-600">2번, 7번, 10번</span> →
                  추리문학관 하차
                </p>
              </div>
            </div>

            {/* 하차 후 안내 */}
            <div className="flex items-center p-4 rounded-lg transition-colors bg-yellow-50">
              <InfoOutlined className="text-amber-600 w-8 h-8" />
              <div className="ml-6">
                <p className="text-amber-800 font-medium">추리문학관 하차 후</p>
                <p className="text-gray-800 mt-1">
                  길 건너편 계단으로 내려오시면 계단 끝{" "}
                  <span className="font-medium">"속시원한 대구탕"</span> 옆
                  건물에{" "}
                  <span className="font-medium text-amber-600">
                    "해월 씨에스 의원"
                  </span>{" "}
                  간판이 보입니다.
                </p>
              </div>
            </div>

            {/* 승용차 */}
            <div className="flex items-center hover:bg-gray-50 p-4 rounded-lg transition-colors">
              <DirectionsCarOutlined className="text-orange-600 w-8 h-8" />
              <div className="ml-6">
                <p className="text-gray-500 font-medium">승용차</p>
                <p className="text-gray-900 text-lg font-medium mt-1">
                  네비게이션 주소:{" "}
                  <span className="text-orange-600">달맞이길 227</span>
                </p>
                <p className="text-gray-700 mt-1">해월씨에스 의원 1층 주차</p>
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
