import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Jay Keraliya - Web 3 Developer",
  description:
    "Jay Keraliya - I am passionate Full-stack Web3 Developer. With a strong foundation frontend, backend and blockchain development.",
  keywords: [
    "Jay Keraliya",
    "Web 3 Developer",
    "Full-stack Web3 Developer",
    "Full-stack developer",
    "Web3 Developer",
    "Portfolio",
    "Jay Keraliya Portfolio",
    "Jay Keraliya Web3 Developer",
    "Jay Keraliya Full-stack Web3 Developer",
    "Jay Keraliya Full-stack developer",
    "Jay",
    "Keraliya",
    "Developer",
    "Developer Portfolio",
    "Developer Jay Keraliya",
  ],
  authors: [{ name: "Jay Keraliya", url: "https://jaykeraliya.tech" }],
  category: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoMono.className}`}>
      <body className="bg-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
