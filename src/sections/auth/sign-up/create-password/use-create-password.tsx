import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  createPasswordFormDefaultValues,
  createPasswordFormValidationSchema,
} from "./create-password.data";
import {
  IPasswordVisibilityState,
  TPasswordFieldKeys,
} from "./create-password.interface";
import { usePostCreatePasswordMutation } from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { IApiErrorResponse } from "@/interfaces";
import { WEB_APP } from "@/constants/routes";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/store";
import { logIn } from "@/store/auth";
import { Theme, useTheme } from "@mui/material";

export default function useCreatePassword() {
  const theme = useTheme<Theme>();

  const router = useRouter();
  const searchParams = useSearchParams();

  const dispatch = useAppDispatch();

  const encodedParams = searchParams.get("data");

  let email = "No email provided";
  let fullName = "No name provided";

  if (encodedParams) {
    const decodedParams = atob(encodedParams);
    [email, fullName] = decodedParams.split("|");
  }

  const [passwordVisibility, setPasswordVisibility] =
    useState<IPasswordVisibilityState>({
      password: false,
      confirmPassword: false,
    });

  const methods = useForm({
    resolver: yupResolver(createPasswordFormValidationSchema),
    defaultValues: createPasswordFormDefaultValues,
  });

  const togglePasswordVisibility = (field: TPasswordFieldKeys) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const { handleSubmit } = methods;

  const [postCreatePasswordTrigger, postCreatePasswordStatus] =
    usePostCreatePasswordMutation();

  const onSubmit = async (data: any) => {
    const updatedData = { email, password: data.password };
    try {
      const res = await postCreatePasswordTrigger(updatedData).unwrap();
      if (res.token) {
        const encryptedToken = res.token;
        Cookies.set("authenticationToken", encryptedToken);
        dispatch(logIn(encryptedToken));
        router.push(WEB_APP.PROPERTIES);
      }
      successSnackbar(res?.msg ?? "Account Created Successfully!");
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return {
    theme,
    encodedParams,
    methods,
    handleSubmit,
    onSubmit,
    passwordVisibility,
    togglePasswordVisibility,
    postCreatePasswordStatus,
  };
}
