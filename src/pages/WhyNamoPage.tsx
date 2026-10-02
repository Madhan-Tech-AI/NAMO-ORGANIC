import React from 'react';
import {
  Leaf,
  ShieldAlert,
  Sparkles,
  MapPin,
  History,
  RefreshCw,
  Check,
  X,
  Award,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const WhyNamoPage: React.FC = () => {
  const pillars = [
    {
      icon: <Leaf size={28} color="#4E6E10" />,
      number: '01',
      title: '100% ORGANIC & UNBLEACHED',
      description:
        'Naturally sourced harvests with an uncompromising emphasis on regenerative organic farming practices, native seed lineages, and zero chemical biocides.',
      badge: 'Certified Clean',
    },
    {
      icon: <ShieldAlert size={28} color="#3B5710" />,
      number: '02',
      title: 'ZERO PRESERVATIVES OR ADDITIVES',
      description:
        'Products created without synthetic BHA/BHT preservatives, artificial shelf-life extenders, sulfur bleaching agents, or synthetic anti-caking compounds.',
      badge: 'Living Purity',
    },
    {
      icon: <Sparkles size={28} color="#B5872A" />,
      number: '03',
      title: 'CHEMICAL-FREE MECHANICAL EXTRACTION',
      description:
        'Zero chemical solvent intervention across sourcing, extraction, and packaging. No petroleum hexane solvent washes, no synthetic perfumes.',
      badge: '100% Untouched',
    },
    {
      icon: <MapPin size={28} color="#4E6E10" />,
      number: '04',
      title: 'FARM-TO-FAMILY TRACEABILITY',
      description:
        'A transparent, verifiable connection between ancestral soil coordinates, the certified farmer who nurtured it, and your family kitchen.',
      badge: 'Geo-Verifiable',
    },
    {
      icon: <History size={28} color="#3B5710" />,
      number: '05',
      title: 'AUTHENTIC TRADITIONAL METHODS',
      description:
        'Time-tested Indian agricultural methods — Vaagai marachekku cold pressing, Vedic bilona curd churning, and slow sandstone chakki grinding.',
      badge: 'Ancestral Speed',
    },
    {
      icon: <RefreshCw size={28} color="#4E6E10" />,
      number: '06',
      title: 'MINIMAL ECO PROCESSING',
      description:
        'Food kept in its rawest, most bioavailable state. Never heated past natural biological thresholds, preserving live digestive enzymes and vitamins.',
      badge: 'Vitality Retained',
    },
  ];

  const comparisons = [
    {
      aspect: 'Edible Oils Extraction',
      namo: 'Vaagai wood cold pressed <42°C without heat or solvents. Unrefined, unfiltered.',
      commercial: 'Extracted with neurotoxic Hexane solvent at 180°C. Bleached with acid and deodorized.',
    },
    {
      aspect: 'Desi Cow Ghee Preparation',
      namo: 'Cultured curd churned bidirectionally with wooden bilona rods; slow-clarified on firewood.',
      commercial: 'Centrifuged machine cream boiled rapidly with industrial chemical colorants and synthetic flavors.',
    },
    {
      aspect: 'Forest Honey Sourcing',
      namo: 'Raw, unpasteurized wild harvest gravity strained through cotton mesh; living enzymes intact.',
      commercial: 'Pasteurized at 70°C, ultrafiltered to remove pollen, and bulked with C4 corn/rice syrup.',
    },
    {
      aspect: 'Flour & Grains Milling',
      namo: 'Slow natural stone chakki mill at <120 RPM, preserving wheat germ oil and 100% bran.',
      commercial: 'High-speed steel roller mills stripping 100% germ; bleached with benzoyl peroxide.',
    },
    {
      aspect: 'Pulses & Lentils',
      namo: 'Naturally sun-dried and unpolished; original protein, fiber, and authentic earthy taste.',
      commercial: 'Friction-polished with mineral oil, water, and talc powder to produce artificial shine.',
    },
    {
      aspect: 'Dry Fruits & Nuts',
      namo: 'Cold-shelled by hand, non-irradiated, and zero propylene oxide (PPO) fumigation gas.',
      commercial: 'Chemically fumigated with PPO gas, sulfur bleached, and artificial paraffin glaze added.',
    },
  ];

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
              PURITY DEFINED
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
            WHY CHOOSE NAMO ORGANIC?
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
            We do not compromise. We do not use industrial shortcuts.
            Here is how NAMO redefines what you and your family put into your bodies every day.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1440px', margin: 'clamp(2rem, 5vw, 4rem) auto 0', padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        {/* 6 Core Pillars Grid */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            <span className="badge-organic">THE SIX PILLARS OF INTEGRITY</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.6rem)',
                color: '#18240A',
                marginTop: '0.8rem',
              }}
            >
              Uncompromising Standards from Seed to Kitchen
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: 'clamp(1.2rem, 3vw, 2rem)',
            }}
          >
            {pillars.map((p, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  border: '1px solid rgba(99, 141, 8, 0.2)',
                  boxShadow: '0 12px 35px -5px rgba(24, 36, 10, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      backgroundColor: '#F0F4E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {p.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.2rem',
                      fontWeight: 900,
                      color: 'rgba(24, 36, 10, 0.1)',
                      lineHeight: 1,
                    }}
                  >
                    {p.number}
                  </span>
                </div>

                <span
                  style={{
                    backgroundColor: '#E6F0D8',
                    color: '#3B5710',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    display: 'inline-block',
                    width: 'fit-content',
                    marginBottom: '0.8rem',
                  }}
                >
                  {p.badge}
                </span>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#18240A',
                    marginBottom: '0.8rem',
                  }}
                >
                  {p.title}
                </h3>

                <p style={{ fontSize: '0.92rem', color: '#556345', lineHeight: 1.7, flex: 1 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: 'clamp(1.5rem, 4vw, 4rem)',
            boxShadow: '0 15px 45px rgba(24, 36, 10, 0.06)',
            border: '1px solid rgba(99, 141, 8, 0.2)',
            marginBottom: 'clamp(3rem, 6vw, 6rem)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: ' clamp(1.8rem, 4vw, 3rem)' }}>
            <span className="badge-organic">HONEST COMPARISON</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                color: '#18240A',
                marginTop: '0.8rem',
              }}
            >
              The NAMO Standard vs Factory Supermarket Food
            </h2>
            <p style={{ color: '#556345', maxWidth: '650px', margin: '0.8rem auto 0' }}>
              Why industrial processing sacrifices your health for convenience, and how we refuse to follow suit.
            </p>
          </div>

          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }} className="touch-scroll-x">
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '640px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(24, 36, 10, 0.12)' }}>
                  <th style={{ textAlign: 'left', padding: '1rem', color: '#6B7959', fontSize: '0.85rem' }}>
                    CATEGORY
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '1rem',
                      backgroundColor: '#F0F4E8',
                      color: '#243810',
                      fontSize: '0.95rem',
                      fontWeight: 800,
                      borderRadius: '8px 8px 0 0',
                    }}
                  >
                    🌱 NAMO ORGANIC CRAFT
                  </th>
                  <th style={{ textAlign: 'left', padding: '1rem', color: '#8A5555', fontSize: '0.95rem' }}>
                    ⚠️ COMMERCIAL PROCESSING
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid rgba(24, 36, 10, 0.06)' }}>
                    <td style={{ padding: '1.2rem 1rem', fontWeight: 700, color: '#18240A', fontSize: '0.9rem' }}>
                      {row.aspect}
                    </td>
                    <td style={{ padding: '1.2rem 1rem', backgroundColor: '#F0F4E8', color: '#243810', fontSize: '0.88rem', lineHeight: 1.6 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <Check size={16} color="#4E6E10" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{row.namo}</span>
                      </div>
                    </td>
                    <td style={{ padding: '1.2rem 1rem', color: '#6B7959', fontSize: '0.88rem', lineHeight: 1.6 }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <X size={16} color="#BA3C3C" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{row.commercial}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Certifications Banner */}
        <div
          style={{
            backgroundColor: '#1E2516',
            borderRadius: '24px',
            padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.2rem, 4vw, 2.5rem)',
            color: '#FFFFFF',
            textAlign: 'center',
          }}
        >
          <Award size={36} color="#FFDB15" style={{ margin: '0 auto 1rem' }} />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: '0.8rem' }}>
            Accredited by National & International Purity Bodies
          </h2>
          <p style={{ color: '#B5AFA4', maxWidth: '650px', margin: '0 auto 2rem', fontSize: '1rem', lineHeight: 1.6 }}>
            Certified under the National Programme for Organic Production (NPOP), Jaivik Bharat, and audited according to FSSAI Organic Food Regulations.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '0.8rem' }}>
            {['INDIA ORGANIC (NPOP)', 'JAIVIK BHARAT', 'FSSAI CERTIFIED', 'PESTICIDE SCREEN: 0/180 RESIDUES', '100% RECYCLABLE GLASS'].map((c, i) => (
              <span
                key={i}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 219, 21, 0.4)',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#FFDB15',
                }}
              >
                ✓ {c}
              </span>
            ))}
          </div>

          <div style={{ marginTop: '2.5rem' }}>
            <Link to="/products" className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
              BROWSE VERIFIED HARVESTS <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
