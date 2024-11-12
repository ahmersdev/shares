import { Fragment } from "react";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import { FormLabel, Paper, Typography } from "@mui/material";
import { Search } from "@mui/icons-material";
import useRhfAutocompleteAsync from "./use-rhf-autocomplete-async";

export default function RHFAutocompleteAsync({
  name,
  apiQuery,
  queryKey = "search",
  debounceTime = 500,
  getOptionLabel = (option: any) => option?.name,
  variant = "outlined",
  placeholder,
  noOptionsCase = "Nothing in the List",
  externalParams = {},
  isOptionEqualToValue = (option: any, newValue: any) =>
    option?._id === newValue?._id,
  renderOption,
  ...other
}: any): JSX.Element {
  const {
    theme,
    control,
    data,
    isLoading,
    isFetching,
    setOpen,
    open,
    trigger,
    onChanged,
    triggerWithDebounce,
  } = useRhfAutocompleteAsync({
    apiQuery,
    queryKey,
    externalParams,
    debounceTime,
  });

  return (
    <Controller
      name={name}
      control={control}
      render={(form) => {
        return (
          <Autocomplete
            {...form?.field}
            id={name}
            open={open}
            autoComplete
            includeInputInList
            noOptionsText={noOptionsCase}
            options={isLoading || isFetching ? [] : data ?? []}
            {...other}
            onOpen={() => {
              setOpen(true);
              trigger({ params: { ...externalParams } });
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={isOptionEqualToValue}
            getOptionLabel={getOptionLabel}
            loading={isLoading || isFetching}
            onChange={(e: React.SyntheticEvent, newValue: any) => {
              onChanged(e, newValue, form?.field?.onChange);
              setOpen(false);
            }}
            PaperComponent={(props) => (
              <Paper
                {...props}
                sx={{
                  backgroundColor: "common.white",
                  color: "text.disabled",
                  borderRadius: 3,
                }}
              >
                {props?.children}
              </Paper>
            )}
            onInputChange={(event, newInputValue) => {
              triggerWithDebounce(newInputValue);
            }}
            renderOption={(props, option: any) => {
              return (
                <li {...props} key={option?._id ?? option?.id}>
                  {renderOption ? renderOption(option) : getOptionLabel(option)}
                </li>
              );
            }}
            renderInput={(params) => (
              <>
                <FormLabel sx={{ color: "text.heading" }}>
                  {other.label}
                </FormLabel>
                <TextField
                  {...params}
                  label={""}
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
                  error={Boolean(form?.fieldState?.error)}
                  helperText={
                    <Typography
                      variant={"body2"}
                      component={"span"}
                      sx={{ display: "block", textAlign: "center" }}
                      color={"error.main"}
                    >
                      {form?.fieldState?.error?.message}
                    </Typography>
                  }
                  variant={variant}
                  InputProps={{
                    ...params?.InputProps,
                    endAdornment: (
                      <Fragment>
                        {isLoading || isFetching ? (
                          <CircularProgress
                            sx={{ color: "grey.600" }}
                            size={20}
                          />
                        ) : (
                          <Search sx={{ color: "grey.600" }} />
                        )}
                        {params?.InputProps?.endAdornment}
                      </Fragment>
                    ),
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
