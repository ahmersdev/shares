"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { IChildrenProps } from "@/interfaces";
import { Box, Grid } from "@mui/material";
import { Header, Navbar } from "@/layouts/web-app";
import AuthGuard from "@/guards/auth-guard";
import Chat from "@/layouts/web-app/chat";

const WebAppLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <Provider store={store}>
        <AuthGuard>
          <Grid container bgcolor={"common.bgLight"}>
            <Grid
              item
              xs={0}
              md={2}
              height={"100vh"}
              overflow={"hidden"}
              display={{ xs: "none", md: "block" }}
            >
              <Navbar />
            </Grid>
            <Grid item xs={12} md={10} height={"100vh"} overflow={"auto"}>
              <Header />
              <Box p={{ xs: 1, md: 2.4 }}>{children}</Box>
            </Grid>
          </Grid>
          <Chat />
        </AuthGuard>
      </Provider>
    </main>
  );
};

export default WebAppLayout;
