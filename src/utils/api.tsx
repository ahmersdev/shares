import { NOTISTACK_VARIANTS } from "@/constants/strings";
import { enqueueSnackbar } from "notistack";

export const errorSnackbar = (message?: any) => {
  enqueueSnackbar(
    Array.isArray(message) ? message[0] : message ?? `Something went wrong!`,
    {
      variant: NOTISTACK_VARIANTS.ERROR,
    }
  );
};

export const successSnackbar = (message: string) => {
  enqueueSnackbar(message, {
    variant: NOTISTACK_VARIANTS.SUCCESS,
  });
};

export const warningSnackbar = (message: string) => {
  enqueueSnackbar(message, {
    variant: NOTISTACK_VARIANTS.WARNING,
  });
};

export const infoSnackbar = (message: string) => {
  enqueueSnackbar(message, {
    variant: NOTISTACK_VARIANTS.INFO,
  });
};
