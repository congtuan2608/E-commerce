import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "The website E-commerce",
  viewport: "width=device-width, initial-scale=1.0",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "h-dvh")}>
        <Providers>
          <Header />
          <main className="text-foreground bg-background m-auto max-xl:px-5 xl:max-w-screen-xl h-full">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
