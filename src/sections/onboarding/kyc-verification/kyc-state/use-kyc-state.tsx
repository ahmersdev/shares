import { IKycStateProps } from "./kyc-state.interface";
import { useState } from "react";
import Persona from "persona";
import { PERSONA_TEMPLATE_ID } from "@/config";
import { errorSnackbar } from "@/utils/api";
import { Theme, useTheme } from "@mui/material";

export default function useKycState(props: IKycStateProps) {
  const { setKycState } = props;

  const theme = useTheme<Theme>();

  const [isLoading, setIsLoading] = useState(false);

  const handleStartVerification = () => {
    setIsLoading(true);

    const client = new Persona.Client({
      templateId: PERSONA_TEMPLATE_ID,
      environment: "sandbox", // Use 'production' for live environment
      onComplete: ({ inquiryId, status }) => {
        if (status === "completed") {
          setKycState(false);
        }
      },
      onCancel: () => {
        setIsLoading(false);
      },
      onError: (error) => {
        errorSnackbar(`Persona error: ${error}`);
        setIsLoading(false);
      },
    });

    client.open();
  };

  return { theme, isLoading, handleStartVerification };
}
