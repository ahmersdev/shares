import { Dispatch, SetStateAction } from "react";

export interface IDrawerSaleSiteProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
