import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/theme.context";
import type { Metadata } from "next";
import { Alegreya, Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish" });
const alegreya = Alegreya({ subsets: ["latin"], variable: "--font-alegreya" });

export const metadata: Metadata = {
  title: "iTech Solutions",
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
        <ThemeProvider>
          <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-10 gap-16 sm:p-20">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
