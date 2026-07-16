import type { Metadata } from "next";
import "./globals.css";
import "./path.css";
import "./hub.css";

export const metadata: Metadata = {
  title: "Bridgepath | Storypath Village",
  description: "Understand it, use it, and carry it into the adventure.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
