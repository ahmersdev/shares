import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const rewardsApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getRewards: builder.query({
      query: () => ({
        url: WEB_APP.GET_REWARDS,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRewardsQuery } = rewardsApi;
