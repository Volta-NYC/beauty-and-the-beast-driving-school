"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BadgeCheck, CarFront, FileText, MapPin, MoveRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const offers = [
  { number: "01", title: "Driving school", text: "Calm, clear instruction built around your comfort level—not a rigid script.", meta: "Lessons · 5-hour course · road test", href: "/driving-school", icon: CarFront },
  { number: "02", title: "Tax services", text: "Thoughtful tax support for people, families, and local businesses that need answers.", meta: "Prep · planning · ITIN support", href: "/tax-services", icon: FileText },
]

export default function HomeExperience() {
  return (
    <>
      <section className="cream-section overflow-hidden" aria-labelledby="services-heading">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-9 lg:px-14 lg:py-32">
          <div className="grid gap-10 border-b border-stone-300 pb-12 lg:grid-cols-[.72fr_1.28fr] lg:items-end"><span className="eyebrow text-orange-700">What we do</span><h2 id="services-heading" className="display-heading text-stone-950">The practical things that help life <em>move forward.</em></h2></div>
          <div className="grid lg:grid-cols-2">
            {offers.map((offer, index) => <motion.article key={offer.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .12, duration: .6 }} className="service-panel"><div className="flex items-start justify-between"><span className="service-number">{offer.number}</span><offer.icon size={30} strokeWidth={1.5} /></div><h3>{offer.title}</h3><p>{offer.text}</p><div className="mt-auto flex items-center justify-between gap-6 border-t border-stone-300 pt-5 text-xs font-semibold uppercase tracking-[.12em]"><span>{offer.meta}</span><Link href={offer.href} aria-label={`Explore ${offer.title}`} className="round-arrow"><ArrowUpRight size={19} /></Link></div></motion.article>)}
          </div>
          <Link href="/services" className="mt-10 inline-flex items-center gap-3 text-sm font-bold text-stone-950 hover:text-orange-700">Explore all services <MoveRight size={19} /></Link>
        </div>
      </section>

      <section className="ink-section" aria-labelledby="approach-heading">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 py-24 sm:px-9 lg:grid-cols-2 lg:items-center lg:px-14 lg:py-32">
          <div className="relative aspect-[5/4] overflow-hidden bg-stone-800"><Image src="/classroom-interior.png" alt="Classroom at Beauty & The Beast Driving School" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover grayscale-[.35]" /><div className="absolute inset-0 bg-gradient-to-t from-[#141716]/75 via-transparent" /><div className="absolute bottom-0 left-0 p-6 text-xs font-bold uppercase tracking-[.16em] text-orange-300">A real school. A real neighborhood.</div></div>
          <div><span className="eyebrow text-orange-300">The Beauty & The Beast way</span><h2 id="approach-heading" className="display-heading mt-6 text-[#f3efe5]">Less pressure.<br />More <em className="text-orange-300">progress.</em></h2><p className="mt-7 max-w-lg text-base leading-7 text-stone-300">Driving can be intimidating. We make the next step feel manageable through honest feedback, local knowledge, and instructors who meet you where you are.</p><div className="mt-10 grid grid-cols-3 border-t border-stone-700 pt-6"><Stat number="15K+" label="Students trained" /><Stat number="14+" label="Years serving" /><Stat number="2" label="Bronx locations" /></div><Link href="/about" className="button-outline mt-10">Our story <ArrowUpRight size={18} /></Link></div>
        </div>
      </section>

      <section className="orange-section" aria-labelledby="steps-heading">
        <div className="mx-auto max-w-[1280px] px-5 py-24 sm:px-9 lg:px-14 lg:py-28"><div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><span className="eyebrow text-stone-950">Your route</span><h2 id="steps-heading" className="display-heading mt-5 text-stone-950">From “I’m not sure” to <em>“I’ve got this.”</em></h2></div><div className="route-list"><Route n="1" title="Tell us where you’re starting" text="New driver, refresher, road test prep—we’ll point you to the right first step." /><Route n="2" title="Build confidence on the road" text="Practice in a dual-control vehicle with an instructor who keeps it focused and human." /><Route n="3" title="Take the next move" text="Get ready for your test, your license, and the independence that comes after it." /></div></div></div>
      </section>

      <section className="cream-section" aria-labelledby="visit-heading"><div className="mx-auto grid max-w-[1280px] gap-12 px-5 py-24 sm:px-9 lg:grid-cols-[1fr_.82fr] lg:items-end lg:px-14 lg:py-32"><div><span className="eyebrow text-orange-700">Find us in the Bronx</span><h2 id="visit-heading" className="display-heading mt-5 text-stone-950">Close by when you need us.</h2><p className="mt-6 max-w-xl text-base leading-7 text-stone-600">Walk in for a question, call ahead to reserve a lesson, or visit us for tax and document support.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="button-dark">Visit or contact us <ArrowUpRight size={18} /></Link><a href="tel:+19177377623" className="button-paper">(917) 737-7623</a></div></div><div className="visit-card"><MapPin className="text-orange-600" size={26} /><h3>909 E. 169th St</h3><p>Bronx, NY 10459<br />Mon–Fri 10–6 · Sat 11–5</p><div className="mt-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em]"><BadgeCheck size={16} className="text-orange-700" /> Walk-ins welcome</div></div></div></section>
      <section className="marquee" aria-label="Beauty and The Beast Driving School"><div>Beauty &amp; The Beast <Sparkles size={25} /> Beauty &amp; The Beast <Sparkles size={25} /> Beauty &amp; The Beast <Sparkles size={25} /></div></section>
    </>
  )
}

function Stat({ number, label }: { number: string; label: string }) { return <div><b className="block text-3xl font-medium text-orange-300">{number}</b><span className="mt-1 block text-[10px] font-bold uppercase tracking-[.14em] text-stone-400">{label}</span></div> }
function Route({ n, title, text }: { n: string; title: string; text: string }) { return <article><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></article> }
