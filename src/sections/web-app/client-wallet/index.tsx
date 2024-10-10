"use client";

import { Grid } from "@mui/material";
import CryptoWallet from "./crypto-wallet";

export default function ClientWallet() {
  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12} md={6}>
        Cash Balance
      </Grid>

      <Grid item xs={12} md={6}>
        Reward Balance
      </Grid>

      <Grid item xs={12}>
        Transactions
      </Grid>

      <Grid item xs={12} md={6}>
        Cards
      </Grid>

      <Grid item xs={12} md={6}>
        <CryptoWallet />
      </Grid>
    </Grid>
  );
}
