import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = ["WALLET"];

export const walletApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    // Add Card
    postAddCard: builder.mutation({
      query: (body: any) => ({
        url: WEB_APP.ADD_CARD,
        method: "POST",
        body,
      }),
      invalidatesTags: TAG,
    }),
    // Cards List
    getCardList: builder.query({
      query: () => ({
        url: WEB_APP.GET_CARD,
        method: "GET",
      }),
      providesTags: TAG,
    }),
    // Delete Card
    deleteCard: builder.mutation({
      query: (cardId: any) => ({
        url: `${WEB_APP.DELETE_CARD}/${cardId}`,
        method: "DELETE",
      }),
    }),
    // Total Cash Balance
    getTotalCash: builder.query({
      query: () => ({
        url: WEB_APP.GET_TOTAL_CASH,
        method: "GET",
      }),
      providesTags: TAG,
    }),
    // Card List dropdown
    getCardListDropdown: builder.query({
      query: () => ({
        url: WEB_APP.GET_CARD,
        method: "GET",
      }),
      transformResponse: (response: any) => response?.data,
      providesTags: TAG,
    }),
    // Deposit Amount Via Card
    postDepositAmountViaCard: builder.mutation({
      query: (body: any) => ({
        url: WEB_APP.DEPOSIT_VIA_CARD,
        method: "POST",
        body,
      }),
      invalidatesTags: TAG,
    }),
    // Withdraw Amount Via Card
    postWithdrawAmountViaCard: builder.mutation({
      query: (body: any) => ({
        url: WEB_APP.WITHDRAW_VIA_CARD,
        method: "POST",
        body,
      }),
      invalidatesTags: TAG,
    }),
    // Get List of All Transactions
    getListOfAllTransactions: builder.query({
      query: () => ({
        url: WEB_APP.GET_ALL_TRANSACTIONS,
        method: "GET",
      }),
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
  usePostDepositAmountViaCardMutation,
  usePostWithdrawAmountViaCardMutation,
  useGetListOfAllTransactionsQuery,
} = walletApi;
