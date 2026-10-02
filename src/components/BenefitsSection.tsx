import React from 'react';
import { Droplet, Sprout, Flower2, Coffee, CheckCircle2 } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Improves Soil Fertility',
      desc: 'Regular use as part of organic practices replenishes soil microflora, enhances root aeration, and supports sustainable harvest yields season after season.',
      icon: Sprout,
      highlight: 'Soil Regeneration',
      badge: 'Microbial Health',
    },
    {
      title: 'Reduces Water Requirement',
      desc: 'Enhances organic humus and water holding capacity, reducing overall irrigation water requirements by up to 40% compared to chemical farming.',
      icon: Droplet,
      highlight: 'Hydration Efficiency',
      badge: '-40% Water',
    },
    {
      title: 'Suitable for All Crops',
      desc: 'Formulated and field-tested for a comprehensive variety of field crops, seasonal vegetables, pulses, commercial fruits, and ornamental flora.',
      icon: Flower2,
      highlight: 'Universal Safety',
      badge: 'All Crop Classes',
    },
    {
      title: 'Agriculture & Allied Sectors',
      desc: 'Proven efficacy across intensive agriculture and high-altitude cash crop plantations, including premium coffee, tea, and cardamom estates.',
      icon: Coffee,
      highlight: 'Plantation Scale',
      badge: 'Cash Crops & Estates',
    },
  ];

  return (
    <section
      id="benefits"
      style={{
        padding: '6.5rem 2rem',
        backgroundColor: '#F8F9F3',
        position: 'relative',
        borderTop: '1px solid rgba(24, 36, 10, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
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
            <CheckCircle2 size={14} color="#4E6E10" />
            <span>09 — PROVEN BENEFITS</span>
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
            Benefits of NAMO Organic Fertilizers & Pesticides
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: '1.15rem',
              color: '#4E6E10',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            Panchakavya-Based Agricultural Solutions
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '4.5rem',
          }}
        >
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2.4rem 2rem',
                  border: '1.5px solid rgba(103, 160, 32, 0.2)',
                  boxShadow: '0 10px 30px rgba(24, 36, 10, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="benefit-card"
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.4rem',
                      minHeight: '48px',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        backgroundColor: '#F0F4E8',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#293B14',
                      }}
                    >
                      <Icon size={24} color="#293B14" />
                    </div>

                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        color: '#1b4d35',
                        backgroundColor: '#E4ECCF',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '8px',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {b.badge}
                    </span>
                  </div>

                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: '#67A020',
                      display: 'block',
                      marginBottom: '0.45rem',
                    }}
                  >
                    {b.highlight}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#18240A',
                      marginBottom: '0.8rem',
                      lineHeight: 1.35,
                      minHeight: '3.4rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {b.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body, "Inter", sans-serif)',
                      fontSize: '0.94rem',
                      color: '#4A583A',
                      lineHeight: 1.65,
                      minHeight: '4.8rem',
                    }}
                  >
                    {b.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '1.8rem',
                    paddingTop: '1.2rem',
                    borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#293B14',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                  }}
                >
                  <CheckCircle2 size={16} color="#67A020" />
                  <span>Scientifically Formulated & Field Proven</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlight Box: 40% Water Savings */}
        <div
          style={{
            backgroundColor: '#1b4d35',
            color: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.8rem 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            boxShadow: '0 16px 40px rgba(27, 77, 53, 0.25)',
          }}
        >
          <div style={{ maxWidth: '780px' }}>
            <span
              style={{
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#FFDB15',
                display: 'block',
                marginBottom: '0.6rem',
              }}
            >
              CLIMATE-SMART AGRONOMY
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                fontSize: 'clamp(1.7rem, 2.8vw, 2.3rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                color: '#FFFFFF',
                marginBottom: '0.8rem',
              }}
            >
              Saving up to 40% of Irrigation Water per Season
            </h3>
            <p style={{ fontFamily: 'var(--font-body, "Inter", sans-serif)', fontSize: '0.98rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.65 }}>
              Panchakavya microbial colonies improve humus structure, preventing soil crusting and
              allowing moisture to infiltrate deeply without runoff or rapid evaporation.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '2px solid rgba(255, 219, 21, 0.4)',
              borderRadius: '20px',
              padding: '1.8rem 2.4rem',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#FFDB15', lineHeight: 1 }}>
              40%
            </div>
            <div style={{ fontSize: '0.82rem', color: '#FFFFFF', fontWeight: 700, marginTop: '0.4rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Water Reduction
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .benefit-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(41, 59, 20, 0.1);
          border-color: #67A020;
        }
      `}</style>
    </section>
  );
};
