import { ICarouselImage } from "@/types/edit";
import { Cancel } from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";

interface IDraggableCardProps {
  image: ICarouselImage;
  index: number;
  carouselName: string;
  onDeleteImage: () => void;
  uploadImageName: (newName: string) => void;
}

function DraggableCard({
  image,
  index,
  onDeleteImage,
  uploadImageName,
}: IDraggableCardProps) {
  const [imageName, setImageName] = useState<string>(image.name);

  return (
    <Draggable draggableId={image.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="relative w-48 h-52 border-2  bg-white active:border-orange-600 hover:border-orange-600 "
        >
          <div className="absolute left-0 top-0 z-10 text-orange-600">
            {index}
          </div>
          <Cancel
            onClick={onDeleteImage}
            className="absolute right-0 top-0 z-10 cursor-pointer hover:scale-110"
          />
          <Image
            {...provided.dragHandleProps}
            key={`caro_image_${index}`}
            src={image.url}
            alt={`carousel image ${index}`}
            fill
            style={{ objectFit: "contain" }}
          />
          <div className="absolute bottom-0 left-0 w-full z-20 flex">
            <input
              type="text"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              placeholder={"사진 이름 입력"}
              className="w-3/4 px-2 py-1 text-sm bg-black/50 text-white placeholder-gray-300
                focus:bg-black/70 focus:outline-none transition-all duration-200
                hover:bg-black/60"
            />
            <button
              onClick={() => uploadImageName(imageName)}
              className="flex-1 px-2 py-1 bg-sky-900 text-white text-sm font-medium
                hover:bg-sky-700 transition-colors duration-200"
            >
              저장
            </button>
          </div>
        </li>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
