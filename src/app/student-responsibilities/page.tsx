"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"

export default function StudentResponsibilitiesPage() {
  return (
    <div>
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
              <span className="text-sm font-medium text-white">Driving School</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              Student Responsibilities
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Requirements and expectations for all driving school students at Beauty & The Beast Driving School.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="responsibilities-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <header className="mb-12">
              <p className="text-slate-600">Requirements and expectations for all driving school students</p>
            </header>

            <article className="prose prose-slate max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">Before Your First Lesson</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Valid NYS Learner Permit:</strong> You must have a valid New York State learner permit before your first behind-the-wheel lesson. No exceptions.</li>
                  <li><strong>Permit on Person:</strong> You must bring your physical learner permit to every lesson. Digital copies or photos are not accepted by NYS DMV regulations.</li>
                  <li><strong>Appropriate Footwear:</strong> Wear closed-toe, flat shoes with good pedal feel. No flip-flops, sandals, high heels, wedges, or bare feet.</li>
                  <li><strong>Vision Correction:</strong> If your permit indicates corrective lenses required, you must wear your glasses or contacts during all lessons.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">Attendance and Scheduling</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Punctuality:</strong> Arrive at your pickup location 5 minutes before your scheduled time. Instructors wait a maximum of 10 minutes.</li>
                  <li><strong>24-Hour Cancellation Policy:</strong> Cancellations or rescheduling require at least 24 hours notice. Late cancellations and no-shows are charged the full lesson fee.</li>
                  <li><strong>Weather Cancellations:</strong> We cancel for unsafe conditions (ice, heavy snow, flooding). We'll contact you to reschedule at no charge.</li>
                  <li><strong>Instructor Cancellations:</strong> If we must cancel (illness, vehicle issue), we'll reschedule at your convenience with no penalty.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">During Lessons</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Follow Instructions:</strong> Listen to and follow your instructor's directions immediately and completely.</li>
                  <li><strong>No Distractions:</strong> No phone use, eating, drinking, or other distractions during lessons.</li>
                  <li><strong>Substance-Free:</strong> You must not be under the influence of alcohol, marijuana, illegal drugs, or any medication that impairs driving.</li>
                  <li><strong>Seat Belts:</strong> All occupants must wear seat belts at all times.</li>
                  <li><strong>Vehicle Care:</strong> Treat the training vehicle with respect. No smoking, vaping, or damage to interior/exterior.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">NYS Requirements for Road Test</h2>
                <p>To be eligible for your NYS road test, you must complete:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>50 hours of supervised driving practice (15 hours at night)</li>
                  <li>5-hour Pre-Licensing Course (MV-278) — we offer this weekly</li>
                  <li>Hold learner permit for at least 6 months (if under 18)</li>
                  <li>Completed supervised driving log (MV-262) signed by parent/guardian</li>
                </ul>
                <p className="mt-4"><strong>We strongly recommend</strong> completing professional lessons in addition to supervised practice. Our students who complete a full package have a 98% first-time pass rate.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">Parental/Guardian Responsibilities (Students Under 18)</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Attend the parent orientation session (included free with teen packages)</li>
                  <li>Supervise the required 50 hours of practice driving (15 at night)</li>
                  <li>Sign the supervised driving log (MV-262)</li>
                  <li>Ensure student has valid permit and brings it to every lesson</li>
                  <li>Communicate any medical conditions or medications that may affect driving</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">Progress and Communication</h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Instructor will provide verbal feedback after each lesson</li>
                  <li>Written progress reports available upon request</li>
                  <li>Discuss concerns with instructor or office manager promptly</li>
                  <li>Road test scheduling: We handle the booking — you'll be notified of date/time/location</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">Code of Conduct</h2>
                <p>We reserve the right to terminate a lesson or refuse service if a student:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                  <li>Is impaired by alcohol, drugs, or medication</li>
                  <li>Refuses to follow safety instructions</li>
                  <li>Engages in aggressive, threatening, or disruptive behavior</li>
                  <li>Damages the training vehicle intentionally</li>
                  <li>Has 3+ late cancellations/no-shows without valid reason</li>
                </ul>
                <p className="mt-4">In such cases, unused package lessons may be refunded at the individual lesson rate minus a $50 administrative fee.</p>
              </section>
            </article>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 p-6 rounded-xl bg-brand-primary text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Start Driving?</h3>
              <p className="text-slate-300 mb-8 max-w-xl mx-auto">Our patient, bilingual instructors are here to guide you every step of the way.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-accent text-white font-medium rounded-lg hover:bg-brand-accent/90 transition-colors"
                >
                  Book Your First Lesson
                </a>
                <a
                  href="tel:+19177377623"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: (917) 737-7623
                </a>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}