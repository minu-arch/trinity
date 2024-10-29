import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsSans = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/Poppins-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-Poppins",
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
      <body
        className={`${poppinsSans.variable} font-poppins overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
