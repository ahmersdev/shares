import { useTheme, Theme } from "@mui/material";
import { useForm } from "react-hook-form";
import { successSnackbar } from "@/utils/api";
import { useGetRewardsQuery } from "@/services/web-app/rewards";
import { useEffect } from "react";
import { useGetUserDetailsQuery } from "@/services/web-app/settings";

export default function useClientRewards() {
  const theme = useTheme<Theme>();

  const { data, isLoading, isFetching, isError } = useGetRewardsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const referralCode = data?.totalEarning?.referralCode;

  const domain = window.location.hostname;

  const methods = useForm({
    defaultValues: {
      link: `${domain}/sign-up?rewards=${referralCode}`,
    },
  });
  const { getValues, reset } = methods;

  useEffect(() => {
    reset({
      link: `${domain}/sign-up?rewards=${referralCode}`,
    });
  }, [data, reset, domain, referralCode]);

  const copyUrlHandler = () => {
    navigator.clipboard.writeText(getValues("link"));
    successSnackbar("URL Copied Successfully!");
  };

  const {
    data: dataUser,
    isLoading: isLoadingUser,
    isFetching: isFetchingUser,
    isError: isErrorUser,
  } = useGetUserDetailsQuery(null);

  return {
    theme,
    methods,
    data,
    isLoading,
    isFetching,
    isError,
    copyUrlHandler,
    dataUser,
    isLoadingUser,
    isFetchingUser,
    isErrorUser,
  };
}
