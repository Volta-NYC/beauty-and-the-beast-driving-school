import Hero from "@/components/Hero"
import Services from "@/components/Services"
import About from "@/components/About"
import FindUs from "@/components/FindUs"
import CTA from "@/components/CTA"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <FindUs />
      <CTA
        title="Ready to Start Your Journey?"
        description="Whether you need driving lessons, tax preparation, or any of our other services, our experienced team is here to help. Book your appointment today!"
        primaryText="Get Started Now"
        primaryHref="/contact"
        secondaryText="Call Us"
        secondaryHref="tel:+19177377623"
        variant="gradient"
      />
    </>
  )
}