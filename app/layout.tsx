import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const regular = localFont({
  src: "../fonts/VT323-Regular.ttf",
  variable: "--fonts-regular",
});

export const metadata: Metadata = {
  title: "🎵 Lofi Beats",
  description: "Chill music for study, work, and relaxation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${regular.variable} antialiased`}>{children}</body>
    </html>
  );
}
