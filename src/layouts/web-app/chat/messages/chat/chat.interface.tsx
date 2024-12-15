interface IMessage {
  _id: string;
  sender: string;
  message: string;
  timestamp: string;
}

export interface IChatProps {
  messages: IMessage[];
}
