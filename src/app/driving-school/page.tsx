"use client"

import { Car, Shield, Calendar, CheckCircle, Star, Users, Clock, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import CTA from "@/components/CTA"

const packages = [
  {
    name: "Beginner Package",
    price: "$599",
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
    name: "Standard Package",
    price: "$899",
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
    popular: true,
  },
  {
    name: "Premium Package",
    price: "$1,199",
    lessons: "20 Lessons",
    duration: "45 minutes each",
    features: [
      "20 x 45-minute lessons",
      "Free pickup & drop-off",
      "Road test scheduling",
      "Vehicle for road test",
      "DMV paperwork assistance",
      "5-hour pre-licensing course included",
      "Defensive driving course included",
      "Priority scheduling",
    ],
    cta: "Select Package",
    popular: false,
  },
]

const individualLessons = [
  {
    name: "Single Lesson",
    price: "$75",
    duration: "45 minutes",
    description: "Perfect for skill refreshers or specific maneuver practice",
  },
  {
    name: "5-Lesson Bundle",
    price: "$350",
    duration: "5 x 45 minutes",
    description: "Save $25 — great for targeted skill building",
  },
  {
    name: "10-Lesson Bundle",
    price: "$650",
    duration: "10 x 45 minutes",
    description: "Save $100 — ideal for new drivers building confidence",
  },
]

const customPackageSteps = [
  {
    step: "01",
    title: "Choose Your Hours",
    description: "Select any number of 45-minute lessons",
  },
  {
    step: "02",
    title: "Pick Your Schedule",
    description: "Weekdays, weekends, mornings, or evenings",
  },
  {
    step: "03",
    title: "Add Extras",
    description: "Road test vehicle, pre-licensing course, defensive driving",
  },
  {
    step: "04",
    title: "Get Your Price",
    description: "Instant quote with no hidden fees",
  },
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
  price: "$49",
  details: [
    "Meets NYS DMV requirements for point reduction",
    "10% insurance discount mandated by NY law",
    "Certificate accepted by all NY insurance companies",
    "No final exam — completion based on participation",
    "Available in English and Spanish",
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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
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
              <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/locations">View Locations</Link>
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
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {customPackageSteps.map((step) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-brand-secondary">{step.step}</span>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
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
              <Button variant="accent" size="lg" asChild>
                <Link href="/contact">Enroll Now</Link>
              </Button>
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
        secondaryHref="tel:+17185550199"
        variant="gradient"
      />
    </>
  )
}

function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(" ")
}