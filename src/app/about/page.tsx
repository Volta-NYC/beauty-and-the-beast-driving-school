import About from "@/components/About"
import CTA from "@/components/CTA"
import PageHero from "@/components/PageHero"

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title={<>Rooted in the Bronx.<br /><em>Built for its people.</em></>} description="A neighborhood school with a straightforward promise: make every student feel more capable than when they arrived." primary={{ label: "Meet our team", href: "/contact" }} detail="Est. 2011" mode="orbit" />
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
