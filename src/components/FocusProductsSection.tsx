import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export const FocusProductsSection: React.FC = () => {
  return (
    <section
      id="products"
      style={{
        padding: '6rem 2rem',
        backgroundColor: '#F8F9F3',
        position: 'relative',
        borderTop: '1px solid rgba(24, 36, 10, 0.06)',
      }}
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Section Header */}
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
            <Sparkles size={14} color="#67A020" />
            <span>07 — OUR FOCUS PRODUCTS</span>
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
            Natural Solutions for Sustainable Agriculture
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
            NAMO presents three flagship natural agricultural inputs engineered to revitalize soil,
            shield crops organically, and fortify livestock health.
          </p>
        </div>

        {/* 3 Focus Products Showcase (Even Heights & Compact Proportions) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '3.5rem',
            alignItems: 'stretch',
          }}
        >
          {/* Product 01: Panchakavya Fertilizer */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1.5px solid rgba(103, 160, 32, 0.22)',
              boxShadow: '0 8px 30px rgba(24, 36, 10, 0.05)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.3s ease',
            }}
            className="focus-product-card"
          >
            <div>
              {/* Product Visual Container */}
              <div
                style={{
                  backgroundColor: '#F0F4E8',
                  height: '220px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '1rem',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#293B14',
                    backgroundColor: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    zIndex: 2,
                  }}
                >
                  01 — BIO FERTILIZER
                </span>

                <img
                  src="/assets/namo-panchakavya-transparent-cropped.png"
                  alt="NAMO Organic Fertilizers Based on Panchakavya"
                  style={{
                    height: '190px',
                    maxHeight: '92%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 20px rgba(24, 36, 10, 0.18))',
                    transition: 'transform 0.3s ease',
                  }}
                  className="product-card-img"
                />
              </div>

              {/* Product Content Body */}
              <div style={{ padding: '1.8rem 1.8rem 1rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    letterSpacing: '-0.015em',
                    color: '#18240A',
                    lineHeight: 1.35,
                    marginBottom: '0.65rem',
                    minHeight: '3.4rem',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  NAMO Organic Fertilizers Based on Panchakavya
                </h3>

                <p style={{ fontFamily: 'var(--font-body, "Inter", sans-serif)', fontSize: '0.92rem', color: '#4A583A', lineHeight: 1.6, marginBottom: '1.2rem', minHeight: '3rem' }}>
                  Natural agricultural inputs designed to support healthy plant growth and sustainable
                  farming practices.
                </p>

                {/* Ingredients Pill Tag */}
                <div style={{ marginBottom: '1.2rem', minHeight: '3.8rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4E6E10', display: 'block', marginBottom: '0.4rem' }}>
                    5 Cow-Derived Ingredients:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {['Milk', 'Urine', 'Dung', 'Curd', 'Ghee'].map((ing) => (
                      <span
                        key={ing}
                        style={{
                          backgroundColor: '#F8F9F3',
                          border: '1px solid #D6E3C0',
                          borderRadius: '6px',
                          padding: '0.2rem 0.55rem',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: '#293B14',
                        }}
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Focus Checklist */}
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {['Improves soil biological health', 'Enhances root & plant growth', 'Supports sustainable farming'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#293B14', fontWeight: 600 }}>
                      <Check size={14} color="#67A020" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ padding: '0 1.8rem 1.6rem', marginTop: '1.2rem' }}>
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(24, 36, 10, 0.08)' }}>
                <a
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#1b4d35',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                  }}
                >
                  <span>Inquire Specifications & Dosage</span>
                  <ArrowRight size={14} color="#67A020" />
                </a>
              </div>
            </div>
          </div>

          {/* Product 02: Panchakavya Pesticides */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1.5px solid rgba(103, 160, 32, 0.22)',
              boxShadow: '0 8px 30px rgba(24, 36, 10, 0.05)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.3s ease',
            }}
            className="focus-product-card"
          >
            <div>
              {/* Product Visual Container */}
              <div
                style={{
                  backgroundColor: '#F0F4E8',
                  height: '220px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '1rem',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#293B14',
                    backgroundColor: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    zIndex: 2,
                  }}
                >
                  02 — BIO PESTICIDE
                </span>

                <img
                  src="/assets/namo-panchakavya-transparent-cropped.png"
                  alt="NAMO Organic Pesticides Based on Panchakavya"
                  style={{
                    height: '190px',
                    maxHeight: '92%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 20px rgba(24, 36, 10, 0.18))',
                    transition: 'transform 0.3s ease',
                  }}
                  className="product-card-img"
                />
              </div>

              {/* Product Content Body */}
              <div style={{ padding: '1.8rem 1.8rem 1rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    letterSpacing: '-0.015em',
                    color: '#18240A',
                    lineHeight: 1.35,
                    marginBottom: '0.65rem',
                    minHeight: '3.4rem',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  NAMO Organic Pesticides Based on Panchakavya
                </h3>

                <p style={{ fontFamily: 'var(--font-body, "Inter", sans-serif)', fontSize: '0.92rem', color: '#4A583A', lineHeight: 1.6, marginBottom: '1.2rem', minHeight: '3rem' }}>
                  Natural crop protection solutions designed to protect plants from pests while maintaining
                  a healthy and balanced ecosystem.
                </p>

                {/* Formulation Pill Tag */}
                <div style={{ marginBottom: '1.2rem', minHeight: '3.8rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4E6E10', display: 'block', marginBottom: '0.4rem' }}>
                    Eco-Friendly Crop Shield:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {['Zero Chemical Residue', 'Pollinator Safe', 'Target Defense'].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: '#F8F9F3',
                          border: '1px solid #D6E3C0',
                          borderRadius: '6px',
                          padding: '0.2rem 0.55rem',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: '#293B14',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Focus Checklist */}
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {['Natural pest protection', 'Healthier crop vigor', 'Eco-friendly sustainable farming'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#293B14', fontWeight: 600 }}>
                      <Check size={14} color="#67A020" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ padding: '0 1.8rem 1.6rem', marginTop: '1.2rem' }}>
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(24, 36, 10, 0.08)' }}>
                <a
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#1b4d35',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                  }}
                >
                  <span>Inquire Specifications & Application</span>
                  <ArrowRight size={14} color="#67A020" />
                </a>
              </div>
            </div>
          </div>

          {/* Product 03: Algae-Based Feed Supplement for Cattle */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              border: '1.5px solid rgba(103, 160, 32, 0.22)',
              boxShadow: '0 8px 30px rgba(24, 36, 10, 0.05)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              transition: 'all 0.3s ease',
            }}
            className="focus-product-card"
          >
            <div>
              {/* Product Visual Container */}
              <div
                style={{
                  backgroundColor: '#F0F4E8',
                  height: '220px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  padding: '1rem',
                  overflow: 'hidden',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#293B14',
                    backgroundColor: '#FFFFFF',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    zIndex: 2,
                  }}
                >
                  03 — CATTLE SUPPLEMENT
                </span>

                <img
                  src="/assets/namo-algae-extract-transparent-cropped.png"
                  alt="Algae-Based Feed Supplement for Cattle"
                  style={{
                    height: '190px',
                    maxHeight: '92%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 20px rgba(24, 36, 10, 0.18))',
                    transition: 'transform 0.3s ease',
                  }}
                  className="product-card-img"
                />
              </div>

              {/* Product Content Body */}
              <div style={{ padding: '1.8rem 1.8rem 1rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
                    fontSize: '1.3rem',
                    fontWeight: 800,
                    letterSpacing: '-0.015em',
                    color: '#18240A',
                    lineHeight: 1.35,
                    marginBottom: '0.65rem',
                    minHeight: '3.4rem',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  Algae-Based Feed Supplement for Cattle
                </h3>

                <p style={{ fontFamily: 'var(--font-body, "Inter", sans-serif)', fontSize: '0.92rem', color: '#4A583A', lineHeight: 1.6, marginBottom: '1.2rem', minHeight: '3rem' }}>
                  Natural nutritional supplement supporting animal health, improved productivity, and
                  overall wellness in dairy cattle.
                </p>

                {/* Formulation Pill Tag */}
                <div style={{ marginBottom: '1.2rem', minHeight: '3.8rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4E6E10', display: 'block', marginBottom: '0.4rem' }}>
                    Natural Dairy Nutrition:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {['Bioactive Minerals', 'Fatty Acids', 'Natural Protein'].map((tag) => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: '#F8F9F3',
                          border: '1px solid #D6E3C0',
                          borderRadius: '6px',
                          padding: '0.2rem 0.55rem',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: '#293B14',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Focus Checklist */}
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {['Supports cattle health', 'Improves dairy productivity', 'Wholesome natural nutrition'].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: '#293B14', fontWeight: 600 }}>
                      <Check size={14} color="#67A020" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ padding: '0 1.8rem 1.6rem', marginTop: '1.2rem' }}>
              <div style={{ paddingTop: '1rem', borderTop: '1px solid rgba(24, 36, 10, 0.08)' }}>
                <a
                  href="/contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#1b4d35',
                    fontSize: '0.84rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                  }}
                >
                  <span>Inquire Cattle Feed Specifications</span>
                  <ArrowRight size={14} color="#67A020" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Product Catalog Banner */}
        <div
          style={{
            backgroundColor: '#1b4d35',
            color: '#FFFFFF',
            borderRadius: '20px',
            padding: '2.5rem 2.8rem',
            textAlign: 'center',
            boxShadow: '0 14px 35px rgba(27, 77, 53, 0.2)',
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
              fontSize: '1.65rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              marginBottom: '0.6rem',
            }}
          >
            Looking for Product Specifications & Bulk Technical Dossiers?
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '680px',
              margin: '0 auto 1.6rem auto',
              lineHeight: 1.6,
            }}
          >
            We supply high-grade organic fertilizers, bio-pesticides, and cattle feed supplements for farmers,
            FPOs, and regional distribution partners.
          </p>

          <a
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#FFDB15',
              color: '#18240A',
              padding: '0.8rem 2.2rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 900,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(255, 219, 21, 0.3)',
            }}
          >
            <span>Request Technical Specification</span>
            <ArrowRight size={15} color="#18240A" />
          </a>
        </div>
      </div>

      <style>{`
        .focus-product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 35px rgba(24, 36, 10, 0.1);
          border-color: #67A020;
        }
        .focus-product-card:hover .product-card-img {
          transform: scale(1.06) translateY(-4px);
        }
      `}</style>
    </section>
  );
};
