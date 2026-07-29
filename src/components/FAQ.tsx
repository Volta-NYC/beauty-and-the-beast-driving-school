"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, Phone, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "What are the requirements to enroll in the Teen Driver Education program?",
    answer: "Students must be at least 16 years old with a valid NYS learner permit. The program includes 24 hours of classroom instruction and 6 hours of behind-the-wheel training. A parent/guardian must attend the orientation session.",
  },
  {
    question: "How long does it take to complete the driving program?",
    answer: "Most students complete the program in 4-8 weeks depending on scheduling. Classroom sessions run weekly. Behind-the-wheel lessons are scheduled at your convenience, 7 days a week. We recommend at least 2-3 lessons per week for best retention.",
  },
  {
    question: "Do you provide vehicles for the road test?",
    answer: "Yes! We provide a dual-control vehicle for your NYS road test. Your instructor will also do a pre-test warm-up lesson and drive you to the test site. This service is included in our road test preparation packages.",
  },
  {
    question: "What documents do I need to bring for tax preparation?",
    answer: "Bring all W-2s, 1099s, mortgage interest statements (1098), property tax receipts, charitable donation records, medical expense summaries, childcare provider info, and last year's tax return. For businesses: profit/loss statements, bank statements, and expense receipts.",
  },
  {
    question: "Can you help me if I owe back taxes to the IRS?",
    answer: "Absolutely. We specialize in IRS problem resolution including offers in compromise, installment agreements, penalty abatement, lien releases, and levy releases. We'll negotiate directly with the IRS on your behalf. Don't ignore IRS notices — call us immediately.",
  },
  {
    question: "Do you offer notary services on weekends?",
    answer: "Yes! Our notary public is available during all business hours including Saturdays (11 AM - 5 PM). Walk-ins are welcome, but appointments are recommended for loan signings or complex documents. We also offer mobile notary service for an additional fee.",
  },
  {
    question: "Are your translations accepted by USCIS and government agencies?",
    answer: "Yes. Our certified Spanish/English translations include a signed statement of accuracy with the translator's credentials. They're accepted by USCIS, courts, DMV, schools, and other government agencies. We also provide notarized translations when required.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit/debit cards (Visa, Mastercard, Amex, Discover), checks, Zelle, and Venmo. For driving packages, we offer payment plans. Tax preparation fees can be deducted from your refund (bank product fee applies).",
  },
  {
    question: "Do you offer pickup and drop-off for driving lessons?",
    answer: "Yes, we offer complimentary pickup and drop-off within our service area (Bronx, Upper Manhattan, Southern Westchester). Please schedule at least 24 hours in advance. Some restrictions apply for early morning/late evening appointments.",
  },
  {
    question: "How do I schedule my road test?",
    answer: "We handle road test scheduling for our students! Once you're ready, we'll book the earliest available appointment at your preferred test site, provide the vehicle, and do a pre-test warm-up. We know the test routes and examiner expectations.",
  },
]

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section className="relative py-24 lg:py-32 bg-brand-primary text-white overflow-hidden" aria-labelledby="faq-heading">
      {/* Background SVG overlays */}
      <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-[0.03] bg-repeat pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 text-brand-secondary text-xs sm:text-sm font-sans font-medium mb-6">
            Frequently Asked Questions
          </span>
          <h2 id="faq-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
            Quick Answers to Common Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Can&apos;t find what you&apos;re looking for? <a href="/contact" className="text-brand-secondary hover:underline font-medium">Contact us directly</a> — we&apos;re happy to help.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.05 }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Card className="glass-panel-gold max-w-2xl mx-auto rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-slate-300 text-sm sm:text-base mb-8">Our team is here to help. Call, email, or visit us — we&apos;ll get you the answers you need.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+19177377623"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-secondary to-brand-goldLight text-slate-950 font-semibold rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call: (917) 737-7623
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-full font-medium w-full sm:w-auto justify-center"
              >
                Send a Message
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <Card className={cn("glass-panel hover:border-brand-secondary/40 transition-colors border-white/5", isOpen && "border-brand-secondary/40 shadow-lg")}>
      <CardContent className="p-0">
        <button
          onClick={onToggle}
          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
          aria-expanded={isOpen}
        >
          <span className="font-medium text-white pr-10 text-sm sm:text-base">{question}</span>
          <ChevronDown
            className={cn("h-5 w-5 text-slate-400 flex-shrink-0 transition-transform", isOpen && "rotate-180")}
            aria-hidden="true"
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-slate-300 leading-relaxed border-t border-white/5 pt-4 text-xs sm:text-sm font-sans">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}