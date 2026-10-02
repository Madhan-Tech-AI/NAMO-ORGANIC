import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MarketOpportunitySection } from '../components/MarketOpportunitySection';
import { TargetCustomersSection } from '../components/TargetCustomersSection';
import { ValuePropositionSection } from '../components/ValuePropositionSection';
import { RevenueModelSection } from '../components/RevenueModelSection';
import { AimToScaleSection } from '../components/AimToScaleSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Handshake } from 'lucide-react';

export const MarketPage: React.FC = () => {
  return (
    <main>
      <PageHeader
        badge="MARKET OPPORTUNITY & SCALABLE ARCHITECTURE"
        title="India's Agricultural Opportunity & Scalable Model"
        subtitle="Leveraging rising domestic demand, robust export markets, and sustainable farming systems to build a resilient, circular agrarian enterprise."
        breadcrumbs={[
          { label: 'Home', to: '/' },
          { label: 'Market & Scale' },
        ]}
      />

      {/* 10: Market Opportunity */}
      <MarketOpportunitySection />

      {/* 11: Target Customers */}
      <TargetCustomersSection />

      {/* 12: Value Proposition */}
      <ValuePropositionSection />

      {/* 13: Revenue Model */}
      <RevenueModelSection />

      {/* 14: Aim to Scale */}
      <AimToScaleSection />

      {/* Bottom CTA to Partner / Contact */}
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
            Partner With Natural Agriculture & Modern Organic
          </h3>
          <p style={{ fontSize: '1.05rem', color: '#4A583A', maxWidth: '680px', margin: '0 auto 2rem auto', lineHeight: 1.7 }}>
            Join our mission to restore India's soil biological fertility, empower grassroots farming communities,
            and establish transparent organic supply chains.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#1b4d35',
                color: '#FFFFFF',
                padding: '0.85rem 2.4rem',
                borderRadius: '9999px',
                fontSize: '0.88rem',
                fontWeight: 800,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(27, 77, 53, 0.25)',
              }}
            >
              <Handshake size={17} color="#FFDB15" />
              <span>Initiate Partnership Inquiry</span>
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/products"
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
              <span>Review Focus Products</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
