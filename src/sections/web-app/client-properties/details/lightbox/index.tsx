import { ImageList, ImageListItem } from "@mui/material";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { pxToRem } from "@/utils/get-font-value";
import { MouseEvent, useState } from "react";
import Image from "next/image";

export default function LightBox(props: {
  dataToDisplay: { images: string[] };
}) {
  const { dataToDisplay } = props;

  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (_event: MouseEvent<Element>, index: number) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  return (
    <>
      {dataToDisplay.images && (
        <ImageList variant="masonry" cols={3} gap={8}>
          {dataToDisplay.images.map((photo: string, index: number) => (
            <ImageListItem
              key={photo}
              onClick={(e) => handleImageClick(e, index)}
            >
              <Image
                src={photo}
                alt={`Property Image ${index + 1}`}
                loading={"lazy"}
                width={100}
                height={148}
                style={{
                  borderRadius: "8px",
                  cursor: "pointer",
                  width: "100%",
                  height: index === 0 ? pxToRem(310) : pxToRem(148),
                  objectFit: "cover",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}

      {open && (
        <Lightbox
          mainSrc={dataToDisplay.images[selectedImageIndex]}
          nextSrc={
            dataToDisplay.images[
              (selectedImageIndex + 1) % dataToDisplay.images.length
            ]
          }
          prevSrc={
            dataToDisplay.images[
              (selectedImageIndex + dataToDisplay.images.length - 1) %
                dataToDisplay.images.length
            ]
          }
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setSelectedImageIndex(
              (selectedImageIndex + dataToDisplay.images.length - 1) %
                dataToDisplay.images.length
            )
          }
          onMoveNextRequest={() =>
            setSelectedImageIndex(
              (selectedImageIndex + 1) % dataToDisplay.images.length
            )
          }
        />
      )}
    </>
  );
}
