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
        scrolled ? "bg-dark-300/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-bold text-2xl gradient-text"
          >
            VX Software
          </motion.div>
        </Link>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                  isActive(item.href) ? "text-brand-blue" : "text-light-300"
                }`}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
        <div className="hidden md:flex">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
            <Link href="/contact">
              <Button className="bg-brand-blue hover:bg-brand-blue/90">Contact Us</Button>
            </Link>
          </motion.div>
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
            <div className="container px-4 py-4 flex flex-col gap-4 bg-dark-300">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors hover:text-brand-blue ${
                      isActive(item.href) ? "text-brand-blue" : "text-light-300"
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
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">Contact Us</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
