import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dost.dev",
  description: "A devs social media platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><div className="bg-slate-100  z-0">
        <div className="bg-white border-b-2 border-pink-600 w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Navbar/>
        </div>
        <div className=" w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
         {children}
        </div>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
