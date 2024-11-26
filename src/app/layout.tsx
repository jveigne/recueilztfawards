import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { BooleanProvider } from "../../context/LanguageContext";
import ClientWrapper from "./ClientWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Accueil ZTF Awards",
  description: "L'excellence à votre portée",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ClientWrapper>
        {children}
      </ClientWrapper>
      </body>
    </html>
  );
}
