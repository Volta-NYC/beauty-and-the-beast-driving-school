"use client"

import { motion } from "framer-motion"
import { CheckCircle, Award, Users, Heart, Truck, Building2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const milestones = [
  { year: "1995", title: "Founded", description: "Beauty & The Beast Driving School opens in the Bronx with a single vehicle and a mission to provide quality driver education." },
  { year: "2000", title: "Tax Services Added", description: "Porrata Tax Service joins the family, offering professional tax preparation to the community." },
  { year: "2005", title: "Fleet Expansion", description: "Grew to 10 dual-control vehicles, enabling more flexible scheduling and reduced wait times." },
  { year: "2010", title: "Defensive Driving Certified", description: "Became NYS DMV-approved for Point & Insurance Reduction Program (PIRP)." },
  { year: "2015", title: "20th Anniversary", description: "Celebrated 20 years of service with 10,000+ students trained and thousands of tax returns filed." },
  { year: "2020", title: "COVID Adaptation", description: "Implemented online classroom sessions and enhanced vehicle sanitization protocols." },
  { year: "2024", title: "28+ Years Strong", description: "Over 15,000 students taught, 98% pass rate, and expanding services to meet community needs." },
]

const values = [
  { icon: Heart, title: "Community First", description: "We're not just a business — we're your neighbors. Every student and client is treated like family." },
  { icon: Award, title: "Excellence", description: "NYS certified instructors, IRS-registered tax preparers, and a 98% first-time pass rate speak for themselves." },
  { icon: Users, title: "Personal Attention", description: "Small class sizes, one-on-one driving lessons, and dedicated tax consultants who know your situation." },
  { icon: Building2, title: "Integrity", description: "Transparent pricing, no hidden fees, and honest advice — even if it means telling you to wait before testing." },
  { icon: Truck, title: "Convenience", description: "Pick-up/drop-off service, online tax document upload, weekend hours, and bilingual support." },
  { icon: CheckCircle, title: "Results", description: "We measure success by your results: licenses earned, refunds maximized, problems resolved." },
]

const team = [
  { name: "Maria Porrata", role: "Founder & CEO", bio: "30+ years in driver education & tax preparation. NYS Certified Instructor & IRS Enrolled Agent.", image: "/team/maria.jpg" },
  { name: "Carlos Porrata", role: "Operations Director", bio: "Manages daily operations, scheduling, and fleet. Former NYS DMV examiner.", image: "/team/carlos.jpg" },
  { name: "Ana Rodriguez", role: "Senior Driving Instructor", bio: "15 years teaching experience. Specializes in nervous drivers and teen education. Bilingual.", image: "/team/ana.jpg" },
  { name: "James Chen", role: "Tax Manager", bio: "CPA with 20 years experience. Expert in IRS resolution, business taxation, and tax planning.", image: "/team/james.jpg" },
]

export default function About() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-slate-50" aria-labelledby="story-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
                Our Story
              </span>
              <h2 id="story-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
                Serving the Bronx Community{" "}
                <span className="text-brand-secondary">Since 1995</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="text-lg">
                  Founded by Maria Porrata in 1995, Beauty & The Beast Driving School began with a simple mission:
                  provide the Bronx community
                  safe, confident drivers through patient, professional instruction.
                </p>
                <p>
                  In 2000, recognizing the community&apos;s need for trusted tax services, Porrata Tax Service was
                  established. Today, we&apos;re a family-owned, multi-service business that has helped over 15,000
                  students earn their licenses and filed tens of thousands of tax returns.
                </p>
                <p>
                  What sets us apart isn&apos;t just our longevity — it&apos;s our commitment to treating every person
                  who walks through our doors like family. Whether you&apos;re a nervous 16-year-old behind the wheel
                  for the first time, an adult learner returning to driving, or a small business owner navigating
                  complex tax regulations, we&apos;re here to guide you every step of the way.
                </p>
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-primary"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary/30 to-brand-accent/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <div className="text-6xl lg:text-8xl font-bold text-brand-accent mb-4">28+</div>
                    <div className="text-2xl lg:text-3xl font-medium mb-2">Years of Service</div>
                    <div className="text-xl text-slate-300">15,000+ Students Trained</div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center">
                      <Award className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold">98% Pass Rate</div>
                      <div className="text-sm text-slate-300">First-Time Road Test</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="timeline-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
              Our Journey
            </span>
            <h2 id="timeline-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Milestones That Define Us
            </h2>
            <p className="text-lg text-slate-600">Nearly three decades of growth, adaptation, and unwavering service to our community.</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-secondary to-brand-accent -translate-x-1/2" aria-hidden="true" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn("relative flex items-center", index % 2 === 0 ? "flex-row" : "flex-row-reverse")}
                >
                  <div className={cn("w-1/2 px-8", index % 2 === 0 ? "pr-16 text-right" : "pl-16")}>
                    <Card className={cn("border-slate-200 hover:border-brand-secondary/50 hover:shadow-lg transition-all duration-300", index % 2 === 0 ? "border-r-2 border-brand-secondary" : "border-l-2 border-brand-accent")}>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-brand-secondary font-bold text-lg mb-2">
                          <span className="text-2xl">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-brand-primary mb-2">{milestone.title}</h3>
                        <p className="text-slate-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <div className="relative z-10 w-6 h-6 rounded-full bg-white border-4 border-brand-secondary flex-shrink-0" aria-hidden="true">
                      {index % 2 === 0 && <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary" />}
                      {index % 2 === 1 && <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-brand-primary" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/20 text-brand-secondary text-sm font-medium mb-6">
              Our Values
            </span>
            <h2 id="values-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
              What Drives Everything We Do
            </h2>
            <p className="text-lg text-slate-300">Six principles that guide every interaction, every lesson, and every tax return.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-800 hover:border-brand-secondary/50 hover:shadow-xl hover:shadow-brand-secondary/10 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-secondary/20 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-brand-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-slate-300">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
              Meet Our Team
            </span>
            <h2 id="team-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Experienced Professionals Who Care
            </h2>
            <p className="text-lg text-slate-600">Our instructors and tax experts bring decades of combined experience and a passion for helping you succeed.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="border-slate-200 hover:border-brand-secondary/50 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-square bg-slate-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary to-brand-accent opacity-50" />
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-brand-primary mb-1">{member.name}</h3>
                    <p className="text-brand-secondary text-sm font-medium mb-3">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}