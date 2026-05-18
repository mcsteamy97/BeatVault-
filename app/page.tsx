import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import StatsBar from "@/components/StatsBar"
import HowSection from "@/components/HowSection"
import BrowseSection from "@/components/BrowseSection"
import PricingSection from "@/components/PricingSection"
import WaitlistSection from "@/components/WaitlistSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StatsBar />
      <HowSection />
      <BrowseSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
