"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { IChildrenProps } from "@/interfaces";

const WebAppLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <Provider store={store}>{children}</Provider>
    </main>
  );
};

export default WebAppLayout;
