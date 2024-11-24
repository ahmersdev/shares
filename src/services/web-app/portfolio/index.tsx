import { WEB_APP } from "@/constants/endpoints";
import { baseAPI } from "@/services/base-api";

export const portfolioApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getPortfolio: builder.query({
      query: () => ({
        url: WEB_APP.GET_PORTFOLIO,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPortfolioQuery } = portfolioApi;
