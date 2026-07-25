import Link from "next/link"
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight, Calendar, Clock } from "lucide-react"

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
      hours: "Mon-Fri: 10am-6pm | Sat: 11am-5pm | Sun: By appointment",
      phone: "(917) 737-7623",
    },
    {
      name: "Branch Location",
      address: "847 Castle Hill Ave, Bronx, NY 10473",
      hours: "Mon-Fri: 10am-6pm | Sat: 11am-5pm | Sun: By appointment",
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
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Locations", href: "/locations" },
    { name: "FAQ", href: "/faq" },
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
    <footer className="bg-brand-primary text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold" aria-label="Beauty & The Beast Driving School / Porrata Tax Services - Home">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-secondary">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </span>
              <span>Beauty & The Beast</span>
            </Link>

            <p className="text-slate-300 text-base leading-relaxed max-w-xs">
              "That's the Beauty of It, We're a Beast at What We Do!" — Your trusted partner for professional driving education and comprehensive tax services in the Bronx since 2011.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800/50 text-slate-300 transition-all hover:bg-brand-secondary hover:text-white hover:scale-105"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="space-y-6" aria-labelledby="driving-school-heading">
            <h3 id="driving-school-heading" className="text-lg font-semibold">Driving School</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.drivingSchool.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-6" aria-labelledby="tax-services-heading">
            <h3 id="tax-services-heading" className="text-lg font-semibold">Tax Services</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.taxServices.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-6" aria-labelledby="additional-services-heading">
            <h3 id="additional-services-heading" className="text-lg font-semibold">Additional Services</h3>
            <ul className="space-y-3" role="list">
              {footerLinks.additionalServices.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-6" aria-labelledby="locations-heading">
            <h3 id="locations-heading" className="text-lg font-semibold">Our Locations</h3>
            <address className="space-y-6 not-italic text-slate-300">
              {contactInfo.locations.map((location, index) => (
                <div key={index}>
                  <div className="flex items-center gap-2 font-medium mb-1">
                    <MapPin className="h-4 w-4 text-brand-accent" aria-hidden="true" />
                    {location.name}
                  </div>
                  <p className="text-sm ml-6">{location.address}</p>
                  <div className="flex items-center gap-2 text-sm ml-6">
                    <Clock className="h-3.5 w-3.5 text-brand-accent" aria-hidden="true" />
                    <span>{location.hours}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm ml-6">
                    <Phone className="h-3.5 w-3.5 text-brand-accent" aria-hidden="true" />
                    <a href={`tel:${location.phone}`} className="hover:text-white transition-colors">{location.phone}</a>
                  </div>
                </div>
              ))}
            </address>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-sm text-slate-400 mb-2">Contact Us</p>
              <dl className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-accent flex-shrink-0" aria-hidden="true" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-accent flex-shrink-0" aria-hidden="true" />
                  <a href={`tel:${contactInfo.mobileNotaryPhone}`} className="hover:text-white transition-colors">{contactInfo.mobileNotaryPhone} <span className="text-slate-500">(Mobile Notary)</span></a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-brand-accent flex-shrink-0" aria-hidden="true" />
                  <a href={`tel:${contactInfo.castleHillPhone}`} className="hover:text-white transition-colors">{contactInfo.castleHillPhone} <span className="text-slate-500">(Castle Hill)</span></a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-accent flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">{contactInfo.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-brand-accent flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${contactInfo.wilkinEmail}`} className="hover:text-white transition-colors">{contactInfo.wilkinEmail}</a>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Beauty and The Beast Driving School / Porrata Tax Services. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/student-responsibilities" className="hover:text-white transition-colors">Student Responsibilities</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/search" className="hover:text-white transition-colors">Search</Link>
              <a
                href="https://nyc.voltanpo.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-white transition-colors"
              >
                Website by Volta NYC
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
