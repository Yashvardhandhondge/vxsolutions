"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Award, Users, Briefcase, CheckCircle } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card"

export default function TrainingPage() {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-brand-cyan" />,
      title: "Live Medical Coding Classes",
      description: "Interactive sessions with real-world cases",
    },
    {
      icon: <Award className="h-10 w-10 text-brand-cyan" />,
      title: "Industry-Relevant Curriculum",
      description: "Aligned with current coding standards",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-brand-cyan" />,
      title: "CPC, CCS & Other Certification Support",
      description: "Get trained and certified",
    },
    {
      icon: <Users className="h-10 w-10 text-brand-cyan" />,
      title: "Best-in-Class Tutors",
      description: "Trainers with 10+ years of medical coding expertise",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-brand-cyan" />,
      title: "Career Guidance & Mock Interviews",
      description: "We prepare you for success",
    },
  ]

  const benefits = [
    {
      title: "100% placement after successful completion",
      description: "We guarantee job placement for students who successfully complete our program",
    },
    {
      title: "Hands-on experience with US healthcare scenarios",
      description: "Work with real-world cases to build practical skills that employers value",
    },
    {
      title: "Access to certification pathways and guidance",
      description: "We help you navigate the certification process from start to finish",
    },
    {
      title: "Learn with a future-focused, young and dynamic team",
      description: "Our instructors bring fresh perspectives and industry-current knowledge",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          {/* Subtle background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(3)].map((_, i) => (
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
                  x: [0, Math.random() * 50 - 25],
                  y: [0, Math.random() * 50 - 25],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: Math.random() * 20 + 20,
                }}
              />
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative z-10">
            <motion.div
              className="flex flex-col justify-center space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-2">
                <h1 className="text-3xl text-blue-900 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text  bg-gradient-to-r from-brand-cyan to-brand-blue">
                  Training Program
                </h1>
                <p className="max-w-[600px] text-brand-cyan font-semibold md:text-xl">Powered by VHealthcare</p>
              </div>
              <h2 className="text-2xl font-bold text-light-100">
                Launch Your Career in Medical Coding with V Healthcare
              </h2>
              <p className="max-w-[600px] text-light-300 md:text-lg">
                At VHealthcare, we don't just train — we transform careers. Our live, hands-on medical coding training
                program is designed to take freshers from zero experience to job-ready professionals, backed by 100%
                placement assurance.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#features">
                  <Button className="bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-cyan/90 hover:to-brand-blue/90 shadow-md shadow-brand-cyan/20">
                    Explore Program
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#benefits">
                  <Button
                    variant="outline"
                    className="border-brand-cyan text-brand-cyan hover:bg-brand-cyan/10 transition-colors"
                  >
                    Why Choose Us
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[450px] w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan to-brand-blue rounded-lg shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-dark-300/50 backdrop-blur-sm"></div>
                  <div className="relative z-10 p-8 text-white">
                    <div className="space-y-2 mb-6 text-center">
                      <h3 className="text-2xl font-bold">Program Highlights</h3>
                      <p className="text-light-300">What makes our training special</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-xl font-bold">1</span>
                        </div>
                        <p>Live Interactive Sessions</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-xl font-bold">2</span>
                        </div>
                        <p>Industry-Recognized Certifications</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-xl font-bold">3</span>
                        </div>
                        <p>Expert Instructors</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                          <span className="text-xl font-bold">4</span>
                        </div>
                        <p>100% Placement Assurance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-dark-300">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                What We Offer
              </h2>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive training designed to launch your medical coding career
              </p>
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-dark-200 border-dark-100 shadow-md shadow-dark-100/20 hover:shadow-brand-cyan/10 hover:-translate-y-1 transition-all duration-300">
                  <CardHeader>
                    <div className="p-2 w-16 h-16 rounded-full bg-dark-100 flex items-center justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-light-100">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-light-300">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-dark-400 relative overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
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
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                duration: Math.random() * 15 + 15,
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                Why VHealthcare?
              </h2>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What sets our training program apart
              </p>
            </div>
          </motion.div>

          <div className="mt-12">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full bg-dark-200 border-dark-100 shadow-md shadow-dark-100/20 hover:shadow-brand-cyan/10 hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-light-100">{benefit.title}</h3>
                      <p className="text-light-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-brand-cyan to-brand-blue relative overflow-hidden">
        {/* Subtle particles */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
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
                y: [0, -50],
                opacity: [0, 1, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: Math.random() * 8 + 8,
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                Join Us – Build Your Career in Healthcare with Confidence
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Ready to take the first step towards a rewarding career in medical coding?
              </p>
            </div>
            <motion.div
              className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-blue-50 shadow-lg shadow-blue-900/20">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
