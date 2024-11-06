import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = ["PROPERTIES"];

export const propertiesApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllProperties: builder.query({
      query: (params: any) => ({
        url: WEB_APP.GET_ALL_PROPERTIES,
        method: "GET",
        params,
      }),
      providesTags: TAG,
    }),

    getSingleProperty: builder.query({
      query: (propertyId: any) => ({
        url: `${WEB_APP.GET_SINGLE_PROPERTY}/${propertyId}`,
        method: "GET",
      }),
      providesTags: TAG,
    }),

    getAddRemoveBookmark: builder.query({
      query: (propertyId: any) => ({
        url: `${WEB_APP.ADD_REMOVE_BOOKMARK}/${propertyId}`,
        method: "GET",
      }),
      providesTags: TAG,
    }),

    postAddPropertyToCardFromProperty: builder.mutation({
      query: ({ body, propertyId }: any) => ({
        url: `${WEB_APP.ADD_TO_CART}/${propertyId}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetAllPropertiesQuery,
  useGetSinglePropertyQuery,
  useLazyGetAddRemoveBookmarkQuery,
  usePostAddPropertyToCardFromPropertyMutation,
} = propertiesApi;
