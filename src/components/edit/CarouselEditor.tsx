import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
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
import { ICarouselImage } from "@/types/edit";
import { db, storage } from "@/lib/firebase";
import { FILE_MAX_SIZE } from "@/lib/constants";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";

interface ICarouselEditorProps {
  imageList: ICarouselImage[];
  carouselName: string;
}

export default function CarouselEditor({
  imageList,
  carouselName,
}: ICarouselEditorProps) {
  const { openModal } = useModal();
  const [title, setTitle] = useState<string>("");

  // 파일 업로드
  const onFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(carouselName, "으으으음?");
    const { files } = e.target;
    if (files && files.length >= 1) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > FILE_MAX_SIZE) {
          openModal("알림", "10MB 이하의 사진 업로드만 가능합니다.");
          return;
        }
        filesUploadStorage(files[i], i);
      }
    }
  };

  // 이미지 파일 Storage 저장
  const filesUploadStorage = async (file: File, idx: number) => {
    const index = imageList.length + idx;
    try {
      if (file) {
        const doc = await addDoc(collection(db, carouselName), {
          index: index,
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

  // 캐러셀 이미지 삭제
  const onDeleteImage = async (imageId: string) => {
    try {
      const imageRef = ref(storage, `${carouselName}/${imageId}`);
      await deleteDoc(doc(db, carouselName, imageId));
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

  // 타이틀 세팅
  const changeTitle = (carouselName: string) => {
    switch (carouselName) {
      case "mainCarousel":
        setTitle("1. 메인화면 최상단 슬라이드");
        break;
      case "facilityCarousel":
        setTitle("2. 메인화면 중간 슬라이드");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    changeTitle(carouselName);
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-2 w-full h-auto">
      <div className="text-lg font-bold  text-gray-800 mb-6">{title}</div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-main" direction="horizontal">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex gap-4 overflow-x-auto p-4 bg-blue-50 rounded-lg"
            >
              {imageList.map((image, idx) => {
                return (
                  <DraggableCard
                    key={image.id}
                    image={image}
                    index={idx}
                    onDeleteImage={onDeleteImage}
                  />
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <label
        htmlFor={carouselName}
        className="inline-block mt-6 text-center text-sm font-medium cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
      >
        이미지 파일 추가
      </label>
      <input
        onChange={onFilesChange}
        type="file"
        id={carouselName}
        accept="image/*"
        className="hidden"
        multiple
      ></input>
    </div>
  );
}
