import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <div className="relative w-full">
          {/* Beige background covering full width */}
          <div className="absolute top-0 left-0 w-full bg-tan h-[70%] z-0"></div>

          {/* Green background covering full width */}
          <div className="absolute top-[70%] left-0 w-full bg-turq h-[30%] z-0"></div>

            {/* Background images in the corners */}
            <div className="absolute top-0 left-0 w-44 h-44 bg-[url('/assets/lights-left.png')] bg-no-repeat bg-contain z-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/assets/lights-right.png')] bg-no-repeat bg-contain z-10"></div>

          {/* Container for logo and "How To Play" text, with max width */}
          <div className="relative max-w-lg mx-auto px-4">
            {/* Logo container */}
            <div className="relative flex justify-center items-center z-10">
              <img
                className="mt-20 max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
                alt="MedThink Connections Logo"
                src="/assets/hero.png"
              />
            </div>

            {/* "How To Play" text positioned bottom right under the logo */}
            <div className="flex justify-end items-center mt-4 pr-4 z-20">
              <div className="text-white text-xl font-semibold  mb-10 ">How To Play</div>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}