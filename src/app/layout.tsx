import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const poppinsSans = localFont({
  src: [
    {
      path: "./fonts/Poppins-Regular.ttf",
      weight: "400", // Greutatea pentru Regular
    },
    {
      path: "./fonts/Poppins-Bold.ttf",
      weight: "700", // Greutatea pentru Bold
    },
    {
      path: "./fonts/Poppins-ExtraBold.ttf",
      weight: "800", // Greutatea pentru ExtraBold
    },
    {
      path: "./fonts/Poppins-Black.ttf",
      weight: "900", // Greutatea pentru Black
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
      <body className={`${poppinsSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
