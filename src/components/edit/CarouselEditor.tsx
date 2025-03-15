import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import { ICarouselImage } from "@/types/edit";
import { useModal } from "@/hooks/useModal";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import {
  onDeleteImage,
  onDragEnd,
  onFilesChange,
  uploadImageName,
} from "@/services/edit/carouselEditService";

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

  // 타이틀 세팅
  const changeTitle = (carouselName: string) => {
    switch (carouselName) {
      case "mainCarousel":
        setTitle("1. 메인화면 최상단 슬라이드");
        break;
      case "facilityCarousel":
        setTitle("2. 메인화면 중간 슬라이드");
        break;
      case "haewolCarousel":
        setTitle("3. 해월 미리보기 '내부시설' 슬라이드");
        break;
      case "externalCarousel":
        setTitle("4. 해월 미리보기 '외부시설' 슬라이드");
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
      <DragDropContext onDragEnd={(result) => onDragEnd(result, imageList)}>
        <Droppable droppableId="droppable-main" direction="horizontal">
          {(provided) => (
            <ul
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex gap-4 overflow-x-auto p-4 bg-blue-50 rounded-lg"
            >
              {imageList.length > 0 ? (
                imageList.map((image, idx) => {
                  return (
                    <DraggableCard
                      key={image.id}
                      image={image}
                      index={idx}
                      carouselName={carouselName}
                      onDeleteImage={() => {
                        onDeleteImage(image.id, carouselName);
                      }}
                      uploadImageName={(newName) => {
                        uploadImageName({
                          imageName: newName,
                          imageId: image.id,
                          carouselName: carouselName,
                          openModal: openModal,
                        });
                      }}
                    />
                  );
                })
              ) : (
                <Loading />
              )}
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
        onChange={(e) =>
          onFilesChange({
            event: e,
            imageListLength: imageList.length,
            carouselName: carouselName,
            openModal: openModal,
          })
        }
        type="file"
        id={carouselName}
        accept="image/*"
        className="hidden"
        multiple
      ></input>
    </div>
  );
}
