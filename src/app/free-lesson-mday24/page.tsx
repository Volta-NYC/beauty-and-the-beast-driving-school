"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Car, Gift, Calendar, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

export default function FreeLessonPromoPage() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <Gift className="h-4 w-4 text-brand-accent" aria-hidden="true" />
              <span className="text-sm font-medium text-white">Limited Time Offer</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              Free 45-Minute Driving Lesson
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Use code <strong className="text-brand-accent">MDAY24</strong> when booking any driving package and get a FREE 45-minute lesson added to your purchase!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-brand-accent/20 border border-brand-accent/50 rounded-xl text-white"
            >
              <Gift className="h-6 w-6 text-brand-accent" aria-hidden="true" />
              <span className="font-mono text-xl font-bold text-brand-accent bg-white/10 px-4 py-1 rounded-lg">MDAY24</span>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="details-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">How to Redeem</span>
            <h2 id="details-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Claim Your Free Lesson in{" "}
              <span className="text-brand-secondary">3 Easy Steps</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The MDAY24 promo is available for a limited time. Here's how to use it:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              { step: "01", title: "Choose Your Package", description: "Select any Complete Driving Package (5, 7, 10, 15, or 20 lessons) that fits your needs." },
              { step: "02", title: "Enter Code MDAY24", description: "When booking, mention code MDAY24 or add it in the notes section of your order." },
              { step: "03", title: "Get Extra Lesson Free", description: "We'll add a FREE 45-minute driving lesson to your package — a $70+ value!" },
            ].map((item) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-brand-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-brand-secondary">{item.step}</span>
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-slate-50" aria-labelledby="packages-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Available Packages</span>
            <h2 id="packages-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Qualifying Driving Packages
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Any of these packages qualify for the free 45-minute lesson with code MDAY24:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {[
              { name: "5 Lesson Package", price: "$505.00", lessons: "5 x 45 min" },
              { name: "7 Lesson Package", price: "$614.00", lessons: "7 x 45 min" },
              { name: "10 Lesson Package", price: "$770.00", lessons: "10 x 45 min" },
              { name: "15 Lesson Package", price: "$1,040.00", lessons: "15 x 45 min" },
              { name: "20 Lesson Package", price: "$1,220.00", lessons: "20 x 45 min" },
            ].map((pkg) => (
              <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <Car className="h-10 w-10 text-brand-secondary mx-auto mb-3" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-brand-primary">{pkg.name}</h3>
                    </div>
                    <div className="flex justify-center gap-4 text-center mb-4">
                      <div>
                        <div className="text-2xl font-bold text-brand-primary">{pkg.price}</div>
                        <div className="text-sm text-slate-500">Package Price</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-brand-accent">+1 FREE</div>
                        <div className="text-sm text-slate-500">Bonus Lesson</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 text-center mb-4">{pkg.lessons} + 1 Free Lesson</p>
                    <Button variant="premium" size="sm" className="w-full" asChild>
                      <Link href="/contact">Book with MDAY24</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-brand-primary" aria-labelledby="terms-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 id="terms-heading" className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
              Important Details
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              {[
                "Promo code MDAY24 must be mentioned at time of booking or added to order notes.",
                "Free 45-minute lesson is added to any Complete Driving Package purchase (5 lessons or more).",
                "Valid for new students only. Cannot be combined with other offers or discounts.",
                "Free lesson must be scheduled within 30 days of package purchase.",
                "Standard cancellation policy applies: 24-hour notice required for all lessons.",
                "Promotion valid through December 31, 2024. Beauty & The Beast Driving School reserves the right to modify or end promotion at any time.",
                "One promo code per student. Non-transferable. No cash value.",
              ].map((term) => (
                <div key={term} className="flex items-start gap-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-brand-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{term}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="cta-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Don't Miss Out — Limited Time!
            </h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              The MDAY24 promotion won't last forever. Book your driving package today and get an extra lesson absolutely free.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="premium" size="xl" asChild>
                <Link href="/contact">Claim My Free Lesson</Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link href="/driving-school">View All Packages</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}