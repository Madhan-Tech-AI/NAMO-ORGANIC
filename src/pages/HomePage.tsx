import React from 'react';
import { NamoParallaxHero } from '../components/NamoParallaxHero';
import { NaturePreserved } from '../components/NaturePreserved';
import { HorizontalJourney } from '../components/HorizontalJourney';
import { ProductShowcase } from '../components/ProductShowcase';
import { EditorialPantry } from '../components/EditorialPantry';
import { WhyNamo } from '../components/WhyNamo';
import { OurStory } from '../components/OurStory';
import { FarmersSection } from '../components/FarmersSection';
import { QualityPromise } from '../components/QualityPromise';
import { FinalCTA } from '../components/FinalCTA';

interface HomePageProps {
  onAddToCart: (productName: string, price: string) => void;
  onOpenTraceabilityWithBatch: (batchCode: string) => void;
  onOpenTraceability: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onAddToCart,
  onOpenTraceabilityWithBatch,
  onOpenTraceability,
}) => {
  return (
    <main>
      {/* 01: Full-Screen Cinematic Parallax Hero (Misty Mountain Sunrise Parallax -> Ivory Glow Logo -> Flying Logo -> Hero with Overlay Texts) */}
      <NamoParallaxHero />

      {/* 02: Nature, Preserved */}
      <NaturePreserved />

      {/* 08 & 09: Philosophy & Horizontal Farm to Family Journey */}
      <HorizontalJourney />

      {/* 10: Products Cinematic Showcase */}
      <ProductShowcase
        onAddToCart={handleAddToCart}
        onOpenTraceabilityWithBatch={onOpenTraceabilityWithBatch}
      />

      {/* 11 & 12: Dals & Pulses, Nuts & Dry Fruits Editorial Pantry */}
      <EditorialPantry onAddToCart={handleAddToCart} />

      {/* 13: Why NAMO (6 Immersive Visual Cards) */}
      <WhyNamo />

      {/* 14: Our Story — A Bridge Between Generations */}
      <OurStory />

      {/* 15: Farmers Section — The People Behind Every Product */}
      <FarmersSection />

      {/* 16: Quality Promise — Minimalist Cream Transition */}
      <QualityPromise onOpenTraceability={onOpenTraceability} />

      {/* 17: Final CTA — Golden Sunset Landscape */}
      <FinalCTA />
    </main>
  );

  function handleAddToCart(name: string, price: string) {
    onAddToCart(name, price);
  }
};
