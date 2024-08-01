"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { IChildrenProps } from "@/interfaces";
import { Footer, Header, Navbar } from "@/layouts/sale-site";

const SaleSiteLayout = ({ children }: IChildrenProps) => {
  return (
    <main>
      <Provider store={store}>
        <Navbar />
        <Header />
        {children}
        <Footer />
      </Provider>
    </main>
  );
};

export default SaleSiteLayout;
