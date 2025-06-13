"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Card, CardContent } from "./ui/card"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "VX Software Solutions transformed our billing process. We've seen a 30% reduction in claim denials since implementation.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director, City Hospital",
    },
    {
      quote:
        "Their team's expertise in medical coding has been invaluable. Our reimbursement rates have improved significantly.",
      author: "Mark Thompson",
      role: "CFO, Healthcare Network",
    },
    {
      quote:
        "The support team is responsive and knowledgeable. They've made our transition to a new RCM system seamless.",
      author: "Lisa Chen",
      role: "Practice Manager, Family Clinic",
    },
    {
      quote:
        "VX Software's RCM solution has streamlined our entire revenue cycle. We're collecting more, faster, and with less effort.",
      author: "Dr. Rajesh Kumar",
      role: "Owner, Multi-specialty Clinic",
    },
    {
      quote:
        "The analytics dashboard gives us real-time insights into our financial performance. It's been a game-changer for our practice.",
      author: "Jennifer Williams",
      role: "Operations Manager, Medical Group",
    },
    {
      quote:
        "Their compliance management features have kept us ahead of regulatory changes. We feel confident and secure with VX Software.",
      author: "Michael Rodriguez",
      role: "Compliance Officer, Regional Hospital",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-400 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand-blue/5"
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
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">What Our Clients Say</h2>
            <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trusted by healthcare providers across India and beyond
            </p>
          </div>
        </motion.div>

        <div className="mt-12">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-dark-200 border-dark-100">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-brand-blue mb-4" />
                    <p className="text-light-300 mb-6">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-light-100">{testimonial.author}</p>
                      <p className="text-sm text-light-500">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
