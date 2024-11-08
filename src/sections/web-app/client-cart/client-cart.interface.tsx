interface IClientCartProperty {
  thumbnail: string;
  title: string;
  grossRent: number;
  maintaince: number;
  progress: number;
}

export interface ICartItem {
  _id: string;
  amount: number;
  propertyId: IClientCartProperty;
}
