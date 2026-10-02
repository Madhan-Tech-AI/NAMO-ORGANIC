import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  Sparkles,
  ShoppingBag,
  Eye,
  Search,
  Check,
  Star,
  ArrowUpRight,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface ProductsPageProps {
  onAddToCart: (productName: string, price: string) => void;
  onOpenTraceabilityWithBatch: (batchCode: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onAddToCart,
  onOpenTraceabilityWithBatch,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'rating'>('featured');

  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    setActiveCategory(cat);
    const queryParam = searchParams.get('search');
    if (queryParam !== null) {
      setSearchQuery(queryParam);
    }
  }, [searchParams]);

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    if (cat === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
  };

  const categories = [
    { id: 'all', label: 'All Harvests' },
    { id: 'fertilizers', label: 'Organic Fertilizers' },
    { id: 'pesticides', label: 'Organic Pesticides' },
    { id: 'supplements', label: 'Cattle Feed' },
    { id: 'oils', label: 'Cold-Pressed Oils' },
    { id: 'ghee', label: 'A2 Cow Ghee' },
    { id: 'honey', label: 'Raw Wild Honey' },
    { id: 'jaggery', label: 'Jaggery & Sweeteners' },
    { id: 'grains', label: 'Heritage Grains & Flour' },
    { id: 'dals', label: 'Unpolished Dals' },
    { id: 'spices', label: 'Spices & Masalas' },
    { id: 'nuts', label: 'Nuts & Dry Fruits' },
    { id: 'sweets', label: 'Traditional Snacks' },
  ];

  // Filtering
  let filtered = PRODUCTS.filter((p) => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesQuery =
      !searchQuery.trim() ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  // Sorting
  if (sortBy === 'name-asc') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div style={{ backgroundColor: '#F8F9F3', minHeight: '100vh', padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem) 6rem' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
        {/* Page Hero Banner */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span className="badge-organic">
              <Sparkles size={14} color="#4E6E10" />
              100% CERTIFIED NATIVE HARVESTS
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#18240A',
              marginBottom: '1rem',
            }}
          >
            THE NAMO HARVEST CATALOG
          </h1>
          <p
            style={{
              fontSize: '1.15rem',
              color: '#556345',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Handcrafted with traditional wood presses, Vedic bilona churns, and sandstone mills.
            Every item is traceable to the exact soil coordinates and farming collective.
          </p>
        </div>

        {/* Category Filter Pills & Controls Bar */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '1.2rem 1.6rem',
            boxShadow: '0 8px 25px rgba(24, 36, 10, 0.05)',
            border: '1px solid rgba(24, 36, 10, 0.08)',
            marginBottom: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.2rem',
          }}
        >
          {/* Category Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((c) => {
              const active = activeCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => handleCategorySelect(c.id)}
                  style={{
                    padding: '0.65rem 1.25rem',
                    borderRadius: '9999px',
                    border: active ? '1.5px solid #243810' : '1px solid rgba(24, 36, 10, 0.12)',
                    backgroundColor: active ? '#243810' : '#F8F9F3',
                    color: active ? '#FFFFFF' : '#2D3A1B',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Search + Sort Filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#F8F9F3',
                padding: '0.5rem 1rem',
                borderRadius: '9999px',
                border: '1px solid rgba(24, 36, 10, 0.1)',
              }}
            >
              <Search size={15} color="#6B7959" />
              <input
                type="text"
                placeholder="Filter by harvest or region..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                  fontSize: '0.82rem',
                  color: '#18240A',
                  width: '180px',
                }}
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              style={{
                backgroundColor: '#F8F9F3',
                border: '1px solid rgba(24, 36, 10, 0.12)',
                borderRadius: '9999px',
                padding: '0.55rem 1.1rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: '#18240A',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="featured">Sort: Featured</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filtered.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
              gap: '2rem',
            }}
          >
            {filtered.map((p) => (
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
                {/* Product Image Link - Uniform Height & Centered Contain for Bottles */}
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
                    backgroundColor: p.image.includes('Bottle') ? '#F6F8F0' : '#F8F9F3',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Link
                    to={`/product/${p.id}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      padding: p.image.includes('Bottle') ? '0.75rem' : '0',
                    }}
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: p.image.includes('Bottle') ? 'contain' : 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                  </Link>

                  {/* Origin Badge */}
                  <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
                    <span
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.94)',
                        backdropFilter: 'blur(6px)',
                        color: '#243810',
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '0.3rem 0.65rem',
                        borderRadius: '9999px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      }}
                    >
                      {p.origin.split(',')[0]}
                    </span>
                  </div>

                  {/* Batch Code Badge */}
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
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      }}
                    >
                      <Eye size={11} /> BATCH #{p.batchCode.split('-')[1]}
                    </button>
                  </div>
                </div>

                {/* Product Content - Compact & Fixed Proportions */}
                <div style={{ padding: '1.25rem 1.4rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  {/* Category & Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: '#4E6E10', fontWeight: 800, textTransform: 'uppercase' }}>
                      {p.categoryLabel}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#E5A510' }}>
                      <Star size={12} fill="#E5A510" />
                      <span style={{ fontSize: '0.74rem', fontWeight: 800, color: '#18240A' }}>
                        {p.rating}
                      </span>
                    </div>
                  </div>

                  {/* Title - Fixed 2 lines min-height so all titles align */}
                  <Link
                    to={`/product/${p.id}`}
                    title={p.name}
                    style={{
                      textDecoration: 'none',
                      color: '#18240A',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: 800,
                      lineHeight: 1.3,
                      marginBottom: '0.35rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      minHeight: '2.86rem',
                    }}
                  >
                    {p.name}
                  </Link>

                  {/* Subtitle - 1 concise line */}
                  <p
                    title={p.subtitle}
                    style={{
                      fontSize: '0.8rem',
                      color: '#556345',
                      lineHeight: 1.4,
                      marginBottom: '0.75rem',
                      display: '-webkit-box',
                      WebkitLineClamp: 1,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      minHeight: '1.15rem',
                    }}
                  >
                    {p.subtitle}
                  </p>

                  {/* Highlights Bullet - Exactly 2 single-line items (42px) */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.35rem',
                      marginBottom: '1rem',
                      minHeight: '42px',
                    }}
                  >
                    {p.highlights.slice(0, 2).map((h, i) => (
                      <div
                        key={i}
                        title={h}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.45rem',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: '14px',
                            height: '14px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(78, 110, 16, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <Check size={9} color="#3B5710" />
                        </div>
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: '#334024',
                            fontWeight: 500,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Area — Pinned with marginTop: auto for 100% Even Baseline */}
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
                    {/* Status & Volume Row */}
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

                    {/* Equal Height Buttons Row */}
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

                      <button
                        onClick={() => onAddToCart(p.name, p.price)}
                        className="btn-primary"
                        style={{
                          height: '36px',
                          padding: '0',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.4rem',
                          fontSize: '0.76rem',
                          width: '100%',
                        }}
                      >
                        <ShoppingBag size={13} /> + BASKET
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '4rem 2rem',
              border: '1px solid rgba(24, 36, 10, 0.08)',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: '#18240A', marginBottom: '0.8rem' }}>
              No harvests match your criteria
            </h3>
            <p style={{ color: '#556345', marginBottom: '1.5rem' }}>
              Try clearing your search query or choosing "All Harvests" above.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setSearchParams({});
              }}
              className="btn-primary"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>

      <style>{`
        .product-card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px -10px rgba(24, 36, 10, 0.14) !important;
        }
      `}</style>
    </div>
  );
};
