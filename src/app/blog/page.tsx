"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, Clock, Tag, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <Container className="relative py-16 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <Tag className="h-4 w-4" aria-hidden="true" />
              <span className="text-sm font-medium text-white">Latest Updates & Tips</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 text-balance"
            >
              News &{" "}
              <span className="text-brand-accent">Resources</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Expert advice on driving education, tax preparation, and community resources from our 14+ years serving the Bronx.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="blog-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Our Blog</span>
            <h2 id="blog-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Articles &{" "}
              <span className="text-brand-secondary">Guides</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Stay informed with our latest tips, guides, and updates for driving students and tax clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                slug: "ny-defensive-driving-benefits",
                title: "NY Defensive Driving: Reduce Points & Save 10% on Insurance",
                excerpt: "Learn how the 6-hour NYS DMV-approved Point & Insurance Reduction Program (PIRP) can remove up to 4 points from your license and guarantee a 10% auto insurance discount for 3 years.",
                category: "Driving School",
                date: "2024-12-15",
                readTime: "5 min read",
              },
              {
                slug: "tax-prep-checklist-2024",
                title: "Complete Tax Preparation Checklist for 2024 Filing Season",
                excerpt: "Don't miss a deduction! Our comprehensive checklist covers everything you need to bring for individual and business tax preparation, including new 2024 tax law changes.",
                category: "Tax Services",
                date: "2024-12-10",
                readTime: "7 min read",
              },
              {
                slug: "teen-driver-education-guide",
                title: "Parent's Guide to Teen Driver Education in New York",
                excerpt: "From learner permit to road test, we walk you through every step of the NYS Graduated Driver Licensing process. Includes supervised driving log tips and road test prep advice.",
                category: "Driving School",
                date: "2024-11-28",
                readTime: "6 min read",
              },
              {
                slug: "irs-problem-resolution",
                title: "Owe the IRS? Don't Panic — Here's Your Action Plan",
                excerpt: "Tax debt can be overwhelming, but you have options. We explain installment agreements, offers in compromise, penalty abatement, and when to seek professional help.",
                category: "Tax Services",
                date: "2024-11-15",
                readTime: "8 min read",
              },
              {
                slug: "winter-driving-tips-bronx",
                title: "Winter Driving Tips for Bronx Roads",
                excerpt: "Stay safe on icy Bronx streets this winter. Our instructors share essential tips for driving in snow, ice, and reduced visibility conditions.",
                category: "Driving School",
                date: "2024-11-01",
                readTime: "4 min read",
              },
              {
                slug: "small-business-tax-deductions",
                title: "Overlooked Small Business Tax Deductions for 2024",
                excerpt: "From home office to vehicle expenses, many small business owners miss valuable deductions. Our tax advisors highlight the most commonly overlooked write-offs.",
                category: "Tax Services",
                date: "2024-10-20",
                readTime: "6 min read",
              },
            ].map((post) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="aspect-video bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 text-xs font-medium bg-brand-secondary/10 text-brand-secondary rounded-full">{post.category}</span>
                      <time className="text-xs text-slate-500" dateTime={post.date}>
                        <Calendar className="h-3 w-3 inline mr-1" aria-hidden="true" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </time>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <CardTitle className="text-lg group-hover:text-brand-secondary transition-colors mb-2">
                        {post.title}
                      </CardTitle>
                    </Link>
                    <p className="text-slate-600 mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-sm text-slate-500 flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                        {post.readTime}
                      </span>
                      <Button variant="ghost" size="sm" asChild className="group">
                        <Link href={`/blog/${post.slug}`}>
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-2 mt-12"
          >
            <Button variant="outline" size="lg" disabled>
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              <span>Previous</span>
            </Button>
            <span className="px-4 py-2 text-sm font-medium text-slate-600">Page 1 of 3</span>
            <Button variant="outline" size="lg" asChild>
              <Link href="/blog?page=2">
                <span>Next</span>
                <ChevronRight className="h-4 w-4 ml-1" aria-hidden="true" />
              </Link>
            </Button>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-slate-50" aria-labelledby="newsletter-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 id="newsletter-heading" className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-slate-600 mb-8">
              Get driving tips, tax reminders, and special offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" action="/newsletter" method="POST">
              <label htmlFor="email" className="sr-only">Email address</label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1"
              />
              <Button type="submit" variant="premium" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-slate-500 mt-4">No spam. Unsubscribe anytime. <Link href="/terms#privacy" className="underline hover:text-brand-secondary">Privacy Policy</Link>.</p>
          </motion.div>
        </Container>
      </section>
    </>
  )
}
