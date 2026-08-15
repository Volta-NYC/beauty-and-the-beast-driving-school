"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"

const links = [
  { label: "Driving school", href: "/driving-school" },
  { label: "Tax services", href: "/tax-services" },
  { label: "More services", href: "/services" },
  { label: "Our story", href: "/about" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="site-nav"><Link href="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">B/B</span><span>Beauty &amp; The Beast<small>Driving school · Bronx</small></span></Link><nav className="desktop-nav" aria-label="Main navigation">{links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link href="/contact" className="nav-cta">Book a lesson <ArrowUpRight size={15} /></Link></nav><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</button></div>{open && <nav className="mobile-nav" aria-label="Mobile navigation">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)}>Book a lesson <ArrowUpRight size={16} /></Link></nav>}</header>
}
