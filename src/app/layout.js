import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./pages/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
