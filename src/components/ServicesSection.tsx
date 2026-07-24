"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Car, Calculator, FileText, Stamp, Languages, Copy, Scan, Shield, Users, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const drivingServices = [
  {
    id: "teen",
    icon: Car,
    title: "Teen Driver Education",
    description: "Complete NYS DMV-approved driver education program for students 16-17. Includes 24 hours classroom instruction and 6 hours behind-the-wheel training.",
    features: ["NYS Certified Curriculum", "Flexible Scheduling", "Parent Orientation Included", "Road Test Scheduling Assistance"],
    href: "/driving-school#teen",
    badge: "Most Popular",
  },
  {
    id: "adult",
    icon: Users,
    title: "Adult Driving Lessons",
    description: "Personalized one-on-one instruction for adult learners of all ages. Whether you're a first-time driver or need a refresher course.",
    features: ["Patient, Experienced Instructors", "Custom Lesson Plans", "Evening & Weekend Availability", "Nervous Driver Specialists"],
    href: "/driving-school#adult",
    badge: null,
  },
  {
    id: "defensive",
    icon: Shield,
    title: "Defensive Driving Course",
    description: "NYS DMV-approved Point & Insurance Reduction Program (PIRP). Reduce up to 4 points on your license and save 10% on insurance for 3 years.",
    features: ["6-Hour Online or In-Person", "Point Reduction", "Insurance Discount", "Certificate Same Day"],
    href: "/driving-school#defensive",
    badge: "Save 10%",
  },
  {
    id: "road-test",
    icon: Star,
    title: "Road Test Preparation",
    description: "Mock road tests on actual DMV test routes. Route familiarization, parallel parking practice, and examiner expectations review.",
    features: ["Actual Test Routes", "Mock Examiner Feedback", "Parallel Parking Mastery", "High Pass Rate"],
    href: "/driving-school#road-test",
    badge: null,
  },
  {
    id: "5-hour",
    icon: Clock,
    title: "5-Hour Pre-Licensing Course",
    description: "Mandatory NYS pre-licensing classroom course (MV-278). Required before scheduling your road test. Offered weekly in English and Spanish.",
    features: ["NYS DMV Certified (MV-278)", "Weekly Classes", "English & Spanish", "Certificate Issued Same Day"],
    href: "/driving-school#5-hour",
    badge: "Required",
  },
]

const taxServices = [
  {
    id: "individual",
    icon: Calculator,
    title: "Individual Tax Preparation",
    description: "Comprehensive federal and NY state tax return preparation. Maximize your refund with expert knowledge of deductions and credits.",
    features: ["Federal & NY State Returns", "E-File & Direct Deposit", "Year-Round Support", "Audit Assistance Included"],
    href: "/tax-services#individual",
    badge: null,
  },
  {
    id: "business",
    icon: FileText,
    title: "Business Tax Services",
    description: "Complete tax compliance for corporations, partnerships, LLCs, and sole proprietorships. Strategic planning to minimize liability.",
    features: ["Form 1120, 1120-S, 1065", "Quarterly Estimates", "Payroll Tax Compliance", "Sales Tax Filings"],
    href: "/tax-services#business",
    badge: null,
  },
  {
    id: "planning",
    icon: Shield,
    title: "Tax Planning & Consulting",
    description: "Proactive year-round tax strategy. We help you make informed decisions that reduce your tax burden legally and ethically.",
    features: ["Retirement Planning", "Investment Tax Strategy", "Entity Selection", "Estate & Gift Tax Planning"],
    href: "/tax-services#planning",
    badge: "Strategic",
  },
  {
    id: "irs",
    icon: Users,
    title: "IRS Problem Resolution",
    description: "Expert representation for audits, collections, liens, levies, and payment plans. Don't face the IRS alone — we negotiate on your behalf.",
    features: ["Audit Representation", "Offer in Compromise", "Installment Agreements", "Penalty Abatement"],
    href: "/tax-services#irs",
    badge: "Urgent Help",
  },
  {
    id: "bookkeeping",
    icon: Calculator,
    title: "Bookkeeping Services",
    description: "Monthly and quarterly bookkeeping, financial statement preparation, and QuickBooks setup/training. Keep your books clean and compliant.",
    features: ["Monthly Reconciliation", "Financial Statements", "QuickBooks ProAdvisor", "1099 Preparation"],
    href: "/tax-services#bookkeeping",
    badge: null,
  },
]

const additionalServices = [
  {
    id: "notary",
    icon: Stamp,
    title: "Notary Public Services",
    description: "Licensed notary public for document authentication, affidavits, powers of attorney, and certified copies. Walk-ins welcome.",
    href: "/services#notary",
  },
  {
    id: "translation",
    icon: Languages,
    title: "Document Translation",
    description: "Certified Spanish/English translations for immigration, legal, and official documents. Accepted by USCIS and government agencies.",
    href: "/services#translation",
  },
  {
    id: "copies",
    icon: Copy,
    title: "Photocopy & Fax Services",
    description: "High-volume copying, scanning, and fax services. Competitive rates for bulk orders. Same-day service available.",
    href: "/services#copies",
  },
  {
    id: "scanning",
    icon: Scan,
    title: "Document Scanning",
    description: "Secure digital conversion of paper documents. OCR-enabled searchable PDFs. HIPAA-compliant handling for sensitive records.",
    href: "/services#scanning",
  },
]

interface ServiceCardProps {
  service: typeof drivingServices[0]
  index: number
  categoryColor: string
}

function ServiceCard({ service, index, categoryColor }: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)" }}
      className="group"
    >
      <Card className="h-full flex flex-col transition-all duration-300 border-slate-200 hover:border-brand-secondary/50">
        <CardHeader className="pb-4">
          <div
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4",
              `bg-${categoryColor}/10 text-${categoryColor}`
            )}
            aria-hidden="true"
          >
            <service.icon className="h-6 w-6" />
          </div>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-lg">{service.title}</CardTitle>
            {service.badge && (
              <span className={cn(
                "text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0",
                categoryColor === "blue" ? "bg-blue-100 text-blue-700" :
                categoryColor === "green" ? "bg-green-100 text-green-700" :
                "bg-purple-100 text-purple-700"
              )}>
                {service.badge}
              </span>
            )}
          </div>
          <CardDescription className="text-base">{service.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <ul className="space-y-2 mb-6 flex-1" role="list">
            {service.features?.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                <span className={cn("h-1.5 w-1.5 rounded-full flex-shrink-0 mt-2", `bg-${categoryColor}`)} aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" size="sm" className="w-full mt-auto group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-colors" asChild>
            <Link href={service.href}>
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.article>
  )
}

interface ServicesSectionProps {
  title: string
  description: string
  services: typeof drivingServices
  categoryColor: "blue" | "green" | "purple"
  categoryIcon: React.ComponentType<{ className?: string }>
  viewAllHref: string
}

export function ServicesSection({
  title,
  description,
  services,
  categoryColor,
  categoryIcon: CategoryIcon,
  viewAllHref,
}: ServicesSectionProps) {
  return (
    <section className="py-20 lg:py-32" aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium mb-4">
            <CategoryIcon className="h-4 w-4" aria-hidden="true" />
            {title}
          </div>
          <h2 id={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`} className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-slate-600">{description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} categoryColor={categoryColor} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button variant="outline" size="lg" asChild>
            <Link href={viewAllHref}>
              View All {title}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export { drivingServices, taxServices, additionalServices }