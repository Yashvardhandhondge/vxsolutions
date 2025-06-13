"use client"

import { motion } from "framer-motion"
import { HelpCircle, FileText, MessageSquare, TicketIcon, AlertTriangle, Phone, Mail } from "lucide-react"
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card";
import Link from "next/link"

export default function SupportPage() {
  const supportLinks = [
    {
      icon: <HelpCircle className="h-8 w-8 text-brand-blue" />,
      title: "Product Troubleshooting",
      description: "Common RCM software issues & resolutions",
      href:"#"
    },
    {
      icon: <FileText className="h-8 w-8 text-brand-blue" />,
      title: "Knowledge Base",
      description: "User guides, FAQs, and step-by-step manuals",
      href: "#",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-brand-blue" />,
      title: "Talk to Support",
      description: "Get human help – fast response guaranteed",
      href: "#",
    },
    {
      icon: <TicketIcon className="h-8 w-8 text-brand-blue" />,
      title: "Submit a Ticket",
      description: "Track your issues & get resolution updates",
      href: "#",
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Support Center</h1>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Need Help? Our Support Team is Ready.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-300">
        <div className="container px-4 md:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {supportLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants} whileHover={{ y: -5 }}>
                <Link href={link.href} className="block h-full">
                  <Card className="h-full card-hover bg-dark-200 border-dark-100">
                    <CardHeader>
                      <motion.div
                        className="p-2 w-16 h-16 rounded-full bg-dark-100 flex items-center justify-center mb-4"
                        whileHover={{ rotate: 5, scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.icon}
                      </motion.div>
                      <CardTitle className="text-light-100">{link.title}</CardTitle>
                      <CardDescription className="text-light-400">{link.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link
                      href="/services/v-healtcare/contact"
                        variant="ghost"
                        className="w-full justify-start p-0 hover:bg-transparent hover:text-brand-blue text-light-300"
                      >
                        Learn more
                      </Link>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-400">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter gradient-text">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    question: "How can your RCM solution improve our claims denial rate?",
                    answer:
                      "Our RCM solution reduces denials through advanced pre-submission claim scrubbing, automated coding validation, and payer-specific rule checks. On average, our clients see a 35% reduction in initial denials within the first 90 days of implementation.",
                  },
                  {
                    question: "What metrics do you track to measure RCM performance?",
                    answer:
                      "We track key performance indicators including days in A/R, clean claim rate, collection rate, denial percentage, first-pass resolution rate, and cost-to-collect ratio. All these metrics are available through our real-time dashboard and monthly performance reports.",
                  },
                  {
                    question: "How do you handle claim appeals and denials management?",
                    answer:
                      "We employ a specialized denials team that analyzes rejection patterns and follows a structured workflow for appeals. Each denial is categorized, root cause analyzed, and addressed through our three-tier escalation process to maximize recovery rate.",
                  },
                  {
                    question: "Can your system integrate with our existing EHR/EMR?",
                    answer:
                      "Yes, our RCM platform integrates with all major EHR/EMR systems through secure HL7 interfaces, API connections, or FHIR protocols. We've successfully integrated with over 50 different systems including Epic, Cerner, Allscripts, and many specialty-specific platforms.",
                  },
                ].map((faq, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2 bg-dark-200 p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    <h3 className="text-xl font-bold text-light-100">{faq.question}</h3>
                    <p className="text-light-300">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-dark-200 border-dark-100">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-5 w-5 text-amber-500" />
                    <CardTitle className="text-light-100">Emergency Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-light-300 mb-4">
                    Support available Mon–Sat, 9 AM – 9 PM IST. Critical claim issues? Call direct.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-brand-blue" />
                      <span className="text-light-300">+91-9515053073</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-brand-blue" />
                      <span className="text-light-300">emergency@vxsoftwaresolutions.com</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue/90">Contact Emergency Support</Button>
                </CardFooter>
              </Card>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Card className="bg-dark-200 border-dark-100">
                  <CardHeader>
                    <CardTitle className="text-light-100">Schedule a Training Session</CardTitle>
                    <CardDescription className="text-light-400">
                      Get personalized training for your team
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-light-300">
                      Our training sessions are designed to help your team get the most out of our RCM solutions.
                      Sessions can be customized to focus on specific areas of interest.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                    >
                      Book a Session
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
