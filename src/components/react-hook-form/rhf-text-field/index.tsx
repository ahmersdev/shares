import { useFormContext, Controller } from "react-hook-form";
import {
  FormLabel,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

export default function RHFTextField({ name, sxProps, style, ...other }: any) {
  const { control } = useFormContext();

  const theme = useTheme<Theme>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormLabel sx={{ color: "text.heading" }}>{other.label}</FormLabel>
          <TextField
            {...field}
            fullWidth
            error={!!error}
            inputProps={{
              style: {
                color: theme.palette.text.body,
                ...style,
              },
            }}
            sx={{
              mt: 0.5,
              ".MuiInputBase-root": {
                borderRadius: 3,
                borderColor: theme.palette.text.bodyLight,
                "& ::placeholder": {
                  color: theme.palette.text.disabled,
                },
              },
              ...sxProps,
            }}
            helperText={
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ display: "block", textAlign: "center" }}
                color={"error.main"}
              >
                {error?.message}
              </Typography>
            }
            {...other}
            label={""}
          />
        </>
      )}
    />
  );
}
