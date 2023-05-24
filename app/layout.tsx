import "./globals.css";
import { Roboto_Mono } from "next/font/google";
const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: "600" });

export const metadata = {
  title: "Jay Keraliya",
  description: "Jay Keraliya's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${robotoMono.className}`}>
      <body className="bg-black">{children}</body>
    </html>
  );
}
