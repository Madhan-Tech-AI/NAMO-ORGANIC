import React from 'react';
import { ShieldCheck, Sprout, Trees, ArrowUpRight } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      num: '01',
      title: 'Protect Biodiversity',
      desc: 'We safeguard crop and environmental biodiversity, reviving beneficial soil microbes and restoring ecological balance across farming regions.',
      icon: Trees,
      tag: 'Ecosystem Defense',
    },
    {
      num: '02',
      title: 'Improve Genetic Diversity',
      desc: 'Our bio-inputs support soil biology and natural crop resilience, empowering farmers to cultivate diverse, hardy, and climate-tolerant crop varieties.',
      icon: Sprout,
      tag: 'Crop Resilience',
    },
    {
      num: '03',
      title: 'Sustainable Agriculture',
      desc: 'We incorporate Panchakavya-based solutions into farming systems, creating thriving organic ecosystems and resilient agricultural landscapes.',
      icon: ShieldCheck,
      tag: 'Panchakavya Systems',
    },
  ];

  return (
    <section
      id="solutions"
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#F8F9F3',
        position: 'relative',
        borderTop: '1px solid rgba(24, 36, 10, 0.06)',
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
              backgroundColor: '#E4ECCF',
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
            <ShieldCheck size={14} color="#4E6E10" />
            <span>05 — OUR SOLUTIONS</span>
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
            Sustainable Agriculture for a Better Tomorrow
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
            At NAMO ORGANIC, we transform challenges into opportunities with nature-based solutions
            for healthier crops, richer soils and a more sustainable future.
          </p>
        </div>

        {/* 3 Solution Cards (Even Heights & Balanced Lengths) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'stretch',
          }}
        >
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '2.4rem 2rem',
                  border: '1.5px solid rgba(103, 160, 32, 0.2)',
                  boxShadow: '0 8px 30px rgba(24, 36, 10, 0.04)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  transition: 'all 0.25s ease',
                }}
                className="solution-card"
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
                        fontSize: '0.74rem',
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#67A020',
                        backgroundColor: '#F0F4E8',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                      }}
                    >
                      {s.tag}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        color: '#293B14',
                      }}
                    >
                      {s.num}
                    </span>
                  </div>

                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: '#E4ECCF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      color: '#293B14',
                    }}
                  >
                    <Icon size={24} color="#293B14" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      letterSpacing: '-0.015em',
                      color: '#18240A',
                      marginBottom: '0.75rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>

                  <p style={{ fontSize: '0.98rem', color: '#4A583A', lineHeight: 1.7 }}>
                    {s.desc}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '2rem',
                    paddingTop: '1.2rem',
                    borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    color: '#293B14',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  <span>Field-Proven Application</span>
                  <ArrowUpRight size={16} color="#67A020" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .solution-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 35px rgba(41, 59, 20, 0.1);
          border-color: #67A020;
        }
      `}</style>
    </section>
  );
};
