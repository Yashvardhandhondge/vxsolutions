import React from "react"

import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "../../../components/theme-provider"
import Navbar1 from "../../../components/navbar1"
import Navbar from "../../../components/Navbar"
import Footer1 from "../../../components/footer1"
import Footer from "../../../components/Footer"
// import "../services/services.css"

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})


export default function VHealthcareLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${poppins.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navbar/>
          <Navbar1 />
          {children}
          <Footer1 />
          {/* <Footer/> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
