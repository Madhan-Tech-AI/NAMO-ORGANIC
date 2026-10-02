import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ServicesSection } from '../components/ServicesSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <main>
      <PageHeader
        badge="AGRARIAN SERVICES & SOLUTIONS"
        title="Healthy Soil. Thriving Farmers. A Greener Tomorrow."
        subtitle="NAMO provides an extensive suite of agricultural products, field consultancy, and technology-oriented solutions to power India’s sustainable farming transition."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services' },
        ]}
      />

      {/* 06: Full 9-Services Grid */}
      <ServicesSection />

      {/* Bottom CTA to Focus Products */}
      <section style={{ padding: '5rem 2rem', backgroundColor: '#F8F9F3', borderTop: '1px solid rgba(24, 36, 10, 0.08)' }}>
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
            Discover Our Panchakavya & Algae Formulations
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#4A583A', maxWidth: '680px', margin: '0 auto 2rem auto', lineHeight: 1.7 }}>
            Explore the flagship bio-fertilizers, natural crop pesticides, and cattle supplements engineered
            by NAMO.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/products"
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
              <Sparkles size={16} color="#FFDB15" />
              <span>Explore Focus Products</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#FFFFFF',
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
              <span>Inquire Advisory Services</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
