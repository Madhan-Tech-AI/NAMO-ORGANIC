import React, { useState } from 'react';
import { Check, Sparkles, ShoppingBag, Eye, ArrowUpRight, Leaf } from 'lucide-react';
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
  // Curated showcase products: Flagship Vedic pantry items + the 3 new Agri/Livestock innovations
  const showcaseProductIds = [
    'sesame-oil',
    'a2-ghee',
    'organic-honey',
    'jaggery-powder',
    'panchakavya-organic-fertilizer',
    'panchakavya-organic-pesticide',
    'algae-cattle-feed-supplement',
  ];

  const products: Product[] = showcaseProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter((p): p is Product => Boolean(p));

  const [selectedProductId, setSelectedProductId] = useState<string>(products[0]?.id || 'sesame-oil');
  const activeProduct = products.find((p) => p.id === selectedProductId) || products[0];
  const isBottle = activeProduct?.image.includes('Bottle');

  // Dedicated reference for the 3 new agricultural & livestock products
  const newBioProducts = PRODUCTS.filter((p) =>
    ['panchakavya-organic-fertilizer', 'panchakavya-organic-pesticide', 'algae-cattle-feed-supplement'].includes(p.id)
  );

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
              maxWidth: '680px',
              margin: '0 auto',
              fontWeight: 400,
            }}
          >
            From native soil restoration and Panchakavya bio-inputs to pure Vedic pantry staples.
            Select a product below to step into its dedicated natural environment.
          </p>
        </div>

        {/* Product Navigation Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.8rem',
            marginBottom: '3.5rem',
          }}
        >
          {products.map((p) => {
            const isSelected = p.id === selectedProductId;
            const isNewItem = ['panchakavya-organic-fertilizer', 'panchakavya-organic-pesticide', 'algae-cattle-feed-supplement'].includes(p.id);

            return (
              <button
                key={p.id}
                onClick={() => setSelectedProductId(p.id)}
                style={{
                  padding: '0.85rem 1.6rem',
                  borderRadius: '9999px',
                  background: isSelected ? '#243810' : '#F0F4E8',
                  color: isSelected ? '#FFFFFF' : '#2D3A1B',
                  border: isSelected ? '1px solid #243810' : '1px solid rgba(24, 36, 10, 0.12)',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 10px 25px -5px rgba(36, 56, 16, 0.3)' : 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span>{p.shortName || p.name}</span>
                {isNewItem && (
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 800,
                      backgroundColor: isSelected ? '#76B82A' : '#DCE8C7',
                      color: isSelected ? '#18240A' : '#234409',
                      padding: '0.15rem 0.5rem',
                      borderRadius: '9999px',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    NEW
                  </span>
                )}
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
              minHeight: 'clamp(300px, 48vh, 520px)',
              overflow: 'hidden',
              backgroundColor: isBottle ? '#F6F8F0' : '#F8F9F3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={activeProduct.image}
              alt={activeProduct.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: isBottle ? 'contain' : 'cover',
                padding: isBottle ? '2.5rem 1.5rem' : '0',
                display: 'block',
                transition: 'transform 0.8s ease',
              }}
            />
            {/* Subtle Vignette for full photography (not bottles) */}
            {!isBottle && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to right, transparent 65%, rgba(255, 255, 255, 0.95) 100%), linear-gradient(to top, rgba(24, 36, 10, 0.4) 0%, transparent 40%)',
                  pointerEvents: 'none',
                }}
              />
            )}

            {/* Origin & Method Badges floating on image */}
            <div
              style={{
                position: 'absolute',
                top: 'clamp(1rem, 3vw, 2rem)',
                left: 'clamp(1rem, 3vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                zIndex: 2,
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
                ORIGIN: {activeProduct.origin.split(',')[0]}
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
                {activeProduct.categoryLabel}
              </span>
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.2vw, 3.2rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#18240A',
                marginBottom: '1rem',
              }}
            >
              {activeProduct.name}
            </h3>

            <p
              style={{
                fontSize: '1.1rem',
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
              {activeProduct.highlights.slice(0, 4).map((h, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(78, 110, 16, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Check size={12} color="#3B5710" />
                  </div>
                  <span style={{ fontSize: '0.86rem', color: '#2D3A1B', fontWeight: 600 }}>{h}</span>
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
                  {activeProduct.volume} · {activeProduct.availableSizes[0] || 'Standard Pack'}
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginTop: '6px' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
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
                      fontSize: '0.74rem',
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

        {/* ===================================================================
            SPOTLIGHT: 3 NEW SUSTAINABLE BIO-INPUTS & LIVESTOCK CARE PRODUCTS
            =================================================================== */}
        <div style={{ marginTop: '5.5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
              <Leaf size={14} color="#4E6E10" />
              <span
                style={{
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#4E6E10',
                  fontWeight: 800,
                }}
              >
                Vedic Bio-Inputs & Livestock Nutrition
              </span>
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                fontWeight: 500,
                color: '#18240A',
                marginBottom: '0.8rem',
              }}
            >
              Restoring Soil, Crop & Animal Vitality
            </h3>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#556345',
                maxWidth: '680px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}
            >
              NAMO's specialized organic farming inputs and livestock supplements are formulated with traditional Panchakavya and bioactive marine algae to nurture sustainable agricultural ecosystems.
            </p>
          </div>

          {/* 3 Dedicated Product Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {newBioProducts.map((p, idx) => (
              <div
                key={p.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(99, 141, 8, 0.18)',
                  boxShadow: '0 8px 25px -4px rgba(24, 36, 10, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
                className="product-card-hover"
              >
                {/* Packshot Image Header */}
                <div
                  style={{
                    position: 'relative',
                    height: '210px',
                    backgroundColor: '#F6F8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.75rem',
                    borderBottom: '1px solid rgba(24, 36, 10, 0.06)',
                  }}
                >
                  <Link to={`/product/${p.id}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  </Link>

                  {/* Step Number Badge */}
                  <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                    <span
                      style={{
                        backgroundColor: '#243810',
                        color: '#FFFFFF',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '0.3rem 0.65rem',
                        borderRadius: '9999px',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {idx === 0 ? '01 — BIO-FERTILIZER' : idx === 1 ? '02 — BIO-PESTICIDE' : '03 — CATTLE CARE'}
                    </span>
                  </div>

                  {/* Batch Traceability Badge */}
                  <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem' }}>
                    <button
                      onClick={() => onOpenTraceabilityWithBatch(p.batchCode)}
                      style={{
                        backgroundColor: '#FFDB15',
                        border: 'none',
                        color: '#18240A',
                        fontSize: '0.65rem',
                        fontWeight: 900,
                        padding: '0.3rem 0.6rem',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      }}
                    >
                      <Eye size={11} /> BATCH #{p.batchCode.split('-')[1]}
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ marginBottom: '0.35rem' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.1em',
                        color: '#4E6E10',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                      }}
                    >
                      {p.categoryLabel}
                    </span>
                  </div>

                  <Link
                    to={`/product/${p.id}`}
                    title={p.name}
                    style={{
                      textDecoration: 'none',
                      color: '#18240A',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      marginBottom: '0.4rem',
                      lineHeight: 1.3,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: '2.86rem',
                    }}
                  >
                    {p.name}
                  </Link>

                  <p
                    title={p.description}
                    style={{
                      fontSize: '0.82rem',
                      color: '#495738',
                      lineHeight: 1.5,
                      marginBottom: '0.9rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: '2.45rem',
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Key Benefits */}
                  <div style={{ marginBottom: '1rem', backgroundColor: '#F9FAF4', padding: '0.75rem 0.9rem', borderRadius: '12px', border: '1px solid rgba(78, 110, 16, 0.12)' }}>
                    <strong style={{ fontSize: '0.72rem', color: '#243810', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                      Key Benefits:
                    </strong>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                      {p.highlights.slice(0, 3).map((benefit, bIdx) => (
                        <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                          <div
                            style={{
                              width: '14px',
                              height: '14px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(78, 110, 16, 0.18)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Check size={9} color="#2D500C" />
                          </div>
                          <span style={{ fontSize: '0.76rem', color: '#243810', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Row - Pinned with marginTop: auto */}
                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.65rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.74rem', color: '#6B7959', fontWeight: 600 }}>
                        {p.volume}
                      </span>
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          backgroundColor: '#EAF4DC',
                          color: '#2D500C',
                          fontSize: '0.7rem',
                          fontWeight: 800,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '9999px',
                          letterSpacing: '0.03em',
                        }}
                      >
                        <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#5B8C15', display: 'inline-block' }} />
                        COMING SOON
                      </span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: '0.5rem' }}>
                      <Link
                        to={`/product/${p.id}`}
                        style={{
                          height: '36px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.3rem',
                          backgroundColor: '#F0F4E8',
                          color: '#243810',
                          borderRadius: '9999px',
                          textDecoration: 'none',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          border: '1px solid rgba(78, 110, 16, 0.25)',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#E2ECCE';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = '#F0F4E8';
                        }}
                      >
                        VIEW <ArrowUpRight size={13} />
                      </Link>
                      <a
                        href={`https://wa.me/919500164786?text=${encodeURIComponent('Hi NAMO Organics, I would like to enquire about ' + p.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          height: '36px',
                          padding: '0',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem',
                          fontSize: '0.76rem',
                          textDecoration: 'none',
                          width: '100%',
                        }}
                      >
                        <ShoppingBag size={13} /> ENQUIRE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
