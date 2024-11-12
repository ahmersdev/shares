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

    getCardList: builder.query({
      query: () => ({
        url: WEB_APP.GET_CARD,
        method: "GET",
      }),
      providesTags: TAG,
    }),

    deleteCard: builder.mutation({
      query: (cardId: any) => ({
        url: `${WEB_APP.DELETE_CARD}/${cardId}`,
        method: "DELETE",
      }),
    }),

    getTotalCash: builder.query({
      query: () => ({
        url: WEB_APP.GET_TOTAL_CASH,
        method: "GET",
      }),
      providesTags: TAG,
    }),
    getCardListDropdown: builder.query({
      query: () => ({
        url: WEB_APP.GET_CARD,
        method: "GET",
      }),
      transformResponse: (response: any) => response?.data,
      providesTags: TAG,
    }),
  }),
});

export const {
  usePostAddCardMutation,
  useGetCardListQuery,
  useLazyGetCardListDropdownQuery,
  useDeleteCardMutation,
  useGetTotalCashQuery,
} = walletApi;
