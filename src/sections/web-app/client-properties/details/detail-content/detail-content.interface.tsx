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
  amenities?: string[];
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

export enum EAmenities {
  TOILETRIES = "toiletries",
  FREE_BREAKFAST = "free breakfast",
  SWIMMING_POOL = "swimming pool",
  FREE_WIFI = "free wifi",
  RESTAURANT = "restaurant",
  LAUNDRY = "laundry",
  PARKING = "parking",
}
