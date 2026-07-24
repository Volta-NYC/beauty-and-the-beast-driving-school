"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const contactInfo = {
  address: "1234 Main Street, Bronx, NY 10451",
  phone: "(718) 555-0199",
  email: "info@beautybeastdrivingschool.com",
  hours: [
    { days: "Monday - Friday", hours: "8:00 AM - 7:00 PM" },
    { days: "Saturday", hours: "9:00 AM - 3:00 PM" },
    { days: "Sunday", hours: "Closed" },
  ],
}

const formFields = [
  { name: "firstName", label: "First Name", type: "text", placeholder: "John", required: true },
  { name: "lastName", label: "Last Name", type: "text", placeholder: "Doe", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "(718) 555-0123", required: true },
  { name: "service", label: "Service of Interest", type: "select", required: true, options: [
    { value: "", label: "Select a service" },
    { value: "driving-school", label: "Driving School" },
    { value: "tax-services", label: "Tax Services" },
    { value: "notary", label: "Notary Public" },
    { value: "translation", label: "Document Translation" },
    { value: "other", label: "Other" },
  ]},
]

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Please enter a valid email"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.service) newErrors.service = "Please select a service"
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
    // For now, we'll simulate success
    setSubmitStatus("success")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })

    // Reset after 5 seconds
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
    <section className="py-20 lg:py-32 bg-white" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
            Contact Us
          </span>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
            Let&apos;s Start Your Journey
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have questions about driving lessons, tax preparation, or our other services?
            Our friendly team is here to help. Call, email, or fill out the form below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid lg:grid-cols-3 gap-8 mb-20"
        >
          {[
            { icon: MapPin, title: "Visit Us", content: contactInfo.address, color: "text-blue-500", bg: "bg-blue-50" },
            { icon: Phone, title: "Call Us", content: contactInfo.phone, href: `tel:${contactInfo.phone}`, color: "text-emerald-500", bg: "bg-emerald-50" },
            { icon: Mail, title: "Email Us", content: contactInfo.email, href: `mailto:${contactInfo.email}`, color: "text-amber-500", bg: "bg-amber-50" },
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
                    {formFields.slice(0, 4).map((field) => (
                      <div key={field.name} className={field.name === "phone" ? "sm:col-span-2" : ""}>
                        <Label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1.5">
                          {field.label} <span className="text-red-500" aria-hidden="true">*</span>
                        </Label>
                        <Input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          value={formData[field.name as keyof typeof formData] as string}
                          onChange={handleChange}
                          error={!!errors[field.name]}
                          aria-invalid={!!errors[field.name]}
                          aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                          required
                        />
                        {errors[field.name] && (
                          <p id={`${field.name}-error`} className="mt-1 text-sm text-red-600" role="alert">
                            {errors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div>
                    <Label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Service of Interest <span className="text-red-500" aria-hidden="true">*</span>
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={cn(
                        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-colors",
                        errors.service && "border-red-500 focus-visible:ring-red-500"
                      )}
                      required
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "service-error" : undefined}
                    >
                      {formFields[4].options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="service-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.service}
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
      </div>
    </section>
  )
}