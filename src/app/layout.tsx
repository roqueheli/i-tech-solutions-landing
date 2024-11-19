import type { Metadata } from "next";
import { Alegreya, Mulish } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish" });
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });

export const metadata: Metadata = {
  title: "I-Tech Solutions",
  description: "Tecnología en tus manos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alegreya.variable} ${mulish.variable}`}>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-10 gap-16 sm:p-20">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
