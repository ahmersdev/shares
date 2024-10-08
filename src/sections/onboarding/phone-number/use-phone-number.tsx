import { Theme, useTheme } from "@mui/material";
import { useState } from "react";
import { matchIsValidTel } from "mui-tel-input";

export default function usePhoneNumber() {
  const theme = useTheme<Theme>();
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (newValue: string) => {
    setValue(newValue);
    if (!isValid && matchIsValidTel(newValue, {})) {
      setIsValid(true);
    }
  };

  const onSubmit = () => {
    const isValidNumber = matchIsValidTel(value, {});
    setIsValid(isValidNumber);
    setSubmitted(true);

    if (isValidNumber) {
      console.log("Phone Number", value);
    } else {
    }
  };

  return { theme, value, handleChange, isValid, submitted, onSubmit };
}
