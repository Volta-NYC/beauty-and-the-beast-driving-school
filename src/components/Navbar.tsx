"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Driving School",
    href: "/driving-school",
    hasDropdown: true,
    items: [
      { name: "Complete Driving Packages", href: "/driving-school#packages", description: "Comprehensive lesson packages for new drivers" },
      { name: "Individual Lessons", href: "/driving-school#individual", description: "45-minute lessons tailored to your needs" },
      { name: "Custom Packages", href: "/driving-school#custom", description: "Create your own lesson package" },
      { name: "6-Hour Defensive Driving", href: "/driving-school#defensive", description: "Point & insurance reduction course" },
      { name: "Road Test Scheduling", href: "/driving-school#road-test", description: "DMV road test booking assistance" },
    ],
  },
  {
    name: "Tax Services",
    href: "/tax-services",
    hasDropdown: true,
    items: [
      { name: "Tax Preparation", href: "/tax-services#prep", description: "ITIN, EIN, 1040, self-employed returns" },
      { name: "Online Filing (1040.com)", href: "/tax-services#filing", description: "Partner portal for e-filing" },
      { name: "Financial Calculators", href: "/tax-services#calculators", description: "Tax estimation tools" },
      { name: "Tax Advisory Center", href: "/tax-services#advisory", description: "Expert tax guidance" },
    ],
  },
  {
    name: "Additional Services",
    href: "/services",
    hasDropdown: true,
    items: [
      { name: "Notary Public", href: "/services#notary", description: "Document notarization" },
      { name: "Copy/Laminate/Fax/Scan", href: "/services#copies", description: "Document services" },
      { name: "Passport Photos", href: "/services#passport", description: "Available at Castle Hill location" },
      { name: "Marriage Officiant (NY/CT)", href: "/services#marriage", description: "Certified officiant services" },
      { name: "Pro-Se Divorce Service", href: "/services#divorce", description: "Self-representation assistance" },
    ],
  },
  { name: "Locations", href: "/locations" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
]

const contactInfo = {
  phone: "(917) 737-7623",
  email: "carmen@porratax.com",
}

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState<string | null>(null)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setMobileMenuOpen(false)
    setDropdownOpen(null)
  }, [pathname])

  const handleDropdownClick = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md border-b border-slate-200"
            : "bg-transparent"
        )}
        role="banner"
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-brand-primary"
              aria-label="Beauty & The Beast Driving School / Porrata Tax Services - Home"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-secondary">
                <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </span>
              <span className="hidden sm:block">Beauty & The Beast</span>
            </Link>

            <div className="hidden md:flex md:items-center md:gap-1">
              {navigation.map((item) => (
                <DropdownItem
                  key={item.name}
                  item={item}
                  pathname={pathname}
                  isOpen={dropdownOpen === item.name}
                  onToggle={() => handleDropdownClick(item.name)}
                />
              ))}
            </div>

            <div className="hidden md:flex md:items-center md:gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-brand-primary hover:text-brand-secondary transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{contactInfo.phone}</span>
              </a>
              <Button variant="premium" size="lg" asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>

            <button
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl md:hidden"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-16 items-center justify-between border-b px-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-xl font-bold text-brand-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-secondary">
                    <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </span>
                  <span>Beauty & The Beast</span>
                </Link>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-4" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <MobileDropdownItem
                    key={item.name}
                    item={item}
                    pathname={pathname}
                    isOpen={dropdownOpen === item.name}
                    onToggle={() => handleDropdownClick(item.name)}
                    closeMobileMenu={() => setMobileMenuOpen(false)}
                  />
                ))}

                <div className="pt-6 border-t space-y-4">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-3 px-4 py-3 text-lg font-medium text-brand-primary hover:text-brand-secondary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Phone className="h-6 w-6" aria-hidden="true" />
                    <span>Call Us: {contactInfo.phone}</span>
                  </a>
                  <Button variant="premium" size="lg" className="w-full" asChild>
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Get Started
                    </Link>
                  </Button>
                </div>
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

function DropdownItem({
  item,
  pathname,
  isOpen,
  onToggle,
}: {
  item: typeof navigation[0]
  pathname: string
  isOpen: boolean
  onToggle: () => void
}) {
  const isActive = pathname === item.href || (item.hasDropdown && pathname.startsWith(item.href))

  if (!item.hasDropdown) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
          isActive
            ? "text-brand-secondary bg-brand-secondary/10"
            : "text-slate-600 hover:text-brand-primary hover:bg-slate-50"
        )}
        aria-current={isActive ? "page" : undefined}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <div className="relative" onMouseEnter={onToggle} onMouseLeave={() => setTimeout(onToggle, 100)}>
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-colors",
          isActive || isOpen
            ? "text-brand-secondary bg-brand-secondary/10"
            : "text-slate-600 hover:text-brand-primary hover:bg-slate-50"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${item.name} menu`}
      >
        {item.name}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full z-50 mt-2 w-72 rounded-xl bg-white shadow-xl border border-slate-200 py-2"
            role="menu"
          >
            {item.items?.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="flex flex-col gap-0.5 px-4 py-3 text-slate-600 hover:text-brand-primary hover:bg-slate-50 transition-colors"
                role="menuitem"
                onClick={onToggle}
              >
                <span className="font-medium">{subItem.name}</span>
                <span className="text-xs text-slate-400">{subItem.description}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function MobileDropdownItem({
  item,
  pathname,
  isOpen,
  onToggle,
  closeMobileMenu,
}: {
  item: typeof navigation[0]
  pathname: string
  isOpen: boolean
  onToggle: () => void
  closeMobileMenu: () => void
}) {
  const isActive = pathname === item.href || (item.hasDropdown && pathname.startsWith(item.href))

  if (!item.hasDropdown) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-4 py-3 text-base font-medium rounded-lg transition-colors",
          isActive
            ? "text-brand-secondary bg-brand-secondary/10"
            : "text-slate-600 hover:text-brand-primary hover:bg-slate-50"
        )}
        aria-current={isActive ? "page" : undefined}
        onClick={closeMobileMenu}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <div>
      <button
        onClick={onToggle}
        className={cn(
          "flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors",
          isActive || isOpen
            ? "text-brand-secondary bg-brand-secondary/10"
            : "text-slate-600 hover:text-brand-primary hover:bg-slate-50"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.name}
        <ChevronDown
          className={cn("h-5 w-5 transition-transform", isOpen && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pl-4 pb-2 space-y-1"
            role="menu"
          >
            {item.items?.map((subItem) => (
              <li key={subItem.name} role="none">
                <Link
                  href={subItem.href}
                  className="flex flex-col gap-0.5 px-3 py-2.5 text-slate-600 hover:text-brand-primary hover:bg-slate-50 rounded-lg transition-colors"
                  role="menuitem"
                  onClick={closeMobileMenu}
                >
                  <span className="font-medium text-sm">{subItem.name}</span>
                  <span className="text-xs text-slate-400">{subItem.description}</span>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}