import {
  InvestorsBloombergImg,
  InvestorsKnightImg,
  InvestorsMordorImg,
  InvestorsPwcImg,
  InvestorsSavillsImg,
  InvestorsUaeImg,
} from "@/assets/images";
import { IMarketAnalysisData } from "./market-analysis.interface";

export const marketAnalysisData: IMarketAnalysisData[] = [
  {
    id: 1,
    title: "Sustainable Growth in Real Estate Prices",
    desc: "Bali’s property market has shown consistent growth, fueled by its global appeal. Prime areas like Uluwatu, Canggu, and Ubud are hotspots, with land prices expected to continue rising due to high demand and limited availability. For instance, beachfront and hilltop properties in emerging regions like Pemuteran and Tejakula offer significant long-term potential as infrastructure improves.",
    image: InvestorsMordorImg,
  },
  {
    id: 2,
    title: "Luxury and Eco-Friendly Developments",
    desc: "Luxury villas and eco-friendly properties are trending, catering to buyers seeking exclusive, sustainable living experiences. Developers are integrating renewable energy and sustainable materials to appeal to environmentally conscious investors while maximizing returns through high rental yields.",
    image: InvestorsBloombergImg,
  },
  {
    id: 3,
    title: "Strong Rental Yields",
    desc: "Bali offers some of the highest rental yields in Asia, with properties in popular tourist areas generating 8-12% annually. Short-term rentals, driven by high tourism inflows, make Bali a profitable market for investors.",
    image: InvestorsKnightImg,
  },
  {
    id: 4,
    title: "Growing Demand for Commercial Real Estate",
    desc: "With Bali’s rise as a hub for digital nomads and entrepreneurs, coworking spaces, boutique resorts, and wellness retreats are in demand. This diversification enhances the real estate investment landscape, offering opportunities beyond traditional residential properties.",
    image: InvestorsUaeImg,
  },
  {
    id: 5,
    title: "Affordable Entry Points",
    desc: "Compared to global markets, Bali remains relatively affordable. Luxury villas start at $300,000–$400,000, including amenities like private pools, while build costs average $600–$700 per square meter, offering an attractive ROI.",
    image: InvestorsSavillsImg,
  },
  {
    id: 6,
    title: "Tourism Revival and Population Growth",
    desc: "Post-pandemic recovery has brought record-breaking tourist arrivals, further driving real estate demand. This influx, coupled with population growth, supports sustained market momentum, especially in previously untapped regions. Bali’s real estate market is a blend of stable returns, emerging opportunities, and lifestyle-driven investments, making it an ideal destination for investors in 2024​.",
    image: InvestorsPwcImg,
  },
];
