import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/theme";
import SnackbarProviderGlobal from "@/providers/snackbar";
import { IChildrenProps } from "@/interfaces";
import Loader from "@/components/loader";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shares",
  description: "We are on a mission to democratize property investing.",
};

export default function RootLayout({ children }: Readonly<IChildrenProps>) {
  return (
    <html lang="en">
      <body
        className={plusJakartaSans.className}
        style={{ background: "#F8FAF8", color: "#252C32" }}
      >
        <ThemeProvider>
          <SnackbarProviderGlobal>
            <Loader />
            {children}
          </SnackbarProviderGlobal>
        </ThemeProvider>
      </body>
    </html>
  );
}
