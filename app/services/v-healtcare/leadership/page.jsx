"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function LeadershipPage() {
  const leaders = [
    {
      name: "Vamsi Krishna",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "I'm Vamsi, the Founder and CEO of VX Software Solutions. Over the past 6 years, I've built multiple tech products from the ground up. My passion lies in solving real operational challenges through innovation. For the last 4 years, I've been deeply involved in the RCM domain, working across medical coding and billing projects. I believe in creating systems that are not just scalable — but truly impactful for healthcare providers.",
    },
    {
      name: "Venkata Siva Kumar",
      role: "Co-Founder & Managing Director",
      image: "/placeholder.svg?height=400&width=400",
      bio: "I'm Siva Kumar, and I handle the strategic growth and operations at VX. With 5 years of experience in managing organizations and securing project leads, I've always focused on execution and delivery. I stay closely involved in day-to-day operations to make sure every client engagement is handled with care, clarity, and commitment.",
    },
    {
      name: "Pradeep",
      role: "Co-Founder & CFO",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Hi, I'm Pradeep — a Chartered Accountant and the CFO at VX. I bring over 5 years of experience in finance and accounting to the table. Numbers are my language, and I make sure every financial process we run is sharp, compliant, and optimized. At VX, I'm focused on building a financially strong, transparent, and trustworthy ecosystem for our clients and teams.",
    },
    {
      name: "Dr. V Deepak Kumar",
      role: "President, V Healthcare Division",
      image: "/placeholder.svg?height=400&width=400",
      bio: "I'm Dr. Deepak Kumar — MBBS, MD in General Medicine — and President of our healthcare division. With 15 years in medical practice, I've seen first-hand how important efficient RCM is for patient care. Starting this journey was not just a professional decision, but a personal passion. Through VX, I aim to blend clinical understanding with operational excellence to truly support healthcare institutions.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-dark-200 to-dark-400 overflow-hidden">
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

          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Our Leadership</h1>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Meet the team driving innovation in healthcare revenue cycle management
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-300">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {leaders.map((leader, index) => (
              <motion.div
                key={index}
                className={`grid gap-6 ${index % 2 === 0 ? "lg:grid-cols-[1fr_2fr]" : "lg:grid-cols-[2fr_1fr]"} lg:gap-12 items-center`}
                variants={itemVariants}
              >
                <div className={`${index % 2 === 1 && "lg:order-last"}`}>
                  <motion.div
                    className="relative overflow-hidden rounded-lg bg-dark-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="aspect-square">
                      <img
                        src={leader.image || "/placeholder.svg"}
                        alt={leader.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-400 to-transparent opacity-70"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex justify-center space-x-4">
                        <Link href="#" className="text-light-300 hover:text-brand-blue transition-colors">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="text-light-300 hover:text-brand-blue transition-colors">
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-light-300 hover:text-brand-blue transition-colors">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-light-100">{leader.name}</h2>
                    <p className="text-brand-blue font-medium">{leader.role}</p>
                  </div>
                  <p className="text-light-300 leading-relaxed">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
