"use client";

import { Grid } from "@mui/material";
import CryptoWallet from "./crypto-wallet";
import Cards from "./cards";
import Transactions from "./transactions";
import CashBalance from "./cash-balance";
import RewardBalance from "./reward-balance";

export default function ClientWallet() {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} md={6}>
        <CashBalance />
      </Grid>

      <Grid item xs={12} md={6}>
        <RewardBalance />
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
