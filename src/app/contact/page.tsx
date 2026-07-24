"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const contactInfo = {
  phone: "(917) 737-7623",
  mobileNotaryPhone: "(646) 853-6303",
  email: "carmen@porratax.com",
  wilkinEmail: "wilkin@porratax.com",
  locations: [
    { name: "Main", address: "909 E. 169th St, Bronx, NY 10459", phone: "(917) 737-7623" },
    { name: "Branch", address: "847 Castle Hill Ave, Bronx, NY 10473", phone: "(347) 281-8032" },
  ],
  hours: [
    { days: "Monday - Friday", hours: "10:00 AM - 6:00 PM" },
    { days: "Saturday", hours: "11:00 AM - 5:00 PM" },
    { days: "Sunday", hours: "By appointment only" },
  ],
}

const formFields = [
  { name: "name", label: "Name", type: "text", placeholder: "John Doe", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true },
  { name: "phone", label: "Phone Number", type: "tel", placeholder: "(917) 737-7623", required: true },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setSubmitStatus("loading")
    setErrorMessage("")

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // In a real app, this would be an actual API call
    setSubmitStatus("success")
    setFormData({ name: "", email: "", phone: "", message: "" })

    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <Container className="relative py-16 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-white">Get in Touch</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              Let&apos;s Start Your{" "}
              <span className="text-brand-accent">Journey</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Have questions about driving lessons, tax preparation, or any of our other services? Our friendly team is here to help. Call, email, or fill out the form below — we respond within 2 hours during business hours.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="contact-info-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Contact Information</span>
            <h2 id="contact-info-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Multiple Ways to{" "}
              <span className="text-brand-secondary">Reach Us</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Choose the method that works best for you. We're available 6 days a week.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { icon: MapPin, title: "Main Location", content: contactInfo.locations[0].address, color: "text-blue-500", bg: "bg-blue-50", href: "/locations" },
              { icon: MapPin, title: "Branch Location", content: contactInfo.locations[1].address, color: "text-blue-500", bg: "bg-blue-50", href: "/locations" },
              { icon: Phone, title: "Call Main", content: contactInfo.locations[0].phone, color: "text-emerald-500", bg: "bg-emerald-50", href: `tel:${contactInfo.locations[0].phone}` },
              { icon: Phone, title: "Call Branch", content: contactInfo.locations[1].phone, color: "text-emerald-500", bg: "bg-emerald-50", href: `tel:${contactInfo.locations[1].phone}` },
              { icon: Phone, title: "Mobile Notary", content: contactInfo.mobileNotaryPhone, color: "text-emerald-500", bg: "bg-emerald-50", href: `tel:${contactInfo.mobileNotaryPhone}` },
              { icon: Mail, title: "Email Carmen", content: contactInfo.email, color: "text-amber-500", bg: "bg-amber-50", href: `mailto:${contactInfo.email}` },
              { icon: Mail, title: "Email Wilkin", content: contactInfo.wilkinEmail, color: "text-amber-500", bg: "bg-amber-50", href: `mailto:${contactInfo.wilkinEmail}` },
            ].map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4", item.bg)}>
                      <item.icon className={cn("h-6 w-6", item.color)} aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    {item.href ? (
                      <a href={item.href} className={cn("text-slate-600 hover:text-brand-primary transition-colors", item.color)}>
                        {item.content}
                      </a>
                    ) : (
                      <address className="text-slate-600 not-italic">{item.content}</address>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Business Hours</h3>
              <dl className="space-y-4">
                {contactInfo.hours.map((hour) => (
                  <div key={hour.days} className="flex justify-between py-3 border-b border-slate-100 last:border-0">
                    <dt className="font-medium text-slate-900">{hour.days}</dt>
                    <dd className="text-slate-600 text-right">{hour.hours}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 p-6 rounded-xl bg-slate-50">
                <h4 className="font-semibold text-brand-primary mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                  Quick Response Guarantee
                </h4>
                <p className="text-slate-600">
                  We respond to all inquiries within 2 hours during business hours.
                  For urgent tax matters, call our direct line.
                </p>
              </div>
            </div>

            <div>
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">Send Us a Message</CardTitle>
                  <p className="text-slate-600">We&apos;ll get back to you within 2 business hours.</p>
                </CardHeader>
                <CardContent>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center gap-3"
                      role="alert"
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-emerald-800">Message Sent Successfully!</p>
                        <p className="text-sm text-emerald-700">Thank you for contacting us. We&apos;ll be in touch soon.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3"
                      role="alert"
                    >
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium text-red-800">Something Went Wrong</p>
                        <p className="text-sm text-red-700">{errorMessage || "Please try again or call us directly."}</p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Name <span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          error={!!errors.name}
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          required
                        />
                        {errors.name && (
                          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email <span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          error={!!errors.email}
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          required
                        />
                        {errors.email && (
                          <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone <span className="text-red-500" aria-hidden="true">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(917) 737-7623"
                        value={formData.phone}
                        onChange={handleChange}
                        error={!!errors.phone}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? "phone-error" : undefined}
                        required
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your needs..."
                        value={formData.message}
                        onChange={handleChange}
                        error={!!errors.message}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        rows={5}
                        required
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <Button type="submit" variant="premium" size="lg" className="w-full" loading={submitStatus === "loading"}>
                      {submitStatus === "loading" ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" aria-hidden="true" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-slate-50" aria-labelledby="faq-preview-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Common Questions</span>
            <h2 id="faq-preview-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Quick Answers to{" "}
              <span className="text-brand-secondary">Common Questions</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Check our full FAQ or contact us directly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12"
          >
            {[
              { q: "What documents do I need for tax preparation?", a: "Bring W-2s, 1099s, last year's return, Social Security cards for dependents, mortgage interest statements, property tax bills, charitable donation records, and medical expense summaries. We provide a complete checklist when you book." },
              { q: "Do you offer pickup for driving lessons?", a: "Yes! We offer complimentary pickup and drop-off within our service area (Bronx, Upper Manhattan, Southern Westchester). Schedule at least 24 hours in advance." },
              { q: "Can I take the defensive driving course online?", a: "Yes! Our 6-hour NYS DMV-approved defensive driving course is available online. Complete it at your own pace and receive your certificate the same day." },
              { q: "What payment methods do you accept?", a: "Cash, all major credit/debit cards, checks, Zelle, and Venmo. Driving packages can be paid in installments. Tax preparation fees can be deducted from your refund (bank product fee applies)." },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-brand-primary mb-2">{faq.q}</h3>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <Button variant="outline" size="lg" asChild>
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </motion.div>
        </Container>
      </section>
    </>
  )
}