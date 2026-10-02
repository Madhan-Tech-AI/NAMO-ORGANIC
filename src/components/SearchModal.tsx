import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const filtered = PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortName.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.method.toLowerCase().includes(q)
    );
    setResults(filtered);
  }, [query]);

  const handleSelectProduct = (productId: string) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  const handleQuickCategory = (cat: string) => {
    onClose();
    navigate(`/products?category=${cat}`);
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(24, 36, 10, 0.65)',
        backdropFilter: 'blur(8px)',
        zIndex: 2500,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 'clamp(1rem, 6vh, 5rem) clamp(0.75rem, 3vw, 1rem) 2rem',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '680px',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          border: '1px solid rgba(99, 141, 8, 0.25)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: 'clamp(0.9rem, 2.5vw, 1.2rem) clamp(1rem, 3vw, 1.6rem)',
            borderBottom: '1px solid rgba(24, 36, 10, 0.08)',
            gap: '0.8rem',
          }}
        >
          <Search size={22} color="#4E6E10" style={{ flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search organic cold-pressed oil, A2 ghee, wild honey, dals, nuts..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
              fontFamily: 'var(--font-display)',
              color: '#18240A',
              background: 'transparent',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#6B7959',
                padding: '4px',
              }}
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            style={{
              background: '#F0F4E8',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#18240A',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Quick Suggestions / Results */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', padding: '1.5rem' }}>
          {query ? (
            results.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#4E6E10', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Matching Products ({results.length})
                </span>
                {results.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => handleSelectProduct(p.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '0.75rem 1rem',
                      borderRadius: '14px',
                      backgroundColor: '#F8F9F3',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F0F4E8';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#F8F9F3';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#18240A', marginBottom: '2px' }}>
                        {p.name}
                      </h4>
                      <p style={{ fontSize: '0.78rem', color: '#556345' }}>
                        {p.subtitle} · {p.origin}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 800, color: '#18240A', display: 'block' }}>
                        {p.price}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#4E6E10', fontWeight: 600 }}>
                        Inspect Batch →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '2.5rem 1rem', color: '#556345' }}>
                <p style={{ fontSize: '1.05rem', fontWeight: 600, color: '#18240A', marginBottom: '0.4rem' }}>
                  No exact matches found for "{query}"
                </p>
                <p style={{ fontSize: '0.88rem' }}>
                  Try searching for "sesame", "ghee", "honey", "flour", "almonds", or "toor dal".
                </p>
              </div>
            )
          ) : (
            <div>
              <div style={{ marginBottom: '1.5rem' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#6B7959',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.8rem',
                  }}
                >
                  Popular Categories
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {[
                    { label: 'Cold-Pressed Oils', cat: 'oils' },
                    { label: 'A2 Cow Ghee', cat: 'ghee' },
                    { label: 'Wild Forest Honey', cat: 'honey' },
                    { label: 'Organic Fertilizers', cat: 'fertilizers' },
                    { label: 'Organic Pesticides', cat: 'pesticides' },
                    { label: 'Cattle Feed', cat: 'supplements' },
                    { label: 'Stone-Ground Flour', cat: 'grains' },
                    { label: 'Organic Dals', cat: 'dals' },
                    { label: 'Nuts & Dry Fruits', cat: 'nuts' },
                  ].map((c) => (
                    <button
                      key={c.cat}
                      onClick={() => handleQuickCategory(c.cat)}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        border: '1px solid rgba(24, 36, 10, 0.12)',
                        background: '#F8F9F3',
                        color: '#18240A',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#243810';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = '#F8F9F3';
                        e.currentTarget.style.color = '#18240A';
                      }}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#6B7959',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '0.8rem',
                  }}
                >
                  Explore Highlights
                </span>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
                  {[
                    { title: 'Cold-Pressed Sesame Oil', path: '/product/sesame-oil', tag: 'Bestseller' },
                    { title: 'Desi Cow A2 Ghee', path: '/product/a2-ghee', tag: 'Vedic Bilona' },
                    { title: 'Organic Wild Honey', path: '/product/organic-honey', tag: 'Raw Reserve' },
                    { title: 'Farm Traceability Lookup', path: '/traceability', tag: 'Interactive' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        onClose();
                        navigate(item.path);
                      }}
                      style={{
                        padding: '0.75rem',
                        borderRadius: '12px',
                        background: '#FAFAF7',
                        border: '1px solid rgba(24, 36, 10, 0.06)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '0.84rem', fontWeight: 600, color: '#18240A', display: 'block' }}>
                          {item.title}
                        </span>
                        <span style={{ fontSize: '0.68rem', color: '#4E6E10', fontWeight: 700 }}>
                          {item.tag}
                        </span>
                      </div>
                      <ArrowRight size={14} color="#6B7959" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
