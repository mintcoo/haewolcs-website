import { IMainCarousel } from "@/types/edit";
import { Cancel } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface IDraggableCardProps {
  image: IMainCarousel;
  index: number;
  onDeleteImage: (imageId: string) => Promise<void>;
}
function DraggableCard({ image, index, onDeleteImage }: IDraggableCardProps) {
  console.log(image, "바뀌냐");

  return (
    <Draggable draggableId={image.id} index={index}>
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
            key={`main_caro_${index}`}
            src={image.url}
            alt={`main carousel image ${index}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </li>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
