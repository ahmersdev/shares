import { useState } from "react";
import { Theme, useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import {
  getMoreAboutUsDataArray,
  moreAboutUsDefaultValues,
  moreAboutUsValidationSchema,
} from "./more-about-us.data";
import { yupResolver } from "@hookform/resolvers/yup";
import { IFormData } from "./more-about-us.interface";
import { usePostOnboardingAddKycMutation } from "@/services/onboarding";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useRouter } from "next/navigation";
import { ONBOARDING } from "@/constants/routes";
import { IApiErrorResponse } from "@/interfaces";

export default function useMoreAboutUs() {
  const theme = useTheme<Theme>();

  const router = useRouter();

  const [stepState, setStepState] = useState(1);
  const [sliderValue, setSliderValue] = useState<number>(500);

  const handleNextStep = () => setStepState(2);

  const methods = useForm({
    resolver: yupResolver(moreAboutUsValidationSchema),
    defaultValues: moreAboutUsDefaultValues,
  });
  const { watch, handleSubmit } = methods;

  const employmentStatusWatch = watch("employmentStatus");

  const moreAboutUsDataArray = getMoreAboutUsDataArray(employmentStatusWatch);

  const [postOnboardingAddKycTrigger, postOnboardingAddKycStatus] =
    usePostOnboardingAddKycMutation();

  const onSubmit = async (data: IFormData) => {
    const updatedData = { investmentPlanning: sliderValue, ...data };

    try {
      const res = await postOnboardingAddKycTrigger(updatedData).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Details Added Successfully!");
        router.push(ONBOARDING.KYC_VERIFICATION);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return {
    theme,
    sliderValue,
    setSliderValue,
    handleNextStep,
    stepState,
    setStepState,
    moreAboutUsDataArray,
    methods,
    handleSubmit,
    onSubmit,
    postOnboardingAddKycStatus,
  };
}
