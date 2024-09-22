import { Dispatch, SetStateAction } from "react";

export interface IDrawerNavbarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
