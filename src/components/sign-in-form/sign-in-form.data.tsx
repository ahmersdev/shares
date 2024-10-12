import { EyeWithoutSlashIcon, EyeWithSlashIcon } from "@/assets/icons";
import { RHFTextField } from "@/components/react-hook-form";
import { IconButton, InputAdornment } from "@mui/material";
import * as Yup from "yup";
import {
  IPasswordVisibility,
  ITogglePasswordVisibility,
} from "./sign-in-form.interface";
import { IFormArrayItem } from "@/interfaces";

export const signInFormValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid Email Format")
    .required("Email is Required"),
  password: Yup.string().trim().required("Password is Required"),
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
      type: "email",
      placeholder: "Enter Email Address",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "password",
      label: "Password",
      placeholder: "Your Password",
      borderRadius: 25,
      type: passwordVisibility.password ? "text" : "password",
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
  },
];
