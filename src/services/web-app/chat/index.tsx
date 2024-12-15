import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

const TAG = ["CHAT"];

export const chatApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllChat: builder.query({
      query: () => ({
        url: WEB_APP.GET_CHAT,
        method: "GET",
      }),
      providesTags: TAG,
    }),

    postSendMessage: builder.mutation({
      query: (body: any) => ({
        url: WEB_APP.POST_CHAT,
        method: "POST",
        body,
      }),
      invalidatesTags: TAG,
    }),
  }),
});

export const { useGetAllChatQuery, usePostSendMessageMutation } = chatApi;
