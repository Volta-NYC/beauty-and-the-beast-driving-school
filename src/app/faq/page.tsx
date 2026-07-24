"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"

export default function FAQPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <Container className="relative py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-white">Frequently Asked Questions</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
            >
              Frequently Asked{" "}
              <span className="text-brand-accent">Questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Our FAQ section is currently being updated. Please check back soon for common questions about our driving school, tax services, and other offerings. In the meantime, feel free to <a href="/contact" className="text-brand-accent hover:underline font-medium">contact us directly</a> with any questions.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="contact-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-brand-primary mb-6">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team is here to help. Call, email, or visit us — we&apos;ll get you the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19177377623"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary text-white font-medium rounded-lg hover:bg-brand-secondary/90 transition-colors"
              >
                Call: (917) 737-7623
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-secondary text-brand-secondary font-medium rounded-lg hover:bg-brand-secondary/10 transition-colors">
                Send a Message
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}