import { Theme, useTheme } from "@mui/material";
import {
  useGetSinglePropertyQuery,
  useLazyGetAddRemoveBookmarkQuery,
} from "@/services/web-app/properties";
import { useSearchParams } from "next/navigation";
import { IApiErrorResponse } from "@/interfaces";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useState } from "react";

export default function usePropertiesDetails() {
  const theme = useTheme<Theme>();

  const [buttonLoading, setButtonLoading] = useState(false);

  const searchParams = useSearchParams();
  const propertyId = searchParams.get("propertyId");

  const { data, isLoading, isFetching, isError, refetch } =
    useGetSinglePropertyQuery(propertyId, {
      refetchOnMountOrArgChange: true,
      skip: !!!propertyId,
    });

  const dataToDisplay = data?.data;

  const [getAddRemoveBookmarkTrigger] = useLazyGetAddRemoveBookmarkQuery();

  const bookmarkClickHandler = async () => {
    try {
      setButtonLoading(true);
      await getAddRemoveBookmarkTrigger(propertyId);
      if (dataToDisplay?.isBookmarked) {
        successSnackbar("Property Removed From Bookmark Successfully!");
      } else {
        successSnackbar("Property Bookmarked Successfully!");
      }
      refetch();
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    } finally {
      setButtonLoading(false);
    }
  };

  return {
    theme,
    dataToDisplay,
    isLoading,
    isFetching,
    isError,
    bookmarkClickHandler,
    buttonLoading,
  };
}
