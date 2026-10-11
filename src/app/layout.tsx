import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kraricia & Bimbo | Wedding Invitation",
  description:
    "You are cordially invited to celebrate the wedding of Kraricia T. Avelino and Bimbo Delfin on October 24, 2026.",
  applicationName: "Kraricia & Bimbo Wedding",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e6f0f8",
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