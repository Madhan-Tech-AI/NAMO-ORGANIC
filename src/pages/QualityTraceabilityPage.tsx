import React, { useState } from 'react';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  MapPin,
  Calendar,
  Thermometer,
  Eye,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface QualityTraceabilityPageProps {
  onOpenTraceabilityModalWithBatch: (batchCode: string) => void;
}

export const QualityTraceabilityPage: React.FC<QualityTraceabilityPageProps> = ({
  onOpenTraceabilityModalWithBatch,
}) => {
  const [inputBatch, setInputBatch] = useState('NAMO-SO-2026');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [verifiedStatus, setVerifiedStatus] = useState(true);

  const handleLookup = (code: string) => {
    const found = PRODUCTS.find((p) => p.batchCode.toLowerCase() === code.trim().toLowerCase());
    if (found) {
      setSelectedProduct(found);
      setVerifiedStatus(true);
    } else {
      setVerifiedStatus(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#F8F9F3', minHeight: '100vh', paddingBottom: '7rem' }}>
      {/* Editorial Header */}
      <div
        style={{
          backgroundColor: '#1E2516',
          color: '#EDE8DC',
          padding: '6rem 2rem 5rem',
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
              FARM-TO-FAMILY TRACEABILITY LEDGER
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '1.5rem',
            }}
          >
            VERIFY THE ORIGIN OF YOUR FOOD
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: 1.7,
              color: '#B5AFA4',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            Every NAMO container bears an individual batch ledger code.
            Look up your code below to inspect the verified soil coordinates, pressing temperatures, and NABL laboratory reports.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1440px', margin: '4rem auto 0', padding: '0 2rem' }}>
        {/* Interactive Batch Lookup Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '2.5rem',
            boxShadow: '0 15px 40px rgba(24, 36, 10, 0.08)',
            border: '1px solid rgba(99, 141, 8, 0.25)',
            marginBottom: '4rem',
            maxWidth: '850px',
            margin: '0 auto 4rem',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#4E6E10', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Interactive Verification Terminal
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: '#18240A', marginTop: '4px' }}>
              Enter Container Batch Code
            </h2>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <div
              style={{
                flex: 1,
                minWidth: '260px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#F8F9F3',
                border: '1.5px solid rgba(24, 36, 10, 0.15)',
                borderRadius: '12px',
                padding: '0 1rem',
              }}
            >
              <Search size={18} color="#6B7959" />
              <input
                type="text"
                value={inputBatch}
                onChange={(e) => {
                  setInputBatch(e.target.value);
                  handleLookup(e.target.value);
                }}
                placeholder="e.g. NAMO-SO-2026, NAMO-AG-5012..."
                style={{
                  border: 'none',
                  background: 'transparent',
                  padding: '1rem 0.8rem',
                  outline: 'none',
                  fontSize: '1rem',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  color: '#18240A',
                  width: '100%',
                }}
              />
            </div>

            <button
              onClick={() => handleLookup(inputBatch)}
              className="btn-primary"
              style={{ padding: '0 2rem', fontSize: '0.9rem' }}
            >
              VERIFY BATCH
            </button>
          </div>

          {/* Quick Click Samples */}
          <div>
            <span style={{ fontSize: '0.75rem', color: '#6B7959', fontWeight: 600, marginRight: '0.6rem' }}>
              Quick Select Batch:
            </span>
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.4rem' }}>
              {PRODUCTS.slice(0, 4).map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setInputBatch(p.batchCode);
                    setSelectedProduct(p);
                    setVerifiedStatus(true);
                  }}
                  style={{
                    backgroundColor: selectedProduct.id === p.id ? '#243810' : '#F0F4E8',
                    color: selectedProduct.id === p.id ? '#FFFFFF' : '#2D3A1B',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '0.35rem 0.75rem',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: 'monospace',
                  }}
                >
                  {p.batchCode} ({p.shortName})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Verification Result Card */}
        {verifiedStatus ? (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: '0 20px 50px rgba(24, 36, 10, 0.08)',
              border: '2px solid #7EBE22',
              position: 'relative',
              marginBottom: '5rem',
            }}
          >
            {/* Verified Stamp Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
                paddingBottom: '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    backgroundColor: '#E6F0D8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CheckCircle2 size={26} color="#4E6E10" />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#4E6E10', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Authentic Verified Harvest
                  </span>
                  <h3 style={{ fontSize: '1.5rem', color: '#18240A', fontWeight: 800 }}>
                    Batch #{selectedProduct.batchCode}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => onOpenTraceabilityModalWithBatch(selectedProduct.batchCode)}
                className="btn-secondary"
                style={{ padding: '0.65rem 1.2rem', fontSize: '0.82rem' }}
              >
                <Eye size={15} /> OPEN FULL MODAL VIEW
              </button>
            </div>

            {/* Grid of Verified Credentials */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                marginBottom: '2.5rem',
              }}
            >
              <div
                style={{
                  backgroundColor: '#F8F9F3',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(24, 36, 10, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4E6E10', marginBottom: '0.6rem' }}>
                  <MapPin size={18} />
                  <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Farm Origin & Soil
                  </strong>
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#18240A', marginBottom: '4px' }}>
                  {selectedProduct.origin}
                </p>
                <span style={{ fontSize: '0.82rem', color: '#6B7959', display: 'block' }}>
                  Managed by {selectedProduct.farmerGroup}
                </span>
              </div>

              <div
                style={{
                  backgroundColor: '#F8F9F3',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(24, 36, 10, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4E6E10', marginBottom: '0.6rem' }}>
                  <Thermometer size={18} />
                  <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Artisan Extraction
                  </strong>
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#18240A', marginBottom: '4px' }}>
                  {selectedProduct.method}
                </p>
                <span style={{ fontSize: '0.82rem', color: '#6B7959', display: 'block' }}>
                  Extracted at ambient temperature without industrial heat
                </span>
              </div>

              <div
                style={{
                  backgroundColor: '#F8F9F3',
                  padding: '1.5rem',
                  borderRadius: '16px',
                  border: '1px solid rgba(24, 36, 10, 0.06)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4E6E10', marginBottom: '0.6rem' }}>
                  <Calendar size={18} />
                  <strong style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Harvest & Bottling
                  </strong>
                </div>
                <p style={{ fontSize: '1.1rem', fontWeight: 800, color: '#18240A', marginBottom: '4px' }}>
                  {selectedProduct.harvestDate}
                </p>
                <span style={{ fontSize: '0.82rem', color: '#6B7959', display: 'block' }}>
                  Shelf life: {selectedProduct.shelfLife}
                </span>
              </div>
            </div>

            {/* Laboratory Test Panel */}
            <div
              style={{
                backgroundColor: '#F0F4E8',
                borderRadius: '18px',
                padding: '2rem',
                border: '1px solid rgba(78, 110, 16, 0.2)',
              }}
            >
              <h4
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: '#18240A',
                  marginBottom: '1rem',
                }}
              >
                Accredited NABL Lab Analysis Results:
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.8rem' }}>
                {selectedProduct.purityTests.map((t, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      backgroundColor: '#FFFFFF',
                      padding: '0.8rem 1rem',
                      borderRadius: '10px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#243810',
                    }}
                  >
                    <CheckCircle2 size={16} color="#4E6E10" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '3rem',
              textAlign: 'center',
              border: '1px solid rgba(186, 60, 60, 0.3)',
              marginBottom: '5rem',
            }}
          >
            <h3 style={{ color: '#BA3C3C', fontSize: '1.4rem', marginBottom: '0.6rem' }}>
              Batch Code "{inputBatch}" Not Found
            </h3>
            <p style={{ color: '#556345', marginBottom: '1.5rem' }}>
              Please check the alphanumeric batch stamp on your bottle neck or label. Example: NAMO-SO-2026.
            </p>
            <button
              onClick={() => {
                setInputBatch('NAMO-SO-2026');
                setSelectedProduct(PRODUCTS[0]);
                setVerifiedStatus(true);
              }}
              className="btn-primary"
            >
              LOAD DEFAULT VERIFIED BATCH
            </button>
          </div>
        )}

        {/* Quality Standards Section */}
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#18240A', marginBottom: '1rem' }}>
            The NAMO Quality Guarantee
          </h2>
          <p style={{ color: '#556345', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
            If any NAMO harvest fails to meet our stringent standards of zero chemicals, zero hexane, and complete traceability, we replace it or refund in full immediately with no questions asked.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#18240A', fontWeight: 700 }}>
              <ShieldCheck size={20} color="#4E6E10" /> 100% Certified Organic
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#18240A', fontWeight: 700 }}>
              <ShieldCheck size={20} color="#4E6E10" /> Vaagai Wood Cold Extraction
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#18240A', fontWeight: 700 }}>
              <ShieldCheck size={20} color="#4E6E10" /> Vedic Bilona Churning
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#18240A', fontWeight: 700 }}>
              <ShieldCheck size={20} color="#4E6E10" /> Nitrogen Sealed Freshness
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
