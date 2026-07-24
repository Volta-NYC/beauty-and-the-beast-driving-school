"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-primary via-slate-900 to-slate-800" aria-labelledby="page-heading">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" aria-hidden="true" />
        <Container className="relative py-20 lg:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-white">Legal Information</span>
            </motion.span>

            <motion.h1
              id="page-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance"
            >
              Privacy Policy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-32 bg-white" aria-labelledby="privacy-heading">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-secondary/10 text-brand-secondary text-sm font-medium mb-6">Privacy Policy</span>
            <h2 id="privacy-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-primary text-balance mb-6">
              Your Privacy{" "}
              <span className="text-brand-secondary">Matters</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">Last updated: January 15, 2024</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            {[
              {
                title: "1. Information We Collect",
                content: "We collect information you provide directly to us when you schedule driving lessons or tax appointments, fill out contact forms on our website, call or visit our offices, or use our online tax filing portal (1040.com). Types of personal information may include: name, address, phone number, email, date of birth, driver's license/permit number, Social Security Number / ITIN (for tax services), financial information (income, deductions, bank account for direct deposit), vehicle information (for driving lessons), health information relevant to driving ability (voluntary disclosure)."
              },
              {
                title: "2. How We Use Your Information",
                content: "We use your information to: provide and schedule driving lessons and tax services; communicate about appointments, changes, and important notices; prepare and file tax returns accurately; comply with NYS DMV and IRS legal requirements; process payments and issue receipts; improve our services and customer experience; send promotional offers (with your consent)."
              },
              {
                title: "3. Information Sharing",
                content: "We do not sell your personal information. We may share information only as follows: Government Agencies: NYS DMV (for road test scheduling, licensing), IRS/NYS Tax Dept (for tax filing), as legally required. Service Providers: 1040.com (tax filing portal), payment processors, scheduling software — all under strict confidentiality agreements. Legal Compliance: When required by law, court order, or to protect our rights/safety. Business Transfers: In the event of a merger/sale, your information may transfer (with notice)."
              },
              {
                title: "4. Data Security",
                content: "We implement strong safeguards: physical files stored in locked cabinets with limited access; digital data encrypted at rest (AES-256) and in transit (TLS 1.2+); tax software with bank-level security (1040.com partner); employee background checks and confidentiality training; regular security audits and software updates; secure document disposal (cross-cut shredding). While we implement strong safeguards, no internet transmission or electronic storage is 100% secure."
              },
              {
                title: "5. Data Retention",
                content: "Tax records: Minimum 7 years per IRS/state requirements. Driving school records: 5 years per NYS DMV regulations. Contact form submissions: 2 years. Marketing preferences: Until you opt out. After retention periods, we securely destroy paper records and permanently delete digital files."
              },
              {
                title: "6. Your Rights",
                content: "You have the right to: access your personal information we hold; request correction of inaccurate information; request deletion (subject to legal retention requirements); opt out of marketing communications; request a copy of your data in portable format; file a complaint with relevant authorities. To exercise these rights, contact us at privacy@porratax.com or (718) 555-0199."
              },
              {
                title: "7. Children's Privacy",
                content: "Our driving school serves students 16+. We do not knowingly collect information from children under 13. Parent/guardian consent is required for students under 18. If you believe we have collected information from a child under 13, contact us immediately."
              },
              {
                title: "8. Website Analytics",
                content: "Our website may use cookies and analytics tools (e.g., Google Analytics) to understand usage and improve our site. You can disable cookies in your browser settings. Analytics data is aggregated and does not identify you personally."
              },
              {
                title: "9. Third-Party Links",
                content: "Our website contains links to third-party sites (1040.com, Google Maps, social media). We are not responsible for their privacy practices. Review their policies before providing information."
              },
              {
                title: "10. Changes to This Policy",
                content: "We may update this policy periodically. Changes will be posted here with an updated \"Last updated\" date. Material changes will be communicated via email or prominent website notice."
              },
              {
                title: "11. Contact Us",
                content: "Privacy Officer | Beauty & The Beast Driving School / Porrata Tax Services | 909 E. 169th St, Bronx, NY 10459 | Email: privacy@porratax.com | Phone: (718) 555-0199"
              }
            ].map((section, index) => (
              <motion.article key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl font-bold text-brand-primary mb-4">{section.title}</h2>
                <p className="text-slate-600 leading-relaxed">{section.content}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 p-6 rounded-xl bg-slate-50 text-center"
          >
            <p className="text-slate-600">Questions about your privacy? <Link href="/contact" className="text-brand-secondary hover:underline font-medium">Contact our Privacy Officer</Link>.</p>
          </motion.div>
        </Container>
      </section>
    </>
  )
}