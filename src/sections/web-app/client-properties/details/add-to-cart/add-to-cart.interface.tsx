export interface IAddToCartProps {
  dataToDisplay: {
    price: number;
    progress?: number;
    remainingShares?: number;
    investorsCount?: number;
    minAnnualROI: number;
    maxAnnualROI: number;
    yearlyInvReturn: number;
  };
  propertyId: string | null;
}
