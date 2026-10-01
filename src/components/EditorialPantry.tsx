import React from 'react';

interface EditorialPantryProps {
  onAddToCart: (productName: string, price: string) => void;
}

export const EditorialPantry: React.FC<EditorialPantryProps> = ({ onAddToCart }) => {
  return (
    <section
      id="pantry"
      style={{
        position: 'relative',
        backgroundColor: '#F0F4E8',
        padding: '7rem 2rem',
        overflow: 'hidden',
        borderTop: '1px solid rgba(24, 36, 10, 0.08)',
        borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '7rem' }}>
        {/* ===================================================================
            SECTION 11: DALS & PULSES
            =================================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '4.5rem',
            alignItems: 'center',
          }}
        >
          {/* Visual: Overhead Ceramic Bowls */}
          <div
            style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(24, 36, 10, 0.12)',
              border: '1px solid rgba(99, 141, 8, 0.25)',
              backgroundColor: '#FFFFFF',
            }}
            className="editorial-img-container"
          >
            <img
              src="/assets/dals-overhead.jpg"
              alt="Overhead flatlay of organic Indian dals in natural ceramic bowls on dark wooden table"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(24, 36, 10, 0.75) 0%, transparent 40%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.8rem',
                left: '2rem',
                right: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#A8E63A', fontWeight: 800 }}>
                TRADITIONAL PULSE VARIETIES
              </span>
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#243810',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                UNPOLISHED & RAW
              </span>
            </div>
          </div>

          {/* Copy & Details */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <span className="badge-organic">ANCIENT PROTEIN HERITAGE</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: '#18240A',
                marginBottom: '1.5rem',
              }}
            >
              PURE PLANT PROTEIN. <br />
              <span style={{ fontStyle: 'italic', color: '#3B5710', fontWeight: 500 }}>
                NATURALLY SOURCED.
              </span>
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: '#2C3B1C',
                fontWeight: 400,
                marginBottom: '1.2rem',
              }}
            >
              Traditional South Indian kitchen staples sourced from verified organic farms.
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: '#556345',
                fontWeight: 400,
                marginBottom: '2.5rem',
              }}
            >
              Commercial lentils are stripped of their outer bran through high-friction chemical polishing and synthetic oils to create artificial shine. NAMO Dals are completely unpolished, preserving natural dietary fiber, plant-based protein, iron, and rich authentic flavor.
            </p>

            {/* Dal Variety Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              {[
                { name: 'Toor Dal', desc: 'Solar-dried split pigeon peas', tag: '100% Unpolished' },
                { name: 'Moong Dal', desc: 'Whole green & yellow split', tag: 'Chemical-Free' },
                { name: 'Urad Dal', desc: 'Heirloom black & skinned white', tag: 'Farm Traceable' },
              ].map((dal, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(99, 141, 8, 0.25)',
                    borderRadius: '16px',
                    padding: '1.2rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 15px rgba(24, 36, 10, 0.04)',
                  }}
                >
                  <h4 style={{ color: '#18240A', fontSize: '1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{dal.name}</h4>
                  <p style={{ fontSize: '0.72rem', color: '#4E6E10', fontWeight: 600, marginBottom: '0.6rem' }}>{dal.desc}</p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#c8a84b', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.6rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', backgroundColor: '#FFF9E6' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c8a84b' }} />
                    COMING SOON
                  </span>
                  <div>
                    <a
                      href={`https://wa.me/919500164786?text=${encodeURIComponent('Hi NAMO Organics, I would like to enquire about Organic ' + dal.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        background: '#243810',
                        color: '#FFFFFF',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                      }}
                    >
                      + ENQUIRE
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ===================================================================
            SECTION 12: NUTS & DRY FRUITS
            =================================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '4.5rem',
            alignItems: 'center',
          }}
        >
          {/* Copy & Details */}
          <div style={{ order: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.2rem' }}>
              <span className="badge-organic">PRISTINE MACRO NOURISHMENT</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                color: '#18240A',
                marginBottom: '1.5rem',
              }}
            >
              SNACK WITHOUT THE GUILT. <br />
              <span style={{ fontStyle: 'italic', color: '#3B5710', fontWeight: 500 }}>
                NOURISH WITHOUT SHORTCUTS.
              </span>
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: 1.7,
                color: '#2C3B1C',
                fontWeight: 400,
                marginBottom: '1.2rem',
              }}
            >
              Sun-ripened tree nuts hand-sorted from regenerative agroforests.
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: '#556345',
                fontWeight: 400,
                marginBottom: '2.5rem',
              }}
            >
              No sulfur bleaching, no sodium nitrite coatings, and zero synthetic glazes. Just raw, crunchy, cold-shelled kernels packed with heart-healthy monounsaturated fats, dietary zinc, and cognitive vitamin E.
            </p>

            {/* Nut Variety Cards */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}
            >
              {[
                { name: 'Kashmiri Almonds', note: 'High natural oil content', tag: 'Naturally Sourced' },
                { name: 'Malabar Cashews', note: 'No chemical washing', tag: 'Chemical-Free' },
                { name: 'Mountain Walnuts', note: 'Rich in Omega-3s', tag: 'Raw & Natural' },
              ].map((nut, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid rgba(99, 141, 8, 0.25)',
                    borderRadius: '16px',
                    padding: '1.2rem',
                    textAlign: 'center',
                    boxShadow: '0 4px 15px rgba(24, 36, 10, 0.04)',
                  }}
                >
                  <h4 style={{ color: '#18240A', fontSize: '1rem', fontWeight: 700, marginBottom: '0.3rem' }}>{nut.name}</h4>
                  <p style={{ fontSize: '0.72rem', color: '#4E6E10', fontWeight: 600, marginBottom: '0.6rem' }}>{nut.note}</p>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#c8a84b', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', marginBottom: '0.6rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', backgroundColor: '#FFF9E6' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c8a84b' }} />
                    COMING SOON
                  </span>
                  <div>
                    <a
                      href={`https://wa.me/919500164786?text=${encodeURIComponent('Hi NAMO Organics, I would like to enquire about Organic ' + nut.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        background: '#243810',
                        color: '#FFFFFF',
                        padding: '0.4rem 0.9rem',
                        borderRadius: '9999px',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                      }}
                    >
                      + ENQUIRE
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual: Macro Nuts Shot */}
          <div
            style={{
              order: 2,
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(24, 36, 10, 0.12)',
              border: '1px solid rgba(99, 141, 8, 0.25)',
              backgroundColor: '#FFFFFF',
            }}
            className="editorial-img-container"
          >
            <img
              src="/assets/nuts-macro.jpg"
              alt="Macro editorial shot of raw organic almonds, cashews, and walnuts on dark slate"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(24, 36, 10, 0.75) 0%, transparent 40%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.8rem',
                left: '2rem',
                right: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: '#A8E63A', fontWeight: 800 }}>
                RAW & UNPASTEURIZED
              </span>
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.95)',
                  padding: '0.4rem 0.9rem',
                  borderRadius: '9999px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#243810',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                100% NON-IRRADIATED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
