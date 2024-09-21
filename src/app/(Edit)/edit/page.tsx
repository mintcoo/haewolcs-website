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
  getDocs,
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
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";

export default function Edit() {
  const { openModal } = useModal();
  const [mainCaroImages, setMainCaroImages] = useState<IMainCarousel[]>([]);

  // 파일 업로드
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

  // 이미지 파일 Storage 저장
  const filesUploadStorage = async (file: File, idx: number) => {
    const index = mainCaroImages.length + idx;
    try {
      if (file) {
        const doc = await addDoc(collection(db, "mainCarousel"), {
          index: index,
        });
        console.log(doc, "ㅋㅋㅋ");
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
        const imageUrls = snapshot.docs.map((doc, idx) => {
          const { url } = doc.data();
          return {
            url,
            id: doc.id,
            index: idx,
            ref: doc.ref,
          };
        });
        console.log("다시 세팅함 이미지");
        setMainCaroImages(imageUrls);
      });
    };
    fetchImages();
    // 실시간 감지 이벤트 해제
    return () => {
      console.log("실시간 이벤트 해제");
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
  // 캐러셀 이미지 재배치
  const onDragEnd = async ({ destination, source }: DropResult) => {
    if (destination?.index === undefined) {
      return;
    }
    const sourceRef = mainCaroImages[source.index].ref;

    mainCaroImages.forEach(async (image) => {
      if (image.index >= destination!.index && image.index < source.index) {
        await updateDoc(image.ref, {
          index: image.index + 1,
        });
      }
    });

    await updateDoc(sourceRef, {
      index: destination?.index,
    });
  };

  return (
    <div className="bg-slate-400 h-screen">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-main" direction="horizontal">
          {(provided, snapshot) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="f-c-c gap-2 bg-blue-100 w-full  h-1/3"
            >
              {mainCaroImages.map((image, idx) => {
                return (
                  <Draggable key={image.id} draggableId={image.id} index={idx}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className="relative w-20 h-20 border border-red-600"
                      >
                        <Cancel
                          onClick={() => {
                            onDeleteImage(image.id);
                          }}
                          className="absolute right-0 top-0 z-10 cursor-pointer hover:scale-110"
                        />
                        <Image
                          {...provided.dragHandleProps}
                          key={`main_caro_${idx}`}
                          src={image.url}
                          alt={`main carousel image ${idx}`}
                          fill
                          style={{ objectFit: "contain" }}
                        />
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
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
