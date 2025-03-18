import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "The Opus One | Vinhomes Grand Park",
  description: "Dự án căn hộ cao cấp The Opus One tại Vinhomes Grand Park",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`scroll-smooth ${dancingScript.variable}`}>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
