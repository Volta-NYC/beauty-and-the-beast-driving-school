import About from "@/components/About"
import CTA from "@/components/CTA"

export default function AboutPage() {
  return (
    <>
      <About />
      <CTA
        title="Ready to Work With Us?"
        description="Book a driving lesson, schedule tax help, or contact the team for notary and document services at our Bronx offices."
        primaryText="Contact Us"
        primaryHref="/contact"
        secondaryText="Call Main Office"
        secondaryHref="tel:+19177377623"
        variant="gradient"
      />
    </>
  )
}
