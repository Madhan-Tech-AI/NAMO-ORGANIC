import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowRight, ShieldCheck, Truck, Check, MessageCircle } from 'lucide-react';
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
  const [orderPlaced, setOrderPlaced] = useState(false);

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

                    <div style={{ textAlign: 'right', minWidth: '95px' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 800, color: '#4E6E10', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#5B8C15', display: 'inline-block' }} />
                        COMING SOON
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

              {/* Bulk & Institutional Dispatch Info */}
              <div
                style={{
                  marginBottom: '1.8rem',
                  padding: '1.2rem',
                  backgroundColor: '#F8F9F3',
                  borderRadius: '14px',
                  border: '1px solid rgba(24, 36, 10, 0.08)',
                }}
              >
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 800,
                    color: '#4E6E10',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '0.4rem',
                  }}
                >
                  Direct Farm & Institutional Dispatch
                </span>
                <p style={{ fontSize: '0.82rem', color: '#556345', lineHeight: 1.5, margin: 0 }}>
                  For wholesale, institutional or GeM portal procurement, our agrarian desk connects directly with your procurement team via WhatsApp.
                </p>
              </div>

              {/* Fulfillment & Availability Details */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#3D4A2D', fontSize: '0.92rem' }}>
                  <span>Fulfillment Method</span>
                  <strong style={{ color: '#4E6E10' }}>Direct Farm Dispatch</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#3D4A2D', fontSize: '0.92rem' }}>
                  <span>Quality Standard</span>
                  <strong>ISO 9001 & FSSAI Certified</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#3D4A2D', fontSize: '0.92rem' }}>
                  <span>Eco Glass Freight</span>
                  <strong style={{ color: '#4E6E10' }}>Pan India Courier</strong>
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '2px solid rgba(24, 36, 10, 0.08)',
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#18240A',
                  }}
                >
                  <span>Order Status</span>
                  <span style={{ color: '#2D500C', fontSize: '0.95rem' }}>Online Ordering Coming Soon</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const summary = items.map((i) => `• ${i.name} (Qty: ${i.quantity})`).join('\n');
                  const msg = encodeURIComponent(`Hi NAMO Organic, I would like to place an order enquiry for the following basket items:\n\n${summary}\n\nPlease share price, bulk packaging options, and dispatch schedule.`);
                  window.open(`https://wa.me/919500164786?text=${msg}`, '_blank');
                  handleCheckout();
                }}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '1.1rem',
                  fontSize: '0.95rem',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  backgroundColor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <MessageCircle size={18} /> SUBMIT BASKET ENQUIRY VIA WHATSAPP
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
