import { EyeWithoutSlashIcon, EyeWithSlashIcon } from "@/assets/icons";
import { RHFTextField } from "@/components/react-hook-form";
import { IconButton, InputAdornment } from "@mui/material";
import * as Yup from "yup";
import {
  IFormArrayItem,
  IPasswordVisibility,
  ITogglePasswordVisibility,
} from "./sign-in.interface";

export const signInFormValidationSchema = Yup?.object()?.shape({
  email: Yup?.string()?.trim()?.required("Email is Required"),
  password: Yup?.string()?.trim()?.required("Password is Required"),
});

export const signInFormDefaultValues = {
  email: "",
  password: "",
};

export const getSignInDataArray = (
  togglePasswordVisibility: ITogglePasswordVisibility,
  passwordVisibility: IPasswordVisibility
): IFormArrayItem[] => [
  {
    id: 1,
    componentProps: {
      name: "email",
      label: "Email",
      placeholder: "Enter Email Address",
    },
    component: RHFTextField,
    md: 5,
  },
  {
    id: 2,
    componentProps: {
      name: "password",
      label: "Password",
      placeholder: "Your Password",
      borderRadius: 25,
      type: passwordVisibility?.password ? "text" : "password",
      InputProps: {
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
      },
    },
    component: RHFTextField,
    md: 5,
  },
];