// Font configuration using next/font/google
// This properly injects CSS variables that can be used in Tailwind config and globals.css

import { Space_Grotesk, Inter } from "next/font/google"

export const neueMontreal = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-neue-montreal",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

// Neue Montreal is declared via @font-face in globals.css with Space Grotesk as fallback
// The CSS variable --font-neue-montreal is injected by next/font via Space_Grotesk above