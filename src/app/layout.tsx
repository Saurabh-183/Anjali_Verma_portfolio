import type { Metadata } from "next";
import { Inter, Castoro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const castoro = Castoro({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-castoro",
});

export const metadata: Metadata = {
  title: "Anjali Verma - SAP Basis Consultant",
  description: "Portfolio of Anjali Verma, SAP Basis Consultant/Administrator with expertise in SAP system administration, performance tuning, and technical support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${castoro.variable} h-full antialiased scroll-smooth`}>
      <body 
        className="min-h-full flex flex-col bg-[#030712] text-gray-100 selection:bg-blue-500/30 selection:text-blue-200"
        style={{ fontFamily: 'var(--font-castoro)' }}
      >
        {children}
      </body>
    </html>
  );
}
