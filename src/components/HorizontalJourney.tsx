import React, { useState, useRef } from 'react';
import { ArrowRight, Check, Compass, Feather } from 'lucide-react';

interface Stage {
  number: string;
  id: string;
  name: string;
  subtitle: string;
  bgImage: string;
  headline: string;
  description: string;
  wisdomPillar: string;
  pillarDesc: string;
  specs: string[];
}

export const HorizontalJourney: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const stages: Stage[] = [
    {
      number: '01',
      id: 'source',
      name: 'SOURCE',
      subtitle: 'Certified Organic Farmland',
      bgImage: '/assets/hero-bg.jpg',
      headline: 'Protected Soils & Natural Microclimates',
      description:
        'Cultivated in pesticide-free agrarian pockets across Tamil Nadu, Karnataka, and Maharashtra. Soil tested for over 180 persistent agrochemical residues before every sowing season.',
      wisdomPillar: 'Natural Sourcing',
      pillarDesc: 'Sourced strictly from ecosystems where biological methods and traditional crop rotation take absolute priority.',
      specs: ['Zero Synthetic Inputs', 'Rainwater & Well Fed', 'Biodiversity Corridors', 'Geo-tagged Farm Clusters'],
    },
    {
      number: '02',
      id: 'select',
      name: 'SELECT',
      subtitle: 'Indigenous Heirloom Seeds',
      bgImage: '/assets/hero-mid.jpg',
      headline: 'Sun-Ripened, Hand-Graded Harvests',
      description:
        'No industrial combines that bruise grains or seeds. Farmers harvest in the cool morning dawn when natural plant oils and volatile aromatics are concentrated at their highest peak.',
      wisdomPillar: 'Traditional Wisdom',
      pillarDesc: 'Honoring harvest timing dictated by lunar cycles and seasonal maturity, passed down over multiple generations.',
      specs: ['Hand-harvested pods', 'Solar shade drying', 'Manual seed grading', 'Native desi cultivars'],
    },
    {
      number: '03',
      id: 'process',
      name: 'PROCESS',
      subtitle: 'Slow Traditional Methods',
      bgImage: '/assets/product-oil.jpg',
      headline: 'Vaagai Wooden Chekku & Bilona Churn',
      description:
        'Oils are extracted in artisan Vaagai wood presses at less than 45°C. Ghee is churned from cultured A2 curd with bidirectional wooden bilona rods, never separated by centrifugal dairy machines.',
      wisdomPillar: 'Minimal Processing',
      pillarDesc: 'Zero chemical hexane solvents, zero deodorizing, zero bleaching. Pure mechanical friction at ancestral speeds.',
      specs: ['Cold extraction <45°C', 'Artisan wooden churn', 'Stone chakki flour milling', 'Living enzymes preserved'],
    },
    {
      number: '04',
      id: 'preserve',
      name: 'PRESERVE',
      subtitle: 'Artisanal Purity Safeguards',
      bgImage: '/assets/product-honey.jpg',
      headline: 'Amber Glass & Natural Packaging',
      description:
        'Stored in UV-shielding amber glass and sustainable unbleached kraft paper. We reject synthetic preservatives, chemical stabilizers, and microplastic leach.',
      wisdomPillar: 'Chemical-Free Living',
      pillarDesc: 'Uncompromising integrity. No added sugar, no maida, no artificial coloring agents, zero synthetic fragrance.',
      specs: ['UV Amber Glass Bottles', 'Zero Preservatives', 'Airtight linen seals', 'Small-batch freshness'],
    },
    {
      number: '05',
      id: 'deliver',
      name: 'DELIVER',
      subtitle: 'Farm-to-Family Transparency',
      bgImage: '/assets/sunset-farm.jpg',
      headline: 'Arriving at Modern Kitchens Intact',
      description:
        'Direct connection between rural agrarian stewards and conscious urban families. Every single pack bears a batch code linking back to its soil origin and lab purity certificate.',
      wisdomPillar: 'Farm-to-Family',
      pillarDesc: 'Transparent fair-trade relationships empowering Indian farming households while nourishing conscious families.',
      specs: ['100% Traceable batch QR', 'Fair farmer compensation', 'Zero middleman adulteration', 'Freshly milled delivery'],
    },
  ];

  const current = stages[activeStageIndex];

  return (
    <section
      id="journey"
      ref={containerRef}
      style={{
        position: 'relative',
        backgroundColor: '#F8F9F3',
        padding: 'clamp(3.5rem, 8vw, 7rem) clamp(1rem, 4vw, 2rem)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 4rem)' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge-organic">
              <Compass size={14} color="#4E6E10" />
              THE CONTINUOUS CINEMATIC JOURNEY
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#18240A',
              marginBottom: '1rem',
            }}
          >
            BACK TO WHAT NATURE INTENDED.
          </h2>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: '#556345',
              maxWidth: '680px',
              margin: '0 auto',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Follow our 5-stage farm-to-family journey. From untouched organic soils to your table,
            witness how ancient Indian agrarian wisdom is preserved at every touchpoint.
          </p>
        </div>

        {/* Stage Timeline Navigation Bar */}
        <div
          className="touch-scroll-x"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            position: 'relative',
            marginBottom: 'clamp(1.8rem, 4vw, 3rem)',
            borderBottom: '1.5px solid rgba(24, 36, 10, 0.1)',
            paddingBottom: '1rem',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch',
            gap: '0.8rem',
          }}
        >
          {stages.map((stage, idx) => {
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                style={{
                  background: isActive ? '#243810' : '#FFFFFF',
                  border: isActive ? '1px solid #243810' : '1px solid rgba(24, 36, 10, 0.12)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1.1rem',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease',
                  flexShrink: 0,
                  boxShadow: isActive ? '0 8px 20px -5px rgba(36, 56, 16, 0.25)' : '0 2px 6px rgba(0,0,0,0.03)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: isActive ? '#A8E63A' : '#768565',
                    letterSpacing: '0.1em',
                  }}
                >
                  {stage.number}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: isActive ? '#FFFFFF' : '#2D3A1B',
                    letterSpacing: '0.08em',
                  }}
                >
                  {stage.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Editorial Stage Board */}
        <div
          ref={trackRef}
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            minHeight: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(99, 141, 8, 0.2)',
            boxShadow: '0 25px 60px -15px rgba(24, 36, 10, 0.08)',
          }}
        >
          {/* Left Visual Area with Background & Parallax Zoom */}
          <div
            style={{
              position: 'relative',
              minHeight: 'clamp(260px, 35vw, 380px)',
              overflow: 'hidden',
            }}
          >
            <div
              key={current.bgImage}
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${current.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(1.02) contrast(1.02)',
                transition: 'all 0.8s ease-in-out',
              }}
            />
            {/* Subtle Vignette */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, transparent 50%, rgba(255, 255, 255, 0.95) 100%), linear-gradient(to top, rgba(24, 36, 10, 0.6) 0%, transparent 60%)',
              }}
            />
            {/* Floating Stage Identifier */}
            <div
              style={{
                position: 'absolute',
                top: 'clamp(1rem, 3vw, 2.5rem)',
                left: 'clamp(1rem, 3vw, 2.5rem)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  border: '1.5px solid #243810',
                  color: '#243810',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                }}
              >
                {current.number}
              </div>
              <div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: '#243810', textTransform: 'uppercase', fontWeight: 800 }}>
                  STAGE {current.number}
                </span>
                <p style={{ color: '#18240A', fontSize: '1.15rem', fontWeight: 700 }}>{current.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Right Editorial Storytelling Panel */}
          <div
            style={{
              padding: 'clamp(1.5rem, 4vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#4E6E10',
                  fontWeight: 800,
                }}
              >
                {current.name} PHASE
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.6rem, 2.8vw, 2.8rem)',
                fontWeight: 500,
                lineHeight: 1.2,
                color: '#18240A',
                marginBottom: '1.2rem',
              }}
            >
              {current.headline}
            </h3>

            <p
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                lineHeight: 1.7,
                color: '#3D4A2D',
                fontWeight: 400,
                marginBottom: '1.5rem',
              }}
            >
              {current.description}
            </p>

            {/* Wisdom Pillar Highlight Box */}
            <div
              style={{
                background: '#F0F4E8',
                borderLeft: '4px solid #4E6E10',
                borderRadius: '0 12px 12px 0',
                padding: '1.2rem 1.4rem',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <Feather size={16} color="#4E6E10" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.1em', color: '#243810', textTransform: 'uppercase' }}>
                  Philosophy: {current.wisdomPillar}
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: '#556345', lineHeight: 1.55 }}>
                {current.pillarDesc}
              </p>
            </div>

            {/* Stage Technical Specifications List */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '0.8rem',
                marginBottom: '2rem',
              }}
            >
              {current.specs.map((spec, sIdx) => (
                <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: 'rgba(78, 110, 16, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={11} color="#3B5710" />
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#2D3A1B', fontWeight: 600 }}>{spec}</span>
                </div>
              ))}
            </div>

            {/* Next Stage Navigation Button */}
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <button
                onClick={() => setActiveStageIndex((prev) => (prev + 1) % stages.length)}
                className="btn-primary"
                style={{ padding: '0.8rem 1.8rem', fontSize: '0.8rem' }}
              >
                NEXT STAGE: {stages[(activeStageIndex + 1) % stages.length].name} <ArrowRight size={15} />
              </button>
              <span style={{ fontSize: '0.8rem', color: '#687656', fontWeight: 600 }}>
                Stage {activeStageIndex + 1} of {stages.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
