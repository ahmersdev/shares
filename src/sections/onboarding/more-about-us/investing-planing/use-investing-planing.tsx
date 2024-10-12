import { Theme, useTheme } from "@mui/material";
import {
  investingPlaning500List,
  investingPlaning25000List,
  investingPlaning50000List,
  investingPlaning75000List,
  investingPlaningSliderMarks,
} from "./investing-planing.data";
import { IInvestingPlaningProps } from "./investing-planing.interface";

export default function useInvestingPlaning(props: IInvestingPlaningProps) {
  const { sliderValue, setSliderValue } = props;

  const theme = useTheme<Theme>();

  const handleChange = (event: Event, newValue: number | number[]) => {
    const value = Array.isArray(newValue) ? newValue[0] : newValue;

    if (investingPlaningSliderMarks.some((mark) => mark.value === value)) {
      setSliderValue(value);
    }
  };

  let listToDisplay: string[] = [];

  if (sliderValue === 500) {
    listToDisplay = investingPlaning500List;
  } else if (sliderValue === 25_000) {
    listToDisplay = investingPlaning25000List;
  } else if (sliderValue === 50_000) {
    listToDisplay = investingPlaning50000List;
  } else if (sliderValue === 75_000) {
    listToDisplay = investingPlaning75000List;
  }

  return { theme, handleChange, listToDisplay };
}
