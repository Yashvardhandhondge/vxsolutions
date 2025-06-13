"use client"

import { motion } from "framer-motion"
import { CheckCircle, Code, FileText, Shield } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function FeatureSection() {
  const features = [
    {
      icon: <FileText className="h-10 w-10 text-brand-cyan" />,
      title: "Accurate Medical Coding",
      description: "Expert CPT, ICD, and HCPCS coding to ensure maximum reimbursement and compliance.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-brand-cyan" />,
      title: "Efficient Billing Process",
      description: "Streamlined billing workflows that accelerate payment cycles and improve cash flow.",
    },
    {
      icon: <Shield className="h-10 w-10 text-brand-cyan" />,
      title: "Compliance Management",
      description: "Stay up-to-date with changing healthcare regulations and billing requirements.",
    },
    {
      icon: <Code className="h-10 w-10 text-brand-cyan" />,
      title: "Tech-Enabled Solutions",
      description: "Cutting-edge software that automates repetitive tasks and reduces human error.",
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
    <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-300">
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
              Key Features
            </h2>
            <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive RCM solutions designed to optimize your healthcare business
            </p>
          </div>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full bg-dark-200 border-dark-100 shadow-md shadow-dark-100/20 hover:shadow-brand-cyan/10 hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <motion.div
                    className="p-2 w-16 h-16 rounded-full bg-dark-100 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="text-light-100">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-light-400">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
