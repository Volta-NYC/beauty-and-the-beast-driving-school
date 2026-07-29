"use client"

import { motion } from "framer-motion"
import { Award, ShieldCheck, Star } from "lucide-react"
import Image from "next/image"

const values = [
  { title: "NYS DMV Certified Instruction", desc: "Professional training designed for safe, confident driving.", icon: Award },
  { title: "Expert IRS Certified Preparers", icon: ShieldCheck, desc: "Accurate, personalized, and efficient tax consultation." },
  { title: "Bilingual Client Service", icon: Star, desc: "Support in English and Spanish across all offices." },
]

const stats = [
  { value: "14+", label: "Years of Bronx Service" },
  { value: "98%", label: "Road Test Pass Rate" },
  { value: "15K+", label: "Students Trained" },
  { value: "5★", label: "Google Rating" },
]

export default function About() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#FAF9F6] text-slate-950 overflow-hidden" aria-labelledby="about-heading">
      {/* Subtle Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-[0.03] bg-repeat pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* Left Column: Image with Stat Overlays */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-slate-900"
            >
              {/* Generated Image overlay */}
              <Image
                src="/driving_school_about.png"
                alt="Bronx driving school student learning to drive"
                fill
                className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating stat badges on image */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row justify-between items-end gap-4 text-white">
                {stats.map((stat) => (
                  <div key={stat.value} className="flex flex-col items-start sm:items-center">
                    <div className="text-4xl sm:text-5xl font-serif font-bold text-brand-secondary">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-300 font-sans">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Decorative background shape */}
            <div className="absolute -bottom-8 -right-8 w-44 h-44 border border-brand-secondary/30 rounded-3xl -z-10" />
          </div>

          {/* Right Column: Condensed Story & Core Props */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 text-brand-secondary text-xs sm:text-sm font-sans font-medium mb-6">
                Our Story
              </span>
              <h2 id="about-heading" className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-950 leading-tight mb-6">
                Dedicated to Our Bronx Community Since 2011
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Founded by Carmen Porrata, Beauty & The Beast Driving School was established with a singular vision: providing Bronx residents safe, confident drivers through patient instruction.
                </p>
                <p>
                  Expanding into Porrata Tax Services, we became a family-owned business helping over 15,000 students earn their licenses and filing tens of thousands of tax returns.
                </p>
              </div>
            </motion.div>

            {/* Core props list */}
            <div className="space-y-4 border-t border-slate-200 pt-6">
              {values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary flex-shrink-0">
                    <val.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-slate-900">{val.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}