"use client";

import Loading from "@/components/Loading";
import { useModal } from "@/hooks/useModal";
import { FILE_MAX_SIZE } from "@/lib/constants";
import { db, storage } from "@/lib/firebase";
import { IMainCarousel } from "@/types/edit";
import { Cancel } from "@mui/icons-material";
import { Unsubscribe } from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Edit() {
  const { openModal } = useModal();
  const [mainCaroImages, setMainCaroImages] = useState<IMainCarousel[]>([]);

  // 이미지 파일 업로드
  const onFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length >= 1) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > FILE_MAX_SIZE) {
          openModal("알림", "5MB 이하의 사진 업로드만 가능합니다.");
          return;
        }
        filesUploadStorage(files[i], i);
      }
    }
  };

  // 이미지 파일 업로드
  const filesUploadStorage = async (file: File, idx: number) => {
    const index = mainCaroImages.length + idx;
    try {
      if (file) {
        const doc = await addDoc(collection(db, "mainCarousel"), {
          index: index,
        });
        // 이미지 저장
        const locationRef = ref(storage, `mainCarousel/${doc.id}`);
        const result = await uploadBytes(locationRef, file);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, {
          url: url,
        });
      }
    } catch (e) {
      console.log(e);
    }
  };
  console.log(mainCaroImages, "이미지?");

  // 이미지 받아와서 세팅
  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;
    const fetchImages = async () => {
      const mainCarouselQuery = query(
        collection(db, "mainCarousel"),
        orderBy("index"),
      );

      unsubscribe = await onSnapshot(mainCarouselQuery, (snapshot) => {
        const imageUrls = snapshot.docs.map((doc) => {
          const { url } = doc.data();
          return {
            url,
            id: doc.id,
          };
        });
        setMainCaroImages(imageUrls);
      });
    };
    fetchImages();
    // 실시간 감지 이벤트 해제
    return () => {
      unsubscribe && unsubscribe();
    };
  }, []);

  const onDeleteImage = async (imageId: string) => {
    try {
      const imageRef = ref(storage, `mainCarousel/${imageId}`);
      await deleteDoc(doc(db, "mainCarousel", imageId));
      await deleteObject(imageRef);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-slate-400 ">
      <div className="flex gap-2">
        {mainCaroImages.map((image, idx) => {
          return (
            <div className="relative w-20 h-20 bg-red-200">
              <Cancel
                onClick={() => {
                  onDeleteImage(image.id);
                }}
                className="absolute right-0 top-0 z-10 cursor-pointer hover:scale-110"
              />
              <Image
                key={`main_caro_${idx}`}
                src={image.url}
                alt={`main carousel image ${idx}`}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          );
        })}
      </div>
      <input
        onChange={onFilesChange}
        type="file"
        id="file"
        accept="image/*"
        multiple
      ></input>
      <Loading />
    </div>
  );
}
