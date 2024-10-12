import Image from "next/image";
import { useEffect, useState } from "react";

interface HeadImageTitleProps {
  imageUrl: string;
  path: string;
}

export default function HeadImageTitle({
  imageUrl,
  path,
}: HeadImageTitleProps) {
  const [centerTitle, setCenterTitle] = useState<string>("");
  const [centerText, setCenterText] = useState<string>("");

  useEffect(() => {
    switch (path) {
      case "/introduction":
        setCenterTitle("해월씨에스 소개");
        setCenterText("환자 중심의 암 요양 전문 해월씨에스");
        break;
      default:
        break;
    }
  }, [path]);

  return (
    <div className="min-h-40 h-30vh lg:text-lg f-c-c-c relative">
      <div className="bg-black bg-opacity-30 w-full h-full z-10 text-white f-c-c-c">
        <div className="font-semibold text-5xl mb-4">{centerTitle}</div>
        <div className="text-xl">{centerText}</div>
      </div>
      <Image
        src={imageUrl}
        alt="haewol_title_image"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
