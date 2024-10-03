import Cookies from "js-cookie";
import { getTokenFromCookies } from "@/utils/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./auth.interface";

const initialState: IAuthState = {
  token: getTokenFromCookies(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logOut: (state) => {
      state.token = null;
      Cookies.remove("authenticationToken");
    },
  },
});

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
