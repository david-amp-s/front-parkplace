import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "@/styles/globals.css"
import { Toaster } from "@/components/ui/sonner"; // ← Importante

const urbanist = Urbanist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ParkPlace | Sistema de Parqueadero",
  description: "Administra parqueaderos de forma eficiente con ParkPlace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
