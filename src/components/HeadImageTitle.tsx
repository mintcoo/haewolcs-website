import Image from "next/image";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, StorageReference } from "firebase/storage";
import { storage } from "@/lib/firebase";

interface HeadImageTitleProps {
  path: string;
}

export default function HeadImageTitle({ path }: HeadImageTitleProps) {
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
    if (path.includes("/introduction")) {
      setImageRef(ref(storage, `headImages/introduction.jpg`));
      setCenterTitle("해월씨에스 소개");
      setCenterText("환자 중심의 암 요양 전문 해월씨에스");
    }
  }, [path]);

  return (
    <div className="min-h-40 h-30vh lg:text-lg f-c-c-c relative mt-[10vh]">
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
