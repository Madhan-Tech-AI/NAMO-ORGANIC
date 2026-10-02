import React from 'react';
import { NamoParallaxHero } from '../components/NamoParallaxHero';
import { AboutSection } from '../components/AboutSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { ServicesSection } from '../components/ServicesSection';
import { FocusProductsSection } from '../components/FocusProductsSection';
import { WhyChooseNamoSection } from '../components/WhyChooseNamoSection';
import { BenefitsSection } from '../components/BenefitsSection';
import { MarketOpportunitySection } from '../components/MarketOpportunitySection';
import { TargetCustomersSection } from '../components/TargetCustomersSection';
import { ValuePropositionSection } from '../components/ValuePropositionSection';
import { RevenueModelSection } from '../components/RevenueModelSection';
import { AimToScaleSection } from '../components/AimToScaleSection';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  return (
    <main>
      {/* 01: Hero Section */}
      <NamoParallaxHero />

      {/* 02: About the Company */}
      <AboutSection />

      {/* 03: Vision & Mission */}
      <VisionMissionSection />

      {/* 04: The Problem — Challenges Facing Agriculture */}
      <ProblemSection />

      {/* 05: Our Solutions — Sustainable Agriculture */}
      <SolutionsSection />

      {/* 06: Our Services — Healthy Soil. Thriving Farmers */}
      <ServicesSection />

      {/* 07: Our Focus Products — Panchakavya & Algae Solutions */}
      <FocusProductsSection />

      {/* 08: Unique Selling Proposition — Why Choose NAMO? */}
      <WhyChooseNamoSection />

      {/* 09: Benefits of NAMO Organic Fertilizers & Pesticides */}
      <BenefitsSection />

      {/* 10: Market Opportunity — India's Agricultural Market */}
      <MarketOpportunitySection />

      {/* 11: Target Customers — Farmers & FPOs */}
      <TargetCustomersSection />

      {/* 12: Value Proposition — Soil Fertility & Prosperity */}
      <ValuePropositionSection />

      {/* 13: Revenue Model — Multi-Channel Agrarian Architecture */}
      <RevenueModelSection />

      {/* 14: Aim to Scale — Expanding Manufacturing & Reach */}
      <AimToScaleSection />

      {/* 15: Contact Us — Headquarters & Inquiry Form */}
      <ContactSection />
    </main>
  );
};
