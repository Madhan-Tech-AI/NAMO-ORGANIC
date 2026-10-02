import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; to?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
}) => {
  return (
    <div
      style={{
        backgroundColor: '#111d0e',
        color: '#FFFFFF',
        padding: '5rem 2rem 4.5rem',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '2px solid rgba(103, 160, 32, 0.25)',
      }}
    >
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '-30%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103, 160, 32, 0.15) 0%, rgba(17, 29, 14, 0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-30%',
          left: '10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 219, 21, 0.08) 0%, rgba(17, 29, 14, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1360px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* Breadcrumb Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.8rem',
            color: '#B5AFA4',
            marginBottom: '1.5rem',
          }}
        >
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  style={{
                    color: '#FFDB15',
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'color 0.2s',
                  }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight size={14} color="rgba(255,255,255,0.4)" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.45rem',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 219, 21, 0.4)',
            borderRadius: '9999px',
            padding: '0.35rem 1rem',
            color: '#FFDB15',
            fontSize: '0.74rem',
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            marginBottom: '1.2rem',
          }}
        >
          <Sparkles size={13} color="#FFDB15" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display, "Plus Jakarta Sans", sans-serif)',
            fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
            fontWeight: 800,
            letterSpacing: '-0.025em',
            color: '#FFFFFF',
            lineHeight: 1.18,
            marginBottom: '1rem',
            maxWidth: '1000px',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.6vw, 1.25rem)',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.88)',
            maxWidth: '820px',
          }}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
