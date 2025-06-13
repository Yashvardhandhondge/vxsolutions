"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-dark-200 to-dark-400 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-brand-indigo/10"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: Math.random() * 10 + 10,
              }}
            />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative z-10">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none gradient-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                VX Software Solutions
              </motion.h1>
              <motion.p
                className="max-w-[600px] text-light-400 md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                RCM solutions that power your healthcare business—from first appointment to final reimbursement.
              </motion.p>
            </div>
            <motion.p
              className="max-w-[600px] text-light-300 md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              We specialize in end-to-end medical coding and billing services tailored to optimize cash flow, reduce
              claim denials, and simplify compliance.
            </motion.p>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link href="/contact">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 animate-pulse-glow">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              className="relative h-[450px] w-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-indigo rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-dark-300/50 backdrop-blur-sm"></div>
                <div className="relative z-10 p-8 text-white">
                  <div className="space-y-2 mb-6">
                    <h3 className="text-2xl font-bold">Streamlined RCM</h3>
                    <p className="text-light-300">Simplify your revenue cycle management</p>
                  </div>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xl font-bold">1</span>
                      </div>
                      <p>Accurate Medical Coding</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.0 }}
                    >
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xl font-bold">2</span>
                      </div>
                      <p>Efficient Billing Process</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xl font-bold">3</span>
                      </div>
                      <p>Reduced Claim Denials</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center space-x-3"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                        <span className="text-xl font-bold">4</span>
                      </div>
                      <p>Simplified Compliance</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
