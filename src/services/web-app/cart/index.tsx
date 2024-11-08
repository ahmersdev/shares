import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = ["CART"];

export const cartApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllCartItems: builder.query({
      query: () => ({
        url: WEB_APP.GET_ALL_cART,
        method: "GET",
      }),
      providesTags: TAG,
    }),
  }),
});

export const { useGetAllCartItemsQuery } = cartApi;
