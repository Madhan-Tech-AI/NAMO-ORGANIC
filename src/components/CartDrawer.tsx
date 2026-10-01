import React from 'react';
import { X, Trash2, ShoppingBag, ShieldCheck, Truck, RotateCcw, MessageCircle } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(24, 36, 10, 0.45)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '460px',
          height: '100%',
          backgroundColor: '#FFFFFF',
          borderLeft: '1px solid rgba(24, 36, 10, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem',
          boxShadow: '-20px 0 50px rgba(24, 36, 10, 0.12)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(24, 36, 10, 0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShoppingBag size={20} color="#4E6E10" />
            <h3 style={{ fontSize: '1.25rem', color: '#18240A', fontWeight: 800 }}>Your Harvest Basket</h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            {items.length > 0 && (
              <button
                onClick={onClearCart}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#687656',
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  fontWeight: 600,
                }}
                title="Clear basket"
              >
                <RotateCcw size={12} /> Clear
              </button>
            )}
            <button
              onClick={onClose}
              style={{
                background: '#F0F4E8',
                border: 'none',
                color: '#18240A',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Farm Direct Delivery Notice */}
        <div style={{ background: '#F0F4E8', padding: '0.85rem 1rem', borderRadius: '14px', marginBottom: '1.5rem', border: '1px solid rgba(99, 141, 8, 0.2)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.78rem', color: '#243810' }}>
            <Truck size={14} color="#4E6E10" />
            <span style={{ color: '#243810', fontWeight: 700 }}>Direct Farm Dispatch · Pan India Delivery & Institutional Supply</span>
          </div>
        </div>

        {/* Item List */}
        <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '0.3rem' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', color: '#768565' }}>
              <p style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#18240A', fontWeight: 600 }}>Your basket is currently empty.</p>
              <p style={{ fontSize: '0.8rem', color: '#687656' }}>Explore our cold-pressed oils, Vedic ghee, and stone-ground grains.</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                style={{
                  background: '#F8F9F3',
                  border: '1px solid rgba(99, 141, 8, 0.2)',
                  borderRadius: '16px',
                  padding: '1.1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <h4 style={{ color: '#18240A', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.2rem' }}>
                    {item.name}
                  </h4>
                  <span style={{ color: '#3B5710', fontSize: '0.9rem', fontWeight: 800 }}>{item.price}</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      background: '#FFFFFF',
                      borderRadius: '8px',
                      border: '1px solid rgba(24, 36, 10, 0.15)',
                    }}
                  >
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      style={{ background: 'none', border: 'none', color: '#18240A', padding: '0.3rem 0.6rem', cursor: 'pointer', fontWeight: 700 }}
                    >
                      -
                    </button>
                    <span style={{ fontSize: '0.85rem', color: '#18240A', fontWeight: 700, minWidth: '18px', textAlign: 'center' }}>
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      style={{ background: 'none', border: 'none', color: '#18240A', padding: '0.3rem 0.6rem', cursor: 'pointer', fontWeight: 700 }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.id)}
                    style={{ background: 'none', border: 'none', color: '#DC2626', cursor: 'pointer', padding: '0.3rem' }}
                    title="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Eco Packaging Guarantee */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.2rem', padding: '0.6rem 0', borderTop: '1px solid rgba(24, 36, 10, 0.08)', fontSize: '0.72rem', color: '#687656' }}>
          <ShieldCheck size={14} color="#4E6E10" />
          <span>Packed in 100% shatter-safe recyclable corrugated glass protective boxes.</span>
        </div>

        {/* Bottom Checkout Actions */}
        <div style={{ marginTop: '1rem', paddingTop: '1.2rem', borderTop: '1.5px solid rgba(24, 36, 10, 0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span style={{ color: '#687656', fontSize: '0.88rem', fontWeight: 600 }}>Ordering Status</span>
            <span style={{ color: '#2D500C', fontSize: '0.82rem', fontWeight: 800, backgroundColor: '#EAF4DC', padding: '0.3rem 0.75rem', borderRadius: '9999px' }}>
              Direct Farm WhatsApp Order
            </span>
          </div>

          <button
            disabled={items.length === 0}
            onClick={() => {
              const summary = items.map((i) => `• ${i.name} (Qty: ${i.quantity})`).join('\n');
              const msg = encodeURIComponent(`Hi NAMO Organic, I would like to place an order enquiry for the following basket items:\n\n${summary}\n\nPlease share price, bulk packaging options, and dispatch schedule.`);
              window.open(`https://wa.me/919500164786?text=${msg}`, '_blank');
            }}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '0.88rem',
              opacity: items.length === 0 ? 0.5 : 1,
              cursor: items.length === 0 ? 'not-allowed' : 'pointer',
              backgroundColor: '#25D366',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
            }}
          >
            <MessageCircle size={18} /> ENQUIRE & ORDER VIA WHATSAPP
          </button>
        </div>
      </div>
    </div>
  );
};
