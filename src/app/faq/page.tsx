"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, CheckCircle, Search, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"

const faqs = [
  {
    category: "Driving School",
    items: [
      {
        q: "What is the minimum age to start driving lessons?",
        a: "In New York State, you must be at least 16 years old and have a valid NYS learner permit to begin behind-the-wheel driving lessons. You can take the 5-hour pre-licensing course at 16 as well."
      },
      {
        q: "How many lessons do I need to pass the road test?",
        a: "NYS requires a minimum of 50 hours of supervised driving practice (15 hours at night) before the road test. Most new drivers benefit from 6-10 professional lessons with us, plus practice with a licensed supervisor. We'll assess your skills and recommend a personalized plan."
      },
      {
        q: "Do you provide the car for the road test?",
        a: "Yes! All our road test preparation packages include a dual-control vehicle for your DMV road test. Your instructor will also do a pre-test warm-up lesson and accompany you to the test site."
      },
      {
        q: "What is the 5-hour pre-licensing course (MV-278)?",
        a: "This is a mandatory NYS DMV classroom course required before you can schedule your road test. We offer it weekly in both English and Spanish. You receive your MV-278 certificate the same day, valid for 1 year."
      },
      {
        q: "Do you offer pickup and drop-off for lessons?",
        a: "Yes! We provide complimentary pickup and drop-off within our service area (Bronx, Upper Manhattan, Southern Westchester). Please schedule at least 24 hours in advance. Some restrictions apply for early morning/late evening appointments."
      },
      {
        q: "What is your cancellation policy for driving lessons?",
        a: "We require 24 hours notice for cancellations or rescheduling. Lessons cancelled with less than 24 hours notice may be charged the full lesson fee. We understand emergencies happen — please call us to discuss your situation."
      },
      {
        q: "Are your instructors bilingual?",
        a: "Yes! Several of our instructors are fluent in both English and Spanish. Please request a bilingual instructor when booking if needed."
      },
      {
        q: "What is your road test pass rate?",
        a: "We're proud to maintain a 98% first-time pass rate for students who complete our full recommended program. This is significantly higher than the NYS average."
      },
    ],
  },
  {
    category: "Tax Services",
    items: [
      {
        q: "What documents do I need to bring for tax preparation?",
        a: "Generally: W-2s, 1099s, last year's tax return, Social Security cards for all dependents, mortgage interest statements (1098), property tax bills, charitable donation receipts, medical expense records, childcare provider info, and bank account info for direct deposit. Business clients: profit/loss statements, bank statements, and expense receipts. We provide a complete personalized checklist when you book."
      },
      {
        q: "Can you help if I owe back taxes to the IRS?",
        a: "Absolutely. We specialize in IRS problem resolution including: installment agreements, offers in compromise, penalty abatement, lien/levy release, innocent spouse relief, and currently not collectible status. Don't ignore IRS notices — early intervention gives you more options."
      },
      {
        q: "Do you handle business tax returns?",
        a: "Yes. We prepare returns for all entity types: sole proprietorships (Schedule C), partnerships (Form 1065), S-corporations (Form 1120-S), C-corporations (Form 1120), and LLCs. We also handle quarterly estimated payments, payroll taxes, and sales tax filings."
      },
      {
        q: "Can I file my taxes online through you?",
        a: "Yes! We partner with 1040.com for secure e-filing. You can use our portal to upload documents, review your return, and e-file federal and NY state returns with direct deposit. Fees start at $29.95 for simple returns."
      },
      {
        q: "What if I haven't filed taxes in several years?",
        a: "We help clients get back into compliance regularly. We can prepare prior-year returns, negotiate penalty abatement, set up payment plans, and resolve IRS collections. The sooner you act, the better your options."
      },
      {
        q: "Do you offer year-round tax planning?",
        a: "Yes. Our Tax Advisory Center provides proactive tax planning including: retirement contribution strategies, investment tax optimization, entity selection for businesses, estimated payment calculations, and major life event planning (marriage, home purchase, inheritance)."
      },
    ],
  },
  {
    category: "Additional Services",
    items: [
      {
        q: "What types of documents can you notarize?",
        a: "We can notarize most documents including affidavits, powers of attorney, deeds, contracts, loan documents, and certified copies. We also offer loan signing agent services for real estate closings. Walk-ins welcome during business hours."
      },
      {
        q: "Are your translations accepted by USCIS?",
        a: "Yes. Our certified Spanish/English translations include a signed statement of accuracy with the translator's credentials. They are accepted by USCIS, courts, DMV, schools, and other government agencies. We also offer notarized translations when required."
      },
      {
        q: "Do you take passport photos at both locations?",
        a: "Passport photos are only available at our Castle Hill Avenue location (847 Castle Hill Ave, Bronx, NY 10473). They meet all US State Department requirements. Price is $12.99 for 2 photos, ready in 10 minutes. 100% compliance guarantee or retake free."
      },
      {
        q: "Can you officiate our wedding?",
        a: "Yes! Our certified officiant can perform civil marriage ceremonies in New York and Connecticut. We offer standard and personalized ceremonies, bilingual (English/Spanish) services, and flexible scheduling including evenings and weekends. Contact us for pricing and availability."
      },
      {
        q: "What is Pro-Se divorce service?",
        a: "We prepare all documents needed for an uncontested divorce where you represent yourself (pro se) in court. This includes summons, complaint, affidavits, child support worksheets, and filing instructions. We do NOT provide legal advice or court representation. For contested divorces, consult an attorney."
      },
    ],
  },
  {
    category: "General",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "Cash, all major credit/debit cards (Visa, Mastercard, Amex, Discover), checks, Zelle, and Venmo. Driving packages offer installment plans. Tax preparation fees can be deducted from your refund (bank product fee applies)."
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. Beauty & The Beast Driving School is licensed by NYS DMV (License #1234567). Porrata Tax Services preparers are registered with the IRS (PTIN) and NYS. We carry full commercial liability insurance and are bonded."
      },
      {
        q: "What are your business hours?",
        a: "Both locations: Monday–Friday 10am–6pm, Saturday 11am–5pm, Sunday by appointment only. Holiday hours may vary — check our Google listing or call ahead."
      },
      {
        q: "Do you offer services in Spanish?",
        a: "¡Sí! Nuestro personal es bilingüe. Ofrecemos clases de manejo, preparación de impuestos, servicios notariales y traducciones en español. Llámenos para más información."
      },
      {
        q: "Where are you located?",
        a: "Main: 909 E. 169th St, Bronx, NY 10459. Branch: 847 Castle Hill Ave, Bronx, NY 10473. Both near subway and bus lines with free parking."
      },
      {
        q: "How do I schedule an appointment?",
        a: "Call us at (718) 555-0199, use the contact form on our website, or visit either location during business hours. Walk-ins welcome for most services, but appointments guarantee dedicated time."
      },
    ],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openIndexes, setOpenIndexes] = useState<Record<string, boolean>>({})

  const filteredFaqs = faqs.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.items.length > 0)

  const toggleFaq = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`
    setOpenIndexes(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const isOpen = (categoryIndex: number, itemIndex: number) => {
    return openIndexes[`${categoryIndex}-${itemIndex}`] === true
  }

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
              <span className="text-sm font-medium text-white">Frequently Asked Questions</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
            >
              Quick Answers to{" "}
              <span className="text-brand-accent">Common Questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Can't find what you're looking for? <a href="/contact" className="text-brand-accent hover:underline font-medium">Contact us directly</a> — we're happy to help.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="search-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <label htmlFor="faq-search" className="sr-only">Search FAQs</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" aria-hidden="true" />
              <Input
                id="faq-search"
                type="search"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg"
                aria-label="Search frequently asked questions"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="space-y-8"
          >
            {filteredFaqs.map((category, catIndex) => (
              <motion.div key={category.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-brand-primary mb-6 pb-2 border-b border-slate-200">{category.category}</h2>
                <div className="space-y-3">
                  {category.items.map((faq, itemIndex) => (
                    <FAQItem
                      key={`${catIndex}-${itemIndex}`}
                      question={faq.q}
                      answer={faq.a}
                      isOpen={isOpen(catIndex, itemIndex)}
                      onToggle={() => toggleFaq(catIndex, itemIndex)}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {searchTerm && filteredFaqs.every(c => c.items.length === 0) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <p className="text-slate-600 mb-4">No results found for "<span className="font-medium">{searchTerm}</span>"</p>
              <Button variant="outline" onClick={() => setSearchTerm("")}>Clear Search</Button>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Card className="bg-brand-primary border-0 max-w-2xl mx-auto">
              <CardContent className="p-8 lg:p-12">
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">Still Have Questions?</h3>
                <p className="text-slate-300 mb-8">Our team is here to help. Call, email, or visit us — we'll get you the answers you need.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+17185550199"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-brand-secondary text-white font-medium rounded-lg hover:bg-brand-secondary/90 transition-colors"
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call: (718) 555-0199
                  </a>
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href="/contact">Send a Message</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </Container>
      </section>
    </>
  )
}

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <Card className={cn("border-slate-200 hover:border-brand-secondary/50 transition-colors", isOpen && "border-brand-secondary/50 shadow-lg")}>
      <CardContent className="p-0">
        <button
          onClick={onToggle}
          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-brand-secondary focus:ring-offset-2"
          aria-expanded={isOpen}
        >
          <span className="font-medium text-brand-primary pr-10">{question}</span>
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  )
}