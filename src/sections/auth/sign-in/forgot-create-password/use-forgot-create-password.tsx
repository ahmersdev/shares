import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  createForgotPasswordFormDefaultValues,
  createForgotPasswordFormValidationSchema,
} from "./forgot-create-password.data";
import { useRouter, useSearchParams } from "next/navigation";
import {
  IPasswordVisibilityState,
  TPasswordFieldKeys,
} from "./forgot-create-password.interface";
import { useState } from "react";
import { usePostResetSetPasswordMutation } from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { AUTH } from "@/constants/routes";
import { IApiErrorResponse } from "@/interfaces";

export default function useForgotCreatePassword() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const email = searchParams.get("email");

  const [passwordVisibility, setPasswordVisibility] =
    useState<IPasswordVisibilityState>({
      newPassword: false,
      confirmPassword: false,
    });

  const togglePasswordVisibility = (field: TPasswordFieldKeys) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const methods = useForm({
    resolver: yupResolver(createForgotPasswordFormValidationSchema),
    defaultValues: createForgotPasswordFormDefaultValues,
  });
  const { handleSubmit } = methods;

  const [postResetSetPasswordTrigger, postResetSetPasswordStatus] =
    usePostResetSetPasswordMutation();

  const onSubmit = async (data: any) => {
    const updatedData = { email, newPassword: data.newPassword };
    try {
      const res = await postResetSetPasswordTrigger(updatedData).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Password Reset Successfully!");
        router.push(AUTH.SIGN_IN);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.msg);
    }
  };

  return {
    methods,
    handleSubmit,
    onSubmit,
    passwordVisibility,
    togglePasswordVisibility,
    postResetSetPasswordStatus,
  };
}
