import * as Yup from "yup";

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Invalid Email Format")
    .required("Email is Required"),
});

export const forgotPasswordFormDefaultValues = {
  email: "",
};
