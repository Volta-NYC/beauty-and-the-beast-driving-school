"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Shield, CheckCircle, Award, Sparkles, Car, GraduationCap, Award as AwardIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const trustBadges = [
  { text: "NYS DMV Licensed", icon: AwardIcon },
  { text: "IRS Registered Preparer", icon: Shield },
  { text: "14+ Years of Service", icon: Sparkles },
  { text: "98% Pass Rate", icon: CheckCircle },
]

const floatingStats = [
  { value: "15K+", label: "Students Trained" },
  { value: "98%", label: "Road Test Pass Rate" },
  { value: "5★", label: "Google Rating" },
]

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden bg-brand-primary py-12 lg:py-24" aria-labelledby="hero-heading">
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary via-[#0f172a] to-[#1e1b4b]" aria-hidden="true" />

      {/* Animated Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-secondary/15 blur-[80px] animate-float-orb" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-brand-accent/10 blur-[100px] animate-glow-pulse" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-secondary/5 blur-[150px] pointer-events-none" aria-hidden="true" />

      {/* Seamless Geometric Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-[0.04] bg-repeat pointer-events-none" aria-hidden="true" />

      {/* Floating decorative orbs */}
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-brand-secondary/10 blur-[40px] animate-float-orb" style={{ animationDelay: "0s" }} aria-hidden="true" />
      <div className="absolute bottom-20 left-20 w-16 h-16 rounded-full bg-brand-accent/10 blur-[30px] animate-float-orb" style={{ animationDelay: "2s" }} aria-hidden="true" />
      <div className="absolute top-1/2 left-10 w-12 h-12 rounded-full bg-brand-goldLight/10 blur-[20px] animate-float-orb" style={{ animationDelay: "4s" }} aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/30 bg-brand-secondary/5 px-4 py-1.5 backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 text-brand-secondary" />
              <span className="text-xs sm:text-sm font-sans font-medium text-brand-secondary">Established 2011 · Bronx, NY</span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight text-balance"
            >
              That&apos;s the Beauty of It, We&apos;re a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary to-brand-goldLight">Beast</span> at What We Do!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-xl text-base sm:text-lg font-sans text-slate-300 leading-relaxed"
            >
              Get NYS DMV certified training or professional tax solutions tailored for individuals and local businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button size="xl" className="bg-gradient-to-r from-brand-secondary to-brand-goldLight text-slate-950 hover:opacity-90 font-semibold rounded-full shadow-lg shadow-brand-secondary/20 group" asChild>
                <Link href="/driving-school">
                  Book a Lesson
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-full font-medium" asChild>
                <Link href="/tax-services">Tax Services</Link>
              </Button>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="pt-8 border-t border-white/5 grid grid-cols-2 gap-4 max-w-lg"
            >
              {trustBadges.map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-slate-400">
                  <badge.icon className="h-4.5 w-4.5 text-brand-secondary flex-shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-medium">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Premium Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.8 }}
              className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden glass-panel-gold p-4 flex flex-col justify-between shadow-2xl group"
            >
              {/* Subtle pattern background in the card */}
              <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-[0.03] bg-repeat pointer-events-none" />

              {/* Glow accent behind card content */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-brand-secondary/20 blur-[50px] pointer-events-none" />

              {/* Card Header stats */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] sm:text-xs text-slate-300 font-sans">
                  ⭐ 5.0 Google Rating
                </span>
                <span className="px-3 py-1 rounded-full bg-brand-secondary/15 border border-brand-secondary/25 text-[10px] sm:text-xs text-brand-secondary font-medium font-sans">
                  Bronx, NY
                </span>
              </div>

              {/* Main Image - Real photo of their Bronx location */}
              <div className="relative flex-1 flex items-center justify-center py-6">
                <Image
                  src="/front-building.png"
                  alt="Beauty & The Beast Driving School - 909 E 169th St, Bronx NY"
                  fill
                  className="object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Floating Stat Cards inside Right Column wrapper */}
              {floatingStats.map((stat, idx) => (
                <motion.div
                  key={stat.value}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6 + idx * 0.15, duration: 0.6, ease: "easeOut" }}
                  className={cn(
                    "absolute bg-slate-900/90 border border-white/15 rounded-2xl p-3 shadow-xl backdrop-blur-md z-20",
                    idx === 0 && "-left-6 top-[25%] animate-float-orb",
                    idx === 1 && "-right-6 bottom-[20%]",
                    idx === 2 && "left-1/2 -translate-x-1/2 top-4"
                  )}
                >
                  <div className="text-xl sm:text-2xl font-bold text-brand-secondary text-center">{stat.value}</div>
                  <div className="text-[10px] text-slate-400 font-medium text-center uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}

              {/* Card Footer text */}
              <div className="relative z-10 bg-slate-950/40 border border-white/5 rounded-2xl p-4 backdrop-blur-sm">
                <div className="font-serif text-lg text-white mb-1">Our Bronx Location Since 2011</div>
                <p className="text-xs text-slate-400">909 E 169th St — serving the community for 14+ years.</p>
              </div>
            </motion.div>

            {/* Glowing ring behind the card */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[480px] h-[480px] border border-brand-secondary/15 rounded-full -z-10 pointer-events-none"
            />

            {/* Subtle geometric accent rings */}
            <div className="absolute w-[520px] h-[520px] border border-brand-secondary/5 rounded-full -z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  )
}