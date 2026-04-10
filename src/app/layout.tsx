import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
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
  openGraph: {
    title: "Facturapi — API de Facturação Portuguesa",
    description:
      "Emita facturas conformes com SAF-T(PT), ATCUD e QR Code fiscal. Integre em minutos com qualquer sistema.",
    type: "website",
    locale: "pt_PT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={plusJakarta.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
