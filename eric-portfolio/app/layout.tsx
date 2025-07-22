import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Eric Wnorowski - Software Engineer",
  description:
    "Results-oriented engineer with 5+ years experience building high-performance data pipelines, APIs, and user-centric web applications.",
  keywords: ["Software Engineer", "Full Stack Developer", "Python", "JavaScript", "React", "Google Cloud"],
  authors: [{ name: "Eric Wnorowski" }],
  openGraph: {
    title: "Eric Wnorowski - Software Engineer",
    description: "Results-oriented engineer specializing in cloud-native solutions and modern web applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Wnorowski - Software Engineer",
    description: "Results-oriented engineer specializing in cloud-native solutions and modern web applications.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
