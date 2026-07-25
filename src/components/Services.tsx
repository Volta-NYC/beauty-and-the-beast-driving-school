"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Car, Calculator, FileText, Stamp, Copy, Camera, Scan, Shield, Users, Clock, Calendar, Heart, Scale, Star, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const serviceCategories = [
  {
    id: "tax-services",
    title: "Tax Services",
    description: "ITIN, EIN, 1040, Self-Employed Taxes & More",
    icon: Calculator,
    color: "bg-emerald-500",
    href: "/tax-services",
    services: [
      { id: "individual", title: "Individual Tax Prep", description: "Federal & NY state returns", features: ["E-File Included", "Max Refund Guarantee", "Audit Support"] },
      { id: "business", title: "Business Tax Services", description: "Corporate, partnership, LLC returns", features: ["All Entity Types", "Quarterly Estimates", "Payroll Tax"] },
    ],
  },
  {
    id: "notary",
    title: "Notary Public",
    description: "Document notarization & certification",
    icon: Stamp,
    color: "bg-blue-500",
    href: "/services#notary",
    services: [
      { id: "notary", title: "Notary Public", description: "Licensed notary for affidavits, powers of attorney, deeds, contracts, and certified copies", features: ["Walk-ins Welcome", "Loan Signings", "Apostille Service"] },
    ],
  },
  {
    id: "copies",
    title: "Copy, Laminate, Fax & Scan",
    description: "High-volume copying, laminating, faxing, and scanning",
    icon: Copy,
    color: "bg-amber-500",
    href: "/services#copies",
    services: [
      { id: "copies", title: "Document Services", description: "Copy, laminate, fax, scan with competitive bulk pricing", features: ["Bulk Discounts", "Color/B&W", "Fax Send/Receive"] },
    ],
  },
  {
    id: "passport",
    title: "Passport Photos (Castle Hill)",
    description: "US State Department compliant passport photos",
    icon: Camera,
    color: "bg-purple-500",
    href: "/services#passport",
    services: [
      { id: "passport", title: "Passport Photos", description: "Available at Castle Hill location only. No appointment needed.", features: ["$12.99 for 2", "Ready in 10 min", "100% compliance"] },
    ],
  },
  {
    id: "defensive",
    title: "Point Reduction / Defensive Driving",
    description: "6-Hour NYS DMV-approved PIRP course",
    icon: Shield,
    color: "bg-red-500",
    href: "/driving-school#defensive",
    services: [
      { id: "defensive", title: "Defensive Driving", description: "Reduce up to 4 points, save 10% on insurance for 3 years", features: ["DMV Approved", "Online Option", "Same Day Cert"] },
    ],
  },
  {
    id: "road-test",
    title: "DMV Road Test Scheduling",
    description: "We handle the booking so you don't have to",
    icon: Calendar,
    color: "bg-indigo-500",
    href: "/driving-school#road-test",
    services: [
      { id: "road-test", title: "Road Test Scheduling", description: "DMV road test appointment booking and vehicle provided", features: ["Check Availability", "Book Earliest Slot", "Warm-up Lesson"] },
    ],
  },
  {
    id: "marriage",
    title: "Certified Marriage Officiant (NY & CT)",
    description: "Civil ceremonies in New York and Connecticut",
    icon: Heart,
    color: "bg-pink-500",
    href: "/services#marriage",
    services: [
      { id: "marriage", title: "Marriage Officiant", description: "Certified officiant for civil ceremonies. Bilingual (English/Spanish)", features: ["NY & CT", "Flexible Scheduling", "Custom Ceremonies"] },
    ],
  },
  {
    id: "divorce",
    title: "Pro-Se Divorce Service",
    description: "Self-representation assistance for uncontested divorces",
    icon: Scale,
    color: "bg-teal-500",
    href: "/services#divorce",
    services: [
      { id: "divorce", title: "Pro-Se Divorce", description: "Document preparation and filing guidance for uncontested divorce", features: ["Forms Prep", "Filing Guidance", "Court Procedures"] },
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
    <section className="bg-white py-16 sm:py-20 lg:py-28" aria-labelledby="services-heading">
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
            licensed services tailored to the Bronx community since 2011.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:mb-20"
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
