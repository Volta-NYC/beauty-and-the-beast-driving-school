"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Navigation, Car, Star, CheckCircle, ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

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

export default function LocationsPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <Container className="relative py-20 lg:py-32 text-center">
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
              <span className="text-sm font-medium text-white">Two Convenient Bronx Locations</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              Visit Us at Either{" "}
              <span className="text-brand-accent">Location</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Both locations offer full driving school and tax services. Castle Hill location also provides passport photos. Free parking available at both sites.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="locations-heading">
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
              Find Your Nearest{" "}
              <span className="text-brand-secondary">Office</span>
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
                          {[
                            "Complete Driving Packages",
                            "Individual Driving Lessons",
                            "6-Hour Defensive Driving",
                            "Road Test Scheduling",
                            "Tax Preparation & Filing",
                            "Notary Public",
                            "Document Services (Copy/Fax/Scan)",
                            "Passport Photos",
                          ].map((service) => (
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

      <section className="py-20 lg:py-32 bg-slate-50" aria-labelledby="transit-heading">
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
                        <li key={line} className="flex items-center gap-1">
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
              {[
                { icon: Clock, title: "Extended Hours", desc: "Open 6 days a week with evening availability" },
                { icon: Car, title: "Free Parking", desc: "Dedicated parking lots at both locations" },
                { icon: Users, title: "Bilingual Staff", desc: "English & Spanish spoken at all times" },
                { icon: Star, title: "Full Services", desc: "Driving, tax, notary & more in one place" },
              ].map((feature) => (
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

      <CTA
        title="Ready to Visit?"
        description="Stop by either location during business hours or book an appointment for guaranteed assistance."
        primaryText="Book Appointment"
        primaryHref="/contact"
        secondaryText="Call Main Office"
        secondaryHref="tel:+19177377623"
        variant="gradient"
      />
    </>
  )
}

function CTA({ title, description, primaryText, primaryHref, secondaryText, secondaryHref, variant }: {
  title: string
  description: string
  primaryText: string
  primaryHref: string
  secondaryText: string
  secondaryHref: string
  variant: "default" | "dark" | "gradient"
}) {
  const variants = {
    default: "bg-white",
    dark: "bg-brand-primary text-white",
    gradient: "bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800 text-white",
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`${variants[variant]} py-16 lg:py-24 rounded-3xl relative overflow-hidden`}
      aria-labelledby="cta-heading"
    >
      <Container className="relative text-center">
        <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant={variant === "dark" ? "accent" : "premium"} size="xl" asChild>
            <Link href={primaryHref}>{primaryText}</Link>
          </Button>
          {secondaryText && secondaryHref && (
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href={secondaryHref}>{secondaryText}</Link>
            </Button>
          )}
        </div>
      </Container>
    </motion.section>
  )
}
