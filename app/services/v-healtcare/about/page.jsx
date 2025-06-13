"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "../../../../components/ui/card"

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from coding accuracy to customer support.",
    },
    {
      title: "Innovation",
      description: "We continuously innovate our technology and processes to stay ahead of industry changes.",
    },
    {
      title: "Integrity",
      description: "We operate with complete transparency and honesty in all our client relationships.",
    },
    {
      title: "Efficiency",
      description: "We optimize workflows to maximize productivity and minimize waste.",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to understand their unique needs and challenges.",
    },
    {
      title: "Accountability",
      description: "We take ownership of our work and stand behind our results.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">About Us</h1>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Empowering Healthcare. One Claim at a Time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter gradient-text">Our Story</h2>
              <p className="text-light-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At VX Software Solutions, we believe revenue cycle management shouldn't be complicated. That's why we
                built a tech-enabled, human-driven system that empowers providers to do what they do best: deliver care.
              </p>
              <p className="text-light-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                With deep expertise in medical coding, billing compliance, and automated claims management, our team
                serves hospitals, clinics, and healthcare networks across India and beyond — bringing efficiency,
                transparency, and reliability to every transaction.
              </p>
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-full min-h-[300px] overflow-hidden rounded-lg bg-gradient-to-r from-brand-blue to-brand-indigo">
                <div className="absolute inset-0 bg-dark-300/30 backdrop-blur-sm"></div>
                <div className="relative z-10 p-8 text-white">
                  <div className="space-y-2 text-center">
                    <motion.h3
                      className="text-2xl font-bold"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      Our Vision
                    </motion.h3>
                    <motion.p
                      className="text-light-100"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                    >
                      To become the most trusted RCM partner for next-gen healthcare providers.
                    </motion.p>
                    <div className="pt-8"></div>
                    <motion.h3
                      className="text-2xl font-bold"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                    >
                      Our Mission
                    </motion.h3>
                    <motion.p
                      className="text-light-100"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      To simplify, accelerate, and secure the financial journey from patient care to provider payment.
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-400">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter gradient-text">Our Values</h2>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide everything we do
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="h-full card-hover bg-dark-200 border-dark-100">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-light-100">{value.title}</h3>
                    <p className="text-light-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  )
}
