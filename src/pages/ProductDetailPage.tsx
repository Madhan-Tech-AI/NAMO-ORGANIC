import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  ShoppingBag,
  Eye,
  Check,
  Star,
  ArrowLeft,
  Truck,
  Award,
  ChevronRight,
  MessageCircle,
} from 'lucide-react';
import { getProductById, PRODUCTS } from '../data/products';
import type { Product } from '../data/products';

interface ProductDetailPageProps {
  onAddToCart: (productName: string, price: string) => void;
  onOpenTraceabilityWithBatch: (batchCode: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  onAddToCart,
  onOpenTraceabilityWithBatch,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product: Product | undefined = getProductById(id || '');

  const [quantity, setQuantity] = useState(1);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'nutrition' | 'lab' | 'reviews'>('details');

  if (!product) {
    return (
      <div style={{ maxWidth: '1200px', margin: '6rem auto', padding: '0 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#18240A' }}>Product Not Found</h2>
        <p style={{ color: '#556345', marginBottom: '2rem' }}>
          The organic product you are looking for might have been moved or is out of season.
        </p>
        <Link to="/products" className="btn-primary">
          BROWSE ALL PRODUCTS
        </Link>
      </div>
    );
  }

  const selectedSize = product.availableSizes[selectedSizeIndex] || product.volume;

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(`${product.name} (${selectedSize})`, product.price);
    }
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div style={{ backgroundColor: '#F8F9F3', minHeight: '100vh', paddingBottom: '7rem' }}>
      {/* Breadcrumb Navigation */}
      <div
        style={{
          borderBottom: '1px solid rgba(24, 36, 10, 0.06)',
          backgroundColor: '#FFFFFF',
          padding: '0.9rem clamp(1rem, 3vw, 2rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            fontSize: '0.82rem',
            color: '#6B7959',
            flexWrap: 'wrap',
          }}
        >
          <Link to="/" style={{ color: '#6B7959', textDecoration: 'none' }}>
            Home
          </Link>
          <ChevronRight size={14} />
          <Link to="/products" style={{ color: '#6B7959', textDecoration: 'none' }}>
            Products
          </Link>
          <ChevronRight size={14} />
          <span style={{ color: '#18240A', fontWeight: 700 }}>{product.shortName}</span>
        </div>
      </div>

      <div style={{ maxWidth: '1440px', margin: '2rem auto 0', padding: '0 clamp(1rem, 3vw, 2rem)' }}>
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            background: 'none',
            border: 'none',
            color: '#4E6E10',
            fontWeight: 700,
            fontSize: '0.84rem',
            cursor: 'pointer',
            marginBottom: '1.5rem',
          }}
        >
          <ArrowLeft size={16} /> BACK TO HARVESTS
        </button>

        {/* Main Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: 'clamp(1.2rem, 3.5vw, 3.5rem)',
            boxShadow: '0 15px 45px -10px rgba(24, 36, 10, 0.08)',
            border: '1px solid rgba(99, 141, 8, 0.2)',
          }}
        >
          {/* Left Column: Product Photography & Badges */}
          <div>
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                backgroundColor: '#F0F4E8',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.06)',
                aspectRatio: '1 / 1',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(24, 36, 10, 0.45) 0%, transparent 40%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Badges Over Image */}
              <div style={{ position: 'absolute', top: '1.2rem', left: '1.2rem', display: 'flex', gap: '0.5rem' }}>
                <span
                  style={{
                    backgroundColor: '#FFDB15',
                    color: '#18240A',
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    letterSpacing: '0.08em',
                    padding: '0.35rem 0.8rem',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                  }}
                >
                  100% ORGANIC
                </span>
                <span
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    color: '#243810',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '0.35rem 0.8rem',
                    borderRadius: '9999px',
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  BATCH: {product.batchCode}
                </span>
              </div>
            </div>

            {/* Quick Guarantees Under Photo */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: '1.5rem',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F8F9F3',
                  padding: '1rem 0.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(24, 36, 10, 0.06)',
                }}
              >
                <Award size={20} color="#4E6E10" style={{ margin: '0 auto 0.4rem' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 800, display: 'block', color: '#18240A' }}>
                  CERTIFIED
                </span>
                <span style={{ fontSize: '0.65rem', color: '#6B7959' }}>NPOP & Jaivik</span>
              </div>

              <div
                style={{
                  backgroundColor: '#F8F9F3',
                  padding: '1rem 0.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(24, 36, 10, 0.06)',
                }}
              >
                <Truck size={20} color="#4E6E10" style={{ margin: '0 auto 0.4rem' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 800, display: 'block', color: '#18240A' }}>
                  FARM FRESH
                </span>
                <span style={{ fontSize: '0.65rem', color: '#6B7959' }}>Shipped in 24h</span>
              </div>

              <div
                style={{
                  backgroundColor: '#F8F9F3',
                  padding: '1rem 0.5rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(24, 36, 10, 0.06)',
                }}
              >
                <ShieldCheck size={20} color="#4E6E10" style={{ margin: '0 auto 0.4rem' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 800, display: 'block', color: '#18240A' }}>
                  100% PURE
                </span>
                <span style={{ fontSize: '0.65rem', color: '#6B7959' }}>Zero Additives</span>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Method, Price, Options, Add To Cart */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.6rem' }}>
              <span className="badge-organic">{product.categoryLabel.toUpperCase()}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#E5A510' }}>
                <Star size={15} fill="#E5A510" />
                <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#18240A' }}>
                  {product.rating}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#6B7959' }}>
                  ({product.reviewCount} customer reviews)
                </span>
              </div>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
                fontWeight: 500,
                lineHeight: 1.15,
                color: '#18240A',
                marginBottom: '0.6rem',
              }}
            >
              {product.name}
            </h1>

            <p style={{ fontSize: '1rem', color: '#4E6E10', fontWeight: 600, marginBottom: '1.2rem' }}>
              {product.subtitle}
            </p>

            <p style={{ fontSize: '0.96rem', lineHeight: 1.7, color: '#3D4A2D', marginBottom: '1.8rem' }}>
              {product.description}
            </p>

            {/* Status & Availability Box */}
            <div
              style={{
                backgroundColor: '#F8F9F3',
                padding: '1.4rem 1.6rem',
                borderRadius: '16px',
                border: '1px solid rgba(24, 36, 10, 0.08)',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.8rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      backgroundColor: '#EAF4DC',
                      color: '#2D500C',
                      fontSize: '0.92rem',
                      fontWeight: 800,
                      letterSpacing: '0.04em',
                      padding: '0.45rem 1rem',
                      borderRadius: '9999px',
                      textTransform: 'uppercase',
                    }}
                  >
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#5B8C15', display: 'inline-block' }} />
                    Coming Soon
                  </span>
                  <span
                    style={{
                      backgroundColor: '#F0F4E8',
                      color: '#4E6E10',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      padding: '0.4rem 0.85rem',
                      borderRadius: '9999px',
                    }}
                  >
                    100% Certified Organic
                  </span>
                </div>
                <a
                  href={`https://wa.me/919500164786?text=${encodeURIComponent(`Hi NAMO Organic, I would like to enquire about ${product.name} (Batch: ${product.batchCode}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    color: '#128C7E',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.86rem',
                  }}
                >
                  <MessageCircle size={17} /> Direct Farm WhatsApp Enquiry
                </a>
              </div>
              <span style={{ fontSize: '0.82rem', color: '#566645', display: 'block', marginTop: '0.75rem', lineHeight: 1.5 }}>
                Online ordering launching soon — enquire via WhatsApp for direct home deliveries, bulk orders & institutional supply.
              </span>
            </div>

            {/* Size / Volume Selection */}
            {product.availableSizes && product.availableSizes.length > 1 && (
              <div style={{ marginBottom: '1.8rem' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                    color: '#18240A',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.6rem',
                  }}
                >
                  Select Package Size:
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {product.availableSizes.map((size, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSizeIndex(idx)}
                      style={{
                        padding: '0.6rem 1.2rem',
                        borderRadius: '9999px',
                        border: selectedSizeIndex === idx ? '2px solid #243810' : '1px solid rgba(24, 36, 10, 0.15)',
                        backgroundColor: selectedSizeIndex === idx ? '#243810' : '#FFFFFF',
                        color: selectedSizeIndex === idx ? '#FFFFFF' : '#18240A',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector + Add To Cart Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {/* Quantity */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '1.5px solid rgba(24, 36, 10, 0.2)',
                  borderRadius: '9999px',
                  backgroundColor: '#FFFFFF',
                  padding: '0.2rem',
                }}
              >
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: 'none',
                    background: '#F0F4E8',
                    color: '#18240A',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    minWidth: '40px',
                    textAlign: 'center',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1.05rem',
                    color: '#18240A',
                  }}
                >
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: 'none',
                    background: '#F0F4E8',
                    color: '#18240A',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  +
                </button>
              </div>

              {/* Add To Cart */}
              <button
                onClick={handleAdd}
                className="btn-primary"
                style={{
                  padding: '1rem 1.6rem',
                  fontSize: '0.9rem',
                }}
              >
                <ShoppingBag size={18} />
                {addedSuccess ? 'ADDED TO BASKET! ✓' : 'ADD TO BASKET'}
              </button>

              {/* Direct WhatsApp Enquiry */}
              <a
                href={`https://wa.me/919500164786?text=${encodeURIComponent(`Hi NAMO Organic, I would like to order/enquire about ${product.name} (Qty: ${quantity}, Package: ${product.availableSizes[selectedSizeIndex] || 'Standard'}, Batch: ${product.batchCode}).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  padding: '1rem 1.6rem',
                  borderRadius: '9999px',
                  backgroundColor: '#25D366',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.86rem',
                  textDecoration: 'none',
                  letterSpacing: '0.03em',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                }}
              >
                <MessageCircle size={18} />
                WHATSAPP ORDER
              </a>

              {/* Inspect Batch Traceability */}
              <button
                onClick={() => onOpenTraceabilityWithBatch(product.batchCode)}
                className="btn-secondary"
                style={{
                  padding: '1rem 1.4rem',
                  fontSize: '0.85rem',
                }}
                title="Verify farm harvest coordinates and purity certificate"
              >
                <Eye size={17} /> INSPECT BATCH
              </button>
            </div>

            {/* Farm Origin & Method Info Box */}
            <div
              style={{
                borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                paddingTop: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                fontSize: '0.84rem',
              }}
            >
              <div>
                <span style={{ color: '#6B7959', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Farm Origin
                </span>
                <strong style={{ color: '#18240A' }}>{product.origin}</strong>
              </div>
              <div>
                <span style={{ color: '#6B7959', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Processing Method
                </span>
                <strong style={{ color: '#18240A' }}>{product.method}</strong>
              </div>
              <div>
                <span style={{ color: '#6B7959', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Farmer Collective
                </span>
                <strong style={{ color: '#18240A' }}>{product.farmerGroup}</strong>
              </div>
              <div>
                <span style={{ color: '#6B7959', display: 'block', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Batch Shelf Life
                </span>
                <strong style={{ color: '#18240A' }}>{product.shelfLife}</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Story, Nutrition, Lab Tests, Reviews */}
        <div style={{ marginTop: '4rem' }}>
          <div
            style={{
              display: 'flex',
              borderBottom: '2px solid rgba(24, 36, 10, 0.08)',
              gap: '2rem',
              overflowX: 'auto',
            }}
          >
            {[
              { id: 'details', label: 'THE HARVEST STORY' },
              { id: 'nutrition', label: 'NUTRITIONAL FACTS' },
              { id: 'lab', label: 'LAB PURITY TESTS' },
              { id: 'reviews', label: `VERIFIED REVIEWS (${product.reviewCount})` },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '1rem 0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: activeTab === tab.id ? 800 : 600,
                  letterSpacing: '0.1em',
                  color: activeTab === tab.id ? '#243810' : '#6B7959',
                  borderBottom: activeTab === tab.id ? '3px solid #243810' : '3px solid transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '0 0 20px 20px',
              padding: '2.5rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)',
            }}
          >
            {activeTab === 'details' && (
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    color: '#18240A',
                    marginBottom: '1rem',
                  }}
                >
                  Ancestral Agricultural Stewardship
                </h3>
                <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#3D4A2D', marginBottom: '2rem' }}>
                  {product.story}
                </p>

                <h4 style={{ fontSize: '0.9rem', letterSpacing: '0.12em', color: '#4E6E10', textTransform: 'uppercase', marginBottom: '1rem' }}>
                  Purity Highlights:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.8rem' }}>
                  {product.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(78, 110, 16, 0.15)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Check size={12} color="#4E6E10" />
                      </div>
                      <span style={{ fontSize: '0.9rem', color: '#2D3A1B' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'nutrition' && (
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    color: '#18240A',
                    marginBottom: '1rem',
                  }}
                >
                  Verified Macro Nutrient Profile
                </h3>
                <p style={{ color: '#556345', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
                  Values verified through certified third-party spectrophotometric testing per {product.nutrition.servingSize}.
                </p>
                <div style={{ maxWidth: '520px', border: '1px solid rgba(24, 36, 10, 0.12)', borderRadius: '12px', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 1.2rem', backgroundColor: '#F0F4E8', fontWeight: 800, fontSize: '0.9rem' }}>
                    <span>Nutrient</span>
                    <span>Quantity</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 1.2rem', borderBottom: '1px solid rgba(24, 36, 10, 0.06)' }}>
                    <span>Energy</span>
                    <strong>{product.nutrition.energy}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 1.2rem', borderBottom: '1px solid rgba(24, 36, 10, 0.06)' }}>
                    <span>Plant Protein</span>
                    <strong>{product.nutrition.protein}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 1.2rem', borderBottom: '1px solid rgba(24, 36, 10, 0.06)' }}>
                    <span>Carbohydrates</span>
                    <strong>{product.nutrition.carbs}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 1.2rem', borderBottom: '1px solid rgba(24, 36, 10, 0.06)' }}>
                    <span>Total Healthy Fats</span>
                    <strong>{product.nutrition.fat}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.8rem 1.2rem', backgroundColor: '#F8F9F3' }}>
                    <span>Key Micronutrient</span>
                    <strong style={{ color: '#4E6E10' }}>{product.nutrition.keyNutrient}</strong>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lab' && (
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.8rem',
                    color: '#18240A',
                    marginBottom: '1rem',
                  }}
                >
                  Third-Party Certified Lab Screening
                </h3>
                <p style={{ color: '#556345', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                  Batch #{product.batchCode} has undergone comprehensive multi-residue pesticide and solvent screens.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                  {product.purityTests.map((t, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '1.2rem',
                        backgroundColor: '#F8F9F3',
                        borderRadius: '12px',
                        border: '1px solid rgba(78, 110, 16, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                      }}
                    >
                      <ShieldCheck size={20} color="#4E6E10" />
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: '#18240A' }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <button
                    onClick={() => onOpenTraceabilityWithBatch(product.batchCode)}
                    className="btn-primary"
                    style={{ padding: '0.75rem 1.5rem', fontSize: '0.82rem' }}
                  >
                    VIEW COMPLETE BATCH LAB CERTIFICATE
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '3rem', fontWeight: 900, color: '#18240A', lineHeight: 1, display: 'block' }}>
                      {product.rating}
                    </span>
                    <div style={{ display: 'flex', color: '#E5A510', justifyContent: 'center', marginTop: '4px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="#E5A510" />
                      ))}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: '#6B7959', marginTop: '4px', display: 'block' }}>
                      Based on {product.reviewCount} reviews
                    </span>
                  </div>
                  <div style={{ borderLeft: '1px solid rgba(24, 36, 10, 0.1)', paddingLeft: '1.5rem', flex: 1 }}>
                    <p style={{ fontSize: '0.92rem', color: '#2C3B1C', fontWeight: 500 }}>
                      100% of reviews come from verified buyers who purchased this batch directly from NAMO Organic.
                    </p>
                  </div>
                </div>

                {/* Sample Verified Reviews */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  {[
                    {
                      author: 'Kavitha R., Chennai',
                      rating: 5,
                      date: '2 weeks ago',
                      comment:
                        'The aroma is completely unmatched! You can tell immediately that this is genuine cold press without any artificial refinement. My mother was so delighted to taste the authentic flavor of her childhood.',
                    },
                    {
                      author: 'Vikram Mehta, Bengaluru',
                      rating: 5,
                      date: '1 month ago',
                      comment:
                        'Tested the QR batch code on the bottle and it showed the exact harvest village and cold-pressing temperature. Incredible transparency. NAMO has set the gold standard in organic food.',
                    },
                    {
                      author: 'Dr. Aruna Sengupta, Hyderabad',
                      rating: 5,
                      date: 'February 2026',
                      comment:
                        'As a clinical nutritionist, I look for hexane-free, non-deodorized pure products. The lab test reports attached to the batch give complete peace of mind. Highest recommendation.',
                    },
                  ].map((rev, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '1.2rem',
                        borderRadius: '12px',
                        backgroundColor: '#F8F9F3',
                        border: '1px solid rgba(24, 36, 10, 0.06)',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <div>
                          <strong style={{ color: '#18240A', fontSize: '0.92rem' }}>{rev.author}</strong>
                          <span style={{ fontSize: '0.72rem', color: '#4E6E10', marginLeft: '0.6rem', fontWeight: 700 }}>
                            ✓ Verified Farm Customer
                          </span>
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#8A9978' }}>{rev.date}</span>
                      </div>
                      <div style={{ display: 'flex', color: '#E5A510', marginBottom: '0.5rem' }}>
                        {[...Array(rev.rating)].map((_, idx) => (
                          <Star key={idx} size={13} fill="#E5A510" />
                        ))}
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#3D4A2D', lineHeight: 1.6 }}>{rev.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div style={{ marginTop: '5rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.2rem',
              color: '#18240A',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            Pairs Well With Other Native Harvests
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  border: '1px solid rgba(99, 141, 8, 0.2)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Link to={`/product/${p.id}`} style={{ textDecoration: 'none' }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                  />
                </Link>
                <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '0.7rem', color: '#4E6E10', fontWeight: 800, textTransform: 'uppercase' }}>
                    {p.categoryLabel}
                  </span>
                  <Link
                    to={`/product/${p.id}`}
                    style={{
                      textDecoration: 'none',
                      color: '#18240A',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      marginTop: '4px',
                      marginBottom: '6px',
                    }}
                  >
                    {p.shortName}
                  </Link>
                  <p style={{ fontSize: '0.8rem', color: '#6B7959', marginBottom: '1.2rem', flex: 1 }}>
                    {p.subtitle}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#4E6E10', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5B8C15', display: 'inline-block' }} />
                      COMING SOON
                    </span>
                    <Link
                      to={`/product/${p.id}`}
                      className="btn-primary"
                      style={{ padding: '0.5rem 1rem', fontSize: '0.75rem', textDecoration: 'none' }}
                    >
                      VIEW
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
