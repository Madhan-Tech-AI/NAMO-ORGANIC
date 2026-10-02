import React from 'react';
import { Users, Building2, Check, ArrowRight } from 'lucide-react';

export const TargetCustomersSection: React.FC = () => {
  return (
    <section
      id="customers"
      style={{
        padding: '6.5rem 2rem',
        backgroundColor: '#F8F9F3',
        position: 'relative',
        borderTop: '1px solid rgba(24, 36, 10, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#E4ECCF',
              color: '#293B14',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <Users size={14} color="#4E6E10" />
            <span>11 — TARGET CUSTOMERS</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Together for a Greener Tomorrow
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body, "Inter", sans-serif)',
              fontSize: '1.15rem',
              lineHeight: 1.7,
              color: '#4A583A',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            NAMO aligns closely with agrarian stakeholders from grassroots farmers to organized
            farmer producer networks across India.
          </p>
        </div>

        {/* 2 Target Customer Pillar Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4rem',
          }}
        >
          {/* Group 01: Farmers */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem 2.2rem',
              border: '1.5px solid rgba(103, 160, 32, 0.22)',
              boxShadow: '0 12px 35px rgba(24, 36, 10, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.25s ease',
            }}
            className="target-customer-card"
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    backgroundColor: '#F0F4E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#293B14',
                  }}
                >
                  <Users size={28} color="#293B14" />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#67A020',
                    letterSpacing: '-0.02em',
                  }}
                >
                  01
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#18240A',
                  marginBottom: '0.8rem',
                  minHeight: '2.4rem',
                }}
              >
                Farmers
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body, "Inter", sans-serif)',
                  fontSize: '1rem',
                  color: '#4A583A',
                  lineHeight: 1.65,
                  marginBottom: '1.4rem',
                  minHeight: '4.8rem',
                }}
              >
                Supporting individual farmers with agricultural products and solutions tailored to their
                soil profile, regional rainfall, and specific seasonal crops.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {[
                  'Direct supply of high-grade Panchakavya bio-inputs',
                  'On-ground agronomic field application guidance',
                  'Substantial input cost savings with premium crop market value',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: '#293B14', fontWeight: 600 }}>
                    <Check size={16} color="#67A020" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.3rem', borderTop: '1px solid rgba(24, 36, 10, 0.08)' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1b4d35',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                }}
              >
                <span>Connect as an Individual Farmer</span>
                <ArrowRight size={16} color="#67A020" />
              </a>
            </div>
          </div>

          {/* Group 02: Farmer Producer Organisations (FPOs) */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '2.5rem 2.2rem',
              border: '1.5px solid rgba(103, 160, 32, 0.22)',
              boxShadow: '0 12px 35px rgba(24, 36, 10, 0.05)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.25s ease',
            }}
            className="target-customer-card"
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    backgroundColor: '#F0F4E8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#293B14',
                  }}
                >
                  <Building2 size={28} color="#293B14" />
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    color: '#67A020',
                    letterSpacing: '-0.02em',
                  }}
                >
                  02
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#18240A',
                  marginBottom: '0.8rem',
                  minHeight: '2.4rem',
                }}
              >
                Farmer Producer Organisations (FPOs)
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-body, "Inter", sans-serif)',
                  fontSize: '1rem',
                  color: '#4A583A',
                  lineHeight: 1.65,
                  marginBottom: '1.4rem',
                  minHeight: '4.8rem',
                }}
              >
                Working with farmer organisations and communities to support sustainable agricultural
                practices, scale collective purchasing, and organize bulk buy-back channels.
              </p>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {[
                  'FPO cluster procurement agreements and bulk discounts',
                  'Practical organic training workshops and soil health testing',
                  'Institutional buy-back channels with verifiable batch traceability',
                ].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.92rem', color: '#293B14', fontWeight: 600 }}>
                    <Check size={16} color="#67A020" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.3rem', borderTop: '1px solid rgba(24, 36, 10, 0.08)' }}>
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#1b4d35',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  textDecoration: 'none',
                }}
              >
                <span>Partner as an FPO / Collective</span>
                <ArrowRight size={16} color="#67A020" />
              </a>
            </div>
          </div>
        </div>

        {/* Core Agrarian Emphasis Banner */}
        <div
          style={{
            backgroundColor: '#1b4d35',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.2rem 3rem',
            textAlign: 'center',
            boxShadow: '0 16px 40px rgba(27, 77, 53, 0.2)',
          }}
        >
          <div
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontWeight: 800,
              letterSpacing: '0.02em',
              color: '#FFDB15',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            <span>Thriving Farmers</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
            <span style={{ color: '#FFFFFF' }}>Stronger Communities</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
            <span>Sustainable Agriculture</span>
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>•</span>
            <span style={{ color: '#FFFFFF' }}>A Healthier Tomorrow</span>
          </div>
        </div>
      </div>

      <style>{`
        .target-customer-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(41, 59, 20, 0.12);
          border-color: #67A020;
        }
      `}</style>
    </section>
  );
};
