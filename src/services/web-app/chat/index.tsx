import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const chatApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getAllChat: builder.query({
      query: () => ({
        url: WEB_APP.GET_ALL_cART,
        method: "GET",
      }),
    }),

    postSendMessage: builder.mutation({
      query: (body: any) => ({
        url: WEB_APP.POST_CHAT,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAllChatQuery, usePostSendMessageMutation } = chatApi;
