import React, { useState } from 'react';
import { X, Lock, Mail, User as UserIcon, Phone, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(24, 36, 10, 0.65)',
        backdropFilter: 'blur(6px)',
        zIndex: 2200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(0.75rem, 3vw, 1.5rem)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '440px',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px -15px rgba(24, 36, 10, 0.35)',
          border: '1px solid rgba(27, 77, 53, 0.15)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner with #795648 & #1b4d35 branding */}
        <div
          style={{
            backgroundColor: '#1b4d35',
            padding: '1.4rem 1.6rem',
            color: '#FFFFFF',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFDB15', fontWeight: 800 }}>
              NAMO Organic Community
            </div>
            <h3 style={{ margin: '0.2rem 0 0', fontSize: '1.25rem', fontFamily: 'serif', fontWeight: 800 }}>
              {tab === 'signin' ? 'Welcome Back' : 'Join NAMO Organic'}
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab switch */}
        <div style={{ display: 'flex', borderBottom: '1px solid rgba(24, 36, 10, 0.08)' }}>
          <button
            type="button"
            onClick={() => setTab('signin')}
            style={{
              flex: 1,
              padding: '0.85rem',
              background: 'none',
              border: 'none',
              borderBottom: tab === 'signin' ? '2.5px solid #1b4d35' : '2.5px solid transparent',
              color: tab === 'signin' ? '#1b4d35' : '#6B7959',
              fontWeight: tab === 'signin' ? 800 : 600,
              fontSize: '0.86rem',
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'all 0.2s ease',
            }}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => setTab('signup')}
            style={{
              flex: 1,
              padding: '0.85rem',
              background: 'none',
              border: 'none',
              borderBottom: tab === 'signup' ? '2.5px solid #1b4d35' : '2.5px solid transparent',
              color: tab === 'signup' ? '#1b4d35' : '#6B7959',
              fontWeight: tab === 'signup' ? 800 : 600,
              fontSize: '0.86rem',
              cursor: 'pointer',
              letterSpacing: '0.04em',
              transition: 'all 0.2s ease',
            }}
          >
            Create Account
          </button>
        </div>

        {/* Form Body */}
        <div style={{ padding: '1.6rem' }}>
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <CheckCircle2 size={52} color="#1b4d35" style={{ margin: '0 auto 1rem' }} />
              <h4 style={{ margin: '0 0 0.5rem', color: '#1b4d35', fontSize: '1.2rem', fontWeight: 800 }}>
                {tab === 'signin' ? 'Signed in successfully!' : 'Account created successfully!'}
              </h4>
              <p style={{ margin: 0, color: '#6B7959', fontSize: '0.85rem' }}>
                Welcome to pure, traceable Vedic wellness.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {tab === 'signup' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: '#334024', marginBottom: '0.35rem' }}>
                    Full Name
                  </label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <UserIcon size={16} color="#6B7959" style={{ position: 'absolute', left: '12px' }} />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem 0.7rem 2.4rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(24, 36, 10, 0.18)',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>
              )}

              <div>
                <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: '#334024', marginBottom: '0.35rem' }}>
                  Email Address
                </label>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Mail size={16} color="#6B7959" style={{ position: 'absolute', left: '12px' }} />
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem 0.7rem 2.4rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(24, 36, 10, 0.18)',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {tab === 'signup' && (
                <div>
                  <label style={{ display: 'block', fontSize: '0.76rem', fontWeight: 700, color: '#334024', marginBottom: '0.35rem' }}>
                    Phone Number (for Order Updates)
                  </label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Phone size={16} color="#6B7959" style={{ position: 'absolute', left: '12px' }} />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '0.7rem 0.9rem 0.7rem 2.4rem',
                        borderRadius: '8px',
                        border: '1px solid rgba(24, 36, 10, 0.18)',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>
              )}

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <label style={{ fontSize: '0.76rem', fontWeight: 700, color: '#334024' }}>
                    Password
                  </label>
                  {tab === 'signin' && (
                    <span style={{ fontSize: '0.74rem', color: '#795648', fontWeight: 700, cursor: 'pointer' }}>
                      Forgot?
                    </span>
                  )}
                </div>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Lock size={16} color="#6B7959" style={{ position: 'absolute', left: '12px' }} />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem 0.7rem 2.4rem',
                      borderRadius: '8px',
                      border: '1px solid rgba(24, 36, 10, 0.18)',
                      fontSize: '0.88rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                style={{
                  marginTop: '0.5rem',
                  backgroundColor: '#1b4d35',
                  color: '#FFFFFF',
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(27, 77, 53, 0.3)',
                  transition: 'background 0.2s ease',
                }}
              >
                {tab === 'signin' ? 'Sign In to Account' : 'Create My Account'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
