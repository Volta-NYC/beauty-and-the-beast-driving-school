"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
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
  secondaryText,
  secondaryHref,
  variant = "default",
  className,
}: CTAProps) {
  const variants = {
    default: "bg-white",
    dark: "bg-brand-primary text-white",
    gradient: "bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800 text-white",
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn("py-16 lg:py-24 rounded-3xl relative overflow-hidden", variants[variant], className)}
      aria-labelledby="cta-heading"
    >
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-secondary/20 via-transparent to-transparent" aria-hidden="true" />
      )}

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-brand-accent" aria-hidden="true" />
          <span className="text-sm font-medium">Ready to Get Started?</span>
        </motion.div>

        <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
          {title}
        </h2>

        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant={variant === "dark" ? "accent" : "premium"} size="xl" asChild className="w-full sm:w-auto">
            <a href={primaryHref}>
              {primaryText}
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </a>
          </Button>

          {secondaryText && secondaryHref && (
            <Button variant="outline" size="xl" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10" asChild>
              <a href={secondaryHref}>{secondaryText}</a>
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  )
}