"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, Users, Heart, Truck, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function About() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-slate-50" aria-labelledby="story-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 id="story-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
                Serving the Bronx Community{" "}
                <span className="text-brand-secondary">Since 2011</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  Founded by Carmen Porrata in October 2011, Beauty & The Beast Driving School began with a simple mission:
                  provide the Bronx community
                  safe, confident drivers through patient, professional instruction.
                </p>
                <p>
                  Recognizing the community&apos;s need for trusted tax services, Porrata Tax Service was
                  established. Today, we&apos;re a family-owned, multi-service business that has helped over 15,000
                  students earn their licenses and filed tens of thousands of tax returns.
                </p>
                <p>
                  What sets us apart isn&apos;t just our longevity — it&apos;s our commitment to treating every person
                  who walks through our doors like family. Whether you&apos;re a nervous 16-year-old behind the wheel
                  for the first time, an adult learner returning to driving, or a small business owner navigating
                  complex tax regulations, we&apos;re here to guide you every step of the way.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-primary"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-brand-accent/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl lg:text-8xl font-bold text-brand-accent mb-4">14+</div>
                    <div className="text-2xl lg:text-3xl font-medium mb-2">Years of Service</div>
                    <div className="text-xl text-slate-300">15,000+ Students Trained</div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center">
                      <Award className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold">98% Pass Rate</div>
                      <div className="text-sm text-slate-300">First-Time Road Test</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}