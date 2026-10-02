import React, { useState } from 'react';
import { Check, Sparkles, ShoppingBag, Eye, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';

interface ProductShowcaseProps {
  onAddToCart: (productName: string, price: string) => void;
  onOpenTraceabilityWithBatch: (batchCode: string) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  onAddToCart: _onAddToCart,
  onOpenTraceabilityWithBatch,
}) => {
  const products: Product[] = PRODUCTS.slice(0, 4);

  const [selectedProductId, setSelectedProductId] = useState<string>(products[0]?.id || 'sesame-oil');
  const activeProduct = products.find((p) => p.id === selectedProductId) || products[0];

  return (
    <section
      id="products"
      style={{
        position: 'relative',
        backgroundColor: '#FFFFFF',
        padding: '7rem 2rem',
        overflow: 'hidden',
        borderTop: '1px solid rgba(24, 36, 10, 0.08)',
        borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Editorial Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge-organic">
              <Sparkles size={14} color="#4E6E10" />
              CINEMATIC PRODUCT SHOWCASE
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#18240A',
              marginBottom: '1rem',
            }}
          >
            HANDCRAFTED BY NATURE.
          </h2>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#556345',
              maxWidth: '650px',
              margin: '0 auto',
              fontWeight: 400,
            }}
          >
            Each NAMO product is an uncompromised expression of Indian agricultural craftsmanship.
            Select a product below to step into its dedicated natural environment.
          </p>
        </div>

        {/* Product Navigation Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '3.5rem',
          }}
        >
          {products.map((p) => {
            const isSelected = p.id === selectedProductId;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProductId(p.id)}
                style={{
                  padding: '0.85rem 1.8rem',
                  borderRadius: '9999px',
                  background: isSelected ? '#243810' : '#F0F4E8',
                  color: isSelected ? '#FFFFFF' : '#2D3A1B',
                  border: isSelected ? '1px solid #243810' : '1px solid rgba(24, 36, 10, 0.1)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: isSelected ? '0 10px 25px -5px rgba(36, 56, 16, 0.3)' : 'none',
                }}
              >
                {p.name}
              </button>
            );
          })}
        </div>

        {/* Main Editorial Product Scene */}
        <div
          style={{
            borderRadius: '30px',
            overflow: 'hidden',
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(99, 141, 8, 0.2)',
            boxShadow: '0 25px 60px -15px rgba(24, 36, 10, 0.08)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            alignItems: 'stretch',
          }}
        >
          {/* Visual Showcase Side */}
          <div
            style={{
              position: 'relative',
              minHeight: 'clamp(280px, 45vh, 480px)',
              overflow: 'hidden',
              backgroundColor: '#F8F9F3',
            }}
          >
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 1.2s ease',
              }}
            />
            {/* Subtle Vignette */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, transparent 65%, rgba(255, 255, 255, 0.95) 100%), linear-gradient(to top, rgba(24, 36, 10, 0.4) 0%, transparent 40%)',
                pointerEvents: 'none',
              }}
            />

            {/* Origin & Method Badges floating on image */}
            <div
              style={{
                position: 'absolute',
                top: 'clamp(1rem, 3vw, 2rem)',
                left: 'clamp(1rem, 3vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(99, 141, 8, 0.3)',
                  color: '#243810',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                }}
              >
                ORIGIN: {activeProduct.origin}
              </span>
              <span
                style={{
                  background: 'rgba(255, 255, 255, 0.94)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(24, 36, 10, 0.15)',
                  color: '#3D4A2D',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                }}
              >
                METHOD: {activeProduct.method}
              </span>
            </div>
          </div>

          {/* Editorial Content & Details Side */}
          <div
            style={{
              padding: 'clamp(2.5rem, 5vw, 4.5rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#FFFFFF',
            }}
          >
            <div style={{ marginBottom: '0.6rem' }}>
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#4E6E10',
                  fontWeight: 800,
                }}
              >
                {activeProduct.subtitle}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2.2rem, 3.5vw, 3.5rem)',
                fontWeight: 500,
                lineHeight: 1.12,
                color: '#18240A',
                marginBottom: '1rem',
              }}
            >
              {activeProduct.tagline}
            </h3>

            <p
              style={{
                fontSize: '1.15rem',
                color: '#3B5710',
                fontWeight: 500,
                fontStyle: 'italic',
                fontFamily: 'var(--font-serif)',
                marginBottom: '1.2rem',
              }}
            >
              "{activeProduct.subheadline}"
            </p>

            <p
              style={{
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: '#3D4A2D',
                fontWeight: 400,
                marginBottom: '2rem',
              }}
            >
              {activeProduct.description}
            </p>

            {/* Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.75rem',
                marginBottom: '2.5rem',
              }}
            >
              {activeProduct.highlights.map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
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
                  <span style={{ fontSize: '0.84rem', color: '#2D3A1B', fontWeight: 500 }}>{h}</span>
                </div>
              ))}
            </div>

            {/* Pricing, Packaging & Actions */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: '1.8rem',
                borderTop: '1.5px solid rgba(24, 36, 10, 0.08)',
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: '#687656', letterSpacing: '0.08em', display: 'block', fontWeight: 600 }}>
                  {activeProduct.volume} · {activeProduct.categoryLabel}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '6px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: '#c8a84b',
                      letterSpacing: '0.04em',
                    }}
                  >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#c8a84b', display: 'inline-block' }} />
                    COMING SOON
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: '#4E6E10',
                      backgroundColor: '#E6F0D8',
                      fontWeight: 700,
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                    }}
                  >
                    100% Certified Organic
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/919500164786?text=${encodeURIComponent('Hi NAMO Organics, I would like to enquire about ' + activeProduct.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '0.85rem 1.6rem', textDecoration: 'none' }}
                >
                  <ShoppingBag size={16} /> ENQUIRE VIA WHATSAPP
                </a>
                <Link
                  to={`/product/${activeProduct.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    backgroundColor: '#F0F4E8',
                    border: '1px solid rgba(78, 110, 16, 0.3)',
                    color: '#243810',
                    padding: '0.85rem 1.4rem',
                    borderRadius: '9999px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    transition: 'all 0.2s',
                  }}
                >
                  VIEW PRODUCT <ArrowUpRight size={15} />
                </Link>
                <button
                  onClick={() => onOpenTraceabilityWithBatch(activeProduct.batchCode)}
                  className="btn-secondary"
                  style={{ padding: '0.85rem 1.2rem' }}
                >
                  <Eye size={16} /> INSPECT BATCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
