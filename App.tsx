import { Navigation } from "@/components/design-system/navigation"
import { Hero } from "@/components/design-system/hero"
import { PrinciplesSection } from "@/components/design-system/principles-section"
import { ColorsSection } from "@/components/design-system/colors-section"
import { TypographySection } from "@/components/design-system/typography-section"
import { ComponentsSection } from "@/components/design-system/components-section"
import { DefiSection } from "@/components/design-system/defi-section"
import { SpacingSection } from "@/components/design-system/spacing-section"
import { Footer } from "@/components/design-system/footer"

export default function App() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased">
      <Navigation />
      <Hero />
      <PrinciplesSection />
      <ColorsSection />
      <TypographySection />
      <ComponentsSection />
      <SpacingSection />
      <DefiSection />
      <Footer />
    </main>
  )
}
