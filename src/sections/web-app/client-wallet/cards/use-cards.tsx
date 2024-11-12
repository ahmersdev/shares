import {
  useDeleteCardMutation,
  useGetCardListQuery,
} from "@/services/web-app/wallet";
import { useState } from "react";
import { IApiErrorResponse } from "@/interfaces";
import { errorSnackbar, successSnackbar } from "@/utils/api";

export default function useCards() {
  const [openDialog, setOpenDialog] = useState(false);

  const onCloseDialogHandler = () => {
    setOpenDialog(false);
  };
  const { data, isLoading, isFetching, isError } = useGetCardListQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  const [deleteCardTrigger, deleteCardStatus] = useDeleteCardMutation();

  const deleteCard = async (cardId: string) => {
    try {
      const res = await deleteCardTrigger(cardId).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Card Deleted Successfully!");
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return {
    openDialog,
    setOpenDialog,
    onCloseDialogHandler,
    data,
    isLoading,
    isFetching,
    isError,
    deleteCard,
  };
}
