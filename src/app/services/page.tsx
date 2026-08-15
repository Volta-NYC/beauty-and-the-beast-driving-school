"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"
import { FileText, Stamp, Copy, Camera, Heart, Scale, CheckCircle, ArrowRight, Shield, Calendar, Clock, MapPin, Phone, Mail, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import CTA from "@/components/CTA"
import PageHero from "@/components/PageHero"

const additionalServices = [
  {
    title: "Notary Public",
    description: "Licensed notary for affidavits, powers of attorney, deeds, contracts, and certified copies. Walk-ins welcome during business hours.",
    href: "#notary",
    icon: Stamp,
  },
  {
    title: "Copy, Laminate, Fax & Scan",
    description: "High-volume copying, laminating (up to 11x17), fax send/receive, and secure document scanning. Competitive bulk pricing.",
    href: "#copies",
    icon: Copy,
  },
  {
    title: "Passport Photos",
    description: "US passport photo compliant with State Department requirements. Available at Castle Hill location only. No appointment needed.",
    href: "#passport",
    icon: Camera,
  },
  {
    title: "Marriage Officiant (NY & CT)",
    description: "Certified officiant for civil ceremonies in New York and Connecticut. Flexible scheduling, bilingual (English/Spanish).",
    href: "#marriage",
    icon: Heart,
  },
  {
    title: "Pro-Se Divorce Service",
    description: "Assistance with uncontested divorce paperwork for self-representation. Document preparation, filing guidance, and court procedures.",
    href: "#divorce",
    icon: Scale,
  },
  {
    title: "Document Translation",
    description: "Certified English/Spanish translations for immigration, DMV, court, school, and official document needs.",
    href: "#translation",
    icon: FileText,
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="More ways we help" title={<>The everyday things<br /><em>under one roof.</em></>} description="Notary work, document services, passport photos, and more—handled locally, clearly, and without the runaround." primary={{ label: "Visit us", href: "/contact" }} secondary={{ label: "Browse services", href: "#notary" }} detail="Walk-ins welcome" mode="orbit" />
      <section className="hidden relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/20 text-brand-secondary text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <motion.div className="absolute inset-0 rounded-full bg-brand-secondary" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.div className="absolute inset-0 rounded-full bg-brand-secondary" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
                <motion.div className="absolute inset-0 rounded-full bg-brand-secondary" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} />
              </span>
              Additional Services
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              Convenient Services{" "}
              <span className="text-brand-accent">Under One Roof</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Save time with all your document, legal, and personal needs handled professionally at our Bronx locations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="premium" size="xl" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white" asChild>
                <Link href="/contact#locations">Visit Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="services-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Our Services</span>
            <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Everything You Need,{" "}
              <span className="text-brand-secondary">One Location</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              From notarization to passport photos, we provide professional document and legal services with the same care and expertise that defines our driving school and tax services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {additionalServices.map((service) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-brand-secondary/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-brand-secondary" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription className="text-slate-600">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="notary" className="py-20 lg:py-32 bg-slate-50" aria-labelledby="notary-heading">
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
                <Stamp className="h-4 w-4" aria-hidden="true" />
                Notary Public Services
              </span>
              <h2 id="notary-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
                Professional{" "}
                <span className="text-brand-secondary">Notarization</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our licensed notary public is available during all business hours for your document authentication needs. No appointment necessary for standard notarizations.
              </p>
              <ul className="space-y-4 mb-8" role="list">
                {[
                  "Affidavits and sworn statements",
                  "Powers of attorney (general & limited)",
                  "Real estate deeds and transfers",
                  "Loan and mortgage documents",
                  "Contracts and agreements",
                  "Certified true copies",
                  "Consent forms for minors traveling",
                  "Vehicle title transfers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                <strong>Notaries:</strong> Carmen Y. Porrata and Wilkin Cabrera — "Appointed by the Secretary of State, State of New York" and "Members of the American Association of Notaries."
              </p>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                <strong>Full Service Mobile Notary Public</strong> also available, by appointment only. To book, contact: <a href="tel:+16468536303" className="text-brand-secondary hover:underline">(646) 853-6303</a>
              </p>
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                <strong>Pricing:</strong> $150 standard Mobile Notary services (flat fee + the cost to notarize)
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                <strong>Service Area:</strong> Conveniently servicing you throughout Manhattan, Bronx, Brooklyn, Queens and Lower Westchester areas.
              </p>
              <Button variant="premium" size="lg" asChild>
                <Link href="/contact">Visit for Notary</Link>
              </Button>
            </div>

            <Card className="bg-brand-primary border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                  What to Bring
                </h3>
                <ul className="space-y-3 text-slate-300" role="list">
                  {[
                    "Valid government-issued photo ID",
                    "The unsigned document(s) to notarize",
                    "All signers must be present",
                    "Witnesses if required by document",
                    "Payment: $2 per signature (cash/card)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      <section id="copies" className="py-20 lg:py-32 bg-white" aria-labelledby="copies-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
                  <Copy className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
                  Document Services Pricing
                </h3>
                <ul className="space-y-3 text-slate-600" role="list">
                  {[
                    "Black & White Copies: $0.15/page",
                    "Color Copies: $0.50/page",
                    "Lamination (letter): $2.00 each",
                    "Lamination (legal/11x17): $3.00 each",
                    "Fax Send (local): $1.00/page",
                    "Fax Send (long distance): $2.00/page",
                    "Fax Receive: $0.50/page",
                    "Document Scanning: $0.25/page",
                    "Bulk discounts available (100+ pages)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copy, Laminate, Fax & Scan
              </span>
              <h2 id="copies-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
                Document Services{" "}
                <span className="text-brand-secondary">Done Right</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Fast, affordable document services for personal and business needs. High-volume capacity with same-day turnaround for most requests.
              </p>
              <ul className="space-y-3 mb-8" role="list">
                {[
                  "High-speed digital copying & printing",
                  "Lamination up to 11x17 inches",
                  "Secure fax send & receive",
                  "OCR-enabled document scanning",
                  "PDF conversion & email delivery",
                  "Binding & finishing options",
                  "Bulk order discounts",
                  "Confidential document handling",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="passport" className="py-20 lg:py-32 bg-brand-primary" aria-labelledby="passport-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/20 text-brand-secondary text-sm font-medium mb-6">
              <Camera className="h-4 w-4" aria-hidden="true" />
              Castle Hill Location Only
            </span>
            <h2 id="passport-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
              Official{" "}
              <span className="text-brand-accent">Passport Photos</span>
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              US State Department compliant passport photos taken on-site. No appointment needed during business hours at our Castle Hill Avenue location.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                { title: "Price", value: "$12.99 for 2 photos" },
                { title: "Time", value: "Ready in 10 minutes" },
                { title: "Guarantee", value: "100% compliance or retake free" },
                { title: "Format", value: "2x2 inches, white background" },
              ].map((item) => (
                <Card key={item.title} className="bg-slate-900/50 border-slate-800">
                  <CardContent className="p-6">
                    <p className="text-brand-accent font-semibold">{item.title}</p>
                    <p className="text-white text-lg">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button variant="accent" size="lg" asChild>
              <Link href="/contact#locations">Get Directions to Castle Hill</Link>
            </Button>
          </motion.div>
        </Container>
      </section>

      <section id="marriage" className="py-20 lg:py-32 bg-white" aria-labelledby="marriage-heading">
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
                <Heart className="h-4 w-4" aria-hidden="true" />
                Certified Officiant
              </span>
              <h2 id="marriage-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
                Marriage{" "}
                <span className="text-brand-secondary">Officiant Services</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Ordained and certified to perform civil marriage ceremonies in New York and Connecticut. We make your special day legally seamless and personally meaningful.
              </p>
              <ul className="space-y-3 mb-8" role="list">
                {[
                  "Civil ceremonies in NY & CT",
                  "Bilingual: English & Spanish",
                  "Flexible scheduling (evenings/weekends)",
                  "Marriage license guidance",
                  "Custom ceremony options available",
                  "Witnesses available if needed",
                  "Same-day appointments possible",
                  "Competitive flat-rate pricing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="bg-slate-50 border-slate-200">
              <CardHeader>
                <CardTitle className="text-brand-primary flex items-center gap-2">
                  <Heart className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
                  Process Overview
                </CardTitle>
                <CardDescription>Simple steps to your ceremony</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-4" role="list">
                  {[
                    "Obtain marriage license from county clerk (24-hour wait in NY)",
                    "Contact us to schedule your ceremony date & time",
                    "Choose standard or personalized ceremony script",
                    "We perform the ceremony at your location or ours",
                    "We file the license — you receive certified copy",
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-full bg-brand-secondary flex items-center justify-center text-white font-bold flex-shrink-0">{i + 1}</span>
                      <span className="text-slate-600 mt-1">{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      <section id="divorce" className="py-20 lg:py-32 bg-slate-50" aria-labelledby="divorce-heading">
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
                <Scale className="h-4 w-4" aria-hidden="true" />
                Pro-Se Divorce
              </span>
              <h2 id="divorce-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
                Self-Representation{" "}
                <span className="text-brand-secondary">Divorce Assistance</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Navigate uncontested divorce without an attorney. We prepare all required documents, guide you through filing, and ensure court compliance.
              </p>
              <ul className="space-y-3 mb-8" role="list">
                {[
                  "Uncontested divorce document preparation",
                  "Summons with notice or summons & complaint",
                  "Affidavit of defendant & affidavit of service",
                  "Child support & spousal support worksheets",
                  "Qualified medical child support order (QMCSO)",
                  "Filing instructions & court procedures",
                  "Fee waiver application assistance",
                  "Bilingual support (English/Spanish)",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-sm italic">
                Note: This service is for uncontested divorces only. We do not provide legal advice or representation in court.
              </p>
            </div>

            <Card className="bg-brand-primary border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-accent" aria-hidden="true" />
                  What You'll Need
                </h3>
                <ul className="space-y-3 text-slate-300" role="list">
                  {[
                    "Marriage certificate (certified copy)",
                    "Birth certificates of any children",
                    "Financial statements (income, assets, debts)",
                    "Separation agreement (if applicable)",
                    "Government-issued photo ID",
                    "Proof of NY residency (6+ months)",
                    "Court filing fees ($335) or fee waiver application",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="accent" size="lg" className="w-full mt-6" asChild>
                  <Link href="/contact">Start Your Documents</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      <section id="translation" className="py-20 lg:py-32 bg-white scroll-mt-20" aria-labelledby="translation-heading">
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
                <FileText className="h-4 w-4" aria-hidden="true" />
                Certified Translation
              </span>
              <h2 id="translation-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
                English & Spanish{" "}
                <span className="text-brand-secondary">Document Translation</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Clear, certified translations for immigration, DMV, school, court, and business documents. Notarized translations are available when required.
              </p>
              <ul className="space-y-3 mb-8" role="list">
                {[
                  "Birth, marriage, and divorce certificates",
                  "School records and diplomas",
                  "DMV and court documents",
                  "Business and tax documents",
                  "USCIS-ready certification statements",
                  "Notarization available on request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="premium" size="lg" asChild>
                <Link href="/contact">Request Translation</Link>
              </Button>
            </div>

            <Card className="bg-slate-50 border-slate-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-brand-secondary" aria-hidden="true" />
                  Common Documents
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Bring the original document or a clear scan. We will confirm turnaround time and whether a notarized certification is needed for your destination agency.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                  {["Immigration", "DMV", "Court", "School", "Business", "Personal records"].map((item) => (
                    <div key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>

      <CTA
        title="Need Document or Legal Services?"
        description="Visit either Bronx location for fast, professional service. Walk-ins welcome or book online for priority assistance."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="View Locations"
        secondaryHref="/contact#locations"
        variant="gradient"
      />
    </>
  )
}
