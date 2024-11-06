export interface IAddToCardProps {
  dataToDisplay: {
    price: number;
    progress?: number;
    remainingShares?: number;
    investorsCount?: number;
    minAnnualROI: number;
    maxAnnualROI: number;
    yearlyInvReturn: number;
  };
}
