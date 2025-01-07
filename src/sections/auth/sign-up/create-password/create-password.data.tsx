import * as Yup from "yup";

export const createPasswordFormValidationSchema = Yup.object().shape({
  password: Yup.string()
    .trim()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/,
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("password")], "Password must match"),
});

export const createPasswordFormDefaultValues = {
  password: "",
  confirmPassword: "",
};

export const passwordColumnOneData = [
  "minimum 8 characters",
  "one special character",
  "one number",
];

export const passwordColumnTwoData = [
  "one uppercase character",
  "one lowercase character",
];
