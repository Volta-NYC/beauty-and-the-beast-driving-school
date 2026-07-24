"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Maria Gonzalez",
    role: "Proud Mom of Teen Driver",
    content: "My daughter was so nervous about driving, but Ana at Beauty & The Beast was incredibly patient. She passed her road test on the first try! The instructors truly care about their students.",
    rating: 5,
    service: "Teen Driver Education",
  },
  {
    id: 2,
    name: "James Rodriguez",
    role: "Small Business Owner",
    content: "Carlos has handled my business taxes for 8 years. He caught deductions my previous accountant missed and saved me thousands. He's always available when I have questions. Highly recommend!",
    rating: 5,
    service: "Business Tax Services",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Adult Learner",
    content: "As someone getting their license at 35, I was embarrassed. James made me feel completely comfortable. His teaching style is clear and encouraging. Got my license in 2 months!",
    rating: 5,
    service: "Adult Driving Lessons",
  },
  {
    id: 4,
    name: "Robert Williams",
    role: "CDL Holder",
    content: "Needed defensive driving for point reduction. The online course was easy to follow and I got my certificate same day. Insurance went down 10% immediately. Great value.",
    rating: 5,
    service: "Defensive Driving Course",
  },
  {
    id: 5,
    name: "Carmen Ortiz",
    role: "Immigration Client",
    content: "Needed certified translations for my green card application. They translated my birth certificate and marriage certificate perfectly. USCIS accepted them without any issues. Fast and professional.",
    rating: 5,
    service: "Document Translation",
  },
  {
    id: 6,
    name: "David Park",
    role: "Tax Resolution Client",
    content: "Had an IRS lien that was stressing me out. The team negotiated an offer in compromise and got it reduced by 80%. They handled all the paperwork and kept me informed. Life-changing service.",
    rating: 5,
    service: "IRS Problem Resolution",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 bg-slate-50" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Over 15,000 satisfied customers across the Bronx. Here are just a few of their stories.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-slate-200 hover:border-brand-secondary/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn("h-5 w-5", i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300")}
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <Quote className="h-8 w-8 text-brand-secondary/20 mb-4" aria-hidden="true" />

                  <p className="text-slate-600 leading-relaxed mb-6">"{testimonial.content}"</p>

                  <div className="border-t border-slate-100 pt-4">
                    <div className="font-medium text-brand-primary">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                    <div className="text-xs text-brand-secondary font-medium mt-1">{testimonial.service}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600 mb-8">
            <div className="flex items-center gap-1">
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span className="ml-2 text-lg font-bold text-brand-primary">4.9/5</span>
            </div>
            <span className="text-sm">Based on 500+ Google & Yelp reviews</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <a href="https://google.com/search?q=beauty+and+the+beast+driving+school+reviews" target="_blank" rel="noopener noreferrer">
                Read Google Reviews
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://yelp.com/biz/beauty-and-the-beast-driving-school" target="_blank" rel="noopener noreferrer">
                Read Yelp Reviews
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}