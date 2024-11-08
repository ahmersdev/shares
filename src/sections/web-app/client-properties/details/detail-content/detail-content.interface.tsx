export interface IPropertyDetails {
  title: string;
  location: string;
  numberOfBed?: number;
  type?: string;
  propertyNumber?: string;
  price?: number;
  transactionCost?: number;
  investmentCost?: number;
  grossRent?: number;
  serviceCharges?: number;
  maintaince?: number;
  netIncome?: number;
  description?: string;
  numberOfUnits?: number;
  numberOfBathrooms?: number;
  numberOfParkingSpaces?: number;
  fundedDate?: string;
}

export interface IDetailContentProps {
  dataToDisplay: IPropertyDetails;
}

export interface ITimelineItemData {
  title: string;
  date: string;
  description: string;
  iconColor: string;
  guaranteeBox?: {
    bgColor: string;
    textColor: string;
    icon: React.ReactNode;
    text: string;
  } | null;
}
