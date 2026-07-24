"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Phone, Mail, Clock, Car, CheckCircle, ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.123456789!2d-73.912345!3d40.812345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f4a1b2c3d4e5%3A0xf1e2d3c4b5a6!2s1234%20Main%20St%2C%20Bronx%2C%20NY%2010451!5e0!3m2!1sen!2sus!4v1234567890",
}

const directions = [
  { icon: Navigation, title: "By Subway", desc: "4 or D train to 161st St - Yankee Stadium. 5 min walk north on Main St." },
  { icon: Navigation, title: "By Bus", desc: "Bx6, Bx13, or Bx35 to Main St & 161st St. Office is on the corner." },
  { icon: Car, title: "By Car", desc: "From I-87, take Exit 4 for 161st St. Turn left on Main St. Free rear parking." },
  { icon: MapPin, title: "Walking", desc: "On Main St between 161st & 162nd, across from the community center." },
]

export default function FindUs() {
  return (
    <section className="py-20 lg:py-32 bg-white" aria-labelledby="find-us-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
            Find Us
          </span>
          <h2 id="find-us-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
            Visit Our Bronx Location
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Conveniently located on Main Street near Yankee Stadium. Easy access by subway, bus, or car with free parking available.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.div>
            <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Visit Us</h3>
                <address className="text-slate-600 not-italic leading-relaxed">{contactInfo.address}</address>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div>
            <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-emerald-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                  {contactInfo.phone}
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div>
            <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-amber-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-brand-primary mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-slate-600 hover:text-amber-600 transition-colors font-medium">
                  {contactInfo.email}
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Interactive Map</h3>
            <div className="rounded-xl overflow-hidden border border-slate-200">
              <iframe
                title="Beauty & The Beast Driving School Location"
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height={400}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.div className="space-y-4">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Transit & Directions</h3>
            {directions.map((dir, i) => (
              <Card key={i} className="border-slate-200 hover:border-brand-secondary/50 transition-colors">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                      <dir.icon className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-medium text-brand-primary">{dir.title}</h4>
                      <p className="text-sm text-slate-600">{dir.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
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

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-brand-primary mb-4">Why Choose Our Location?</h3>
            <div className="grid grid-cols-2 gap-4">
              <Card className="border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300 text-center p-6">
                <CardContent>
                  <div className="text-3xl font-bold text-brand-primary mb-1">14+</div>
                  <div className="text-slate-600 text-sm">Years Serving the Bronx</div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300 text-center p-6">
                <CardContent>
                  <div className="text-3xl font-bold text-brand-primary mb-1">15K+</div>
                  <div className="text-slate-600 text-sm">Students Trained</div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300 text-center p-6">
                <CardContent>
                  <div className="text-3xl font-bold text-brand-primary mb-1">98%</div>
                  <div className="text-slate-600 text-sm">First-Time Pass Rate</div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300 text-center p-6">
                <CardContent>
                  <div className="text-3xl font-bold text-brand-primary mb-1">5★</div>
                  <div className="text-slate-600 text-sm">Google Rating</div>
                </CardContent>
              </Card>
            </div>

            <div className="p-6 rounded-xl bg-brand-primary text-white text-center">
              <h4 className="text-xl font-bold mb-3">Ready to Get Started?</h4>
              <p className="text-slate-300 mb-6">Visit us, call us, or book online — we make it easy to begin your journey.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="accent" size="lg" asChild>
                  <a href="/contact">Book an Appointment</a>
                </Button>
                <a
                  href="tel:+17185550199"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}