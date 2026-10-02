import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { AboutSection } from '../components/AboutSection';
import { VisionMissionSection } from '../components/VisionMissionSection';
import { ProblemSection } from '../components/ProblemSection';
import { SolutionsSection } from '../components/SolutionsSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, Mail } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <main>
      <PageHeader
        badge="ABOUT THE COMPANY"
        title="Cultivating a Greener Tomorrow"
        subtitle="Natural Solutions for a Better Tomorrow — We support technical advancement in agriculture through field-based solutions, organic fertilizers, and sustainable farming systems."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'About Us' },
        ]}
      />

      {/* 02: About Company Narrative & 3 Focus Pillars */}
      <AboutSection />

      {/* 03: Vision, Mission & Core Philosophy */}
      <VisionMissionSection />

      {/* 04: The Problem — Challenges Facing Agriculture */}
      <ProblemSection />

      {/* 05: Our Solutions — Biodiversity & Resilience */}
      <SolutionsSection />

      {/* Action Banner to Explore Services or Contact */}
      <section style={{ padding: '5rem 2rem', backgroundColor: '#FFFFFF', borderTop: '1px solid rgba(24, 36, 10, 0.08)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h3
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Ready to Explore Our Agricultural Solutions?
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#4A583A', maxWidth: '680px', margin: '0 auto 2rem auto', lineHeight: 1.7 }}>
            Discover our comprehensive range of 9 agrarian services, or connect directly with our advisory specialists.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#1b4d35',
                color: '#FFFFFF',
                padding: '0.85rem 2.2rem',
                borderRadius: '9999px',
                fontSize: '0.86rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(27, 77, 53, 0.25)',
              }}
            >
              <Briefcase size={16} color="#FFDB15" />
              <span>Explore Our Services</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#F0F4E8',
                color: '#293B14',
                border: '1.5px solid rgba(103, 160, 32, 0.4)',
                padding: '0.85rem 2.2rem',
                borderRadius: '9999px',
                fontSize: '0.86rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              <Mail size={16} color="#4E6E10" />
              <span>Contact Headquarters</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
