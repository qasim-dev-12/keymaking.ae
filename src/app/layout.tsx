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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18420530559"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18420530559');
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                  document.addEventListener('click', function(e){
                  if(e.target.closest('a[href^="tel:"]')){
                      gtag('event', 'conversion', {'send_to': 'AW-18420530559/_klSCO3JhewcEP_6y89E'});
                      CG.conversion();
                      initCCConvertion();
                  }
                  });
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('click', function(e){
                if(e.target.closest('a[href^="https://wa.me/"]')){
                  gtag('event', 'conversion', {'send_to': 'AW-18420530559/IzxFCN24-uscEP_6y89E'});
                  CG.conversion();
                  initCCConvertion();
                }
              });
            `,
          }}
        />
      </head>

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

