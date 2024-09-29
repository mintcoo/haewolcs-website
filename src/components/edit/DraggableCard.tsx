import { ICarouselImage } from "@/types/edit";
import { Cancel } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { Draggable } from "react-beautiful-dnd";

interface IDraggableCardProps {
  image: ICarouselImage;
  index: number;
  onDeleteImage: (imageId: string) => Promise<void>;
}

function DraggableCard({ image, index, onDeleteImage }: IDraggableCardProps) {
  return (
    <Draggable draggableId={image.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          className="relative w-40 h-40 border-2  bg-white active:border-orange-600 hover:border-orange-600 "
        >
          <div className="absolute left-0 top-0 z-10 text-orange-600">
            {index}
          </div>
          <Cancel
            onClick={() => {
              onDeleteImage(image.id);
            }}
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
        </li>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableCard);
