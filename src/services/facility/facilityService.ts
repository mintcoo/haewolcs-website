import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface imageInfo {
  url: string;
  name: string;
}

// 시설 캐러셀 이미지 받아오기
export const getFacilityImages = async () => {
  const imageInfos: imageInfo[] = [];
  const carouselQuery = query(
    collection(db, "facilityCarousel"),
    orderBy("index"),
  );

  const querySnapshot = await getDocs(carouselQuery);
  querySnapshot.forEach((doc) => {
    const { url, name } = doc.data();
    imageInfos.push({ url, name });
  });

  return imageInfos;
};
