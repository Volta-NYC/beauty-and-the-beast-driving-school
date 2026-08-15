"use client"

import Link from "next/link"
import { ArrowUpRight, Play, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import RoadCanvas from "@/components/RoadCanvas"

export default function Hero() {
  return (
    <section className="hero-shell" aria-labelledby="hero-heading">
      <RoadCanvas /><div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-[1440px] flex-col justify-between px-5 pb-7 pt-14 sm:px-9 lg:px-14">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="hero-kicker"><span /> Bronx, New York <i /> Est. 2011</motion.div>
        <div className="grid items-end gap-10 pb-8 lg:grid-cols-[1.3fr_.7fr]">
          <div><motion.h1 id="hero-heading" initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08, duration: .85 }} className="hero-title">Learn the road.<br />Own your <em>next move.</em></motion.h1><motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .25, duration: .7 }} className="mt-7 max-w-md text-[15px] leading-6 text-stone-200 sm:text-base">Patient, bilingual instruction for New Yorkers ready to move with confidence. From your first lesson to the road test.</motion.p><motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .36, duration: .7 }} className="mt-8 flex flex-wrap gap-3"><Link href="/driving-school" className="button-bright">Start driving <ArrowUpRight size={18} /></Link><Link href="/contact" className="button-quiet"><Play size={14} fill="currentColor" /> Talk to our team</Link></motion.div></div>
          <motion.aside initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .35, duration: .8 }} className="hero-note"><div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[.18em] text-orange-300"><span>Beauty & The Beast</span><span>01—25</span></div><p>“A driving school built for the pace, people, and promise of the Bronx.”</p><div className="mt-5 flex items-center gap-2 text-xs text-stone-300"><ShieldCheck size={16} className="text-orange-400" /> NYS DMV licensed instruction</div></motion.aside>
        </div>
        <div className="hero-rail"><span>Scroll to begin</span><div /><span>Dual-control vehicles</span><span className="ml-auto hidden sm:inline">English / Español</span></div>
      </div>
    </section>
  )
}
