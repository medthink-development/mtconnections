import type { Metadata } from "next";
import "./globals.css";
import Link from 'next/link';
import Head from 'next/head';
import PuzzleButtons from './_components/PuzzleButtons'; // Import the new component
//import font
import { Caveat, Inter } from "next/font/google";
import { useState } from "react";
import HowToButton from "./_components/button/how-to-button";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connections",
  description: "Group four groups of four!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-ltblue`}>

        <div className="relative w-full pb-2 sm:pb-3 md:pb-3">
{/* Beige background covering full width */}
<div className="absolute top-0 left-0 w-full bg-tan h-[60%] sm:h-[70%] z-0"></div>

{/* Green background covering full width */}
<div className="absolute top-[60%] sm:top-[70%] left-0 w-full bg-turq h-[40%] sm:h-[30%] z-0 pb-10"></div>


{/* Background images in the corners */}
<div className="absolute top-0 left-0 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 bg-[url('/assets/lights-left.png')] bg-no-repeat bg-contain z-10"></div>
<div className="absolute top-0 right-0 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[url('/assets/lights-right.png')] bg-no-repeat bg-contain z-10"></div>


          {/* Container for logo and "How To Play" text, with max width */}
          <div className="relative max-w-lg mx-auto px-4">
            {/* Logo container */}
            <div className="relative flex justify-center items-center z-10">
  <img
    className="mt-8 sm:mt-12 md:mt-20 max-w-xs sm:max-w-sm md:max-w-md sm:mt-20 lg:max-w-lg xl:max-w-2xl mx-auto"
    alt="MedThink Connections Logo"
    src="/assets/hero.png"
  />
</div>


            {/* "How To Play" text positioned bottom right under the logo */}
            <div className="flex justify-end items-center mt-4 pr-4 z-20">
              {/* "How To Play"popup"` */}

            <HowToButton />

            </div>
          </div>

        </div>
        <div className="bg-[#e5f3ff] pt-10 pb-5">
  <div className="w-11/12 md:w-3/4 lg:w-7/12 mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6">
    {/* Heading */}
    <h2
      className={`text-4xl md:text-6xl font-bold text-[#005792] text-center md:text-left ${caveat.className}`}
    >
      Play now
    </h2>

    {/* Buttons Row */}
    <div className="flex flex-wrap items-center justify-center gap-4">
      {/* Tab 1: Active */}
      <PuzzleButtons />
    </div>
  </div>
</div>

        {children}

        <footer className="text-white">
          {/* Section 1: Full-width background with contained content */}
          <div className="bg-[#009cde]">
            <div className={`mt-10 max-w-7xl mx-auto text-center font-bold text-6xl ${caveat.className} px-4 pt-20 pb-20`}>
              <div>Thank you for playing.</div>
              <div>Happy holidays from MedThink!</div>
            </div>
          </div>

          {/* Section 2: Full-width background with contained content */}
          <div className="bg-[#4a4e51]">
            <div className="max-w-7xl mx-auto grid grid-cols-5 gap-8 px-4 pt-10 pb-10">
              {/* Column 1: Logo */}
              <div className="flex flex-col items-center">
                <img
                  className="w-48 h-auto"
                  alt="Footer Logo"
                  src="/assets/mt-logo-white.svg"
                />
              </div>

              {/* Column 2: Links */}
              <div className="flex flex-col ">
                <a href="#" className="text-md underline pb-1 hover:underline">
                  Home
                </a>
                <a href="#" className="text-md underline pb-1 hover:underline">
                  Capabilities
                </a>
                <a href="#" className="text-md underline pb-1 hover:underline">
                  Leadership
                </a>
                <a href="#" className="text-md underline pb-1 hover:underline">
                  Careers
                </a>
              </div>

              {/* Column 3: Links */}
              <div className="flex flex-col">
                <a href="#" className="text-md underline pb-1 hover:underline">
                  Sitemap
                </a>
                <a href="#" className="text-md underline pb-1 hover:underline">
                  Terms Of Use
                </a>
                <a href="#" className="text-md underline pb-1 hover:underline">
                  Privacy Policy
                </a>
              </div>

              {/* Column 4: Links */}
              <div className="flex flex-col">
                <a href="#" className="text-md underline pb-1 hover:underline">
                  LinkedIn
                </a>
                <a href="#" className="text-md underline pb-1 hover:underline">
                  Facebook
                </a>
              </div>

              {/* Column 5: Links */}
              <div className="flex flex-col">
                <a href="#" className="text-md underline pb-1 hover:underline">
                  P: (518) 693-6960
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}