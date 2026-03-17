import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KRUSHI SCAN | AI-Powered Agriculture Platform",
  description:
    "Smart farming with AI. Detect crop diseases, monitor soil health, and optimize irrigation using advanced ML models.",
  keywords: ["agriculture", "AI", "crop disease", "farming", "IoT", "smart farming"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-[radial-gradient(ellipse_at_top,_var(--color-green-50),_var(--color-slate-50))] dark:bg-[radial-gradient(ellipse_at_top,_#3a2e25,_var(--color-slate-950))] text-slate-900 dark:text-slate-100 min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
