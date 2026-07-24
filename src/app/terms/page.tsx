"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"

export default function TermsPage() {
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
              <span className="text-sm font-medium text-white">Legal Information</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              Terms of Service
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Please read these terms carefully before using our services. By scheduling a lesson or tax appointment, you agree to these terms.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="terms-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <header className="mb-12">
              <p className="text-slate-600">Effective: March 1, 2022</p>
            </header>

            <article className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">1. Acceptance of Terms</h2>
                <p>By accessing or using the services of Beauty & The Beast Driving School / Porrata Tax Services ("we," "us," "our"), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">2. Services Provided</h2>
                <p>We offer the following services at our two Bronx locations:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Driving School: Complete driving packages, individual lessons, custom packages, 6-hour defensive driving course (PIRP), DMV road test scheduling</li>
                  <li>Tax Services: Individual and business tax preparation, online filing via 1040.com, financial calculators, tax advisory, IRS problem resolution</li>
                  <li>Additional Services: Notary public, copy/laminate/fax/scan, passport photos (Castle Hill location), marriage officiant (NY & CT), pro-se divorce document preparation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">3. Scheduling and Cancellations</h2>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Driving lessons require 24 hours notice for cancellation or rescheduling. Late cancellations may incur the full lesson fee.</li>
                  <li>Tax appointments require 48 hours notice for cancellation. No-shows may be charged a $50 fee.</li>
                  <li>We reserve the right to reschedule due to instructor/preparer availability, weather, or vehicle maintenance.</li>
                  <li>Defensive driving course cancellations: Full refund if cancelled 48+ hours before; 50% refund 24-48 hours; no refund within 24 hours.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">4. Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Accepted payment methods: Cash, all major credit/debit cards (Visa, Mastercard, Amex, Discover), checks, Zelle, Venmo.</li>
                  <li>Driving packages: Payment plans available. Full payment required before road test scheduling.</li>
                  <li>Tax preparation: Fees may be deducted from your refund via bank product (additional fee applies).</li>
                  <li>Returned checks subject to $35 fee.</li>
                  <li>Unpaid balances over 30 days may be sent to collections with additional fees.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">5. Student Responsibilities (Driving School)</h2>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Must hold valid NYS learner permit for all behind-the-wheel lessons.</li>
                  <li>Must bring physical permit to every lesson. Digital copies not accepted.</li>
                  <li>Must wear appropriate footwear (closed-toe, flat shoes). No flip-flops, sandals, high heels, or bare feet.</li>
                  <li>Must wear corrective lenses if permit indicates requirement.</li>
                  <li>Must not be under the influence of alcohol, marijuana, illegal drugs, or impairing medication.</li>
                  <li>Must follow instructor directions at all times for safety.</li>
                  <li>Must complete 50 hours supervised driving (15 at night) before road test per NYS law.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">6. Tax Client Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Provide complete and accurate information and all required documents.</li>
                  <li>Review your return before signing. You are responsible for the accuracy of your return.</li>
                  <li>Respond promptly to any IRS or state correspondence and provide copies to us.</li>
                  <li>Maintain copies of all tax documents for at least 7 years.</li>
                  <li>Inform us of any life changes affecting your tax situation.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">7. Refunds and Guarantees</h2>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Driving lessons: No refunds for completed lessons. Package refunds prorated at individual lesson rate.</li>
                  <li>Defensive driving: Refund policy as stated in Section 3.</li>
                  <li>Tax preparation: If we make an error resulting in IRS penalty/interest, we'll pay the penalty/interest (not the underlying tax).</li>
                  <li>Notary/document services: No refunds once service is performed.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">8. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, our total liability for any claims arising from our services shall not exceed the fees paid for the specific service in question. We are not liable for indirect, incidental, special, or consequential damages.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">9. Privacy</h2>
                <p>Your privacy is important. See our <Link href="/privacy" className="text-brand-secondary hover:underline">Privacy Policy</Link> for how we collect, use, and protect your information.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">10. Governing Law</h2>
                <p>These terms are governed by the laws of the State of New York. Any disputes shall be resolved in the courts of Bronx County, New York.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">11. Changes to Terms</h2>
                <p>We may update these terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of our services constitutes acceptance of the new terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">12. Contact Information</h2>
                <address className="not-italic">
                  <p><strong>Beauty & The Beast Driving School / Porrata Tax Services</strong></p>
                  <p>909 E. 169th St, Bronx, NY 10459</p>
                  <p>847 Castle Hill Ave, Bronx, NY 10473</p>
                  <p>Phone: (917) 737-7623 (169th St) / (347) 281-8032 (Castle Hill)</p>
                  <p>Email: carmen@porratax.com / wilkin@porratax.com</p>
                </address>
              </section>
            </article>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 p-6 rounded-xl bg-slate-50 text-center"
            >
              <p className="text-slate-600">Have questions about our terms? <Link href="/contact" className="text-brand-secondary hover:underline font-medium">Contact us</Link> — we're happy to clarify.</p>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </>
  )
}