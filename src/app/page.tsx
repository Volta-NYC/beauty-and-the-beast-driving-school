import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import FindUs from "@/components/FindUs"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <FindUs />
      <Testimonials />
      <FAQ />
      <CTA
        title="Ready to Start Your Journey?"
        description="Whether you need driving lessons, tax preparation, or any of our other services, our experienced team is here to help. Book your appointment today!"
        primaryText="Get Started Now"
        primaryHref="/contact"
        secondaryText="Call Us"
        secondaryHref="tel:+17185550199"
        variant="gradient"
      />
    </>
  )
}