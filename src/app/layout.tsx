import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
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
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Poiret+One&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Lavishly+Yours&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Yesterdays&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Yesteryears&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Hurricane&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>


      </head>
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
