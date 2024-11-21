import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/theme";
import SnackbarProviderGlobal from "@/providers/snackbar";
import { IChildrenProps } from "@/interfaces";
import Loader from "@/components/loader";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shares By Coco",
  description:
    "Shares By Coco connects individuals to exclusive investment opportunities in luxury lifestyle properties. Designed for those who want more than just returns, the platform combines smart property investments with the joy of travel and unique experiences. From owning a share in stunning properties in Bali to enjoying rental income and vacation stays, Shares By Coco blends financial growth with the adventure of exploring premium destinations.",
  applicationName: "Shares By Coco",
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
    title: "Shares By Coco",
    description:
      "Shares By Coco connects individuals to exclusive investment opportunities in luxury lifestyle properties. Designed for those who want more than just returns, the platform combines smart property investments with the joy of travel and unique experiences. From owning a share in stunning properties in Bali to enjoying rental income and vacation stays, Shares By Coco blends financial growth with the adventure of exploring premium destinations.",
    url: "https://sharesbycoco.com/",
    siteName: "Shares By Coco",
    images: [
      { url: "/og-image.png", width: 800, height: 600 },
      {
        url: "/og-image.png",
        width: 1800,
        height: 1600,
        alt: "Shares By Coco",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shares By Coco",
    description:
      "Shares By Coco connects individuals to exclusive investment opportunities in luxury lifestyle properties. Designed for those who want more than just returns, the platform combines smart property investments with the joy of travel and unique experiences. From owning a share in stunning properties in Bali to enjoying rental income and vacation stays, Shares By Coco blends financial growth with the adventure of exploring premium destinations.",
    creator: "ahmersdev",
    images: {
      url: "/og-image.png",
      alt: "Shares By Coco",
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
