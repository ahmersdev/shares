"use client";

import { Grid } from "@mui/material";
import CryptoWallet from "./crypto-wallet";
import Cards from "./cards";
import Transactions from "./transactions";
import CashBalance from "./cash-balance";
import RewardBalance from "./reward-balance";
import { useGetTotalCashQuery } from "@/services/web-app/wallet";

export default function ClientWallet() {
  const { data, isLoading, isFetching, isError } = useGetTotalCashQuery(null, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} md={6} height={"100%"}>
        <CashBalance
          data={data}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
        />
      </Grid>

      <Grid item xs={12} md={6} height={"inherit"} pb={1.5}>
        <RewardBalance
          data={data}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
        />
      </Grid>

      <Grid item xs={12}>
        <Transactions />
      </Grid>

      <Grid item xs={12} md={6}>
        <Cards />
      </Grid>

      <Grid item xs={12} md={6}>
        <CryptoWallet />
      </Grid>
    </Grid>
  );
}
