import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bridgepath | Karina",
  description: "Understand it, use it, and carry it into the adventure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
