"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CTAProps {
  title: string
  description: string
  primaryText: string
  primaryHref: string
  secondaryText?: string
  secondaryHref?: string
  variant?: "default" | "dark" | "gradient"
  className?: string
}

export default function CTA({
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText = "Call Main Office",
  secondaryHref = "tel:+19177377623",
  className,
}: CTAProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("relative overflow-hidden py-24 lg:py-32 bg-brand-primary text-white border-t border-white/5", className)}
      aria-labelledby="cta-heading"
    >
      {/* Background SVG overlays */}
      <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-[0.04] bg-repeat pointer-events-none" />

      {/* Golden glow behind text - larger and more prominent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-brand-secondary/20 blur-[150px] pointer-events-none animate-glow-pulse" />

      {/* Secondary subtle glow */}
      <div className="absolute top-1/3 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-accent/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-brand-secondary/5 border border-brand-secondary/20 mb-8 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-brand-secondary" aria-hidden="true" />
          <span className="text-xs sm:text-sm font-sans font-medium text-brand-secondary">Ready to Start?</span>
        </motion.div>

        <h2 id="cta-heading" className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-balance mb-6 text-glow-gold leading-[1.05]">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="xl" className="w-full sm:w-auto bg-gradient-to-r from-brand-secondary to-brand-goldLight text-slate-950 font-semibold rounded-full shadow-xl shadow-brand-secondary/30 group" asChild>
            <a href={primaryHref}>
              {primaryText}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
          </Button>

          {secondaryText && secondaryHref && (
            <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/10 bg-white/5 text-white hover:bg-white/10 hover:text-white rounded-full font-medium" asChild>
              <a href={secondaryHref} className="flex items-center justify-center gap-2">
                <Phone className="h-4.5 w-4.5 text-brand-secondary" />
                {secondaryText}
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  )
}