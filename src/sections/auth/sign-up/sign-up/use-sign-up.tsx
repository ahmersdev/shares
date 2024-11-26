import { AUTH } from "@/constants/routes";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  signUpFormDefaultValues,
  signUpFormValidationSchema,
} from "./sign-up.data";
import { usePostSignUpUserMutation } from "@/services/auth";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { ISignUpFormData } from "./sign-up.interface";
import { useRouter, useSearchParams } from "next/navigation";
import { IApiErrorResponse } from "@/interfaces";
import { Theme, useTheme } from "@mui/material";
import { useEffect } from "react";

export default function useSignUp() {
  const theme = useTheme<Theme>();
  const router = useRouter();

  const searchParams = useSearchParams();
  const rewards = searchParams.get("rewards");

  const methods = useForm({
    resolver: yupResolver(signUpFormValidationSchema),
    defaultValues: signUpFormDefaultValues,
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => reset({ referralLink: rewards ?? "" }), [rewards, reset]);

  const [postSignUpUserTrigger, postSignUpUserStatus] =
    usePostSignUpUserMutation();

  const onSubmit = async (data: ISignUpFormData) => {
    try {
      const res = await postSignUpUserTrigger(data).unwrap();
      if (res) {
        successSnackbar(
          res?.msg ?? "Please, Check Email for Verification Code!"
        );
        const encodedParams = btoa(
          `${data.email}|${data.fullName}|${data.referralLink}`
        );
        const url = `${AUTH.EMAIL_OTP}?data=${encodedParams}`;
        router.push(url);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return { theme, methods, handleSubmit, onSubmit, postSignUpUserStatus };
}
