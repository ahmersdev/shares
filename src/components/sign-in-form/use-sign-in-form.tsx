import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  getSignInDataArray,
  signInFormDefaultValues,
  signInFormValidationSchema,
} from "./sign-in-form.data";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IPasswordVisibility,
  ITogglePasswordVisibility,
} from "./sign-in-form.interface";

export default function useSignInForm() {
  const [passwordVisibility, setPasswordVisibility] =
    useState<IPasswordVisibility>({
      password: false,
    });

  const togglePasswordVisibility: ITogglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const signInDataArray = getSignInDataArray(
    togglePasswordVisibility,
    passwordVisibility
  );

  const methods = useForm({
    resolver: yupResolver(signInFormValidationSchema),
    defaultValues: signInFormDefaultValues,
  });
  const { handleSubmit } = methods;

  const onSubmit = async () => {};

  return { methods, handleSubmit, onSubmit, signInDataArray };
}
