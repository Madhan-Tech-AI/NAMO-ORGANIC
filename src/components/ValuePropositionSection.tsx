import React from 'react';
import { Sparkles, Sprout, TrendingUp, RefreshCw, CheckCircle2 } from 'lucide-react';

export const ValuePropositionSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: '100% Soil Fertility Improvement',
      desc: 'Our value proposition focuses on improving soil fertility and encouraging the sustainable use of natural resources to build long-term agrarian capital.',
      icon: Sprout,
      badge: 'Soil Regeneration',
    },
    {
      num: '02',
      title: 'Farmer Success & Long-Term Profitability',
      desc: 'We provide a compelling range of benefits to farmers and other agricultural stakeholders, contributing directly to their operational success and the long-term profitability of their farming enterprises.',
      icon: TrendingUp,
      badge: 'Economic Viability',
    },
    {
      num: '03',
      title: 'Organic & Renewable Resources',
      desc: 'We harness the power of organic and renewable resources, drastically reducing reliance on synthetic inputs and minimizing environmental footprint.',
      icon: RefreshCw,
      badge: 'Renewable Inputs',
    },
  ];

  return (
    <section
      id="value-prop"
      style={{
        padding: '6.5rem 2rem',
        backgroundColor: '#FFFFFF',
        position: 'relative',
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
              backgroundColor: '#F0F4E8',
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
            <Sparkles size={14} color="#67A020" />
            <span>12 — VALUE PROPOSITION</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(2.2rem, 4.2vw, 3.4rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.25,
              marginBottom: '1.2rem',
              maxWidth: '980px',
              margin: '0 auto 1.2rem auto',
            }}
          >
            Sustainable Solutions for Healthy Soil, Productive Farms & a Brighter Tomorrow
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body, "Inter", sans-serif)',
              fontSize: '1.15rem',
              lineHeight: 1.75,
              color: '#4A583A',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            NAMO's value proposition focuses on improving soil fertility and encouraging the sustainable
            use of natural resources. The company provides proven benefits to farmers and agricultural
            stakeholders, contributing directly to operational success and long-term enterprise profitability.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                style={{
                  backgroundColor: '#F8F9F3',
                  borderRadius: '24px',
                  padding: '2.4rem 2rem',
                  border: '1.5px solid rgba(24, 36, 10, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                }}
                className="value-prop-card"
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
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#293B14',
                        backgroundColor: '#E4ECCF',
                        padding: '0.35rem 0.8rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {p.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: '#67A020',
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {p.num}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      backgroundColor: '#FFFFFF',
                      boxShadow: '0 6px 18px rgba(24, 36, 10, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.3rem',
                    }}
                  >
                    <Icon size={26} color="#293B14" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                      fontSize: '1.3rem',
                      fontWeight: 800,
                      color: '#18240A',
                      marginBottom: '0.8rem',
                      lineHeight: 1.35,
                      minHeight: '3.6rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {p.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body, "Inter", sans-serif)',
                      fontSize: '0.96rem',
                      color: '#4A583A',
                      lineHeight: 1.7,
                      minHeight: '4.8rem',
                    }}
                  >
                    {p.desc}
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
                    fontSize: '0.84rem',
                    fontWeight: 700,
                  }}
                >
                  <CheckCircle2 size={16} color="#67A020" />
                  <span>Enduring Sustainable Advantage</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .value-prop-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(41, 59, 20, 0.1);
          border-color: #67A020;
          background-color: #FFFFFF;
        }
      `}</style>
    </section>
  );
};
