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

export default function useMoreAboutUs() {
  const theme = useTheme<Theme>();

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

  const onSubmit = async (data: IFormData) => {
    const updatedData = { investmentPlanning: sliderValue, ...data };

    console.log(updatedData);
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
  };
}
