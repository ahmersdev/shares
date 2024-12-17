"use client";

import { Box, Button, Typography } from "@mui/material";
import { getAccountInformationData } from "./account-information.data";
import { useGetUserDetailsQuery } from "@/services/web-app/settings";
import { SkeletonForm } from "@/components/skeletons";
import ApiErrorState from "@/components/api-error-state";
import { useDeleteUserMutation } from "@/services/auth";
import { useState } from "react";
import AlertDialog from "@/components/alert-dialog";
import { IApiErrorResponse } from "@/interfaces";
import { errorSnackbar, successSnackbar } from "@/utils/api";
import { useAppDispatch } from "@/store";
import { logOut } from "@/store/auth";
import { useRouter } from "next/navigation";
import { SALE_SITE } from "@/constants/routes";

export default function AccountInformation() {
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const dispatch = useAppDispatch();

  const { data, isLoading, isFetching, isError } = useGetUserDetailsQuery(null);

  const accountInformationData = getAccountInformationData(data?.data);

  const [deleteUserTrigger, deleteUserStatus] = useDeleteUserMutation();

  const handleDelete = async () => {
    try {
      const res = await deleteUserTrigger(null).unwrap();
      if (res) {
        successSnackbar(res?.msg ?? "Account Deleted Successfully!");
        dispatch(logOut());
        router.push(SALE_SITE.HOME);
      }
    } catch (error) {
      const errorResponse = error as IApiErrorResponse;
      errorSnackbar(errorResponse?.data?.errors);
    }
  };

  return (
    <Box maxWidth={"sm"} width={"100%"} textAlign={"center"}>
      <Box
        bgcolor={"grey.50"}
        border={1}
        borderColor={"text.stroke"}
        borderRadius={3}
        px={3.2}
        py={2.4}
      >
        {isLoading || isFetching ? (
          <SkeletonForm length={2} />
        ) : isError ? (
          <ApiErrorState height={"20vh"} />
        ) : (
          <>
            {Object?.entries(accountInformationData)?.map(
              ([key, value], index) => (
                <Box
                  key={key}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  mb={
                    index === Object.entries(accountInformationData).length - 1
                      ? 0
                      : 2.4
                  }
                >
                  <Typography variant={"body3"}>{key}</Typography>
                  <Typography
                    variant={"body3"}
                    fontWeight={700}
                    color={"text.heading"}
                  >
                    {value}
                  </Typography>
                </Box>
              )
            )}
          </>
        )}
      </Box>

      <Button
        variant={"text"}
        size={"small"}
        color={"error"}
        sx={{ mt: 1 }}
        disableElevation
        disabled={isLoading || isFetching || isError}
        onClick={() => setOpenModal(true)}
      >
        Delete Account
      </Button>

      {openModal && (
        <AlertDialog
          type={"delete"}
          message={
            "Are you sure you want to delete your account? This action is permanent, and you will lose all your data without recovery."
          }
          open={openModal}
          handleClose={() => setOpenModal(false)}
          handleSubmitBtn={handleDelete}
          loading={deleteUserStatus?.isLoading}
        />
      )}
    </Box>
  );
}
