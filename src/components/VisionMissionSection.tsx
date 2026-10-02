import React from 'react';
import { Eye, Target, ArrowRight, HeartHandshake } from 'lucide-react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section
      id="vision"
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#F8F9F3',
        position: 'relative',
        borderTop: '1px solid rgba(24, 36, 10, 0.06)',
        borderBottom: '1px solid rgba(24, 36, 10, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Pill & Title */}
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
            <Target size={14} color="#293B14" />
            <span>03 — VISION & MISSION</span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              color: '#18240A',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '0.8rem',
            }}
          >
            Guiding Our Purpose & Impact
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: '1.1rem',
              color: '#4E6E10',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Nature Feeds Life
          </p>
        </div>

        {/* Dual Cards: Vision & Mission (Equalized, Balanced Dimensions) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Card 1: Company Vision */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem 2.2rem',
              border: '1.5px solid rgba(103, 160, 32, 0.2)',
              boxShadow: '0 8px 30px rgba(24, 36, 10, 0.05)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
            className="vision-card"
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                backgroundColor: '#7EBE22',
              }}
            />

            <div>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  backgroundColor: '#F0F4E8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.4rem',
                  color: '#293B14',
                }}
              >
                <Eye size={24} color="#4E6E10" />
              </div>

              <span
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#67A020',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                OUR LONG-TERM ASPIRATION
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#18240A',
                  marginBottom: '1rem',
                }}
              >
                Company Vision
              </h3>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: '#334024',
                  fontWeight: 500,
                }}
              >
                "To promote the transition towards organic and sustainable cultivation for the
                health, growth and well-being of future generations."
              </p>
            </div>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.4rem',
                borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#4E6E10',
                fontSize: '0.85rem',
                fontWeight: 700,
              }}
            >
              <HeartHandshake size={17} />
              <span>Intergenerational Ecological Health</span>
            </div>
          </div>

          {/* Card 2: Company Mission */}
          <div
            style={{
              backgroundColor: '#1b4d35',
              color: '#FFFFFF',
              borderRadius: '20px',
              padding: '2.5rem 2.2rem',
              boxShadow: '0 12px 35px rgba(27, 77, 53, 0.2)',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
            className="mission-card"
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '5px',
                backgroundColor: '#FFDB15',
              }}
            />

            <div>
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '14px',
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.4rem',
                  color: '#FFDB15',
                }}
              >
                <Target size={24} color="#FFDB15" />
              </div>

              <span
                style={{
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#FFDB15',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                OUR ACTIONABLE COMMITMENT
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: '#FFFFFF',
                  marginBottom: '1rem',
                }}
              >
                Company Mission
              </h3>

              <p
                style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: 'rgba(255, 255, 255, 0.92)',
                  fontWeight: 400,
                }}
              >
                "To work with farmers to promote the use of organic fertilizers and sustainable
                agricultural practices, thereby contributing to the country's agricultural growth
                and development."
              </p>
            </div>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.4rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: '#FFDB15',
                fontSize: '0.85rem',
                fontWeight: 700,
              }}
            >
              <Target size={17} />
              <span>National Agri-Growth & Farmer Prosperity</span>
            </div>
          </div>
        </div>

        {/* Supporting Philosophy Ribbon */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #E4ECCF',
            borderRadius: '16px',
            padding: '2rem 1.8rem',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(24, 36, 10, 0.04)',
          }}
        >
          <span
            style={{
              fontSize: '0.74rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#67A020',
              display: 'block',
              marginBottom: '0.75rem',
            }}
          >
            SUPPORTING PHILOSOPHY
          </span>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: 'clamp(1rem, 2vw, 1.35rem)',
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontWeight: 800,
              color: '#18240A',
              letterSpacing: '-0.01em',
            }}
          >
            <span style={{ color: '#293B14' }}>Healthy Crops</span>
            <ArrowRight size={18} color="#67A020" />
            <span style={{ color: '#4E6E10' }}>Thriving Communities</span>
            <ArrowRight size={18} color="#67A020" />
            <span style={{ color: '#1b4d35' }}>A Sustainable Future</span>
          </div>

          <div
            style={{
              marginTop: '0.75rem',
              fontSize: '0.9rem',
              color: '#6B7959',
              fontWeight: 500,
            }}
          >
            Rooted in Authentic Agrarian Truth: Nature Feeds Life
          </div>
        </div>
      </div>
    </section>
  );
};
