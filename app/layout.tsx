import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Aditya Raj Shah - Computer Engineering Student",
  description: "Portfolio of Aditya Raj Shah, 5th semester Computer Engineering student at NCIT",
  icons: {
    icon: "/logoo.png",   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          <Navigation />
          <main className="min-h-screen w-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
