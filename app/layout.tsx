import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ana Clara Santos | Desenvolvedora Web",
  description:
    "Portfólio de Ana Clara Santos, desenvolvedora web com React.js, Next.js, TypeScript e Tailwind CSS. Veja meus projetos e entre em contato.",
  openGraph: {
    title: "Ana Clara Santos | Desenvolvedora Web",
    description:
      "Desenvolvedora web com React.js, Next.js, TypeScript e Tailwind CSS. Veja meus projetos.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
