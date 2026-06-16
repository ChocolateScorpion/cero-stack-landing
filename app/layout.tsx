import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cero Stack Studio — Automatización para pequeños negocios en México",
  description:
    "Automatizamos tu negocio con tecnología a tu medida: apps de cobro, agenda inteligente, bots de WhatsApp y más.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-dark">{children}</body>
    </html>
  );
}
