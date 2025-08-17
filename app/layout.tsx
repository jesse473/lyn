import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "LYN - AI Agent Companion",
  description: "The Art reposted by Elon Musk and the next Grok xAI companion LYN",
  icons: {
    icon: "/logo.jpeg",
  },
  generator: 'LYN',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} dark`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
