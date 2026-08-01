"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Phone, Mail, Clock, Car } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const contactInfo = {
  email: "carmen@porratax.com",
  hours: [
    { days: "Monday - Friday", hours: "10:00 AM - 6:00 PM" },
    { days: "Saturday", hours: "11:00 AM - 5:00 PM" },
    { days: "Sunday", hours: "By appointment only" },
  ],
  locations: [
    {
      name: "Main Location",
      address: "909 E. 169th St, Bronx, NY 10459",
      phone: "(917) 737-7623",
      mapUrl: "https://www.google.com/maps?q=909%20E.%20169th%20St%20Bronx%20NY%2010459&output=embed",
    },
    {
      name: "Castle Hill Location",
      address: "847 Castle Hill Ave, Bronx, NY 10473",
      phone: "(347) 281-8032",
      mapUrl: "https://www.google.com/maps?q=847%20Castle%20Hill%20Ave%20Bronx%20NY%2010473&output=embed",
    },
  ],
}

const transit = [
  { icon: Navigation, title: "Subway", desc: "6 train to Whitlock Ave or 2/5 train to Simpson St, followed by a short walk." },
  { icon: Car, title: "Driving", desc: "Street parking available near both locations. Directly accessible via I-95." },
]

export default function FindUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-primary text-white overflow-hidden" aria-labelledby="find-us-heading">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-[0.03] bg-repeat pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 text-brand-secondary text-xs sm:text-sm font-sans font-medium mb-6">
            Our Locations
          </span>
          <h2 id="find-us-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            Two Convenient Bronx Offices
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Visit us for driving school bookings, tax consultation, notary work, and document services. Walk-ins are always welcome.
          </p>
        </motion.div>

        {/* 2 Locations Grid Side-By-Side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {contactInfo.locations.map((loc, idx) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="glass-panel-gold rounded-lg p-6 md:p-8 flex flex-col justify-between h-full hover:border-brand-secondary/40 transition-all duration-300 hover:shadow-lg">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-xs text-brand-secondary font-sans font-semibold">
                      {loc.name}
                    </span>
                    <MapPin className="h-6 w-6 text-brand-secondary" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4">{loc.name}</h3>
                  <address className="text-slate-300 not-italic leading-relaxed mb-6 font-sans text-sm sm:text-base">
                    {loc.address}
                  </address>

                  {/* Interactive Map Embedded for each */}
                  <div className="rounded-2xl overflow-hidden border border-white/5 h-48 mb-6">
                    <iframe
                      title={`${loc.name} map`}
                      src={loc.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center border-t border-white/5 pt-4 gap-4">
                  <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 text-slate-300 hover:text-brand-secondary transition-colors font-sans text-sm font-semibold">
                    <Phone className="h-4 w-4 text-brand-secondary" />
                    <span>Call Location: {loc.phone}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Hours + Transit Details */}
        <div className="grid lg:grid-cols-12 gap-12 border-t border-white/5 pt-16 items-start">

          {/* Business Hours Table */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Office Business Hours</h3>
            <div className="overflow-hidden border border-white/5 rounded-2xl glass-panel">
              <table className="min-w-full divide-y divide-white/5">
                <tbody className="divide-y divide-white/5">
                  {contactInfo.hours.map((h) => (
                    <tr key={h.days} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-white">{h.days}</td>
                      <td className="px-6 py-4 text-sm text-slate-300 text-right">{h.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5">
              <Clock className="h-5 w-5 text-brand-secondary flex-shrink-0" />
              <p className="text-xs sm:text-sm text-slate-400">
                Need service outside business hours? Contact Carmen or Wilkin to request a Sunday or early morning appointment.
              </p>
            </div>
          </div>

          {/* Transit and Email details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">Getting Here & Contact</h3>
            <div className="space-y-4">
              {transit.map((t, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-2xl glass-panel border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-brand-secondary flex-shrink-0">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{t.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">{t.desc}</p>
                  </div>
                </div>
              ))}

              <div className="flex gap-4 p-4 rounded-2xl bg-gradient-to-r from-brand-secondary/15 to-brand-goldLight/15 border border-brand-secondary/20">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-brand-secondary/20 flex items-center justify-center text-brand-secondary flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm sm:text-base">Email Inquiries</h4>
                  <a href={`mailto:${contactInfo.email}`} className="text-xs sm:text-sm text-brand-secondary hover:text-brand-goldLight transition-colors font-medium break-all mt-1 block">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
