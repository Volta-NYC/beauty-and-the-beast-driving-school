"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Car, Calculator, FileText, Stamp, Languages, Copy, FileText as FaxIcon, Scan, Shield, Users, Clock, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const serviceCategories = [
  {
    id: "driving-school",
    title: "Driving School",
    description: "NYS DMV-approved driver education programs for teens and adults",
    icon: Car,
    color: "bg-blue-500",
    href: "/driving-school",
    services: [
      { id: "teen", title: "Teen Driver Education", description: "24hr classroom + 6hr behind-the-wheel", features: ["NYS Certified", "Flexible Schedule", "Road Test Help"] },
      { id: "adult", title: "Adult Driving Lessons", description: "Personalized 1-on-1 instruction", features: ["Patient Instructors", "Custom Plans", "7 Days/Week"] },
      { id: "defensive", title: "Defensive Driving", description: "Point reduction & insurance discount", features: ["DMV Approved", "Online Option", "4hr Course"] },
      { id: "road-test", title: "Road Test Prep", description: "Mock tests & route familiarization", features: ["Practice Routes", "Mock Exams", "Vehicle Provided"] },
      { id: "5-hour", title: "5-Hour Pre-Licensing", description: "Mandatory NYS pre-licensing class", features: ["Weekly Classes", "Certificate Same Day", "English/Spanish"] },
    ],
  },
  {
    id: "tax-services",
    title: "Tax Services",
    description: "Comprehensive tax preparation and planning for individuals and businesses",
    icon: Calculator,
    color: "bg-emerald-500",
    href: "/tax-services",
    services: [
      { id: "individual", title: "Individual Tax Prep", description: "Federal & NY state returns", features: ["E-File Included", "Max Refund Guarantee", "Audit Support"] },
      { id: "business", title: "Business Tax Services", description: "Corporate, partnership, LLC returns", features: ["All Entity Types", "Quarterly Estimates", "Payroll Tax"] },
      { id: "planning", title: "Tax Planning", description: "Year-round tax strategy", features: ["Proactive Planning", "Retirement Strategies", "Investment Advice"] },
      { id: "irs", title: "IRS Resolution", description: "Audits, liens, levies & payment plans", features: ["Offer in Compromise", "Installment Agreements", "Penalty Abatement"] },
      { id: "bookkeeping", title: "Bookkeeping", description: "Monthly & quarterly bookkeeping", features: ["QuickBooks Certified", "Financial Statements", "Bank Reconciliation"] },
    ],
  },
  {
    id: "additional-services",
    title: "Additional Services",
    description: "Convenient business services to save you time",
    icon: FileText,
    color: "bg-amber-500",
    href: "/services",
    services: [
      { id: "notary", title: "Notary Public", description: "Document notarization & certification", features: ["Walk-ins Welcome", "Loan Signings", "Apostille Service"] },
      { id: "translation", title: "Translation", description: "Spanish/English certified translations", features: ["USCIS Accepted", "Same Day Available", "Document Review"] },
      { id: "copies", title: "Copies & Fax", description: "High-volume copying & faxing", features: ["Bulk Discounts", "Color/B&W", "Fax Send/Receive"] },
      { id: "scanning", title: "Document Scanning", description: "Secure digital conversion", features: ["OCR Available", "Cloud Delivery", "Secure Shredding"] },
    ],
  },
]

const allFeatures = [
  { icon: Shield, title: "Licensed & Insured", description: "NYS DMV certified with full liability coverage" },
  { icon: Users, title: "Bilingual Staff", description: "English & Spanish speaking instructors & preparers" },
  { icon: Clock, title: "Flexible Hours", description: "Open 7 days a week, early morning to evening" },
  { icon: Star, title: "5-Star Rated", description: "Consistently rated 4.9+ on Google & Yelp" },
  { icon: CheckCircle, title: "High Pass Rate", description: "98% first-time road test pass rate" },
  { icon: Car, title: "Modern Fleet", description: "Late-model vehicles with dual controls" },
]

export default function Services() {
  return (
    <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <motion.div className="absolute inset-0 rounded-full bg-brand-secondary" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
              <motion.div className="absolute inset-0 rounded-full bg-brand-secondary" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
              <motion.div className="absolute inset-0 rounded-full bg-brand-secondary" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} />
            </span>
            Our Services
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
            Comprehensive Solutions for{" "}
            <span className="text-brand-secondary">Driving & Tax Needs</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            From getting your driver&apos;s license to optimizing your tax return, we provide professional,
            licensed services tailored to the Bronx community since 1995.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {serviceCategories.map((category, index) => (
            <motion.div key={category.id}>
              <Link href={category.href} className="block group">
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4", category.color)}>
                      <category.icon className="h-7 w-7 text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-brand-secondary transition-colors">{category.title}</CardTitle>
                    <CardDescription className="text-slate-600">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    {category.services.slice(0, 3).map((service) => (
                      <div
                        key={service.id}
                        className="p-3 rounded-lg bg-slate-50 hover:bg-brand-secondary/10 transition-colors group-hover:bg-brand-secondary/10"
                      >
                        <h4 className="font-medium text-slate-900 group-hover:text-brand-secondary transition-colors">{service.title}</h4>
                        <p className="text-sm text-slate-500 mt-0.5">{service.description}</p>
                      </div>
                    ))}
                    <div className="pt-4 flex items-center gap-2 text-brand-secondary font-medium group-hover:gap-3 transition-all">
                      View All Services
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="border-slate-200 hover:border-brand-accent/50 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-brand-accent" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}