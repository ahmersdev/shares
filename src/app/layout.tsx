import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/theme";
import SnackbarProviderGlobal from "@/providers/snackbar";
import { IChildrenProps } from "@/interfaces";
import Loader from "@/components/loader";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shares by Coco",
  description:
    "Welcome to Shares by Coco Development Group, a premier investment opportunity in Bali properties. As part of the renowned Coco Development Group, we bring you exclusive access to high-return investments in Bali's vibrant real estate market. Unlike many platforms, our offerings are entirely our own developments, ensuring quality and reliability.",
  applicationName: "Shares by Coco",
  authors: [{ name: "ahmersdev" }],
  referrer: "origin-when-cross-origin",
  creator: "ahmersdev",
  publisher: "awaisdesigns",
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  metadataBase: new URL("https://sharesbycoco.com/"),
  openGraph: {
    title: "Shares by Coco",
    description:
      "Welcome to Shares by Coco Development Group, a premier investment opportunity in Bali properties. As part of the renowned Coco Development Group, we bring you exclusive access to high-return investments in Bali's vibrant real estate market. Unlike many platforms, our offerings are entirely our own developments, ensuring quality and reliability.",
    url: "https://sharesbycoco.com/",
    siteName: "Shares by Coco",
    images: [
      { url: "/og-image.png", width: 800, height: 600 },
      {
        url: "/og-image.png",
        width: 1800,
        height: 1600,
        alt: "Shares by Coco",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shares by Coco",
    description:
      "Welcome to Shares by Coco Development Group, a premier investment opportunity in Bali properties. As part of the renowned Coco Development Group, we bring you exclusive access to high-return investments in Bali's vibrant real estate market. Unlike many platforms, our offerings are entirely our own developments, ensuring quality and reliability.",
    creator: "ahmersdev",
    images: {
      url: "/og-image.png",
      alt: "Shares by Coco",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "light",
  themeColor: "light",
};

export default function RootLayout({ children }: Readonly<IChildrenProps>) {
  return (
    <html lang="en">
      <body
        className={plusJakartaSans.className}
        style={{ background: "#FFFFFF", color: "#6B7280" }}
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
