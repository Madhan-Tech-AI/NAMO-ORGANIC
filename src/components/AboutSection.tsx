import React from 'react';
import { Leaf, Sprout, Globe, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        padding: '6.5rem 2rem',
        backgroundColor: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
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
            <Leaf size={14} color="#67A020" />
            <span>02 — ABOUT THE COMPANY</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Cultivating a Greener Tomorrow
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: '1.12rem',
              color: '#4E6E10',
              fontWeight: 600,
              letterSpacing: '0.02em',
            }}
          >
            Natural Solutions for a Better Tomorrow
          </p>
        </div>

        {/* Main Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Narrative Details */}
          <div>
            <div
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.8,
                color: '#293B14',
                fontWeight: 600,
                marginBottom: '1.5rem',
                borderLeft: '4px solid #67A020',
                paddingLeft: '1.25rem',
              }}
            >
              Natural Agriculture & Modern Organic is a professionally managed company
              committed to sharing knowledge and information with its clients.
            </div>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: '#4A583A', marginBottom: '1.4rem' }}>
              We manufacture and supply organic fertilizers, including Panchakavya-based fertilizers,
              organic agricultural products, cold-pressed edible oils and desi cow ghee. We are also
              engaged in e-commerce and merchant trading.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: '#4A583A', marginBottom: '1.4rem' }}>
              Our dedicated team of professionals draws upon extensive knowledge and experience to
              deliver innovative and long-term solutions.
            </p>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.8, color: '#4A583A', marginBottom: '2.5rem' }}>
              We support technical advancement in agriculture by providing field-based solutions,
              agricultural products and services that improve productivity and efficiency.
            </p>

            {/* Our Focus Badges */}
            <div>
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#18240A',
                  display: 'block',
                  marginBottom: '1rem',
                }}
              >
                OUR CORE FOCUS
              </span>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { title: 'Organic', desc: '100% natural, chemical-free bio inputs', icon: Leaf },
                  { title: 'Agriculture', desc: 'Farmer empowerment & soil resilience', icon: Sprout },
                  { title: 'Sustainable', desc: 'Restoring ecosystems for future generations', icon: Globe },
                ].map((focus) => {
                  const Icon = focus.icon;
                  return (
                    <div
                      key={focus.title}
                      style={{
                        flex: '1 1 160px',
                        backgroundColor: '#F8F9F3',
                        border: '1px solid rgba(103, 160, 32, 0.25)',
                        borderRadius: '14px',
                        padding: '1.2rem',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                      }}
                      className="about-focus-card"
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '8px',
                          backgroundColor: '#E4ECCF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '0.75rem',
                          color: '#293B14',
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#18240A', marginBottom: '0.3rem' }}>
                        {focus.title}
                      </h4>
                      <p style={{ fontSize: '0.82rem', color: '#556645', lineHeight: 1.4 }}>
                        {focus.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Mission Badge */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(24, 36, 10, 0.12)',
                position: 'relative',
              }}
            >
              <img
                src="/assets/nature-soil.jpg"
                alt="Rich living soil and organic agriculture"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(24, 36, 10, 0.1) 0%, rgba(24, 36, 10, 0.85) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '2.5rem',
                  color: '#FFFFFF',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#FFDB15',
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  <CheckCircle2 size={16} /> Professionally Managed Agri-Enterprise
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#FFFFFF',
                    lineHeight: 1.3,
                    marginBottom: '0.6rem',
                  }}
                >
                  Natural Agriculture & Modern Organic Pvt. Ltd.
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.6 }}>
                  Bridging traditional cow-derived Vedic formulations with rigorous modern agricultural productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-focus-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(41, 59, 20, 0.1);
          border-color: #67A020;
        }
      `}</style>
    </section>
  );
};
