import { useFormContext, Controller } from "react-hook-form";
import {
  FormLabel,
  TextField,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

export default function RHFTextField({ name, ...other }: any) {
  const { control } = useFormContext();

  const theme = useTheme<Theme>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormLabel>{other?.label}</FormLabel>
          <TextField
            {...field}
            fullWidth
            error={!!error}
            inputProps={{
              style: {
                color: theme.palette.text.body,
              },
            }}
            sx={{
              mt: 0.5,
              ".MuiInputBase-root": {
                borderRadius: 3,
                border: 1,
                borderColor: theme.palette.text.bodyLight,
                "&:hover fieldset": {
                  border: 1,
                  borderColor: theme.palette.text.bodyLight,
                },
                "& fieldset": {
                  border: 1,
                  borderColor: theme.palette.text.bodyLight,
                },
                "&.Mui-focused fieldset": {
                  border: 1,
                  borderColor: theme.palette.text.bodyLight,
                },
                "& ::placeholder": {
                  color: theme.palette.text.disabled,
                },
              },
            }}
            helperText={
              <Typography
                variant={"body2"}
                component={"span"}
                sx={{ display: "block", textAlign: "center" }}
                color={"error.700"}
              >
                {error?.message}
              </Typography>
            }
            {...other}
            label=""
          />
        </>
      )}
    />
  );
}
