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
  }),
});

export const { useGetAllPropertiesQuery } = propertiesApi;
