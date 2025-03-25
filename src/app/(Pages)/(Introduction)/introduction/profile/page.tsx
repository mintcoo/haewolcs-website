import { getCareerImage } from "@/services/profile/careerService";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "약력",
};

export default async function Profile() {
  const careerImage = await getCareerImage();

  return (
    <div className="contents-layout">
      <div className="sub-menu-title">원장 약력</div>
      <div className="sub-menu-title-bar"></div>
      <div className="w-full md:w-1/2">
        <Image
          src={careerImage.url}
          alt={`career Image ${careerImage.name}`}
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-auto"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
