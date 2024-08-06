import NaverMap from "@/components/Home/NaverMap";
import { CallOutlined, EventNote, PinDropOutlined } from "@mui/icons-material";
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
        <div className="w-full border-t-2 border-b-2 py-4 f-c-c-c my-10 gap-4">
          <div className="flex font-semibold text-xl">
            <PinDropOutlined fontSize="large" color="primary" />
            <div className="w-40 mx-10">주소</div>
            <div className="w-96">부산 해운대구 달맞이길 227(중동 1480-2)</div>
          </div>
          <div className="flex font-semibold text-xl">
            <CallOutlined fontSize="large" color="primary" />
            <div className="w-40 mx-10">대표번호</div>
            <div className="w-96">051)710-7090</div>
          </div>
          <div className="flex font-semibold text-xl">
            <EventNote fontSize="large" color="primary" />
            <div className="w-40 mx-10">진료</div>
            <div className="w-96">
              <div>평일</div>
              <div>09:00 - 17:00</div>
              <div>토요일</div>
              <div>09:00 - 17:00</div>
              <div>점심시간</div>
              <div>12:30 - 13:30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
