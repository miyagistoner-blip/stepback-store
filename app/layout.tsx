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
  title: {
    default: "STEPBACK Store | Hardware gamer en Chile",
    template: "%s | STEPBACK Store",
  },
  description:
    "Cases, monitores, fuentes y productos seleccionados para setups modernos. Envíos a todo Chile y retiros coordinados en Santiago Centro.",
  keywords: [
    "STEPBACK Store",
    "hardware gamer Chile",
    "gabinetes gamer",
    "monitores gamer",
    "Darkflash Chile",
    "PC gamer Chile",
    "setup gamer",
    "Santiago Centro",
  ],
  authors: [{ name: "STEPBACK Store" }],
  creator: "STEPBACK Store",
  openGraph: {
    title: "STEPBACK Store | Hardware gamer en Chile",
    description:
      "Productos gamer seleccionados para setups modernos. Envíos a todo Chile, ventas al detalle y al mayor.",
    type: "website",
    locale: "es_CL",
    siteName: "STEPBACK Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "STEPBACK Store | Hardware gamer en Chile",
    description:
      "Cases, monitores, fuentes y productos seleccionados para setups modernos.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
