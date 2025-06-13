"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase, GraduationCap, Globe, TrendingUp } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../../components/ui/card"

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
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Remote-friendly culture",
      description: "Work from anywhere with our flexible remote policy",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Learning and certifications",
      description: "We support your professional growth with training and certification programs",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "High-impact projects",
      description: "Work on meaningful projects with leading healthcare providers",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      title: "Fast-track growth",
      description: "Clear career paths and opportunities for advancement",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-900">Careers</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join the Future of Healthcare Revenue
              </p>
            </div>
            <p className="max-w-[700px] text-gray-700 md:text-lg">
              We're a team of healthcare coders, billing experts, product innovators, and growth specialists. At VX,
              you'll find a high-performance culture, remote flexibility, and a mission that matters.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Open Roles</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Find your next opportunity with us
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{job.title}</CardTitle>
                    <CardDescription>{job.requirements}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className="font-medium">Location:</span>
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm mt-2">
                      <span className="font-medium">Type:</span>
                      <span>{job.type}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline">See All Jobs</Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <motion.div
            className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-blue-900">Why Work With Us?</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Benefits and perks of joining our team
              </p>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="p-2 w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
