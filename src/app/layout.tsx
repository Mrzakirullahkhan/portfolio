import Navbar from "@/components/Navbar";
import "./globals.css"
import { ReactNode } from 'react';
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Zakir Ullah — Frontend Developer",
  description: "Portfolio — Zakir Ullah"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-cyan-50 via-orange-50 to-slate-50 text-gray-900 transition-colors dark:bg-gradient-to-br dark:from-gray-950 dark:via-slate-900 dark:to-black dark:text-cyan-50">
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}