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
import { useRouter } from "next/navigation";
import { IApiErrorResponse } from "@/interfaces";
import { Theme, useTheme } from "@mui/material";

export default function useSignUp() {
  const theme = useTheme<Theme>();
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(signUpFormValidationSchema),
    defaultValues: signUpFormDefaultValues,
  });

  const { handleSubmit } = methods;

  const [postSignUpUserTrigger, postSignUpUserStatus] =
    usePostSignUpUserMutation();

  const onSubmit = async (data: ISignUpFormData) => {
    try {
      const res = await postSignUpUserTrigger(data).unwrap();
      if (res) {
        successSnackbar(
          res?.msg ?? "Please, Check Email for Verification Code!"
        );
        const encodedParams = btoa(`${data.email}|${data.fullName}`);
        const url = `${AUTH.EMAIL_OTP}?data=${encodedParams}`;
        router.push(url);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.msg);
    }
  };

  return { theme, methods, handleSubmit, onSubmit, postSignUpUserStatus };
}
