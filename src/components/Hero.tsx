"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Shield, CheckCircle, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const stats = [
  { value: "28+", label: "Years of Experience", icon: Award },
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl animate-float" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} aria-hidden="true" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-white">Established 1995 • Bronx, NY</span>
            <span className="text-white/60">|</span>
            <span className="text-sm font-medium text-brand-accent">Licensed & Insured</span>
          </motion.div>

          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Serving the Bronx community for over 28 years with comprehensive driver training, tax preparation,
            and business services. Licensed, insured, and committed to your success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="premium" size="xl" asChild className="w-full sm:w-auto">
              <a href="/contact">Get Started Today</a>
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10" asChild>
              <a href="/about">Learn More</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 text-white/70"
          >
            {trustBadges.map((badge, index) => (
              <span key={badge.text} className="flex items-center gap-2 text-sm">
                <badge.icon className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                {badge.text}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mb-4 backdrop-blur-sm" aria-hidden="true">
                  <stat.icon className="h-7 w-7 text-brand-accent" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg className="h-8 w-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}