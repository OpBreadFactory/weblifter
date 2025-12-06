import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebLifterWeb",
  description: "Modern Solutions for Customer Engagement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}









