"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calculator, FileText, Shield, Star, CheckCircle, ArrowRight, Cpu, GraduationCap, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import CTA from "@/components/CTA"

const taxServices = [
  {
    icon: FileText,
    title: "Individual Tax Preparation",
    description: "Complete federal and NY state tax return preparation for all filing statuses.",
    features: ["Form 1040 & NY IT-201", "ITIN applications & renewals", "EIN applications for businesses", "Self-employed / Schedule C", "Investment income reporting", "Education credits & deductions"],
    cta: "Get Quote",
    href: "/contact",
  },
  {
    icon: Shield,
    title: "Business Tax Services",
    description: "Comprehensive tax compliance for small businesses and self-employed individuals.",
    features: ["LLC, S-Corp, C-Corp returns", "Partnership returns (Form 1065)", "Quarterly estimated payments", "Payroll tax compliance", "Sales tax filings", "1099 preparation"],
    cta: "Get Quote",
    href: "/contact",
  },
  {
    icon: Cpu,
    title: "Online Filing via 1040.com",
    description: "Secure e-filing through our partnered platform with guided assistance.",
    features: ["Federal & state e-filing", "Direct deposit refunds", "Real-time status tracking", "Prior year returns available", "Amendment filing support", "Mobile-friendly platform"],
    cta: "File Now",
    href: "https://www.1040.com/?did=154993",
    external: true,
  },
  {
    icon: GraduationCap,
    title: "Financial Calculators",
    description: "Free online tools to estimate your tax liability and plan ahead.",
    features: ["Tax bracket calculator", "Refund estimator", "Withholding calculator", "Self-employment tax tool", "Retirement contribution limits", "Education credit estimator"],
    cta: "Try Calculators",
    href: "/tax-services#calculators",
  },
  {
    icon: Handshake,
    title: "Tax Advisory Center",
    description: "Year-round tax planning and expert consultation for complex situations.",
    features: ["Tax planning strategies", "IRS correspondence help", "Audit representation", "Payment plan setup", "Offer in Compromise", "Innocent spouse relief"],
    cta: "Schedule Consultation",
    href: "/contact",
  },
  {
    icon: Star,
    title: "Notary Public",
    description: "Licensed notary services available during all business hours.",
    features: ["Document notarization", "Loan signing agent", "Apostille coordination", "Affidavits & oaths", "Power of attorney", "Real estate documents"],
    cta: "Walk-ins Welcome",
    href: "/services#notary",
  },
]

const additionalServices = [
  { icon: FileText, title: "Copy / Laminate / Fax / Scan", description: "Document services at both locations. Competitive rates for bulk orders.", href: "/services#copies" },
  { icon: Shield, title: "Passport Photos", description: "Professional passport photos meeting all government requirements. Available at Castle Hill location only.", href: "/services#passport" },
  { icon: Handshake, title: "Marriage Officiant (NY & CT)", description: "Certified marriage officiant for civil ceremonies in New York and Connecticut.", href: "/services#marriage" },
  { icon: Cpu, title: "Pro-Se Divorce Service", description: "Self-representation assistance for uncontested divorces. Forms preparation and filing guidance.", href: "/services#divorce" },
]

export default function TaxServicesPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-hidden="true" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto py-20 lg:py-32"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-white">Comprehensive Tax Solutions</span>
            </motion.span>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
            >
              Expert Tax Preparation &{" "}
              <span className="text-brand-accent">Advisory Services</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              From ITIN applications to complex business returns, Porrata Tax Services provides accurate, affordable tax preparation with year-round support. Serving the Bronx community since 2011.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="premium" size="xl" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/tax-services#calculators">Use Free Calculators</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section id="prep" className="py-20 lg:py-32 bg-white" aria-labelledby="prep-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Tax Preparation</span>
            <h2 id="prep-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Accurate Returns for{" "}
              <span className="text-brand-secondary">Every Situation</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We handle everything from simple W-2 returns to complex multi-state filings. Maximum refund guaranteed or we'll review it free.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {taxServices.slice(0, 3).map((service) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full flex flex-col border-slate-200 hover:border-brand-secondary/50 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-brand-secondary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-2 mb-6 flex-1" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={service.href} target={service.external ? "_blank" : undefined} rel={service.external ? "noopener noreferrer" : undefined}>
                        {service.cta}
                        {service.external && <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="filing" className="py-20 lg:py-32 bg-slate-50" aria-labelledby="filing-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
                <Cpu className="h-4 w-4" aria-hidden="true" />
                E-Filing Partner
              </span>
              <h2 id="filing-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
                File Online with{" "}
                <span className="text-brand-secondary">1040.com</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                Our partnership with 1040.com provides a secure, user-friendly platform for e-filing your federal and state returns. Fast refunds via direct deposit — typically within 14-21 days.
              </p>
              <ul className="space-y-3 mb-8" role="list">
                {[
                  "Federal & NY state e-filing included",
                  "Direct deposit to your bank account",
                  "Real-time refund status tracking",
                  "Prior year returns available",
                  "Amendment filing support",
                  "Mobile-friendly — file from anywhere",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="premium" size="lg" asChild>
                <a href="https://www.1040.com/?did=154993" target="_blank" rel="noopener noreferrer">File Now on 1040.com</a>
              </Button>
            </div>

            <div className="relative">
              <Card className="bg-white/50 backdrop-blur-sm border-slate-200 h-full">
                <CardHeader>
                  <CardTitle className="text-brand-primary">Why Choose Our Portal?</CardTitle>
                  <CardDescription>Benefits of filing through our partnership</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { icon: Shield, title: "Maximum Refund Guarantee", desc: "We review every return for accuracy and all eligible deductions." },
                      { icon: Star, title: "Expert Support", desc: "Live chat and phone support from certified tax professionals." },
                      { icon: Cpu, title: "Bank-Level Security", desc: "256-bit encryption protects your sensitive financial data." },
                      { icon: GraduationCap, title: "Education Resources", desc: "Free guides and videos to help you understand your taxes." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="font-medium text-brand-primary">{item.title}</p>
                          <p className="text-sm text-slate-600">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="calculators" className="py-20 lg:py-32 bg-white" aria-labelledby="calculators-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Free Tools</span>
            <h2 id="calculators-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Financial{" "}
              <span className="text-brand-secondary">Calculators</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Estimate your taxes, plan your withholding, and make informed financial decisions with our free online tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { category: "Paycheck & Benefits", calculators: [
                { title: "How will payroll adjustments affect my take-home pay?", href: "https://www.calcxml.com/calculators/payroll-adjustments" },
                { title: "Convert my salary to an equivalent hourly wage", href: "https://www.calcxml.com/calculators/salary-to-hourly" },
                { title: "Convert my hourly wage to an equivalent annual salary", href: "https://www.calcxml.com/calculators/hourly-to-salary" },
                { title: "What may my 401(k) be worth?", href: "https://www.calcxml.com/calculators/401k-value" },
                { title: "What is the impact of increasing my 401(k) contribution?", href: "https://www.calcxml.com/calculators/401k-contribution-impact" },
              ]},
              { category: "Taxes", calculators: [
                { title: "2022 Federal income tax estimator", href: "https://www.calcxml.com/calculators/federal-income-tax" },
                { title: "Should I adjust my payroll withholdings?", href: "https://www.calcxml.com/calculators/payroll-withholding" },
                { title: "How much self-employment tax will I pay?", href: "https://www.calcxml.com/calculators/self-employment-tax" },
                { title: "How much of my social security benefit may be taxed?", href: "https://www.calcxml.com/calculators/social-security-tax" },
                { title: "Tax refund estimator", href: "https://www.calcxml.com/calculators/tax-refund" },
              ]},
              { category: "Savings", calculators: [
                { title: "Want to be a millionaire? - Find out how quickly it can be done!", href: "https://www.calcxml.com/calculators/millionaire" },
                { title: "How long will it take to double my savings?", href: "https://www.calcxml.com/calculators/double-savings" },
                { title: "How long until I reach my savings goal?", href: "https://www.calcxml.com/calculators/savings-goal" },
                { title: "How much should I save to reach my goal?", href: "https://www.calcxml.com/calculators/save-to-reach-goal" },
                { title: "Saving now vs. saving later", href: "https://www.calcxml.com/calculators/saving-now-vs-later" },
              ]},
              { category: "Retirement", calculators: [
                { title: "How much will I need for retirement?", href: "https://www.calcxml.com/calculators/retirement-needs" },
                { title: "When should I begin saving for retirement?", href: "https://www.calcxml.com/calculators/when-to-save-retirement" },
                { title: "I'm retired, how long will my savings last?", href: "https://www.calcxml.com/calculators/retirement-savings-last" },
                { title: "Social Security retirement income calculator", href: "https://www.calcxml.com/calculators/social-security-retirement" },
                { title: "Compare a Roth 401(k) to a Traditional 401(K)", href: "https://www.calcxml.com/calculators/roth-vs-traditional-401k" },
              ]},
            ].map((cat, catIndex) => (
              <motion.div key={cat.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-brand-primary mb-4">{cat.category}</h3>
                  <div className="space-y-3">
                    {cat.calculators.map((calc, calcIndex) => (
                      <motion.div key={calc.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: calcIndex * 0.05 }}>
                        <a href={calc.href} target="_blank" rel="noopener noreferrer" className="block p-4 rounded-lg border border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300 text-left">
                          <p className="font-medium text-slate-900 group-hover:text-brand-secondary transition-colors">{calc.title}</p>
                          <p className="text-xs text-slate-500 mt-1">Opens in calcxml.com →</p>
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="advisory" className="py-20 lg:py-32 bg-brand-primary" aria-labelledby="advisory-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/20 text-brand-secondary text-sm font-medium mb-6">
                <Handshake className="h-4 w-4" aria-hidden="true" />
                Year-Round Support
              </span>
              <h2 id="advisory-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
                Tax Advisory Center
              </h2>
              <p className="text-slate-300 text-lg mb-8">
                Taxes don't end on April 15th. Our advisory center provides year-round support for planning, problem resolution, and strategic guidance.
              </p>
              <ul className="space-y-4 mb-8" role="list">
                {[
                  "Proactive tax planning to minimize liability",
                  "IRS & NYS audit representation",
                  "Installment agreements & payment plans",
                  "Offer in Compromise (settle for less)",
                  "Penalty abatement requests",
                  "Innocent spouse relief",
                  "Back tax return preparation",
                  "Business entity selection guidance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>

            <Card className="bg-slate-900/50 border-slate-800 h-full">
              <CardHeader>
                <CardTitle className="text-white">Common Issues We Resolve</CardTitle>
                <CardDescription className="text-slate-400">Don't face the IRS alone</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { issue: "CP2000 Notice (Underreporter)", solution: "We respond with documentation and explanation" },
                    { issue: "Tax Lien or Levy", solution: "Negotiate release or subordination" },
                    { issue: "Wage Garnishment", solution: "Stop garnishment through installment agreement" },
                    { issue: "Unfiled Returns (3+ years)", solution: "Prepare all back returns, negotiate penalties" },
                    { issue: "Audit Notification", solution: "Full representation through examination" },
                  ].map((item) => (
                    <div key={item.issue} className="p-4 rounded-lg bg-slate-800/50">
                      <p className="font-medium text-brand-accent">{item.issue}</p>
                      <p className="text-slate-300 text-sm">{item.solution}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="additional-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">More Services</span>
            <h2 id="additional-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Additional{" "}
              <span className="text-brand-secondary">Convenient Services</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Save time with all your document and legal needs in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {additionalServices.map((service) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-brand-secondary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="mb-4">{service.description}</CardDescription>
                    <Button variant="outline" size="sm" className="w-full mt-auto" asChild>
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <CTA
        title="Ready to File Your Taxes?"
        description="Get expert preparation, maximum refunds, and year-round support. Walk-ins welcome or book online for priority service."
        primaryText="Book Appointment"
        primaryHref="/contact"
        secondaryText="Call Now"
        secondaryHref="tel:+19177377623"
        variant="gradient"
      />
    </>
  )
}
