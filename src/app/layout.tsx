import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsSans = localFont({
  src: "./fonts/Poppins-Regular.ttf",
  variable: "--font-Poppins",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trinity",
  description: "Finance Template for Framer in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppinsSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
