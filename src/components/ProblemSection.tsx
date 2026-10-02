import React from 'react';
import { AlertTriangle, Dna, Layers, ShieldAlert, Sparkles } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const causes = [
    {
      num: '01',
      title: 'Decreasing Genetic Variation',
      desc: 'A steady reduction in genetic variation within crops and surrounding ecosystems, weakening natural resilience.',
      icon: Dna,
    },
    {
      num: '02',
      title: 'Monoculture Farming Practices',
      desc: 'High dependence on repeated monoculture practices reduces crop diversity and depletes living soil biology.',
      icon: Layers,
    },
    {
      num: '03',
      title: 'Reliance on Limited Varieties',
      desc: 'Over-dependence on a limited number of high-yielding crop varieties sidelines climate-adapted native strains.',
      icon: AlertTriangle,
    },
    {
      num: '04',
      title: 'Greater Vulnerability',
      desc: 'Compounded vulnerability of crops to invasive pests, recurrent diseases, and volatile environmental shifts.',
      icon: ShieldAlert,
    },
  ];

  return (
    <section
      id="problem"
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#FFF4E5',
              color: '#B45309',
              padding: '0.35rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <AlertTriangle size={14} color="#D97706" />
            <span>04 — THE PROBLEM</span>
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
            Challenges Facing Agriculture
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              color: '#4A583A',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            The agricultural sector faces a serious challenge: declining genetic diversity in crops
            and the surrounding environment due to chemical inputs and monoculture dependency.
          </p>
        </div>

        {/* 4 Primary Causes Grid (Perfect Equal Heights & Lengths) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.8rem',
            marginBottom: '3.5rem',
            alignItems: 'stretch',
          }}
        >
          {causes.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.num}
                style={{
                  backgroundColor: '#F8F9F3',
                  borderRadius: '16px',
                  padding: '1.8rem 1.6rem',
                  border: '1px solid rgba(24, 36, 10, 0.08)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease',
                }}
                className="problem-cause-card"
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.2rem',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                        fontSize: '1.35rem',
                        fontWeight: 800,
                        color: '#B45309',
                      }}
                    >
                      {c.num}
                    </span>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        backgroundColor: '#FEF3C7',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#B45309',
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                      fontSize: '1.12rem',
                      fontWeight: 700,
                      color: '#18240A',
                      marginBottom: '0.65rem',
                      lineHeight: 1.35,
                      minHeight: '2.8rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {c.title}
                  </h3>

                  <p style={{ fontSize: '0.92rem', color: '#556645', lineHeight: 1.6 }}>
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* NAMO's Approach Banner */}
        <div
          style={{
            backgroundColor: '#1b4d35',
            color: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.5rem 2.8rem',
            boxShadow: '0 12px 35px rgba(27, 77, 53, 0.18)',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '2rem',
            alignItems: 'center',
          }}
          className="problem-approach-banner"
        >
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              backgroundColor: 'rgba(255, 219, 21, 0.15)',
              border: '1.5px solid rgba(255, 219, 21, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Sparkles size={28} color="#FFDB15" />
          </div>

          <div>
            <span
              style={{
                fontSize: '0.76rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFDB15',
                display: 'block',
                marginBottom: '0.4rem',
              }}
            >
              NAMO'S SCIENTIFIC & VEDIC APPROACH
            </span>
            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              NAMO seeks to address these systemic issues by promoting products and agricultural practices
              that actively support crop diversity, soil biological vitality, agricultural resilience, and
              overall environmental health.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .problem-cause-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(180, 83, 9, 0.08);
          border-color: rgba(180, 83, 9, 0.3);
        }
        @media (max-width: 768px) {
          .problem-approach-banner {
            grid-template-columns: 1fr !important;
            padding: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
};
