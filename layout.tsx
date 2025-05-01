import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout"; // Import the custom Layout component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Hub Pessoal",
  description: "Seu espaço de autoconsciência, organização e disciplina amorosa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Layout>{children}</Layout> {/* Wrap children with the custom Layout */}
      </body>
    </html>
  );
}

