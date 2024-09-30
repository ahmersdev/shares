import { RHFTextField } from "@/components/react-hook-form";
import * as Yup from "yup";

export const signUpFormValidationSchema = Yup.object().shape({
  fullName: Yup.string().trim().required("Full Name is Required"),
  email: Yup.string()
    .trim()
    .email("Invalid email format")
    .required("Email is Required"),
});

export const signUpFormDefaultValues = {
  fullName: "",
  email: "",
};

export const signUpDataArray = [
  {
    id: 1,
    componentProps: {
      name: "fullName",
      label: "Full Name",
      placeholder: "Enter Full Name",
    },
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "email",
      label: "Email",
      placeholder: "Enter Email Address",
      type: "email",
    },
    component: RHFTextField,
  },
];