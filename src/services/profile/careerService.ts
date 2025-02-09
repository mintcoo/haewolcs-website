import { storage } from "@/lib/firebase";
import { getDownloadURL, ref } from "firebase/storage";

// 약력 사진 가져오기

export const getCareerImage = async () => {
  const imageRef = ref(storage, "career/career.jpg");
  const downloadURL = await getDownloadURL(imageRef);

  return {
    name: "career",
    url: downloadURL,
  };
};
