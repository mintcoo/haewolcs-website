import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "@/lib/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import { compressImage } from "@/lib/commonClientFnc";
import { FILE_MAX_SIZE } from "@/lib/constants";
import { DropResult } from "react-beautiful-dnd";
import { ICarouselImage } from "@/types/edit";

interface IOnFilesChangeProps {
  event: React.ChangeEvent<HTMLInputElement>;
  imageListLength: number;
  carouselName: string;
  openModal: (title: string, message: string) => void;
}

interface IUploadImageNameProps {
  imageName: string;
  imageId: string;
  carouselName: string;
  openModal: (title: string, message: string) => void;
}
// 캐러셀 이미지 파일 업로드
export const onFilesChange = async ({
  event,
  imageListLength,
  carouselName,
  openModal,
}: IOnFilesChangeProps) => {
  const { files } = event.target;

  if (files && files.length >= 1) {
    for (let i = 0; i < files.length; i++) {
      if (files[i].size > FILE_MAX_SIZE) {
        openModal("알림", "20MB 이하의 사진 업로드만 가능합니다.");
        return;
      }
      const compressedFile = await compressImage(files[i]);
      filesUploadStorage(compressedFile, i, imageListLength, carouselName);
    }
  }
};

// 이미지 파일 Storage 저장
const filesUploadStorage = async (
  file: File,
  idx: number,
  imageListLength: number,
  carouselName: string,
) => {
  const index = imageListLength + idx;
  try {
    if (file) {
      const doc = await addDoc(collection(db, carouselName), {
        index: index,
        name: "해월씨에스",
      });
      // 이미지 저장
      const locationRef = ref(storage, `${carouselName}/${doc.id}`);
      const result = await uploadBytes(locationRef, file);
      const url = await getDownloadURL(result.ref);
      await updateDoc(doc, {
        url: url,
      });
    }
  } catch (e) {
    console.log("File Uploaded Error", e);
  }
};

// 이미지 이름 Storage 저장
export const uploadImageName = async ({
  imageName,
  imageId,
  carouselName,
  openModal,
}: IUploadImageNameProps) => {
  console.log("imageName", imageName);
  console.log("imageId", imageId);
  console.log("carouselName", carouselName);
  try {
    // 기존 문서 참조 가져오기
    const docRef = doc(db, carouselName, imageId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // 기존 문서에 이름 업데이트
      await updateDoc(docRef, {
        name: imageName,
      });
      openModal("알림", "이미지 이름이 변경되었습니다");
    } else {
      console.log("해당 이미지가 존재하지 않습니다.");
    }
  } catch (e) {
    console.log("Image Name Update Error", e);
  }
};

// 캐러셀 이미지 삭제
export const onDeleteImage = async (imageId: string, carouselName: string) => {
  try {
    const imageRef = ref(storage, `${carouselName}/${imageId}`);
    await deleteDoc(doc(db, carouselName, imageId));
    await deleteObject(imageRef);
  } catch (e) {
    console.log(e);
  }
};

// 캐러셀 이미지 재배치
export const onDragEnd = async (
  { destination, source }: DropResult,
  imageList: ICarouselImage[],
) => {
  if (destination?.index === undefined) {
    return;
  }
  const sourceRef = imageList[source.index].ref;

  imageList.forEach(async (image) => {
    // 이미지를 뒤로 이동할 때
    if (image.index >= destination!.index && image.index < source.index) {
      await updateDoc(image.ref, {
        index: image.index + 1,
      });
    }
    // 이미지를 앞으로 이동할 때
    if (image.index <= destination!.index && image.index > source.index) {
      await updateDoc(image.ref, {
        index: image.index - 1,
      });
    }
  });

  await updateDoc(sourceRef, {
    index: destination?.index,
  });
};
