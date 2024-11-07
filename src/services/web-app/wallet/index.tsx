import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = ["WALLET"];

export const walletApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    postAddCard: builder.mutation({
      query: (body: any) => ({
        url: WEB_APP.ADD_CARD,
        method: "POST",
        body,
      }),
      invalidatesTags: TAG,
    }),
  }),
});

export const { usePostAddCardMutation } = walletApi;
