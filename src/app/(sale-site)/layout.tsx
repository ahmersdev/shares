"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { IChildrenProps } from "@/interfaces";

const SaleSiteLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <Provider store={store}>
        {/* <Navbar />
        <Header /> */}
        {children}
        {/* <Footer /> */}
      </Provider>
    </main>
  );
};

export default SaleSiteLayout;
