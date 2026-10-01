import React from 'react';
import { ShieldCheck, CheckCircle2, XCircle, FileText, ArrowRight } from 'lucide-react';

interface QualityPromiseProps {
  onOpenTraceability: () => void;
}

export const QualityPromise: React.FC<QualityPromiseProps> = ({ onOpenTraceability }) => {
  const promises = [
    { title: 'No unnecessary additives.', desc: 'Zero synthetic emulsifiers, stabilizing gums, or artificial color pigments.' },
    { title: 'No unnecessary preservatives.', desc: 'Free of chemical parabens, sodium benzoates, potassium sorbates, or BHA/BHT.' },
    { title: 'No artificial shortcuts.', desc: 'No hexane oil separation, no maida blending, no high-heat rapid refining.' },
    { title: 'Responsible sourcing.', desc: 'Direct partnership with verified organic soil clusters across indigenous agro-zones.' },
    { title: 'Transparent origins.', desc: 'Every jar and pouch traceable to GPS farm coordinates and harvest batches.' },
    { title: 'Traditional processing.', desc: 'Vaagai wood cold pressing, Vedic wooden bilona churning, slow stone chakki grinding.' },
    { title: 'Quality-focused production.', desc: 'Third-party NABL accredited laboratory verified for zero heavy metals and pesticides.' },
  ];

  return (
    <section
      id="promise"
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        color: '#18240A',
        padding: '8rem 2rem',
        overflow: 'hidden',
        borderTop: '1px solid rgba(24, 36, 10, 0.08)',
        borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Editorial Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem',
              background: '#F0F4E8',
              padding: '0.45rem 1.2rem',
              borderRadius: '9999px',
              border: '1px solid rgba(78, 110, 16, 0.25)',
            }}
          >
            <ShieldCheck size={16} color="#4E6E10" />
            <span
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#4E6E10',
                fontWeight: 800,
              }}
            >
              UNCOMPROMISED PURITY PLEDGE
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.6rem, 5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.12,
              color: '#18240A',
              marginBottom: '1.2rem',
            }}
          >
            WHAT GOES INTO NAMO MATTERS.
          </h2>

          <p
            style={{
              fontSize: '1.2rem',
              color: '#556345',
              maxWidth: '680px',
              margin: '0 auto',
              fontWeight: 400,
              lineHeight: 1.6,
            }}
          >
            Our standards aren’t marketing slogans. They are documented, tested laboratory facts that dictate every single ingredient we bottle.
          </p>
        </div>

        {/* Comparison / Promise Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            marginBottom: '4.5rem',
          }}
        >
          {/* What We Reject */}
          <div
            style={{
              background: '#F8F9F3',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              boxShadow: '0 15px 35px -10px rgba(24, 36, 10, 0.04)',
              border: '1px solid rgba(24, 36, 10, 0.1)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(239, 68, 68, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <XCircle size={22} color="#DC2626" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#18240A' }}>What Never Enters</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {promises.slice(0, 3).map((item, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid rgba(24, 36, 10, 0.08)', paddingBottom: '1.2rem' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#18240A', marginBottom: '0.3rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#556345', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Guarantee */}
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '3rem 2.5rem',
              boxShadow: '0 25px 45px -15px rgba(78, 110, 16, 0.12)',
              border: '2px solid rgba(78, 110, 16, 0.4)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: 'rgba(78, 110, 16, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircle2 size={22} color="#3B5710" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#18240A' }}>What We Guarantee</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {promises.slice(3).map((item, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid rgba(24, 36, 10, 0.08)', paddingBottom: '1.2rem' }}>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#18240A', marginBottom: '0.3rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#556345', lineHeight: 1.55 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NABL Lab Purity Verification Certificate Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, #243810 0%, #18240A 100%)',
            borderRadius: '24px',
            padding: '2.5rem 3rem',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '2rem',
            boxShadow: '0 20px 45px -10px rgba(24, 36, 10, 0.25)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'rgba(168, 230, 58, 0.2)',
                border: '1px solid rgba(168, 230, 58, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <FileText size={30} color="#A8E63A" />
            </div>
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '0.2rem' }}>
                Inspect Real NABL Laboratory Test Reports
              </h4>
              <p style={{ fontSize: '0.88rem', color: '#CAD6BC' }}>
                Every single batch is tested for 180+ pesticide residues, heavy metals, and free fatty acid oxidation.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenTraceability}
            style={{
              padding: '0.85rem 1.8rem',
              fontSize: '0.8rem',
              background: '#A8E63A',
              color: '#18240A',
              border: 'none',
              borderRadius: '9999px',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            VERIFY YOUR BATCH NOW <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};
