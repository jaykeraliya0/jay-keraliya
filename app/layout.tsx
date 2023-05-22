import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
