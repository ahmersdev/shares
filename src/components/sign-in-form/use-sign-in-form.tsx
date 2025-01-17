import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  getSignInDataArray,
  signInFormDefaultValues,
  signInFormValidationSchema,
} from "./sign-in-form.data";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  IFormData,
  IPasswordVisibility,
  ITogglePasswordVisibility,
} from "./sign-in-form.interface";
import { usePostSignInMutation } from "@/services/auth";
import { IApiErrorResponse } from "@/interfaces";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/store";
import { logIn } from "@/store/auth";
import { useRouter } from "next/navigation";
import { AUTH, WEB_APP } from "@/constants/routes";

export default function useSignInForm() {
  const router = useRouter();

  const dispatch = useAppDispatch();

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

  const [postSignInTrigger, postSignInStatus] = usePostSignInMutation();

  const onSubmit = async (data: IFormData) => {
    try {
      const res = await postSignInTrigger(data).unwrap();
      if (res) {
        if (!!res?.enabledMFA) {
          successSnackbar(res?.msg ?? "Check your email for OTP");
          const params = new URLSearchParams({ email: data.email });
          const url = `${AUTH.MFA_OTP}?${params.toString()}`;
          router.push(url);
        } else {
          const encryptedToken = res?.token;
          Cookies.set("authenticationTokenSharesByCoco", encryptedToken);
          dispatch(logIn(encryptedToken));
          successSnackbar(res?.msg ?? "Login Successfully!");
          router.push(WEB_APP.PROPERTIES);
        }
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return { methods, handleSubmit, onSubmit, signInDataArray, postSignInStatus };
}
