"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Car, Calculator, Stamp, Copy, Camera, Shield, Calendar, Heart, Scale, FileText, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const primaryCategories = [
  {
    id: "driving-school",
    title: "Driving School",
    description: "NYS DMV licensed courses with late-model dual-control sedans.",
    icon: Car,
    href: "/driving-school",
    bullets: [
      "Teen & Adult behind-the-wheel instruction",
      "Mandatory 5-Hour pre-licensing course",
      "NYS DMV-approved 6-Hour defensive driving",
      "Express road test scheduling & car rental",
    ],
  },
  {
    id: "tax-services",
    title: "Tax Services",
    description: "IRS registered tax solutions for individuals and local businesses.",
    icon: Calculator,
    href: "/tax-services",
    bullets: [
      "Individual tax preparation (1040, Schedule C)",
      "Corporate, Partnership, & LLC returns",
      "ITIN application & CAA verification",
      "Sales tax compliance & bookkeeping support",
    ],
  },
]

const additionalServices = [
  { title: "Notary Public", icon: Stamp, href: "/services#notary", description: "Walk-in & mobile services for deeds, powers of attorney, & affidavits." },
  { title: "Copy, Laminate, Fax & Scan", icon: Copy, href: "/services#copies", description: "Fast, reliable bulk document duplication and transmission." },
  { title: "Passport Photos", icon: Camera, href: "/services#passport", description: "US State Dept. compliant photos ready in 10 minutes at Castle Hill." },
  { title: "Marriage Officiant", icon: Heart, href: "/services#marriage", description: "Bilingual civil wedding officiant certified in NY & CT." },
  { title: "Pro-Se Divorce Assistance", icon: Scale, href: "/services#divorce", description: "Step-by-step uncontested divorce document preparation support." },
  { title: "Document Translation", icon: FileText, href: "/services#translation", description: "USCIS-accepted certified English/Spanish document translation." },
]

export default function Services() {
  return (
    <section className="relative py-24 lg:py-32 bg-brand-primary overflow-hidden" aria-labelledby="services-heading">
      {/* Subtle Pattern & Blob background */}
      <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-[0.03] bg-repeat pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-secondary/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 text-brand-secondary text-xs sm:text-sm font-sans font-medium mb-6">
            Our Offerings
          </span>
          <h2 id="services-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            Elite Driving & Tax Solutions
          </h2>
          <p className="text-base sm:text-lg font-sans text-slate-300 leading-relaxed">
            Professional, licensed services designed to help you drive safely and manage your taxes efficiently.
          </p>
        </motion.div>

        {/* 2 Primary Service Large Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 lg:mb-20">
          {primaryCategories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="h-full glass-panel-gold rounded-3xl p-8 flex flex-col justify-between hover:border-brand-secondary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,151,75,0.1)] group">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-secondary to-brand-goldLight text-slate-950 flex items-center justify-center mb-6">
                    <cat.icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-brand-secondary transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-300 font-sans mb-6">
                    {cat.description}
                  </p>
                  <ul className="space-y-3 mb-8" role="list">
                    {cat.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm">
                        <CheckCircle className="h-4.5 w-4.5 text-brand-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Button size="lg" className="w-full bg-gradient-to-r from-brand-secondary to-brand-goldLight text-slate-950 font-semibold rounded-full group/btn" asChild>
                    <Link href={cat.href}>
                      Explore {cat.title}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 6-Card Grid for Additional Services */}
        <div className="border-t border-white/5 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">Additional Business Services</h3>
            <p className="text-sm sm:text-base text-slate-400">Convenient daily support services available at our Bronx offices.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
              >
                <Link href={service.href} className="block h-full group">
                  <Card className="h-full bg-slate-900/40 border border-white/5 hover:border-brand-secondary/35 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm">
                    <CardContent className="p-0 flex flex-col justify-between h-full">
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/10 text-brand-secondary flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-secondary group-hover:text-slate-950">
                          <service.icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <h4 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-brand-secondary transition-colors">
                          {service.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-brand-secondary group-hover:gap-2.5 transition-all">
                        Learn More
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}