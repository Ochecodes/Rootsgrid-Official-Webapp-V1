import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import MegaMenu from "@/components/navigation/MegaMenu";
import Footer from "@/components/navigation/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heart for the Nation Initiative | HNGlobal",
  description: "Transforming Systems. Changing Lives.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        <Provider>
          <Box bg="white">
            <MegaMenu />
            <Box as="main" bg="white" minH="calc(100dvh - 72px)">
              {children}
            </Box>
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
