import Image from "next/image";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, StorageReference } from "firebase/storage";
import { storage } from "@/lib/firebase";

interface IHeadImageTitleProps {
  path: string;
}

interface IHeadImageConfig {
  [key: string]: {
    title: string;
    text: string;
    image: string;
  };
}
// 헤드 타이틀 이미지 및 텍스트 세팅
const HEAD_IMAGE_CONFIG: IHeadImageConfig = {
  introduction: {
    title: "해월씨에스 의원 소개",
    text: "환자 중심의 암 요양 전문 해월씨에스 의원",
    image: "headImages/headTitle.png",
  },
  infoguide: {
    title: "진료안내",
    text: "해월씨에스는 환우 여러분들의 시간을 소중히 여깁니다",
    image: "headImages/headTitle.png",
  },
  therapies: {
    title: "암 통합치료",
    text: "전문적이고 효율적인 암통합치료",
    image: "headImages/headTitle.png",
  },
  story: {
    title: "해월이야기",
    text: "도란도란 해월씨에스의 이야기",
    image: "headImages/headTitle.png",
  },
  navigate: {
    title: "오시는길",
    text: "환자와 보호자가 안심할 수 있도록 정성을 다합니다",
    image: "headImages/headTitle.png",
  },
};

export default function HeadImageTitle({ path }: IHeadImageTitleProps) {
  const [imageRef, setImageRef] = useState<StorageReference | null>(null);
  const [imageUrl, setImageURL] = useState<string>("");
  const [centerTitle, setCenterTitle] = useState<string>("");
  const [centerText, setCenterText] = useState<string>("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const url = await getDownloadURL(imageRef!);
        setImageURL(url);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    if (imageRef) {
      fetchImage();
    }
  }, [imageRef]);

  // imageRef 및 text 세팅
  useEffect(() => {
    const configKey = Object.keys(HEAD_IMAGE_CONFIG).find((key) =>
      path.includes(`/${key}`),
    );

    if (configKey) {
      const { title, text, image } = HEAD_IMAGE_CONFIG[configKey];
      setImageRef(ref(storage, image));
      setCenterTitle(title);
      setCenterText(text);
    }
  }, [path]);

  return (
    <div className="min-h-40 h-30vh f-c-c-c relative mt-[7vh] sm:mt-[10vh]">
      <div className="bg-black bg-opacity-30 w-full h-full z-10 text-white f-c-c-c">
        <div className="font-semibold text-2xl md:text-3xl lg:text-5xl mb-4">
          {centerTitle}
        </div>
        <div className="text-base md:text-lg lg:text-xl">{centerText}</div>
      </div>
      <Image
        src={imageUrl}
        alt="haewol_title_image"
        fill
        style={{ objectFit: "cover", objectPosition: "center 25%" }}
      />
    </div>
  );
}
