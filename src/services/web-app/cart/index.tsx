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
        url: WEB_APP.PUT_CART_ITEM,
        method: "POST",
        body,
      }),
      invalidatesTags: TAG,
    }),
  }),
});

export const {
  useGetAllCartItemsQuery,
  usePutCartItemMutation,
  useRemoveCartItemMutation,
  useCheckoutViaCardMutation,
} = cartApi;
