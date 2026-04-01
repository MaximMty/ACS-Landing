import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import VisitFormats from '@/components/VisitFormats'
import Restaurant from '@/components/Restaurant'
import Pricing from '@/components/Pricing'
import HowItWorks from '@/components/HowItWorks'
import Gallery from '@/components/Gallery'
import Offers from '@/components/Offers'
import ContactMap from '@/components/ContactMap'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VisitFormats />
        <Restaurant />
        <Pricing />
        <HowItWorks />
        <Gallery />
        <Offers />
        <ContactMap />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  )
}
