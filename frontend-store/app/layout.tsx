
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // ← este lo harás ahora

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soma Essence Store",
  description: "Welcome to my store!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
