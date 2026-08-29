"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HangingCTA from "@/components/Common/HangingCTA";
import ScrollToTop from "@/components/ScrollToTop";
import { Poppins } from "next/font/google";
import "../styles/index.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${poppins.className}`}>
        <div className="isolate">
          <Header />
          {children}
          <Footer />
        </div>
        <HangingCTA />
        <ScrollToTop />
      </body>
    </html>
  );
}

