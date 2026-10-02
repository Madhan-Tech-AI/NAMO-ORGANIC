import React from 'react';
import { Award, CloudSun, TrendingUp, CheckCircle } from 'lucide-react';

export const WhyChooseNamoSection: React.FC = () => {
  const usps = [
    {
      num: '01',
      title: 'Made from Indigenous Cow Ingredients',
      desc: 'We use carefully selected ingredients obtained from indigenous cows to maintain the highest quality, bio-potency, and authentic formulation standards.',
      icon: Award,
      badge: 'Indigenous Heritage',
    },
    {
      num: '02',
      title: 'Suitable for All Climatic Conditions',
      desc: 'Our products are formulated for dependable use across diverse climatic regions, addressing local agricultural and soil requirements with consistency.',
      icon: CloudSun,
      badge: 'Climatic Resilience',
    },
    {
      num: '03',
      title: 'Competitive Pricing & Crop Performance',
      desc: 'We deliver competitively priced inputs engineered to elevate crop performance, reduce synthetic costs, and maximize net farmer profitability.',
      icon: TrendingUp,
      badge: 'Farmer Profitability',
    },
  ];

  return (
    <section
      id="why-namo"
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#F0F4E8',
              color: '#293B14',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <Award size={14} color="#67A020" />
            <span>08 — UNIQUE SELLING PROPOSITION</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Why Choose NAMO?
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#4A583A',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            Rooted in authentic indigenous inputs, perfected for all Indian climates, and priced to
            deliver undeniable financial value to farmers.
          </p>
        </div>

        {/* 3 USP Cards (Equal Heights & Symmetrical Dimensions) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {usps.map((u) => {
            const Icon = u.icon;
            return (
              <div
                key={u.num}
                style={{
                  backgroundColor: '#F8F9F3',
                  borderRadius: '20px',
                  padding: '2.4rem 2rem',
                  border: '1.5px solid rgba(24, 36, 10, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                }}
                className="usp-card"
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#293B14',
                        backgroundColor: '#E4ECCF',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {u.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        color: '#67A020',
                      }}
                    >
                      {u.num}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 4px 14px rgba(24, 36, 10, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <Icon size={24} color="#293B14" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      letterSpacing: '-0.015em',
                      color: '#18240A',
                      marginBottom: '0.75rem',
                      lineHeight: 1.35,
                      minHeight: '2.8rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {u.title}
                  </h3>

                  <p style={{ fontFamily: 'var(--font-body, "Inter", sans-serif)', fontSize: '0.96rem', color: '#4A583A', lineHeight: 1.7, minHeight: '4.8rem' }}>
                    {u.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.8rem',
                    paddingTop: '1.2rem',
                    borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#293B14',
                    fontSize: '0.84rem',
                    fontWeight: 700,
                  }}
                >
                  <CheckCircle size={15} color="#67A020" />
                  <span>Field-Tested Quality Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .usp-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 35px rgba(41, 59, 20, 0.08);
          border-color: #67A020;
          background-color: #FFFFFF;
        }
      `}</style>
    </section>
  );
};
