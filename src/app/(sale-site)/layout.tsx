"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Provider } from "react-redux";
import store from "@/store";
import { IChildrenProps } from "@/interfaces";
import { QRCode, Footer, Header, Navbar } from "@/layouts/sale-site";

const SaleSiteLayout = ({ children }: IChildrenProps) => {
  return (
    <main style={{ background: "#FFFFFF", color: "#6B7280" }}>
      <Provider store={store}>
        <Navbar />
        <Header />
        <QRCode />
        {children}
        <Footer />
      </Provider>
    </main>
  );
};

export default SaleSiteLayout;
