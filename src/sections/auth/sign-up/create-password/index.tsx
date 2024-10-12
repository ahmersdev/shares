"use client";

import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  passwordColumnOneData,
  passwordColumnTwoData,
} from "./create-password.data";
import { FormProvider, RHFTextField } from "@/components/react-hook-form";
import {
  EyeWithoutSlashIcon,
  EyeWithSlashIcon,
  PasswordLockIcon,
} from "@/assets/icons";
import { pxToRem } from "@/utils/get-font-value";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { LoadingButton } from "@mui/lab";
import { BUTTON_STYLES } from "@/styles";
import useCreatePassword from "./use-create-password";

export default function CreatePassword() {
  const {
    theme,
    encodedParams,
    methods,
    handleSubmit,
    onSubmit,
    passwordVisibility,
    togglePasswordVisibility,
    postCreatePasswordStatus,
  } = useCreatePassword();

  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        p={2}
        maxWidth={theme.breakpoints.values.sm - 150}
        width={"100%"}
        margin={"auto"}
        gap={3.2}
        maxHeight={"calc(100vh - 140px)"}
        height={"100%"}
      >
        <Typography variant={"h3"} color={"text.heading"}>
          Create Password
        </Typography>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3.2}>
            <Grid item xs={12}>
              <RHFTextField
                name={"password"}
                label={"Password"}
                placeholder={"Enter Your Password"}
                type={passwordVisibility.password ? "text" : "password"}
                size={"small"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => togglePasswordVisibility("password")}
                      >
                        {passwordVisibility.password ? (
                          <EyeWithSlashIcon />
                        ) : (
                          <EyeWithoutSlashIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordLockIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <Grid container>
                {[passwordColumnOneData, passwordColumnTwoData].map(
                  (columnData, columnIndex) => (
                    <Grid item xs={12} md={6} key={columnIndex}>
                      <List sx={{ py: 0 }}>
                        {columnData.length > 0 &&
                          columnData.map((item, index) => (
                            <ListItem sx={{ p: 0 }} key={index}>
                              <ListItemIcon sx={{ minWidth: pxToRem(15) }}>
                                <FiberManualRecordIcon
                                  sx={{
                                    color: "text.disabled",
                                    fontSize: pxToRem(8),
                                  }}
                                />
                              </ListItemIcon>
                              <ListItemText
                                primary={item}
                                sx={{
                                  color: "text.disabled",
                                  ".MuiTypography-root": {
                                    fontSize: pxToRem(12),
                                  },
                                }}
                              />
                            </ListItem>
                          ))}
                      </List>
                    </Grid>
                  )
                )}
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <RHFTextField
                name={"confirmPassword"}
                label={"Confirm Password"}
                placeholder={"Re-Enter Your Password"}
                type={passwordVisibility.confirmPassword ? "text" : "password"}
                size={"small"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle confirmPassword visibility"
                        onClick={() =>
                          togglePasswordVisibility("confirmPassword")
                        }
                      >
                        {passwordVisibility.confirmPassword ? (
                          <EyeWithSlashIcon />
                        ) : (
                          <EyeWithoutSlashIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordLockIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <LoadingButton
                variant={"contained"}
                fullWidth
                sx={{
                  ...BUTTON_STYLES,
                  color: "grey.50",
                  borderColor: "primary.main",
                  backgroundColor: "primary.main",
                  ":hover": {
                    backgroundColor: "primary.main",
                  },
                }}
                disableElevation
                type={"submit"}
                loading={postCreatePasswordStatus.isLoading}
              >
                Create Password
              </LoadingButton>
            </Grid>
          </Grid>
        </FormProvider>
      </Box>
    </>
  );
}
