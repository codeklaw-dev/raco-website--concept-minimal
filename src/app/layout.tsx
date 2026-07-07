import type { Metadata } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Ticker from "@/components/Ticker";
import Footer from "@/components/Footer";
import Tooltip from "@/components/Tooltip";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RACO AI Technologies — Custom Software and Private AI",
  description:
    "RACO builds AI agents with human authority — systems that answer, sell, process, and report around the clock. Built on models we train ourselves. Governed to European standards. Approved by you.",
  metadataBase: new URL("https://racoai.io"),
  openGraph: {
    title: "RACO AI Technologies — Custom Software and Private AI",
    description:
      "Custom software and private AI. Bristol × Dhaka. Creators of RACO, Bangladesh's first general-purpose AI app.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${inter.variable} ${mono.variable}`}
    >
      <body>
        <Header />
        <Ticker />
        <main>{children}</main>
        <Footer />
        <Tooltip />
      </body>
    </html>
  );
}
