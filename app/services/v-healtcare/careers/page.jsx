"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase, GraduationCap, Globe, TrendingUp } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card"
import Link from "next/link"

export default function CareersPage() {
  const jobs = [
    {
      title: "Medical Coding Specialist",
      requirements: "CPC certified",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "RCM Account Manager",
      requirements: "3+ years experience",
      location: "Hyderabad",
      type: "Full-time",
    },
    {
      title: "Client Onboarding Executive",
      requirements: "2+ years experience",
      location: "Remote / Hyderabad",
      type: "Full-time",
    },
    {
      title: "QA Analyst – Medical Billing",
      requirements: "3+ years experience",
      location: "Hyderabad",
      type: "Full-time",
    },
    {
      title: "Frontend Developer",
      requirements: "React experience",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Product Manager – RCM Tools",
      requirements: "Healthcare experience preferred",
      location: "Hyderabad",
      type: "Full-time",
    },
  ]

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-brand-cyan" />,
      title: "Remote-friendly culture",
      description: "Work from anywhere with our flexible remote policy",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-brand-cyan" />,
      title: "Learning and certifications",
      description: "We support your professional growth with training and certification programs",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-brand-cyan" />,
      title: "High-impact projects",
      description: "Work on meaningful projects with leading healthcare providers",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-brand-cyan" />,
      title: "Fast-track growth",
      description: "Clear career paths and opportunities for advancement",
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
                className="absolute rounded-full bg-brand-cyan/10"
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                Careers
              </h1>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join the Future of Healthcare Revenue
              </p>
            </div>
            <p className="max-w-[700px] text-light-300 md:text-lg">
              We're a team of healthcare coders, billing experts, product innovators, and growth specialists. At VX,
              you'll find a high-performance culture, remote flexibility, and a mission that matters.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-300">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                Open Roles
              </h2>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find your next opportunity with us
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {jobs.map((job, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Card className="h-full bg-dark-200 border-dark-100 shadow-md shadow-dark-100/20 hover:shadow-brand-cyan/5 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-light-100">{job.title}</CardTitle>
                    <CardDescription className="text-light-400">{job.requirements}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-medium text-brand-cyan">Location:</span>
                      <span className="text-light-300">{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm mt-2">
                      <span className="font-medium text-brand-cyan">Type:</span>
                      <span className="text-light-300">{job.type}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-cyan/90 hover:to-brand-blue/90">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              className="border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 transition-colors"
            >
              See All Jobs
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-400 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-brand-cyan/5"
              style={{
                width: `${Math.random() * 300 + 100}px`,
                height: `${Math.random() * 300 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: Math.random() * 10 + 10,
              }}
            />
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                Why Work With Us?
              </h2>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Benefits and perks of joining our team
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-dark-200 border-dark-100 shadow-md shadow-dark-100/20 hover:shadow-brand-cyan/10 hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-2 w-16 h-16 rounded-full bg-dark-100 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-light-100">{benefit.title}</h3>
                    <p className="text-light-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-cyan to-brand-blue relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Join Our Team?</h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards a rewarding career at VX Software Solutions
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link href="/careers#open-roles">
                <Button className="bg-white text-brand-cyan hover:bg-blue-50 shadow-lg shadow-blue-900/20">
                  View Open Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services/v-healtcare/contact">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact Recruitment
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
