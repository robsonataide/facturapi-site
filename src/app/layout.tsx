import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Facturapi — API de Facturação Portuguesa",
  description:
    "Emita facturas conformes com SAF-T(PT), ATCUD e QR Code fiscal. Integre em minutos com qualquer sistema. A API de facturação que cumpre todas as obrigações AT.",
  keywords: [
    "facturação electrónica",
    "API facturação",
    "SAF-T Portugal",
    "ATCUD",
    "QR Code fiscal",
    "AT",
    "factura electrónica",
  ],
  authors: [{ name: "Facturapi" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Facturapi — API de Facturação Portuguesa",
    description:
      "Emita facturas conformes com SAF-T(PT), ATCUD e QR Code fiscal. Integre em minutos com qualquer sistema.",
    type: "website",
    locale: "pt_PT",
  },
};

export const viewport: Viewport = {
  themeColor: "#2C3E50",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={inter.variable}>
      <body style={{ fontFamily: "var(--font-inter), 'Inter', system-ui, sans-serif" }} className="antialiased">
        {children}
      </body>
    </html>
  );
}
