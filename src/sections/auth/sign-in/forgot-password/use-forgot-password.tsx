import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  forgotPasswordFormDefaultValues,
  forgotPasswordValidationSchema,
} from "./forgot-password.data";
import { AUTH } from "@/constants/routes";
import { usePostResetPasswordEmailMutation } from "@/services/auth";
import { IApiErrorResponse } from "@/interfaces";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useRouter } from "next/navigation";

export default function useForgotPassword() {
  const router = useRouter();

  const methods = useForm({
    resolver: yupResolver(forgotPasswordValidationSchema),
    defaultValues: forgotPasswordFormDefaultValues,
  });
  const { handleSubmit } = methods;

  const [postResetPasswordTrigger, postResetPasswordStatus] =
    usePostResetPasswordEmailMutation();

  const onSubmit = async (data: { email: string }) => {
    try {
      const res = await postResetPasswordTrigger(data).unwrap();
      if (res) {
        successSnackbar(
          res?.msg ?? "Please, Check Email for Verification Code!"
        );
        const params = new URLSearchParams({ email: data.email });
        const url = `${AUTH.FORGOT_OTP}?${params.toString()}`;
        router.push(url);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return { methods, handleSubmit, onSubmit, postResetPasswordStatus };
}
