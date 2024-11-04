import { Theme, useTheme } from "@mui/material";
import { useGetSinglePropertyQuery } from "@/services/web-app/properties";
import { useSearchParams } from "next/navigation";

export default function usePropertiesDetails() {
  const theme = useTheme<Theme>();

  const searchParams = useSearchParams();
  const propertyId = searchParams.get("propertyId");

  const { data, isLoading, isFetching, isError } = useGetSinglePropertyQuery(
    propertyId,
    { refetchOnMountOrArgChange: true, skip: !!!propertyId }
  );

  const dataToDisplay = data?.data;

  return {
    theme,
    dataToDisplay,
    isLoading,
    isFetching,
    isError,
  };
}
