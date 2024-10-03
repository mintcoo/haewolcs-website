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
    </div>
  );
}
