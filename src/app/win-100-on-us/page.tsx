"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Gift, Star, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Container } from "@/components/ui/container"

export default function Win100OnUsPage() {
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
              <span className="text-sm font-medium text-white">Special Promotion</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              Win <span className="text-brand-accent">$100</span> on Us!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Enter for a chance to win $100! Simply complete our customer satisfaction survey and you'll be automatically entered into our monthly drawing.
            </motion.p>
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">How It Works</span>
            <h2 id="details-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Simple Steps to{" "}
              <span className="text-brand-secondary">Enter</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              No purchase necessary. Just share your experience and you could win!
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
              { step: "01", title: "Visit Us", description: "Use any of our services — driving lessons, tax prep, notary, or any other service at either Bronx location." },
              { step: "02", title: "Get Survey", description: "After your visit, you'll receive a link to our short customer satisfaction survey via email or text." },
              { step: "03", title: "Enter to Win", description: "Complete the survey and you're automatically entered in our monthly $100 drawing!" },
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

      <section className="py-20 lg:py-32 bg-slate-50" aria-labelledby="rules-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 id="rules-heading" className="text-3xl sm:text-4xl font-bold text-brand-primary text-center mb-8">
              Official Rules
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <h3 className="font-semibold text-brand-primary mb-3">Eligibility</h3>
                <p>Open to legal residents of the 50 United States and D.C., 18 years or older. Employees of Beauty & The Beast Driving School / Porrata Tax Services and their immediate families are not eligible.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <h3 className="font-semibold text-brand-primary mb-3">How to Enter</h3>
                <p>Complete a service at either of our Bronx locations. You will receive a survey invitation. Complete the survey to be automatically entered. One entry per service visit.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <h3 className="font-semibold text-brand-primary mb-3">Prize</h3>
                <p>One (1) winner each month receives $100 via check or electronic transfer. Winner will be notified within 5 business days of drawing.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <h3 className="font-semibold text-brand-primary mb-3">Drawing & Notification</h3>
                <p>Monthly drawing held on the 5th of the following month. Winner must respond within 48 hours or a new winner will be selected.</p>
              </div>
              <div className="p-6 rounded-xl bg-white border border-slate-200">
                <h3 className="font-semibold text-brand-primary mb-3">General Conditions</h3>
                <p>By entering, you agree to these rules and the decisions of Beauty & The Beast Driving School / Porrata Tax Services, which are final. Void where prohibited.</p>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-brand-primary" aria-labelledby="cta-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
              Ready to Use Our Services?
            </h2>
            <p className="text-slate-300 text-lg mb-10 leading-relaxed">
              Book a driving lesson, tax appointment, or any service today — and you could be our next $100 winner!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link href="/locations">View Locations</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}