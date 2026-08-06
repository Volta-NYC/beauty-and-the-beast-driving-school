"use client"

import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight, Clock } from "lucide-react"

const contactInfo = {
  phone: "(917) 737-7623",
  mobileNotaryPhone: "(646) 853-6303",
  castleHillPhone: "(347) 281-8032",
  email: "carmen@porratax.com",
  wilkinEmail: "wilkin@porratax.com",
  locations: [
    {
      name: "Main Location",
      address: "909 E. 169th St, Bronx, NY 10459",
      hours: "Mon-Fri: 10am-6pm | Sat: 11am-5pm",
      phone: "(917) 737-7623",
    },
    {
      name: "Castle Hill Location",
      address: "847 Castle Hill Ave, Bronx, NY 10473",
      hours: "Mon-Fri: 10am-6pm | Sat: 11am-5pm",
      phone: "(347) 281-8032",
    },
  ],
}

const footerLinks = {
  drivingSchool: [
    { name: "Complete Driving Packages", href: "/driving-school#packages" },
    { name: "Individual Lessons", href: "/driving-school#individual" },
    { name: "Create Your Own Package", href: "/driving-school#custom" },
    { name: "6-Hour Defensive Driving", href: "/driving-school#defensive" },
    { name: "Road Test Scheduling", href: "/driving-school#road-test" },
  ],
  taxServices: [
    { name: "Tax Preparation", href: "/tax-services#prep" },
    { name: "Online Filing (1040.com)", href: "/tax-services#filing" },
    { name: "Financial Calculators", href: "/tax-services#calculators" },
    { name: "Tax Advisory Center", href: "/tax-services#advisory" },
  ],
  additionalServices: [
    { name: "Notary Public", href: "/services#notary" },
    { name: "Copy/Laminate/Fax/Scan", href: "/services#copies" },
    { name: "Passport Photos", href: "/services#passport" },
    { name: "Marriage Officiant (NY/CT)", href: "/services#marriage" },
    { name: "Pro-Se Divorce Service", href: "/services#divorce" },
    { name: "Document Translation", href: "/services#translation" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Locations", href: "/contact#locations" },
    { name: "FAQ", href: "/contact#faq" },
    { name: "Blog", href: "/blog" },
    { name: "Student Responsibilities", href: "/student-responsibilities" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com/PorrataTaxServices", icon: Facebook, ariaLabel: "Follow us on Facebook" },
  { name: "Instagram", href: "https://instagram.com/bb_drivingschool", icon: Instagram, ariaLabel: "Follow us on Instagram" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-brand-primary text-white border-t border-white/10" role="contentinfo">
      {/* Geometric Overlay at top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent" />
      <div className="absolute inset-0 bg-[url('/geometric-pattern.svg')] opacity-[0.02] bg-repeat pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Logo & Description */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 font-serif text-white hover:text-brand-secondary transition-colors" aria-label="Beauty & The Beast - Home">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-secondary to-brand-goldLight text-slate-950">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </span>
              <div className="flex flex-col -space-y-1">
                <span className="text-md font-bold tracking-tight">Beauty & The Beast</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-slate-400 font-sans">DRIVING & TAX</span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-sans">
              "That&apos;s the Beauty of It, We&apos;re a Beast at What We Do!" — Trusted driving instruction and professional tax services in the Bronx since 2011.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 border border-white/5 text-slate-400 transition-all hover:bg-brand-secondary hover:text-slate-950 hover:scale-105 hover:shadow-[0_0_15px_rgba(201,151,75,0.4)]"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <nav className="space-y-4" aria-labelledby="driving-school-heading">
            <h3 id="driving-school-heading" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">Driving School</h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.drivingSchool.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand-secondary transition-colors text-xs font-sans">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-4" aria-labelledby="tax-services-heading">
            <h3 id="tax-services-heading" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">Tax Services</h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.taxServices.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand-secondary transition-colors text-xs font-sans">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-4" aria-labelledby="additional-services-heading">
            <h3 id="additional-services-heading" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">Other Services</h3>
            <ul className="space-y-2.5" role="list">
              {footerLinks.additionalServices.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-400 hover:text-brand-secondary transition-colors text-xs font-sans">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Locations & Contact Info */}
          <div className="space-y-4" aria-labelledby="footer-locations-heading">
            <h3 id="footer-locations-heading" className="text-xs font-bold uppercase tracking-wider text-slate-400 font-sans">Locations</h3>
            <address className="space-y-4 not-italic text-slate-400 font-sans text-xs">
              {contactInfo.locations.map((loc) => (
                <div key={loc.name} className="space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-white">
                    <MapPin className="h-3.5 w-3.5 text-brand-secondary" />
                    {loc.name}
                  </div>
                  <p className="pl-5 text-slate-400">{loc.address}</p>
                  <p className="pl-5 text-slate-400 flex items-center gap-1">
                    <Clock className="h-3 w-3 text-brand-secondary" />
                    {loc.hours}
                  </p>
                  <p className="pl-5">
                    <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="hover:text-brand-secondary transition-colors font-medium">
                      {loc.phone}
                    </a>
                  </p>
                </div>
              ))}
            </address>
          </div>

        </div>

        {/* Divider & Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-sans text-xs text-slate-500">
          <p>&copy; {currentYear} Beauty & The Beast. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/student-responsibilities" className="hover:text-white transition-colors">Responsibilities</Link>
            <Link href="/terms#privacy" className="hover:text-white transition-colors">Privacy</Link>
            <a
              href="https://www.novusnyc.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#F6B78D] hover:text-[#F6B78D] transition-colors"
            >
              Made by Novus
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
