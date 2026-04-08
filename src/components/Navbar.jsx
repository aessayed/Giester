import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home',      href: '#home' },
  { label: 'Angebote', href: '#angebote' },
  { label: 'Über mich',href: '#ueber' },
  { label: 'Reisen',   href: '#reisen' },
  { label: 'Kontakt',  href: '#kontakt' },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navBg = scrolled
    ? 'rgba(245,240,232,0.96)'
    : menuOpen ? 'rgba(245,240,232,0.98)' : 'transparent';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      transition: 'all 0.4s ease',
      backgroundColor: navBg,
      backdropFilter: (scrolled || menuOpen) ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(201,168,76,0.2)' : '1px solid transparent',
      padding: scrolled ? '14px 0' : '22px 0',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 clamp(20px,5vw,40px)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', flexShrink: 0 }}>
          <div className="font-display" style={{ fontSize: '1.4rem', fontWeight: 400, color: 'var(--ink)', lineHeight: 1 }}>
            Eva Geister
          </div>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: '3px' }}>
            Reiseberatung
          </div>
        </a>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          {links.map(l => (
            <a key={l.label} href={l.href} className="nav-link">{l.label}</a>
          ))}
          <a href="#kontakt" className="gold-btn" style={{ fontSize: '0.68rem', padding: '10px 22px' }}>
            Anfrage senden
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menü öffnen"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--ink)', padding: '4px',
            display: 'none', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div style={{
        maxHeight: menuOpen ? '420px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.4s ease',
      }}>
        <div style={{
          padding: '24px clamp(20px,5vw,40px) 32px',
          borderTop: '1px solid rgba(201,168,76,0.15)',
        }}>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '13px 0',
                borderBottom: '1px solid rgba(201,168,76,0.1)',
                fontSize: '0.85rem',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="gold-btn"
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: '24px', fontSize: '0.72rem', padding: '12px 28px' }}
          >
            Anfrage senden
          </a>
        </div>
      </div>
    </nav>
  );
}