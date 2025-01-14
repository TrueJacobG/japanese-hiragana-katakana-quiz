import type { Metadata } from "next";
import Navigation from "./components/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "Japanese ABC - QUIZ",
  description: "Japanese Hiragana & Katakana Quiz (Mini) Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  "use client";
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/flag.png" />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
