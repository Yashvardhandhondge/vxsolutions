"use client"

import  React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Upload, X } from "lucide-react"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../../components/ui/card"
import { Input } from "../../../../components/ui/input"
import { Label } from "../../../../components/ui/label"
import { Textarea } from "../../../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../components/ui/select"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    helpType: "",
    message: "",
  })

  const [files, setFiles] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        organization: "",
        email: "",
        phone: "",
        helpType: "",
        message: "",
      })
      setFiles([])
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value) => {
    setFormState((prev) => ({ ...prev, helpType: value }))
  }

  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles])
    }
  }

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl gradient-text">Contact Us</h1>
              <p className="max-w-[900px] text-light-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's Talk Revenue Cycle Success
              </p>
            </div>
            <p className="max-w-[700px] text-light-300 md:text-lg">
              Whether you're a clinic, hospital, or healthtech platform — our team is ready to help you take control of
              your RCM. Reach out to get a custom quote, demo, or answers to your RCM questions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-dark-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-dark-200 border-dark-100">
                <CardHeader>
                  <CardTitle className="text-light-100">Send us a message</CardTitle>
                  <CardDescription className="text-light-400">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center space-y-4 py-12">
                      <div className="rounded-full bg-green-100 p-3">
                        <svg
                          className="h-6 w-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-light-100">Message Sent!</h3>
                      <p className="text-center text-light-300">
                        Thank you for reaching out. Our team will contact you shortly.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} className="bg-brand-blue hover:bg-brand-blue/90">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-light-300">
                            Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="bg-dark-100 border-dark-100 text-light-100 placeholder:text-light-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="organization" className="text-light-300">
                            Organization
                          </Label>
                          <Input
                            id="organization"
                            name="organization"
                            placeholder="Your organization"
                            required
                            value={formState.organization}
                            onChange={handleChange}
                            className="bg-dark-100 border-dark-100 text-light-100 placeholder:text-light-500"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-light-300">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            placeholder="Your email"
                            required
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="bg-dark-100 border-dark-100 text-light-100 placeholder:text-light-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-light-300">
                            Phone
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="Your phone number"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            className="bg-dark-100 border-dark-100 text-light-100 placeholder:text-light-500"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="helpType" className="text-light-300">
                          What can we help you with?
                        </Label>
                        <Select onValueChange={handleSelectChange} value={formState.helpType}>
                          <SelectTrigger className="bg-dark-100 border-dark-100 text-light-100">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent className="bg-dark-200 border-dark-100 text-light-100">
                            <SelectItem value="demo">Demo</SelectItem>
                            <SelectItem value="partnership">Partnership</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                            <SelectItem value="training">Training</SelectItem>
                            <SelectItem value="general">General</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-light-300">
                          Message
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Your message"
                          required
                          value={formState.message}
                          onChange={handleChange}
                          className="bg-dark-100 border-dark-100 text-light-100 placeholder:text-light-500 min-h-[120px]"
                        />
                      </div>

                      {/* File Upload Section */}
                      <div className="space-y-2">
                        <Label htmlFor="files" className="text-light-300">
                          Attachments (optional)
                        </Label>
                        <div className="border-2 border-dashed border-dark-100 rounded-lg p-4 transition-colors hover:border-brand-blue/50">
                          <div className="flex flex-col items-center justify-center space-y-2">
                            <Upload className="h-8 w-8 text-light-400" />
                            <p className="text-sm text-light-400">Drag and drop files here or click to browse</p>
                            <p className="text-xs text-light-500">
                              Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (Max 5MB)
                            </p>
                            <Input
                              id="files"
                              type="file"
                              multiple
                              onChange={handleFileChange}
                              className="hidden"
                              accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                            />
                            <Button
                              type="button"
                              variant="outline"
                              className="border-brand-blue text-brand-blue hover:bg-brand-blue/10"
                              onClick={() => document.getElementById("files")?.click()}
                            >
                              Select Files
                            </Button>
                          </div>
                        </div>

                        {/* File List */}
                        {files.length > 0 && (
                          <div className="mt-4 space-y-2">
                            <p className="text-sm font-medium text-light-300">Selected Files:</p>
                            <div className="space-y-2">
                              {files.map((file, index) => (
                                <motion.div
                                  key={index}
                                  className="flex items-center justify-between bg-dark-100 p-2 rounded-md"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center">
                                      <span className="text-xs text-brand-blue">
                                        {file.name.split(".").pop()?.toUpperCase()}
                                      </span>
                                    </div>
                                    <div className="truncate max-w-[200px]">
                                      <p className="text-sm text-light-300 truncate">{file.name}</p>
                                      <p className="text-xs text-light-500">
                                        {(file.size / 1024 / 1024).toFixed(2)} MB
                                      </p>
                                    </div>
                                  </div>
                                  <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    className="h-8 w-8 p-0 text-light-500 hover:text-red-500"
                                    onClick={() => removeFile(index)}
                                  >
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">Remove</span>
                                  </Button>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-brand-blue hover:bg-brand-blue/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter gradient-text">Contact Information</h2>
                <p className="text-light-400 md:text-lg">Reach out to us directly through any of these channels</p>
              </div>
              <div className="grid gap-6">
                <Card className="bg-dark-200 border-dark-100">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-brand-blue" />
                    <div>
                      <h3 className="font-bold text-light-100">Email</h3>
                      <p className="text-light-300">remind@vxsoftwaresolutions.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-dark-200 border-dark-100">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-brand-blue" />
                    <div>
                      <h3 className="font-bold text-light-100">Phone</h3>
                      <p className="text-light-300">+91-9515053073</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-dark-200 border-dark-100">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-brand-blue" />
                    <div>
                      <h3 className="font-bold text-light-100">Office</h3>
                      <p className="text-light-300">Hyderabad, Telangana, India</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="overflow-hidden bg-dark-200 border-dark-100">
                <CardContent className="p-0">
                  <div className="aspect-video w-full bg-dark-100">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31698198263!2d78.26795936290747!3d17.41215307568293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1686725546428!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
