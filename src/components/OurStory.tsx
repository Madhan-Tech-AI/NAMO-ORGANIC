import React, { useState } from 'react';
import { History } from 'lucide-react';

interface Era {
  era: string;
  year: string;
  title: string;
  desc: string;
  image: string;
  detail: string;
}

export const OurStory: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState<number>(0);

  const eras: Era[] = [
    {
      era: '01 · VEDIC FOUNDATIONS',
      year: '3000 BCE — Classical Era',
      title: 'The Sacred Science of Vrikshayurveda',
      desc: 'Ancient Indian texts recognized that the health of the soil directly dictates the mental and physical vitality of the human mind. Farming was sacred stewardship, synchronized with solar and lunar rhythms.',
      image: '/assets/nature-soil.jpg',
      detail: 'Crop rotation, herbal pest repellents, and natural composts formed the bedrock of India’s agricultural abundance.',
    },
    {
      era: '02 · ANCESTRAL ARTISAN CRAFT',
      year: '12th — 19th Century',
      title: 'Wooden Presses & Earthen Bilona Churns',
      desc: 'Every Indian village relied on artisan cold presses crafted from dense medicinal Vaagai timber and earthen vessels. No heat, no chemical bleaching. Pure golden nourishment made daily by agrarian guilds.',
      image: '/assets/product-oil.jpg',
      detail: 'Slow mechanical pressing at ambient temperature preserved living sesamin, aroma, and delicate vitamins.',
    },
    {
      era: '03 · THE REGENERATIVE AWAKENING',
      year: '20th Century Transition',
      title: 'Resisting Industrial Shortcuts',
      desc: 'When chemical fertilizers and synthetic pesticides swept through monoculture farming, native heirloom seeds and natural soil microbiomes faced near extinction. The need for an uncompromised organic revival was born.',
      image: '/assets/hero-mid.jpg',
      detail: 'Pioneering agrarian families conserved indigenous Gir cows and native drought-resilient seed lineages.',
    },
    {
      era: '04 · THE MODERN NAMO STANDARD',
      year: 'Present Day & Future',
      title: 'Certified Organic & Traceable Purity',
      desc: 'NAMO bridges this 5,000-year-old agricultural wisdom with modern standards of quality, traceability and accessibility. We conduct stringent lab tests for over 180 chemicals while preserving slow artisanal production.',
      image: '/assets/hero-products.jpg',
      detail: 'From rural agrarian families to conscious modern households, transparent and pure.',
    },
  ];

  const active = eras[selectedEra];

  return (
    <section
      id="story"
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        padding: '7rem 2rem',
        overflow: 'hidden',
        borderTop: '1px solid rgba(24, 36, 10, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge-organic">
              <History size={14} color="#4E6E10" />
              THE CONTINUOUS HERITAGE
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#18240A',
              marginBottom: '1.2rem',
            }}
          >
            A BRIDGE BETWEEN GENERATIONS
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#2C3B1C',
              maxWidth: '750px',
              margin: '0 auto 1.5rem',
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            India has cultivated, processed and consumed natural foods for thousands of years.
            Before industrial food systems, people relied on seasonal crops, traditional processing, natural ingredients
            and knowledge passed from one generation to another.
          </p>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#556345',
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: 400,
              lineHeight: 1.7,
            }}
          >
            NAMO seeks to bring that philosophy into modern life. We combine traditional agricultural wisdom with modern standards of quality, traceability and accessibility.
          </p>
        </div>

        {/* Big Central Statement Banner */}
        <div
          style={{
            background: '#F0F4E8',
            border: '1.5px solid rgba(78, 110, 16, 0.3)',
            borderRadius: '24px',
            padding: '2.5rem 2rem',
            textAlign: 'center',
            marginBottom: '4.5rem',
            boxShadow: '0 15px 35px -10px rgba(24, 36, 10, 0.05)',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#4E6E10',
              fontWeight: 800,
              display: 'block',
              marginBottom: '0.6rem',
            }}
          >
            OUR CORE PHILOSOPHY
          </span>
          <h3
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.8rem, 3.2vw, 3.2rem)',
              fontWeight: 500,
              letterSpacing: '0.04em',
              color: '#18240A',
              lineHeight: 1.25,
            }}
          >
            ANCIENT WISDOM. MODERN STANDARDS. NATURAL LIVING.
          </h3>
        </div>

        {/* Historical Interactive Timeline Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Era Timeline Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {eras.map((era, index) => {
              const isSelected = index === selectedEra;
              return (
                <div
                  key={index}
                  onClick={() => setSelectedEra(index)}
                  style={{
                    background: isSelected ? '#243810' : '#F8F9F3',
                    border: isSelected ? '1px solid #243810' : '1px solid rgba(24, 36, 10, 0.08)',
                    borderRadius: '18px',
                    padding: '1.6rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isSelected ? '0 10px 25px -5px rgba(36, 56, 16, 0.25)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = 'rgba(78, 110, 16, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.borderColor = 'rgba(24, 36, 10, 0.08)';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: isSelected ? '#A8E63A' : '#4E6E10', fontWeight: 800 }}>
                      {era.era}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: isSelected ? '#CAD6BC' : '#768565' }}>{era.year}</span>
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: isSelected ? '#FFFFFF' : '#18240A', fontWeight: 700, marginBottom: '0.4rem' }}>
                    {era.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: isSelected ? '#E2E8D8' : '#556345', lineHeight: 1.5 }}>
                    {era.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right: Active Era Visual Board */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: '#F8F9F3',
              border: '1px solid rgba(99, 141, 8, 0.25)',
              boxShadow: '0 25px 60px -15px rgba(24, 36, 10, 0.12)',
              minHeight: '480px',
            }}
          >
            <img
              src={active.image}
              alt={active.title}
              style={{
                width: '100%',
                height: '480px',
                objectFit: 'cover',
                display: 'block',
                transition: 'all 0.6s ease',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(24, 36, 10, 0.9) 0%, rgba(24, 36, 10, 0.3) 50%, transparent 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '2.5rem',
                left: '2.5rem',
                right: '2.5rem',
              }}
            >
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#243810',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  display: 'inline-block',
                  marginBottom: '0.8rem',
                }}
              >
                ERA SPOTLIGHT
              </span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#FFFFFF', marginBottom: '0.6rem' }}>
                {active.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#EDE8DC', lineHeight: 1.6 }}>
                {active.detail}
              </p>
            </div>
          </div>
        </div>

        {/* Founder & Managing Director Spotlight */}
        <div
          style={{
            marginTop: '5rem',
            backgroundColor: '#F8F9F3',
            borderRadius: '28px',
            border: '1px solid rgba(99, 141, 8, 0.25)',
            padding: 'clamp(2rem, 5vw, 4rem)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            boxShadow: '0 20px 45px -10px rgba(24, 36, 10, 0.06)',
          }}
        >
          <div style={{ position: 'relative', maxWidth: '320px', margin: '0 auto' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                aspectRatio: '4/5',
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                position: 'relative',
              }}
            >
              <img
                src="/images/fathima.jpg"
                alt="Mrs. Fathima Ali — Founder & Managing Director, NAMO Organics"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(24, 36, 10, 0.8) 0%, transparent 45%)',
                }}
              />
              <div style={{ position: 'absolute', bottom: '1.2rem', left: '1.2rem', right: '1.2rem', color: '#FFFFFF' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.15rem' }}>Mrs. Fathima Ali</p>
                <p style={{ fontSize: '0.75rem', color: '#CAD6BC', letterSpacing: '0.05em' }}>Founder & Managing Director</p>
              </div>
            </div>
          </div>

          <div>
            <span className="badge-organic" style={{ marginBottom: '1rem' }}>
              THE WOMAN WHO CHOSE THE SOIL
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                color: '#18240A',
                lineHeight: 1.2,
                marginBottom: '0.6rem',
              }}
            >
              Mrs. Fathima Ali
            </h3>
            <p style={{ fontSize: '0.85rem', color: '#687656', fontStyle: 'italic', marginBottom: '1.2rem' }}>
              Chennai, Tamil Nadu
            </p>
            <p style={{ fontSize: '1.05rem', color: '#2C3B1C', lineHeight: 1.7, marginBottom: '1rem' }}>
              Born and raised in Chennai, Fathima founded NAMO with one mission — <em>to help Indian agriculture return to balance.</em>
            </p>
            <p style={{ fontSize: '0.95rem', color: '#556345', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              After witnessing the long-term damage caused by chemical farming, she began studying traditional agricultural systems alongside farmers, researchers, and soil experts across South India. This journey led to NAMO — a bridge between ancient Indian farming wisdom and modern organic agriculture.
            </p>
            <blockquote
              style={{
                borderLeft: '4px solid #4E6E10',
                paddingLeft: '1.2rem',
                backgroundColor: 'rgba(78, 110, 16, 0.06)',
                padding: '1rem 1.2rem',
                borderRadius: '0 12px 12px 0',
                marginBottom: '1.5rem',
              }}
            >
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.05rem', color: '#18240A', lineHeight: 1.6 }}>
                “This is not just a business. It is my service to the soil, to the farmer, and to the future of healthy food in India.”
              </p>
              <cite style={{ display: 'block', fontSize: '0.75rem', color: '#4E6E10', fontWeight: 700, marginTop: '0.4rem', fontStyle: 'normal' }}>
                — Mrs. Fathima Ali, Founder & Managing Director, NAMO Organics
              </cite>
            </blockquote>

            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              {['ISO 9001:2015 Certified', 'GeM Listed', 'FSSAI Licensed', '100% Organic'].map((cert, ci) => (
                <span
                  key={ci}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(78, 110, 16, 0.2)',
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    color: '#243810',
                    fontWeight: 700,
                  }}
                >
                  {cert}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
