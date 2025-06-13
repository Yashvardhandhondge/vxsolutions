"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/button"
import { usePathname } from "next/navigation"

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/services/v-healtcare" },
    { name: "About", href: "/services/v-healtcare/about" },
      { name: "Training", href: "/services/v-healtcare/training" },
    { name: "Careers", href: "/services/v-healtcare/careers" },
    { name: "Leadership", href: "/services/v-healtcare/leadership" },
    { name: "Support", href: "/services/v-healtcare/support" },
  ]

  const isActive = (path: string) => {
    return pathname === path
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-dark-300/95 via-dark-200/95 to-dark-300/95 backdrop-blur-md shadow-lg shadow-brand-purple/10"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl text-white bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]"
          >
            V Healthcare
          </motion.div>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <div key={item.name} className="relative">
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-cyan ${
                  isActive(item.href) ? "text-brand-cyan" : "text-light-300"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-blue"
                    layoutId="navbar-indicator"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            </div>
          ))}
        </nav>
        <div className="hidden md:flex">
          <Link href="/services/v-healtcare/contact">
            <Button className="bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-cyan/90 hover:to-brand-blue/90 shadow-md shadow-brand-cyan/20">
              Contact Us
            </Button>
          </Link>
        </div>
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="text-light-100" /> : <Menu className="text-light-100" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container px-4 py-4 flex flex-col gap-4 bg-gradient-to-b from-dark-200 to-dark-300">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-brand-cyan ${
                      isActive(item.href) ? "text-brand-cyan" : "text-light-300"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Link href="/services/v-healtcare/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-cyan/90 hover:to-brand-blue/90">
                    Contact Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
