import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@/config";
import { RootState } from "@/store";

// Tags
export const TAGS = ["PROPERTIES", "WALLET", "CHAT", "USER_DETAILS"];

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/api`,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseAPI = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  tagTypes: TAGS,
  endpoints: () => ({}),
});
