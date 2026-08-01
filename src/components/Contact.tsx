"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const contactInfo = {
  address: "909 E. 169th St, Bronx, NY 10459",
  phone: "(917) 737-7623",
  email: "carmen@porratax.com",
  hours: [
    { days: "Monday - Friday", hours: "10:00 AM - 6:00 PM" },
    { days: "Saturday", hours: "11:00 AM - 5:00 PM" },
    { days: "Sunday", hours: "By appointment only" },
  ],
}

const formFields = [
  { name: "firstName", label: "First Name", type: "text", placeholder: "John", required: true },
  { name: "lastName", label: "Last Name", type: "text", placeholder: "Doe", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "(917) 737-7623", required: true },
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
    <section
      className="relative py-24 lg:py-32 overflow-hidden bg-brand-primary"
      aria-labelledby="contact-heading"
    >
      {/* Geometric overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "url('/geometric-pattern.svg')",
          backgroundRepeat: "repeat",
          backgroundSize: "120px 120px",
        }}
        aria-hidden="true"
      />

      {/* Gradient blob accents */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-secondary/10 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-brand-accent/10 blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 mb-6">
            <span className="text-xs font-semibold tracking-[0.12em] uppercase text-brand-secondary">Contact Us</span>
          </div>
          <h2
            id="contact-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-4"
          >
            Let&apos;s Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-goldLight">Journey Today</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Our team is here to answer your driving education, tax preparation, or business inquiries.
          </p>
        </motion.div>

        {/* Contact info grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid lg:grid-cols-3 gap-6 mb-20"
        >
          {[
            { icon: MapPin, title: "Visit Us", content: contactInfo.address, color: "text-brand-secondary", bg: "rgba(201,151,75,0.08)" },
            { icon: Phone, title: "Call Us", content: contactInfo.phone, href: `tel:${contactInfo.phone}`, color: "text-brand-accent", bg: "rgba(59,130,246,0.08)" },
            { icon: Mail, title: "Email Us", content: contactInfo.email, href: `mailto:${contactInfo.email}`, color: "text-brand-goldLight", bg: "rgba(232,184,109,0.08)" },
          ].map((item, index) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div
                className="h-full glass-panel-gold rounded-2xl p-6 transition-all duration-300 hover:border-brand-secondary/40"
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,151,75,0.25)" }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: item.bg }}>
                  <item.icon className={cn("h-6 w-6", item.color)} aria-hidden="true" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="text-sm transition-colors hover:text-brand-secondary" style={{ color: "#94A3B8" }}>
                    {item.content}
                  </a>
                ) : (
                  <address className="text-sm not-italic" style={{ color: "#94A3B8" }}>{item.content}</address>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Form and Hours */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Hours Card */}
          <div>
            <h3 className="font-serif text-xl font-bold text-white mb-6">Business Hours</h3>
            <div className="glass-panel rounded-2xl p-6 mb-8">
              <dl className="space-y-4">
                {contactInfo.hours.map((hour) => (
                  <div key={hour.days} className="flex justify-between py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <dt className="text-xs font-semibold text-slate-400">{hour.days}</dt>
                    <dd className="text-xs font-medium text-right text-slate-500">{hour.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="glass-panel-gold rounded-2xl p-6">
              <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
                Quick Response Guarantee
              </h4>
              <p className="text-xs leading-relaxed text-slate-400">
                We respond to all online inquiries within 2 hours during normal business hours. For immediate assistance with scheduling or tax questions, please call our offices directly.
              </p>
            </div>
          </div>

          {/* Form Card */}
          <div>
            <div className="glass-panel-gold rounded-3xl p-6 md:p-8 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white mb-1">Send Us a Message</h3>
              <p className="text-xs mb-6 text-slate-400">Fill out the form below to get started.</p>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-lg bg-emerald-950/40 border border-emerald-800/60 flex items-center gap-3"
                  role="alert"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-emerald-200">Message Sent Successfully!</p>
                    <p className="text-[11px] text-emerald-400 mt-0.5">Thank you. We will get back to you shortly.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 p-4 rounded-lg bg-red-950/40 border border-red-800/60 flex items-center gap-3"
                  role="alert"
                >
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-red-200">Something Went Wrong</p>
                    <p className="text-[11px] text-red-400 mt-0.5">{errorMessage || "Please try again or call us."}</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  {formFields.slice(0, 4).map((field) => (
                    <div key={field.name} className={field.name === "phone" ? "sm:col-span-2" : ""}>
                      <Label htmlFor={field.name} className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {field.label} <span className="text-brand-secondary" aria-hidden="true">*</span>
                      </Label>
                      <Input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData] as string}
                        onChange={handleChange}
                        className={cn(
                          "bg-white/5 border-white/10 text-white placeholder-slate-500 focus-visible:ring-brand-secondary",
                          errors[field.name] && "border-red-500/80 focus-visible:ring-red-500"
                        )}
                        aria-invalid={!!errors[field.name]}
                        aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                        required
                      />
                      {errors[field.name] && (
                        <p id={`${field.name}-error`} className="mt-1 text-xs text-red-400" role="alert">
                          {errors[field.name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <Label htmlFor="service" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service of Interest <span className="text-brand-secondary" aria-hidden="true">*</span>
                  </Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={cn(
                      "flex h-10 w-full rounded-md border border-white/10 bg-brand-primary text-slate-300 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary transition-colors",
                      errors.service && "border-red-500/80 focus-visible:ring-red-500"
                    )}
                    required
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "service-error" : undefined}
                  >
                    {formFields[4].options?.map((opt) => (
                      <option key={opt.value} value={opt.value} className="bg-brand-primary text-slate-300">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Message <span className="text-brand-secondary" aria-hidden="true">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                      "bg-white/5 border-white/10 text-white placeholder-slate-500 focus-visible:ring-brand-secondary",
                      errors.message && "border-red-500/80 focus-visible:ring-red-500"
                    )}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    rows={5}
                    required
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-xs text-red-400" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full text-slate-950 font-semibold text-sm transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #E8B86D, #C9974B)",
                  }}
                  loading={submitStatus === "loading"}
                >
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
