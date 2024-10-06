import SubTitle from "@/components/common/SubTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "의원소개",
};

export default function InfoGuide() {
  return (
    <div className="contents-layout">
      <div className="sub-menu-title">진료안내</div>
      <div className="sub-menu-title-bar"></div>
      <SubTitle title="진료시간안내" />
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">평일</h3>
            <p className="text-gray-600">09:00 - 17:00</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-700">토요일</h3>
            <p className="text-gray-600">09:00 - 17:00</p>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <h3 className="text-lg font-semibold text-gray-700">점심시간</h3>
            <p className="text-gray-600">12:30 - 13:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}
