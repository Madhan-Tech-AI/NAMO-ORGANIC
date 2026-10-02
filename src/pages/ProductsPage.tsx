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
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(99, 141, 8, 0.2)',
                  boxShadow: '0 12px 35px -5px rgba(24, 36, 10, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="product-card-hover"
              >
                {/* Product Image Link */}
                <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4 / 3' }}>
                  <Link to={`/product/${p.id}`} style={{ display: 'block', height: '100%' }}>
                    <img
                      src={p.image}
                      alt={p.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                  </Link>

                  {/* Origin Badge */}
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem' }}>
                    <span
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        backdropFilter: 'blur(6px)',
                        color: '#243810',
                        fontSize: '0.7rem',
                        fontWeight: 800,
                        padding: '0.35rem 0.75rem',
                        borderRadius: '9999px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                      }}
                    >
                      {p.origin.split(',')[0]}
                    </span>
                  </div>

                  {/* Batch Code Badge */}
                  <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                    <button
                      onClick={() => onOpenTraceabilityWithBatch(p.batchCode)}
                      style={{
                        backgroundColor: '#FFDB15',
                        border: 'none',
                        color: '#18240A',
                        fontSize: '0.68rem',
                        fontWeight: 900,
                        padding: '0.35rem 0.65rem',
                        borderRadius: '9999px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Eye size={12} /> BATCH #{p.batchCode.split('-')[1]}
                    </button>
                  </div>
                </div>

                {/* Product Content */}
                <div style={{ padding: '1.8rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                    <span style={{ fontSize: '0.72rem', letterSpacing: '0.12em', color: '#4E6E10', fontWeight: 800, textTransform: 'uppercase' }}>
                      {p.categoryLabel}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: '#E5A510' }}>
                      <Star size={13} fill="#E5A510" />
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#18240A' }}>
                        {p.rating}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/product/${p.id}`}
                    style={{
                      textDecoration: 'none',
                      color: '#18240A',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      marginBottom: '0.4rem',
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </Link>

                  <p style={{ fontSize: '0.84rem', color: '#556345', lineHeight: 1.5, marginBottom: '1.2rem', flex: 1 }}>
                    {p.subtitle} · {p.method}
                  </p>

                  {/* Highlights Bullet */}
                  <div style={{ marginBottom: '1.4rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {p.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Check size={12} color="#4E6E10" />
                        <span style={{ fontSize: '0.76rem', color: '#334024' }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price & Action Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1.2rem',
                      borderTop: '1px solid rgba(24, 36, 10, 0.08)',
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.72rem', color: '#6B7959', display: 'block', fontWeight: 600 }}>{p.volume}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.2rem' }}>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            backgroundColor: '#EAF4DC',
                            color: '#2D500C',
                            fontSize: '0.74rem',
                            fontWeight: 800,
                            padding: '0.25rem 0.65rem',
                            borderRadius: '9999px',
                            letterSpacing: '0.03em',
                          }}
                        >
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5B8C15', display: 'inline-block' }} />
                          COMING SOON
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.45rem', alignItems: 'center' }}>
                      <Link
                        to={`/product/${p.id}`}
                        style={{
                          backgroundColor: '#F0F4E8',
                          color: '#243810',
                          padding: '0.65rem 0.85rem',
                          borderRadius: '9999px',
                          textDecoration: 'none',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                        }}
                      >
                        VIEW <ArrowUpRight size={13} />
                      </Link>
                      <button
                        onClick={() => onAddToCart(p.name, p.price)}
                        className="btn-primary"
                        style={{ padding: '0.65rem 0.95rem', fontSize: '0.75rem' }}
                      >
                        <ShoppingBag size={14} /> + BASKET
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
