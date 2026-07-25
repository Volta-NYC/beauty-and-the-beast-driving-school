"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Shield, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const stats = [
  { value: "14+", label: "Years of Experience", icon: Award },
  { value: "15,000+", label: "Students Trained", icon: Star },
  { value: "98%", label: "Road Test Pass Rate", icon: CheckCircle },
  { value: "5,000+", label: "Tax Returns Filed", icon: Shield },
]

const trustBadges = [
  { text: "NYS DMV Licensed", icon: Award },
  { text: "IRS Registered Preparer", icon: Shield },
  { text: "Fully Insured & Bonded", icon: CheckCircle },
  { text: "BBB A+ Rated", icon: Star },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden lg:min-h-[760px]" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-32 bg-brand-secondary/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-white">Established 2011 • Bronx, NY</span>
            <span className="hidden text-white/60 sm:inline">|</span>
            <span className="text-sm font-medium text-brand-accent">Licensed & Insured</span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Your Trusted Partner for{" "}
            <span className="relative">
              <span className="relative z-10">Professional Driving Education</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-accent/30 -z-10" aria-hidden="true" />
            </span>{" "}
            &{" "}
            <span className="relative">
              <span className="relative z-10">Expert Tax Services</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-accent/30 -z-10" aria-hidden="true" />
            </span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/80 sm:text-xl lg:mb-10"
          >
            Serving the Bronx community for over 14 years with comprehensive driver training, tax preparation,
            and business services. Licensed, insured, and committed to your success.
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:mb-14"
          >
            <Button variant="premium" size="xl" asChild className="w-full sm:w-auto">
              <a href="/contact">Get Started Today</a>
            </Button>
            <Button variant="outline" size="xl" className="w-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto" asChild>
              <a href="/about">Learn More</a>
            </Button>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-2 gap-3 text-white/75 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6"
          >
            {trustBadges.map((badge, index) => (
              <span key={badge.text} className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm">
                <badge.icon className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                {badge.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-12 lg:mt-16"
        >
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={false}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm sm:h-14 sm:w-14" aria-hidden="true">
                  <stat.icon className="h-5 w-5 text-brand-accent sm:h-7 sm:w-7" />
                </div>
                <div className="text-2xl font-bold text-white sm:text-4xl">{stat.value}</div>
                <div className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce sm:block"
        aria-hidden="true"
      >
        <svg className="h-8 w-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}
