import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Nav from "./components/header/Nav"
import Footer from "./components/Footer"
import Header from "./components/header/Header"
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maison Felix",
  description: "Discover Fashion",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  )
}
