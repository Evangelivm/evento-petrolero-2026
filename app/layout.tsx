import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "PetroSummit 2026 - Innovación y Sostenibilidad en la Industria Petrolera",
  description:
    "El evento más importante del sector petrolero en Latinoamérica. Conferencias, networking y exposiciones con los líderes de la industria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
