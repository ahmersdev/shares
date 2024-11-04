import { Theme, useTheme } from "@mui/material";
import { useGetSinglePropertyQuery } from "@/services/web-app/properties";
import { useSearchParams } from "next/navigation";
import { MouseEvent, useState } from "react";

export default function usePropertiesDetails() {
  const theme = useTheme<Theme>();

  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const searchParams = useSearchParams();
  const propertyId = searchParams.get("propertyId");

  const { data, isLoading, isFetching, isError } = useGetSinglePropertyQuery(
    propertyId,
    { refetchOnMountOrArgChange: true, skip: !!!propertyId }
  );

  const dataToDisplay = data?.data;

  const handleImageClick = (_event: MouseEvent<Element>, index: number) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  return {
    theme,
    dataToDisplay,
    isLoading,
    isFetching,
    isError,
    handleImageClick,
    open,
    setOpen,
    selectedImageIndex,
    setSelectedImageIndex,
  };
}
