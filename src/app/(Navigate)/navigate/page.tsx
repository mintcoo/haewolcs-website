import NaverMap from "@/components/Home/NaverMap";
import { PinDropOutlined } from "@mui/icons-material";
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
        <div className="f-c-c font-semibold text-xl">
          <PinDropOutlined fontSize="large" color="primary" />
          <div className="w-40 mx-10">주소</div>
          <div>부산 해운대구 달맞이길 227(중동 1480-2)</div>
        </div>
      </div>
    </div>
  );
}
