import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumba Volunteer - Isi Hati❤️",
  description: "Created by Cledwin Pandanga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
