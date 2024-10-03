import * as Yup from "yup";

export const createForgotPasswordFormValidationSchema = Yup.object().shape({
  newPassword: Yup.string()
    .trim()
    .required("Password is Required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/,
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is Required")
    .oneOf([Yup.ref("newPassword")], "Password must match"),
});

export const createForgotPasswordFormDefaultValues = {
  newPassword: "",
  confirmPassword: "",
};
