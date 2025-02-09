import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

// 메인 캐러셀 이미지 받아오기
export const getMainCarouselImages = async () => {
  const imageUrls: string[] = [];
  const mainCarouselQuery = query(
    collection(db, "mainCarousel"),
    orderBy("index"),
  );

  const querySnapshot = await getDocs(mainCarouselQuery);
  querySnapshot.forEach((doc) => {
    const { url } = doc.data();
    imageUrls.push(url);
  });

  return imageUrls;
};
