import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import { InputAdornment, SxProps } from "@mui/material";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import useSendUsAMessage from "./use-send-us-a-message";

export default function SendUsAMessage({ sxProps }: { sxProps?: SxProps }) {
  const { methods, handleSubmit, onSubmit } = useSendUsAMessage();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        name={"message"}
        placeholder={"Send Us A Message"}
        size={"small"}
        sxProps={sxProps}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{ cursor: "pointer" }}
              onClick={handleSubmit(onSubmit)}
            >
              <SendRoundedIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormProvider>
  );
}
