"use client"

import { Car, Shield, Calendar, CheckCircle, Star, Users, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import CTA from "@/components/CTA"
import PageHero from "@/components/PageHero"

const packages = [
  {
    name: "5-Hour Pre-Licensing Course",
    price: "$65.00",
    lessons: "Course",
    duration: "5 hours",
    features: [
      "Mandatory NYS DMV classroom course",
      "Certificate issued same day (MV-278)",
      "Valid for 1 year",
      "Offered weekly in English & Spanish",
    ],
    cta: "Select Package",
    popular: false,
  },
  {
    name: "20 Lesson Driving Package",
    price: "$1,220.00",
    lessons: "20 Lessons",
    duration: "45 minutes each",
    features: [
      "20 x 45-minute lessons",
      "Free pickup & drop-off",
      "Road test scheduling",
      "Vehicle for road test",
      "DMV paperwork assistance",
      "5-hour pre-licensing course included",
    ],
    cta: "Select Package",
    popular: true,
  },
  {
    name: "15 Lesson Driving Package",
    price: "$1,040.00",
    lessons: "15 Lessons",
    duration: "45 minutes each",
    features: [
      "15 x 45-minute lessons",
      "Free pickup & drop-off",
      "Road test scheduling",
      "Vehicle for road test",
      "DMV paperwork assistance",
      "5-hour pre-licensing course included",
    ],
    cta: "Select Package",
    popular: false,
  },
  {
    name: "10 Lesson Driving Package",
    price: "$770.00",
    lessons: "10 Lessons",
    duration: "45 minutes each",
    features: [
      "10 x 45-minute lessons",
      "Free pickup & drop-off",
      "Road test scheduling",
      "Vehicle for road test",
      "DMV paperwork assistance",
    ],
    cta: "Select Package",
    popular: false,
  },
  {
    name: "7 Lesson Driving Package",
    price: "$614.00",
    lessons: "7 Lessons",
    duration: "45 minutes each",
    features: [
      "7 x 45-minute lessons",
      "Free pickup & drop-off",
      "Road test scheduling",
      "Vehicle for road test",
      "DMV paperwork assistance",
    ],
    cta: "Select Package",
    popular: false,
  },
  {
    name: "5 Lesson Driving Package",
    price: "$505.00",
    lessons: "5 Lessons",
    duration: "45 minutes each",
    features: [
      "5 x 45-minute lessons",
      "Free pickup & drop-off",
      "Road test scheduling",
      "Vehicle for road test",
      "DMV paperwork assistance",
    ],
    cta: "Select Package",
    popular: false,
  },
  {
    name: "3 Lesson Driving Package",
    price: "$396.00",
    lessons: "3 Lessons",
    duration: "45 minutes each",
    features: [
      "3 x 45-minute lessons",
      "Free pickup & drop-off",
      "Road test scheduling",
      "Vehicle for road test",
      "DMV paperwork assistance",
    ],
    cta: "Select Package",
    popular: false,
  },
  {
    name: "1 Lesson Driving Package",
    price: "$290.00",
    lessons: "1 Lesson",
    duration: "45 minutes",
    features: [
      "1 x 45-minute lesson",
      "Free pickup & drop-off",
      "Road test scheduling available",
      "Vehicle for road test available",
      "DMV paperwork assistance",
    ],
    cta: "Select Package",
    popular: false,
  },
]

const individualLessons = [
  {
    name: "2 Lessons",
    price: "$136.00",
    duration: "2 x 45 minutes",
    description: "Save when you purchase two or more 45-minute driving lessons",
  },
  {
    name: "3 Lessons",
    price: "$204.00",
    duration: "3 x 45 minutes",
    description: "Save when you purchase two or more 45-minute driving lessons",
  },
  {
    name: "4 Lessons",
    price: "$272.00",
    duration: "4 x 45 minutes",
    description: "Save when you purchase two or more 45-minute driving lessons",
  },
  {
    name: "5 Lessons",
    price: "$340.00",
    duration: "5 x 45 minutes",
    description: "Save when you purchase two or more 45-minute driving lessons",
  },
  {
    name: "6 Lessons",
    price: "$408.00",
    duration: "6 x 45 minutes",
    description: "Save when you purchase two or more 45-minute driving lessons",
  },
  {
    name: "7 Lessons",
    price: "$476.00",
    duration: "7 x 45 minutes",
    description: "Save when you purchase two or more 45-minute driving lessons",
  },
  {
    name: "8 Lessons",
    price: "$544.00",
    duration: "8 x 45 minutes",
    description: "Save when you purchase two or more 45-minute driving lessons",
  },
  {
    name: "9 Lessons",
    price: "$612.00",
    duration: "9 x 45 minutes",
    description: "Save when you purchase two or more 45-minute driving lessons",
  },
  {
    name: "10 Lessons",
    price: "$680.00",
    duration: "10 x 45 minutes",
    description: "Save when you purchase two or more 45-minute driving lessons",
  },
  {
    name: "Gift Cards",
    price: "From $50.00",
    duration: "Flexible",
    description: "Perfect gift for new drivers. Available in any denomination from $50.",
  },
]

const customPackageServices = [
  { name: "5-Hour Pre-Licensing Course", price: "$65.00" },
  { name: "45-Minute Driving Lesson", price: "$70.00" },
  { name: "45-Minute Highway Lesson", price: "$90.00" },
  { name: "30-Minute Driving Lesson (with pick-up/drop off)*", price: "$70.00" },
  { name: "Regular Road Test Appointment", price: "$40.00" },
  { name: "Rush Road Test Appointment", price: "$85.00" },
  { name: "Car Rental for Road Test (New Rochelle, White Plains)", price: "$175.00" },
  { name: "Car Rental for Road Test (Queens, Brooklyn)", price: "$200.00" },
  { name: "Car Rental for Road Test (Bronx)", price: "$125.00" },
  { name: "Gift Cards", price: "From $50.00" },
]

const defensiveDriving = {
  title: "6-Hour NY Defensive Driving Course",
  subtitle: "Point & Insurance Reduction Program (PIRP)",
  benefits: [
    "Reduce up to 4 points on your NY license",
    "Save 10% on auto insurance for 3 years",
    "NYS DMV approved — certificate issued same day",
    "Available online or in-person",
    "Complete in one day or multiple sessions",
  ],
  price: "$79.99",
  details: [
    "Meets NYS DMV requirements for point reduction",
    "10% insurance discount mandated by NY law",
    "Certificate accepted by all NY insurance companies",
    "No final exam — completion based on participation",
    "Available in English and Spanish",
    "Register at btb.asi.asicourse.com",
  ],
}

const roadTest = {
  title: "DMV Road Test Scheduling",
  subtitle: "We handle the booking so you don't have to",
  services: [
    "Check DMV availability for your preferred dates",
    "Book the earliest available appointment",
    "Provide vehicle for the road test",
    "Pre-test warm-up lesson included",
    "Instructor accompanies you to test site",
  ],
  requirements: [
    "Valid NYS learner permit",
    "Completed 5-hour pre-licensing course (MV-278)",
    "Completed 50 hours supervised driving (15 at night)",
    "Vehicle registration and insurance (we provide vehicle)",
  ],
}

export default function DrivingSchoolPage() {
  return (
    <>
      <PageHero eyebrow="Driving school" title={<>Find your footing.<br /><em>Then take the wheel.</em></>} description="Practical, patient lessons for new drivers, returners, and anyone preparing for the New York road test." primary={{ label: "Book your first lesson", href: "/contact" }} secondary={{ label: "See our locations", href: "/contact#locations" }} detail="NYS DMV licensed" mode="road" />
      <section className="hidden relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <Container className="relative py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/20 text-brand-secondary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <motion.div className="absolute inset-0 rounded-full bg-brand-secondary" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.div className="absolute inset-0 rounded-full bg-brand-secondary" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
                <motion.div className="absolute inset-0 rounded-full bg-brand-secondary" animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} />
              </span>
              Driving School Services
            </span>
            <h1 id="page-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance">
              Learn to Drive with{" "}
              <span className="text-brand-accent">Confidence</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              NYS DMV licensed driving school offering complete packages, individual lessons, defensive driving courses, and road test scheduling. Two Bronx locations. Bilingual instructors.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="premium" size="xl" asChild className="w-full sm:w-auto">
                <Link href="/contact">Book Your First Lesson</Link>
              </Button>
              <Button variant="outline" size="xl" className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto" asChild>
                <Link href="/contact#locations">View Locations</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="packages" className="py-20 lg:py-32 bg-white" aria-labelledby="packages-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Complete Driving Packages</span>
            <h2 id="packages-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Packages Designed for{" "}
              <span className="text-brand-secondary">Every Learning Style</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              All packages include free pickup & drop-off, road test scheduling, vehicle for road test, and DMV paperwork assistance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {packages.map((pkg) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className={cn("h-full flex flex-col relative", pkg.popular ? "border-brand-secondary/50 shadow-xl shadow-brand-secondary/10" : "")}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-3 py-1 bg-brand-secondary text-white text-xs font-bold rounded-full">Most Popular</span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-slate-500">{pkg.lessons} • {pkg.duration}</CardDescription>
                    <div className="mt-4 text-4xl font-bold text-brand-primary">{pkg.price}</div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1" role="list">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-slate-600">
                          <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant={pkg.popular ? "premium" : "outline"} size="lg" className="w-full" asChild>
                      <Link href="/contact">{pkg.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="individual" className="py-20 lg:py-32 bg-slate-50" aria-labelledby="individual-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Individual Lessons</span>
            <h2 id="individual-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Flexible{" "}
              <span className="text-brand-secondary">Individual Lessons</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Perfect for experienced drivers needing a refresher, or students who want to supplement their package with extra practice.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {individualLessons.map((lesson) => (
              <motion.div key={lesson.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col">
                    <div className="text-3xl font-bold text-brand-primary mb-2">{lesson.price}</div>
                    <CardTitle className="text-lg">{lesson.name}</CardTitle>
                    <CardDescription className="mb-4">{lesson.duration}</CardDescription>
                    <p className="text-slate-600 mb-6 flex-1">{lesson.description}</p>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <Link href="/contact">Book Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section id="custom" className="py-20 lg:py-32 bg-white" aria-labelledby="custom-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Custom Packages</span>
            <h2 id="custom-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Create Your Own{" "}
              <span className="text-brand-secondary">Lesson Package</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Build a package that fits your schedule, budget, and learning goals. Pick the hours, schedule, and add-ons you need.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {customPackageServices.map((service) => (
              <motion.div key={service.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-medium text-slate-900">{service.name}</h4>
                      <span className="text-2xl font-bold text-brand-primary">{service.price}</span>
                    </div>
                    <p className="text-sm text-slate-500">Add to your custom package</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Button variant="premium" size="xl" asChild>
              <Link href="/contact">Build My Package</Link>
            </Button>
            <p className="text-xs text-slate-500 mt-4 max-w-md mx-auto">*30-minute lesson includes pick-up/drop-off. Car rental prices vary by test location.</p>
          </motion.div>
        </Container>
      </section>

      <section id="defensive" className="py-20 lg:py-32 bg-brand-primary" aria-labelledby="defensive-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/20 text-brand-secondary text-sm font-medium mb-6">
                <Shield className="h-4 w-4" aria-hidden="true" />
                Point & Insurance Reduction
              </span>
              <h2 id="defensive-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
                {defensiveDriving.title}
              </h2>
              <p className="text-slate-300 text-lg mb-8">{defensiveDriving.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-brand-accent">${defensiveDriving.price}</div>
                  <div className="text-sm text-slate-400">Course Fee</div>
                </div>
              </div>
              <ul className="space-y-3 mb-8" role="list">
                {defensiveDriving.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-slate-300">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button variant="accent" size="lg" asChild>
                  <a href="https://btb.asi.asicourse.com" target="_blank" rel="noopener noreferrer">Register (English)</a>
                </Button>
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <a href="https://btb.asi.asicourse.com" target="_blank" rel="noopener noreferrer">Registrarse (Español)</a>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Course Details</CardTitle>
                  <CardDescription className="text-slate-400">What you need to know</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3" role="list">
                    {defensiveDriving.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-800">
                <CardHeader>
                  <CardTitle className="text-white">Promotional Offer</CardTitle>
                  <CardDescription className="text-slate-400">Limited time</CardDescription>
                </CardHeader>
                <CardContent className="text-center p-6">
                  <div className="text-4xl mb-4">🎁</div>
                  <p className="text-white font-semibold text-lg mb-2">Use Code: <span className="text-brand-accent">MDAY24</span></p>
                  <p className="text-slate-300">Get a FREE 45-minute driving lesson with any package purchase!</p>
                  <Button variant="outline" size="sm" className="mt-4" asChild>
                    <Link href="/contact">Claim Offer</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>

      <section id="road-test" className="py-20 lg:py-32 bg-white" aria-labelledby="road-test-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Road Test Services
              </span>
              <h2 id="road-test-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
                {roadTest.title}
              </h2>
              <p className="text-slate-600 text-lg mb-8">{roadTest.subtitle}</p>
              <ul className="space-y-4 mb-8" role="list">
                {roadTest.services.map((service) => (
                  <li key={service} className="flex items-start gap-3 text-slate-600">
                    <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <Button variant="premium" size="lg" asChild>
                <Link href="/contact">Schedule My Road Test</Link>
              </Button>
            </div>

            <div>
              <Card className="bg-slate-50 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-brand-primary flex items-center gap-2">
                    <Car className="h-5 w-5" aria-hidden="true" />
                    Requirements for Road Test
                  </CardTitle>
                  <CardDescription>Make sure you're prepared</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3" role="list">
                    {roadTest.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle className="h-5 w-5 text-brand-secondary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-brand-primary border-0">
                <CardContent className="p-6 text-center text-white">
                  <p className="text-lg mb-4">Don't wait weeks for a DMV appointment.</p>
                  <p className="font-semibold mb-4">We'll find the earliest available slot for you.</p>
                  <Button variant="accent" size="lg" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </Container>
      </section>

      <CTA
        title="Ready to Get Behind the Wheel?"
        description="Join thousands of satisfied students who earned their license with Beauty & The Beast Driving School. Flexible scheduling, bilingual instructors, and a 98% first-time pass rate."
        primaryText="Book Your Lesson"
        primaryHref="/contact"
        secondaryText="Call Now"
        secondaryHref="tel:+19177377623"
        variant="gradient"
      />
    </>
  )
}

function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ")
}
