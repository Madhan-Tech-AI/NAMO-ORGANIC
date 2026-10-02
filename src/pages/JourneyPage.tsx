import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const JourneyPage: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      number: '01',
      id: 'source',
      name: 'SOURCE',
      subtitle: 'Certified Organic Farmland & Microclimates',
      bgImage: '/assets/hero-bg.jpg',
      headline: 'Protected Soils & Natural Microclimates',
      description:
        'Cultivated in pesticide-free agrarian pockets across Tamil Nadu, Karnataka, and Maharashtra. Soil tested for over 180 persistent agrochemical residues before every sowing season.',
      wisdomPillar: 'Natural Soil Sourcing',
      pillarDesc: 'Sourced strictly from ecosystems where biological methods and traditional crop rotation take absolute priority.',
      specs: ['Zero Synthetic Inputs', 'Rainwater & Well Fed', 'Biodiversity Corridors', 'Geo-tagged Farm Clusters'],
      details:
        'We never cultivate near highway runoff or industrial zones. Our farm clusters are surrounded by bio-fencing of neem, subabul, and moringa trees that act as natural pollinator corridors and pest barriers.',
    },
    {
      number: '02',
      id: 'select',
      name: 'SELECT',
      subtitle: 'Indigenous Heirloom Seeds & Hand Harvest',
      bgImage: '/assets/hero-mid.jpg',
      headline: 'Sun-Ripened, Hand-Graded Harvests',
      description:
        'No industrial combines that bruise grains or seeds. Farmers harvest in the cool morning dawn when natural plant oils and volatile aromatics are concentrated at their highest peak.',
      wisdomPillar: 'Traditional Wisdom',
      pillarDesc: 'Honoring harvest timing dictated by lunar cycles and seasonal maturity, passed down over multiple generations.',
      specs: ['Hand-harvested pods', 'Solar shade drying', 'Manual seed grading', 'Native desi cultivars'],
      details:
        'Our seed lineages are conserved from heirloom varieties rather than proprietary hybrid lab seeds. This maintains original nutritional density, fiber content, and resilience against drought.',
    },
    {
      number: '03',
      id: 'process',
      name: 'PROCESS',
      subtitle: 'Slow Traditional Vaagai & Bilona Methods',
      bgImage: '/assets/product-oil.jpg',
      headline: 'Vaagai Wooden Chekku & Vedic Bilona Churn',
      description:
        'Oils are extracted in artisan Vaagai wood presses at less than 42°C. Ghee is churned from cultured A2 whole curd with bidirectional wooden bilona rods, never separated by centrifugal dairy machines.',
      wisdomPillar: 'Minimal Ancestral Processing',
      pillarDesc: 'Zero chemical hexane solvents, zero deodorizing, zero bleaching. Pure mechanical friction at ancestral speeds.',
      specs: ['Cold extraction <42°C', 'Artisan wooden churn', 'Stone chakki flour milling', 'Living enzymes preserved'],
      details:
        'Industrial refiners heat oil to 200°C to extract every drop, destroying antioxidants. NAMO uses medicinal Vaagai timber which absorbs friction heat, yielding only pure virgin oil with natural golden hue and aroma.',
    },
    {
      number: '04',
      id: 'verify',
      name: 'VERIFY',
      subtitle: 'Comprehensive 180+ Chemical Lab Screening',
      bgImage: '/assets/nature-soil.jpg',
      headline: 'Spectrophotometric Testing & Purity Ledger',
      description:
        'Every single batch is tested in accredited NABL laboratories for organophosphates, heavy metals, synthetic colors, and foreign oils before it is approved for bottling.',
      wisdomPillar: 'Unbreakable Transparency',
      pillarDesc: 'We believe organic claims must be supported by empirical laboratory verification, accessible to every consumer.',
      specs: ['Pesticide residue screen (180+)', 'Aflatoxin test negative', 'Zero mineral oil detected', 'NABL accredited certs'],
      details:
        'Each test report is converted into an open batch ledger. When you enter your batch number on our site, you read the actual PDF laboratory test parameters for that specific press run.',
    },
    {
      number: '05',
      id: 'package',
      name: 'PACKAGE',
      subtitle: 'Food-Grade Amber Glass & Inert Packaging',
      bgImage: '/assets/hero-products.jpg',
      headline: 'Plastic-Free, Recyclable Protective Vessels',
      description:
        'We never use single-use PET plastic bottles that leach endocrine-disrupting phthalates and microplastics into cold-pressed oils. NAMO products are housed in heavy, UV-shielded amber glass and food-grade tins.',
      wisdomPillar: 'Earth-Conscious Packaging',
      pillarDesc: 'Protecting the vitality of the food inside while protecting the planet from non-biodegradable waste.',
      specs: ['UV-filtering amber glass', 'Phthalate-free closures', 'Kraft paper grain sacks', '100% recyclable footprint'],
      details:
        'Amber glass filters out degrading ultraviolet light wavelengths, allowing our cold-pressed oils and wild forest honey to maintain their natural antioxidants and aroma for over a year.',
    },
    {
      number: '06',
      id: 'table',
      name: 'TABLE',
      subtitle: 'From Indian Soil to Your Family Kitchen',
      bgImage: '/assets/sunset-farm.jpg',
      headline: 'Nourishment as Nature Intended',
      description:
        'Shipped fresh within 48 hours of packaging. When you cook with NAMO, you bring 5,000 years of agricultural harmony and pure native nutrition directly into your home.',
      wisdomPillar: 'Holistic Well-Being',
      pillarDesc: 'Restoring the sacred connection between the conscious consumer and the hardworking agrarian collective.',
      specs: ['Fast carbon-neutral shipping', 'Batch freshness guarantee', 'Farmer direct benefit', 'True culinary satisfaction'],
      details:
        'Generations of families across India now cook daily meals with NAMO, experiencing the rich fragrance, wholesome digestion, and genuine health benefits of real organic food.',
    },
  ];

  const current = stages[activeStage];

  return (
    <div style={{ backgroundColor: '#F8F9F3', minHeight: '100vh', paddingBottom: '7rem' }}>
      {/* Editorial Header */}
      <div
        style={{
          backgroundColor: '#1E2516',
          color: '#EDE8DC',
          padding: 'clamp(3.5rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem) clamp(2.5rem, 6vw, 5rem)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
            <span
              style={{
                backgroundColor: 'rgba(255, 219, 21, 0.15)',
                border: '1px solid #FFDB15',
                color: '#FFDB15',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
              }}
            >
              SACRED SOIL TO FAMILY TABLE
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 6vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
            }}
          >
            THE FARM-TO-FAMILY JOURNEY
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              lineHeight: 1.7,
              color: '#B5AFA4',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            Trace the six meticulous stages through which raw Indian seeds and blossoms transform into certified, unadulterated kitchen staples.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1440px', margin: 'clamp(2rem, 5vw, 4rem) auto 0', padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        {/* Step Selector Horizontal Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))',
            gap: '0.75rem',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          {stages.map((stage, idx) => (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              style={{
                backgroundColor: activeStage === idx ? '#243810' : '#FFFFFF',
                color: activeStage === idx ? '#FFFFFF' : '#18240A',
                border: activeStage === idx ? '2px solid #243810' : '1px solid rgba(24, 36, 10, 0.1)',
                borderRadius: '16px',
                padding: '1rem 0.85rem',
                textAlign: 'left',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: activeStage === idx ? '0 10px 25px rgba(36, 56, 16, 0.2)' : 'none',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    letterSpacing: '0.12em',
                    color: activeStage === idx ? '#FFDB15' : '#4E6E10',
                  }}
                >
                  STAGE {stage.number}
                </span>
                <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>→</span>
              </div>
              <strong style={{ fontSize: '1.05rem', display: 'block' }}>{stage.name}</strong>
              <span style={{ fontSize: '0.72rem', color: activeStage === idx ? '#C8DCB0' : '#6B7959', display: 'block', marginTop: '2px' }}>
                {stage.subtitle.split('&')[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Presentation */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 20px 55px rgba(0, 0, 0, 0.07)',
            border: '1px solid rgba(99, 141, 8, 0.2)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            alignItems: 'stretch',
          }}
        >
          {/* Image & Stage Banner */}
          <div style={{ position: 'relative', minHeight: 'clamp(260px, 40vw, 440px)' }}>
            <img
              src={current.bgImage}
              alt={current.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                top: 'clamp(1rem, 3vw, 2rem)',
                left: 'clamp(1rem, 3vw, 2rem)',
                backgroundColor: '#FFDB15',
                color: '#18240A',
                fontWeight: 900,
                fontSize: '0.82rem',
                padding: '0.45rem 1rem',
                borderRadius: '9999px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
              }}
            >
              STAGE {current.number} OF 06 · {current.name}
            </div>
          </div>

          {/* Detailed Content */}
          <div style={{ padding: 'clamp(1.5rem, 4vw, 4.5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#4E6E10', fontWeight: 800, textTransform: 'uppercase' }}>
              {current.subtitle}
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                color: '#18240A',
                margin: '0.6rem 0 1rem',
                lineHeight: 1.2,
              }}
            >
              {current.headline}
            </h2>

            <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.7, color: '#3D4A2D', marginBottom: '1.2rem' }}>
              {current.description}
            </p>

            <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: '#556345', marginBottom: '1.8rem' }}>
              {current.details}
            </p>

            {/* Specs Pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
              {current.specs.map((s, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(78, 110, 16, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Check size={11} color="#4E6E10" />
                  </div>
                  <span style={{ fontSize: '0.84rem', color: '#18240A', fontWeight: 600 }}>{s}</span>
                </div>
              ))}
            </div>

            {/* Wisdom Pillar Footer */}
            <div
              style={{
                backgroundColor: '#F0F4E8',
                padding: '1.2rem',
                borderRadius: '16px',
                borderLeft: '4px solid #4E6E10',
              }}
            >
              <strong style={{ color: '#243810', fontSize: '0.88rem', display: 'block', marginBottom: '3px' }}>
                🌾 {current.wisdomPillar}
              </strong>
              <p style={{ fontSize: '0.82rem', color: '#4E6E10', margin: 0 }}>
                {current.pillarDesc}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 'clamp(3rem, 6vw, 6rem)' }}>
          <Link to="/products" className="btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '0.9rem' }}>
            TASTE THE PURITY OF OUR PROCESS <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
