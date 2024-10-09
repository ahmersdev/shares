import { Theme, useTheme } from "@mui/material";
import { useState } from "react";
import { matchIsValidTel } from "mui-tel-input";
import { usePostOnboardingAddPhoneNumberMutation } from "@/services/onboarding";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useRouter } from "next/navigation";
import { IApiErrorResponse } from "@/interfaces";
import { ONBOARDING } from "@/constants/routes";

export default function usePhoneNumber() {
  const theme = useTheme<Theme>();

  const router = useRouter();

  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (!isValid && matchIsValidTel(newValue, {})) {
      setIsValid(true);
    }
  };

  const [
    postOnboardingAddPhoneNumberTrigger,
    postOnboardingAddPhoneNumberStatus,
  ] = usePostOnboardingAddPhoneNumberMutation();

  const onSubmit = async () => {
    const isValidNumber = matchIsValidTel(value, {});
    setIsValid(isValidNumber);
    setSubmitted(true);

    if (isValidNumber) {
      try {
        const res = await postOnboardingAddPhoneNumberTrigger({
          phoneNumber: value.replace(/\s/g, ""),
        }).unwrap();
        if (res) {
          successSnackbar(
            res?.msg ?? "Please, Check Number for Verification Code!"
          );
          const encodedParams = btoa(`${value}`);
          const url = `${ONBOARDING.PHONE_NUMBER_OTP}?data=${encodedParams}`;
          router.push(url);
        }
      } catch (error) {
        const errorResponse = error as IApiErrorResponse;
        errorSnackbar(errorResponse?.data?.errors);
      }
    }
  };

  return {
    theme,
    value,
    handleChange,
    isValid,
    submitted,
    onSubmit,
    postOnboardingAddPhoneNumberStatus,
  };
}
