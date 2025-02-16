import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface IImageInfo {
  url: string;
  name: string;
}

// 시설 캐러셀용 이미지 받아오기
export const getImages = async (carouselName: string) => {
  const imageInfos: IImageInfo[] = [];
  const carouselQuery = query(collection(db, carouselName), orderBy("index"));

  const querySnapshot = await getDocs(carouselQuery);
  querySnapshot.forEach((doc) => {
    const { url, name } = doc.data();
    imageInfos.push({ url, name });
  });

  return imageInfos;
};
