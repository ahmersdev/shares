import { Controller } from "react-hook-form";
import {
  TextField,
  Autocomplete,
  Typography,
  Paper,
  FormLabel,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function RHFAutocomplete({
  name,
  options,
  required,
  noOptionsText = "Nothing in the List",
  placeholder,
  getOptionLabel = (option: any) => option.replaceAll("_", " "),
  bgcolor = "secondary.900",
  ...other
}: any) {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  const theme: any = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        return (
          <Autocomplete
            id={name}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            options={options}
            onChange={(e: any, newValue: any) => onChange(newValue)}
            autoComplete
            noOptionsText={noOptionsText}
            value={value}
            getOptionLabel={getOptionLabel}
            PaperComponent={(props) => (
              <Paper
                {...props}
                sx={{
                  backgroundColor: "common.white",
                  color: "text.disabled",
                  borderRadius: 3,
                }}
              >
                {props.children}
              </Paper>
            )}
            {...other}
            renderInput={(params) => (
              <>
                <FormLabel sx={{ color: "text.heading" }}>
                  {other.label}
                </FormLabel>
                <TextField
                  {...params}
                  label=""
                  error={!!error}
                  placeholder={placeholder}
                  sx={{
                    mt: 0.5,
                    ".MuiInputBase-root": {
                      borderRadius: 3,
                      borderColor: theme.palette.text.bodyLight,
                      "& ::placeholder": {
                        color: theme.palette.text.disabled,
                      },
                    },
                    ".MuiAutocomplete-input": {
                      color: theme.palette.text.body,
                    },
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
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: <>{params.InputProps.endAdornment}</>,
                  }}
                />
              </>
            )}
          />
        );
      }}
    />
  );
}
