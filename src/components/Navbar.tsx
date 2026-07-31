"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navigation = [
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
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [dropdownOpen, setDropdownOpen] = React.useState<string | null>(null)
  const [scrolled, setScrolled] = React.useState(false)
  const closeTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openDropdown = React.useCallback((name: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setDropdownOpen(name)
  }, [])

  const closeDropdown = React.useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
    }
    closeTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(null)
      closeTimeoutRef.current = null
    }, 200)
  }, [])

  const cancelClose = React.useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
  }, [])

  const closeNavigation = React.useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setMobileMenuOpen(false)
    setDropdownOpen(null)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-14 flex items-center border-b",
          scrolled
            ? "bg-brand-primary/85 backdrop-blur-md shadow-lg border-white/5"
            : "bg-transparent border-transparent"
        )}
        role="banner"
      >
        <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-14 items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-serif text-white hover:text-brand-secondary transition-colors"
              aria-label="Beauty & The Beast Driving School / Porrata Tax Services - Home"
              onClick={closeNavigation}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-secondary to-brand-goldLight text-slate-950">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </span>
              <div className="flex flex-col -space-y-1 whitespace-nowrap">
                <span className="text-lg font-bold tracking-tight">Beauty & The Beast</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-sans">DRIVING SCHOOL</span>
              </div>
            </Link>

            <div className="hidden lg:flex lg:items-center lg:gap-0.5">
              {navigation.map((item) => (
                <DropdownItem
                  key={item.name}
                  item={item}
                  pathname={pathname}
                  isOpen={dropdownOpen === item.name}
                  onOpen={openDropdown}
                  onClose={closeDropdown}
                  onCancelClose={cancelClose}
                  onSelect={closeNavigation}
                />
              ))}
            </div>

            <div className="hidden lg:flex lg:items-center lg:gap-3">
              <Button size="sm" className="bg-gradient-to-r from-brand-secondary to-brand-goldLight text-slate-950 hover:opacity-90 transition-opacity rounded-full font-semibold px-5" asChild>
                <Link href="/contact" onClick={closeNavigation}>Get Started</Link>
              </Button>
            </div>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-900/50 lg:hidden"
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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={closeNavigation}
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
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-slate-950/95 border-l border-white/10 backdrop-blur-lg shadow-2xl lg:hidden"
            role="navigation"
            aria-label="Mobile menu"
          >
            <div className="flex h-full flex-col">
              <div className="flex h-14 items-center justify-between border-b border-white/10 px-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-serif text-white"
                  onClick={closeNavigation}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-brand-secondary to-brand-goldLight text-slate-950">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </span>
                  <span className="text-md font-bold">Beauty & The Beast</span>
                </Link>
                <button
                  onClick={closeNavigation}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-900"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-6 space-y-2" aria-label="Mobile navigation">
                {navigation.map((item) => (
                  <MobileDropdownItem
                    key={item.name}
                    item={item}
                    pathname={pathname}
                    isOpen={dropdownOpen === item.name}
                    onToggle={() => { if (dropdownOpen === item.name) { setDropdownOpen(null); } else { openDropdown(item.name); } }}
                    closeMobileMenu={closeNavigation}
                  />
                ))}

                <div className="pt-6 border-t border-white/10 space-y-4">
                  <Button size="lg" className="w-full bg-gradient-to-r from-brand-secondary to-brand-goldLight text-slate-950 font-semibold rounded-full" asChild>
                    <Link href="/contact" onClick={closeNavigation}>
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

interface DropdownItemProps {
  item: typeof navigation[0]
  pathname: string
  isOpen: boolean
  onOpen: (name: string) => void
  onClose: () => void
  onCancelClose: () => void
  onSelect: () => void
}

function DropdownItem({
  item,
  pathname,
  isOpen,
  onOpen,
  onClose,
  onCancelClose,
  onSelect,
}: DropdownItemProps) {
  const isActive = pathname === item.href || (item.hasDropdown && pathname.startsWith(item.href))

  if (!item.hasDropdown) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-3 py-1.5 text-[13px] font-sans font-medium rounded-full transition-all whitespace-nowrap",
          isActive
            ? "text-brand-secondary bg-brand-secondary/10"
            : "text-slate-300 hover:text-white hover:bg-white/5"
        )}
        aria-current={isActive ? "page" : undefined}
        onClick={onSelect}
      >
        {item.name}
      </Link>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => onOpen(item.name)}
        onMouseEnter={() => { onCancelClose(); onOpen(item.name); }}
        onMouseLeave={onClose}
        className={cn(
          "flex items-center gap-1 px-3 py-1.5 text-[13px] font-sans font-medium rounded-full transition-all whitespace-nowrap",
          isActive || isOpen
            ? "text-brand-secondary bg-brand-secondary/10"
            : "text-slate-300 hover:text-white hover:bg-white/5"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${item.name} menu`}
      >
        {item.name}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 top-full z-50 mt-1 w-64 rounded-xl bg-slate-900/95 border border-white/10 backdrop-blur-md py-1.5 shadow-2xl"
            role="menu"
            onMouseEnter={onCancelClose}
            onMouseLeave={onClose}
          >
            {item.items?.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="flex flex-col gap-0.5 px-3.5 py-2 text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                role="menuitem"
                onClick={onSelect}
              >
                <span className="font-medium text-xs sm:text-[13px]">{subItem.name}</span>
                <span className="text-[10px] text-slate-400 leading-tight">{subItem.description}</span>
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
          "flex px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
          isActive
            ? "text-brand-secondary bg-brand-secondary/10"
            : "text-slate-300 hover:text-white hover:bg-white/5"
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
          "flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium rounded-lg transition-colors",
          isActive || isOpen
            ? "text-brand-secondary bg-brand-secondary/10"
            : "text-slate-300 hover:text-white hover:bg-white/5"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {item.name}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")}
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
            className="overflow-hidden pl-3 pb-1.5 space-y-0.5"
            role="menu"
          >
            {item.items?.map((subItem) => (
              <li key={subItem.name} role="none">
                <Link
                  href={subItem.href}
                  className="flex flex-col gap-0.5 px-3 py-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  role="menuitem"
                  onClick={closeMobileMenu}
                >
                  <span className="font-medium text-xs">{subItem.name}</span>
                  <span className="text-[10px] text-slate-500 leading-tight">{subItem.description}</span>
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
