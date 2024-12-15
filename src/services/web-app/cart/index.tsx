import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const cartApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllCartItems: builder.query({
      query: () => ({
        url: WEB_APP.GET_ALL_CART,
        method: "GET",
      }),
    }),
    putCartItem: builder.mutation({
      query: ({ body, propertyId }: any) => ({
        url: `${WEB_APP.PUT_CART_ITEM}/${propertyId}`,
        method: "PUT",
        body,
      }),
    }),
    removeCartItem: builder.mutation({
      query: (propertyId: string) => ({
        url: `${WEB_APP.REMOVE_CART_ITEM}/${propertyId}`,
        method: "DELETE",
      }),
    }),
    checkoutViaCard: builder.mutation({
      query: (body: any) => ({
        url: WEB_APP.CHECKOUT,
        method: "POST",
        body,
      }),
    }),
    checkoutViaDepositMoney: builder.query({
      query: () => ({
        url: WEB_APP.CHECKOUT,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllCartItemsQuery,
  usePutCartItemMutation,
  useRemoveCartItemMutation,
  useCheckoutViaCardMutation,
  useLazyCheckoutViaDepositMoneyQuery,
} = cartApi;
