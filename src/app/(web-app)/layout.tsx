"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { IChildrenProps } from "@/interfaces";
import { Box, Grid } from "@mui/material";
import { Header, Navbar } from "@/layouts/web-app";

const WebAppLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <Provider store={store}>
        <Grid container bgcolor={"common.bgLight"}>
          <Grid item xs={0} md={2} height={"100vh"} overflow={"hidden"}>
            <Navbar />
          </Grid>
          <Grid item xs={12} md={10} height={"100vh"} overflow={"auto"}>
            <Header />
            <Box p={{ xs: 1, md: 2.4 }}>{children}</Box>
          </Grid>
        </Grid>
      </Provider>
    </main>
  );
};

export default WebAppLayout;
