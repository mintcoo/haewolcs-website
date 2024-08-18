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
      <div className="sub-title">오시는 길</div>
      <div className="sub-title-bar"></div>
      <div className="w-full f-c-c-c">
        <NaverMap />
        <div className="w-full border-t-2 border-b-2 py-4 f-c-c-c my-10 gap-5">
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
        </div>
      </div>
    </div>
  );
}
