"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2, Navigation, Car, Star, Users, Gift, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import Link from "next/link"
import PageHero from "@/components/PageHero"

const contactInfo = {
  phone: "(917) 737-7623",
  mobileNotaryPhone: "(646) 853-6303",
  email: "carmen@porratax.com",
  wilkinEmail: "wilkin@porratax.com",
}

const locations = [
  {
    name: "Main Location",
    address: "909 E. 169th St",
    city: "Bronx, NY 10459",
    phone: "(917) 737-7623",
    hours: "Mon–Fri: 10am–6pm | Sat: 11am–5pm | Sun: By appointment",
    mapsUrl: "https://maps.google.com/?q=909+E.+169th+St+Bronx+NY+10459",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.123456789!2d-73.912345!3d40.812345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4a1b2c3d4e5%3A0xf1e2d3c4b5a6!2s909%20E.%20169th%20St%2C%20Bronx%2C%20NY%2010459!5e0!3m2!1sen!2sus!4v1234567890",
  },
  {
    name: "Branch Location",
    address: "847 Castle Hill Ave",
    city: "Bronx, NY 10473",
    phone: "(347) 281-8032",
    hours: "Mon–Fri: 10am–6pm | Sat: 11am–5pm | Sun: By appointment",
    mapsUrl: "https://maps.google.com/?q=847+Castle+Hill+Ave+Bronx+NY+10473",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.123456789!2d-73.842345!3d40.832345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4a1b2c3d4e5%3A0xf1e2d3c4b5a6!2s847%20Castle%20Hill%20Ave%2C%20Bronx%2C%20NY%2010473!5e0!3m2!1sen!2sus!4v1234567890",
  },
]

const transitOptions = [
  { icon: Navigation, title: "By Subway", lines: ["6 train to Whitlock Ave", "2/5 train to Simpson St"], walk: "5-10 minute walk from station" },
  { icon: Navigation, title: "By Bus", lines: ["Bx4, Bx5, Bx11, Bx27", "Bx36, Bx39, Bx40/42"], walk: "Stops at 169th St & Westchester Ave" },
  { icon: Car, title: "By Car", lines: ["From I-895: Exit 3 for 169th St", "From Bruckner: Exit 169th St"], walk: "Free parking in rear lot" },
  { icon: MapPin, title: "Walking", lines: ["Near Westchester Ave & Whitlock Ave", "Close to Simpson St Metro-North"], walk: "Corner of 169th St & Westchester Ave" },
]

const faqs = [
  { q: "What documents do I need for tax preparation?", a: "Bring W-2s, 1099s, last year's return, Social Security cards for dependents, mortgage interest statements, property tax bills, charitable donation records, and medical expense summaries. We provide a complete checklist when you book." },
  { q: "Do you offer pickup for driving lessons?", a: "Yes! We offer complimentary pickup and drop-off within our service area (Bronx, Upper Manhattan, Southern Westchester). Schedule at least 24 hours in advance." },
  { q: "Can I take the defensive driving course online?", a: "Yes! Our 6-hour NYS DMV-approved defensive driving course is available online. Complete it at your own pace and receive your certificate the same day." },
  { q: "What payment methods do you accept?", a: "Cash, all major credit/debit cards, checks, Zelle, and Venmo. Driving packages can be paid in installments. Tax preparation fees can be deducted from your refund (bank product fee applies)." },
  { q: "What services are available at the Castle Hill location?", a: "Both locations offer full driving school and tax services. Castle Hill additionally provides passport photos." },
  { q: "Do you offer services in Spanish?", a: "Yes! We have bilingual staff (English & Spanish) at both locations during all business hours." },
  { q: "How do I schedule a road test?", a: "We offer DMV road test scheduling assistance as part of our driving packages. We'll handle the appointment booking and can provide a vehicle for the test." },
  { q: "What notary services do you provide?", a: "We offer general notary public services including affidavits, power of attorney, deeds, contracts, and more. Walk-ins welcome during business hours." },
]

const winSteps = [
  { step: "01", title: "Visit Us", description: "Use any of our services — driving lessons, tax prep, notary, or any other service at either Bronx location." },
  { step: "02", title: "Get Survey", description: "After your visit, you'll receive a link to our short customer satisfaction survey via email or text." },
  { step: "03", title: "Enter to Win", description: "Complete the survey and you're automatically entered in our monthly $100 drawing!" },
]

const winRules = [
  { title: "Eligibility", content: "Open to legal residents of the 50 United States and D.C., 18 years or older. Employees of Beauty & The Beast Driving School / Porrata Tax Services and their immediate families are not eligible." },
  { title: "How to Enter", content: "Complete a service at either of our Bronx locations. You will receive a survey invitation. Complete the survey to be automatically entered. One entry per service visit." },
  { title: "Prize", content: "One (1) winner each month receives $100 via check or electronic transfer. Winner will be notified within 5 business days of drawing." },
  { title: "Drawing & Notification", content: "Monthly drawing held on the 5th of the following month. Winner must respond within 48 hours or a new winner will be selected." },
  { title: "General Conditions", content: "By entering, you agree to these rules and the decisions of Beauty & The Beast Driving School / Porrata Tax Services, which are final. Void where prohibited." },
]

const locationServices = [
  "Complete Driving Packages",
  "Individual Driving Lessons",
  "6-Hour Defensive Driving",
  "Road Test Scheduling",
  "Tax Preparation & Filing",
  "Notary Public",
  "Document Services (Copy/Fax/Scan)",
  "Passport Photos",
]

const locationFeatures = [
  { icon: Clock, title: "Extended Hours", desc: "Open 6 days a week with evening availability" },
  { icon: Car, title: "Free Parking", desc: "Dedicated parking lots at both locations" },
  { icon: Users, title: "Bilingual Staff", desc: "English & Spanish spoken at all times" },
  { icon: Star, title: "Full Services", desc: "Driving, tax, notary & more in one place" },
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

    await new Promise(resolve => setTimeout(resolve, 1500))

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
      {/* Hero Section */}
      <PageHero eyebrow="Contact & locations" title={<>Come by. Call us.<br /><em>We’re here.</em></>} description="Have a question or ready to get started? Our Bronx team can help you find the right service and the right next step." primary={{ label: "Get in touch", href: "#contact-form" }} secondary={{ label: "Find a location", href: "#locations" }} detail="Two Bronx locations" mode="signal" />
      <section className="hidden relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-secondary/15 blur-[80px] animate-float-orb" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-brand-accent/10 blur-[100px] animate-glow-pulse" aria-hidden="true" />
        <Container className="relative py-16 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <Mail className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-white">Contact & Locations</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
            >
              Get in Touch &{" "}
              <span className="text-brand-accent">Visit Us</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Have questions? Need to book a service? Visit either of our two convenient Bronx locations. We&apos;re here to help with driving lessons, tax preparation, notary services, and more.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="contact-form-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto mb-16 text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Send a Message</span>
            <h2 id="contact-form-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Contact{" "}
              <span className="text-brand-secondary">Us</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fill out the form below and we&apos;ll get back to you within 24 hours. For urgent matters, please call us directly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto" noValidate>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "John Doe" },
                  { name: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                  { name: "phone", label: "Phone Number", type: "tel", placeholder: "(917) 737-7623" },
                ].map((field) => (
                  <div key={field.name} className="space-y-2">
                    <Label htmlFor={field.name} className="text-sm font-medium text-slate-700">
                      {field.label} <span className="text-brand-accent">*</span>
                    </Label>
                    <Input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      className={cn(errors[field.name] && "border-red-500 focus:border-red-500 focus:ring-red-500")}
                      aria-invalid={errors[field.name] ? "true" : "false"}
                      aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                    />
                    {errors[field.name] && (
                      <p id={`${field.name}-error`} className="text-sm text-red-500" role="alert">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-6">
                <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Message <span className="text-brand-accent">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={cn(errors.message && "border-red-500 focus:border-red-500 focus:ring-red-500")}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="text-sm text-red-500" role="alert">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  type="submit"
                  size="xl"
                  className="w-full sm:w-auto bg-gradient-to-r from-brand-secondary to-brand-goldLight text-slate-950 hover:opacity-90 font-semibold rounded-full shadow-lg shadow-brand-secondary/20 group"
                  disabled={submitStatus === "loading"}
                >
                  {submitStatus === "loading" && <Loader2 className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />}
                  {submitStatus === "success" ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" aria-hidden="true" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-green-600 text-sm font-medium"
                  >
                    <CheckCircle className="h-5 w-5" aria-hidden="true" />
                    <span>We&apos;ll get back to you within 24 hours!</span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-red-600 text-sm font-medium"
                    role="alert"
                  >
                    <AlertCircle className="h-5 w-5" aria-hidden="true" />
                    <span>{errorMessage || "Something went wrong. Please try again."}</span>
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
        </Container>
      </section>

      {/* Contact Info & Locations Section */}
      <section id="locations" className="py-20 lg:py-32 bg-slate-50 scroll-mt-20" aria-labelledby="locations-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Our Offices</span>
            <h2 id="locations-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Visit Our{" "}
              <span className="text-brand-secondary">Bronx Locations</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Both locations are fully staffed with bilingual instructors and tax preparers. Same great service at both addresses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            className="space-y-16"
          >
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-3 gap-8 items-start"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 space-y-8"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-brand-secondary flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-7 w-7 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-brand-primary">{location.name}</h3>
                        <p className="text-slate-600 mt-1">{location.address}</p>
                        <p className="text-slate-500">{location.city}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <Card className="border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-brand-primary mb-3 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
                            Hours of Operation
                          </h4>
                          <p className="text-slate-600">{location.hours}</p>
                        </CardContent>
                      </Card>

                      <Card className="border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-brand-primary mb-3 flex items-center gap-2">
                            <Phone className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
                            Contact
                          </h4>
                          <a href={`tel:${location.phone}`} className="text-slate-600 hover:text-brand-primary transition-colors block mb-1">{location.phone}</a>
                          <a href="mailto:carmen@porratax.com" className="text-slate-600 hover:text-brand-primary transition-colors">carmen@porratax.com</a>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button variant="premium" size="lg" asChild>
                        <a href={location.mapsUrl} target="_blank" rel="noopener noreferrer">
                          <Navigation className="mr-2 h-5 w-5" aria-hidden="true" />
                          Get Directions
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <a href={`tel:${location.phone}`}>
                          <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <div className="rounded-xl overflow-hidden border border-slate-200">
                      <iframe
                        title={`${location.name} Location`}
                        src={location.embedUrl}
                        width="100%"
                        height={300}
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    <Card className="border-slate-200 hover:border-brand-secondary/50 transition-colors">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-brand-primary mb-4 flex items-center gap-2">
                          <Star className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                          Services at This Location
                        </h4>
                        <ul className="space-y-2 text-slate-600" role="list">
                          {locationServices.map((service) => (
                            <li key={service} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                              <span className="text-sm">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Transit Options Section */}
      <section className="py-20 lg:py-32 bg-white" aria-labelledby="transit-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Getting Here</span>
            <h2 id="transit-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Easy Access by{" "}
              <span className="text-brand-secondary">Transit & Car</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Both locations are easily accessible by subway, bus, car, or on foot.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {transitOptions.map((option) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl bg-brand-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <option.icon className="h-7 w-7 text-brand-secondary" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-primary mb-2">{option.title}</h3>
                    <ul className="space-y-1 text-sm text-slate-600 mb-3" role="list">
                      {option.lines.map((line) => (
                        <li key={line} className="flex items-center gap-1 justify-center">
                          <CheckCircle className="h-3.5 w-3.5 text-brand-accent" aria-hidden="true" />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-slate-500 italic">{option.walk}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Why Choose Our Locations */}
      <section className="py-20 lg:py-32 bg-brand-primary" aria-labelledby="why-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="why-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
              Why Choose Our{" "}
              <span className="text-brand-accent">Locations</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Both offices provide the same exceptional service with convenient hours and free parking.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, staggerChildren: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {locationFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-900/50 border-slate-800 h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-brand-secondary/20 flex items-center justify-center mx-auto mb-4">
                        <feature.icon className="h-6 w-6 text-brand-accent" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400 text-sm">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 lg:py-32 bg-white scroll-mt-20" aria-labelledby="faq-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Frequently Asked Questions</span>
            <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Quick Answers to{" "}
              <span className="text-brand-secondary">Common Questions</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Can&apos;t find what you&apos;re looking for? Contact us directly — we&apos;re happy to help.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-slate-200 bg-white text-slate-900 shadow-sm transition-all duration-300 hover:border-brand-secondary/50 hover:shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold text-slate-950">{faq.q}</h3>
                    <p className="leading-relaxed text-slate-700">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Win $100 Promotion Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="win-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <Gift className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-white">Special Promotion</span>
            </motion.span>

            <motion.h1
              id="win-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              Win <span className="text-brand-accent">$100</span> on Us!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Enter for a chance to win $100! Simply complete our customer satisfaction survey after your visit and you&apos;ll be automatically entered into our monthly drawing.
            </motion.p>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">How It Works</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
              Simple Steps to{" "}
              <span className="text-brand-accent">Enter</span>
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              No purchase necessary. Just share your experience and you could win!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16"
          >
            {winSteps.map((item) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-slate-700 bg-slate-900/50 hover:border-brand-secondary/50 hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-brand-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-brand-secondary">{item.step}</span>
                    </div>
                    <CardTitle className="text-xl text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Official Rules */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
              Official Rules
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              {winRules.map((rule, index) => (
                <div key={index} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800">
                  <h3 className="font-semibold text-brand-accent mb-3">{rule.title}</h3>
                  <p>{rule.content}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA for Win Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center max-w-3xl mx-auto mt-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
              Ready to Use Our Services?
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Book a driving lesson, tax appointment, or any service today — and you could be our next $100 winner!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link href="#contact-form-heading">Book Now</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="#locations-heading">View Locations</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800 relative overflow-hidden" aria-labelledby="final-cta-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-secondary/15 blur-[80px] animate-float-orb" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-brand-accent/10 blur-[100px] animate-glow-pulse" aria-hidden="true" />
        <Container className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="final-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
              Ready to Get{" "}
              <span className="text-brand-accent">Started</span>?
            </h2>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Book a driving lesson, schedule tax preparation, or visit us for notary services. We&apos;re here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-gradient-to-r from-brand-secondary to-brand-goldLight text-slate-950 hover:opacity-90 font-semibold rounded-full shadow-lg shadow-brand-secondary/20 group" asChild>
                <Link href="#contact-form-heading">
                  Send a Message
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-full font-medium" asChild>
                <Link href="tel:+19177377623">Call: (917) 737-7623</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
