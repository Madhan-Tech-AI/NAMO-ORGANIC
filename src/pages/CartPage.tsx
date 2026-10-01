import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, Truck, Check } from 'lucide-react';
import type { CartItem } from '../components/CartDrawer';

interface CartPageProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Helper to parse price string like "₹420"
  const parsePrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  };

  const subtotal = items.reduce((acc, curr) => acc + parsePrice(curr.price) * curr.quantity, 0);
  const shipping = subtotal > 999 || subtotal === 0 ? 0 : 99;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = subtotal - discountAmount + shipping;

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (code === 'NAMO10' || code === 'FIRSTHARVEST') {
      setDiscountPercent(10);
      setCouponMessage('10% Farm Harvest Discount Applied! ✓');
    } else if (code === 'PURE20') {
      setDiscountPercent(20);
      setCouponMessage('20% Festive Organic Discount Applied! ✓');
    } else {
      setDiscountPercent(0);
      setCouponMessage('Invalid coupon code. Try NAMO10.');
    }
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    onClearCart();
  };

  if (orderPlaced) {
    return (
      <div style={{ backgroundColor: '#F8F9F3', minHeight: '80vh', padding: '6rem 2rem' }}>
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '4rem 2rem',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(24, 36, 10, 0.08)',
            border: '2px solid #7EBE22',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              backgroundColor: '#E6F0D8',
              color: '#4E6E10',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem',
            }}
          >
            <Check size={36} />
          </div>

          <span className="badge-organic" style={{ marginBottom: '0.8rem' }}>
            ORDER CONFIRMED
          </span>

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', color: '#18240A', marginBottom: '1rem' }}>
            Thank You for Supporting Native Agriculture!
          </h1>

          <p style={{ color: '#556345', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Your farm dispatch has been queued. Our cold-press masters are carefully packing your certified glass containers.
            You will receive harvest dispatch updates via SMS and WhatsApp.
          </p>

          <Link to="/products" className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
            CONTINUE BROWSING HARVESTS <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#F8F9F3', minHeight: '100vh', padding: '4rem 2rem 7rem' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ marginBottom: '3rem' }}>
          <span className="badge-organic">YOUR ORGANIC PANTRY</span>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
              color: '#18240A',
              marginTop: '0.6rem',
            }}
          >
            Shopping Basket ({items.reduce((acc, c) => acc + c.quantity, 0)} Items)
          </h1>
        </div>

        {items.length === 0 ? (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '5rem 2rem',
              textAlign: 'center',
              border: '1px solid rgba(24, 36, 10, 0.08)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
            }}
          >
            <ShoppingBag size={48} color="#8A9978" style={{ margin: '0 auto 1.5rem' }} />
            <h2 style={{ fontSize: '1.8rem', color: '#18240A', marginBottom: '0.8rem' }}>
              Your basket is currently empty
            </h2>
            <p style={{ color: '#556345', marginBottom: '2rem' }}>
              Discover our freshly pressed oils, Vedic bilona ghee, and unpolished heirloom lentils.
            </p>
            <Link to="/products" className="btn-primary" style={{ padding: '0.9rem 2.2rem' }}>
              EXPLORE HARVESTS <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Cart Items List */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid rgba(99, 141, 8, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid rgba(24, 36, 10, 0.06)',
                      gap: '1rem',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: '180px' }}>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#18240A', marginBottom: '4px' }}>
                        {item.name}
                      </h4>
                      <span style={{ fontSize: '0.85rem', color: '#4E6E10', fontWeight: 600 }}>
                        {item.price} each
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid rgba(24, 36, 10, 0.15)',
                        borderRadius: '9999px',
                        padding: '0.2rem',
                        backgroundColor: '#F8F9F3',
                      }}
                    >
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          border: 'none',
                          background: '#FFFFFF',
                          cursor: 'pointer',
                          fontWeight: 700,
                        }}
                      >
                        -
                      </button>
                      <span style={{ minWidth: '34px', textAlign: 'center', fontWeight: 800, fontSize: '0.95rem' }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          border: 'none',
                          background: '#FFFFFF',
                          cursor: 'pointer',
                          fontWeight: 700,
                        }}
                      >
                        +
                      </button>
                    </div>

                    <div style={{ textAlign: 'right', minWidth: '80px' }}>
                      <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#18240A', display: 'block' }}>
                        ₹{parsePrice(item.price) * item.quantity}
                      </span>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#BA3C3C',
                        cursor: 'pointer',
                        padding: '6px',
                      }}
                      title="Remove item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                <Link to="/products" style={{ color: '#4E6E10', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem' }}>
                  ← Continue Shopping
                </Link>
                <button
                  onClick={onClearCart}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#BA3C3C',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  Clear All Items
                </button>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '2rem',
                border: '1px solid rgba(99, 141, 8, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: '#18240A', marginBottom: '1.5rem' }}>
                Order Summary
              </h3>

              {/* Coupon Code Input */}
              <div style={{ marginBottom: '1.8rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. NAMO10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    style={{
                      flex: 1,
                      padding: '0.75rem 1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(24, 36, 10, 0.15)',
                      backgroundColor: '#F8F9F3',
                      fontSize: '0.85rem',
                      outline: 'none',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="btn-secondary"
                    style={{ padding: '0.75rem 1.2rem', fontSize: '0.8rem' }}
                  >
                    APPLY
                  </button>
                </div>
                {couponMessage && (
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      marginTop: '0.4rem',
                      display: 'block',
                      color: discountPercent > 0 ? '#4E6E10' : '#BA3C3C',
                    }}
                  >
                    {couponMessage}
                  </span>
                )}
              </div>

              {/* Cost Rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#3D4A2D', fontSize: '0.92rem' }}>
                  <span>Pantry Subtotal</span>
                  <strong>₹{subtotal}</strong>
                </div>

                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4E6E10', fontSize: '0.92rem' }}>
                    <span>Harvest Discount ({discountPercent}%)</span>
                    <strong>-₹{discountAmount}</strong>
                  </div>
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#3D4A2D', fontSize: '0.92rem' }}>
                  <span>Eco Glass Freight</span>
                  <strong>{shipping === 0 ? <span style={{ color: '#4E6E10' }}>FREE</span> : `₹${shipping}`}</strong>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '2px solid rgba(24, 36, 10, 0.08)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#18240A',
                  }}
                >
                  <span>Total Amount</span>
                  <span>₹{finalTotal}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '1.1rem',
                  fontSize: '0.95rem',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                }}
              >
                PROCEED TO CHECKOUT · ₹{finalTotal}
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.78rem', color: '#6B7959' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShieldCheck size={16} color="#4E6E10" /> 100% Farm-Traceable Guarantee
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Truck size={16} color="#4E6E10" /> Safe Shatter-Proof Glass Transit Packing
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
