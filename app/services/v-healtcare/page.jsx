import HeroSection from "../../../components/hero-section";
import FeatureSection from "../../../components/feature-section"
import TestimonialSection from "../../../components/testimonial-section"
import CTASection from "../../../components/cta-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <CTASection />
    </main>
  )
}
