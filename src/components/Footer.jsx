const navLinks   = [['Home','#home'],['Angebote','#angebote'],['Über mich','#ueber'],['Reisen','#reisen'],['Kontakt','#kontakt']];
const contactLinks = [['05121 / 28 82 54','tel:052122882854'],['eva.geister@takeoff-reisen.de','mailto:eva.geister@takeoff-reisen.de']];

export default function Footer() {
  return (
    <footer style={{ background: '#0e0c0a', padding: 'clamp(40px,6vw,64px) 0 28px', borderTop: '1px solid rgba(201,168,76,0.1)' }}>
      <div className="section-inner">

        {/* Top row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          flexWrap: 'wrap', gap: '36px', marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <div className="font-display" style={{ fontSize: '1.7rem', fontWeight: 300, color: '#f5f0e8', marginBottom: '4px' }}>
              Eva Geister
            </div>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Reiseberatung · Hildesheim
            </div>
            <p style={{ marginTop: '14px', fontSize: '0.82rem', color: 'rgba(245,240,232,0.3)', fontWeight: 300, maxWidth: '240px', lineHeight: 1.65 }}>
              Persönliche Reiseberatung seit 2012. In Kooperation mit TAKE OFF Reisen.
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: 'flex', gap: 'clamp(28px,6vw,56px)', flexWrap: 'wrap' }}>
            {[
              { label: 'Navigation', links: navLinks },
              { label: 'Kontakt',    links: contactLinks },
            ].map(col => (
              <div key={col.label}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>
                  {col.label}
                </div>
                {col.links.map(([text, href]) => (
                  <a
                    key={text} href={href}
                    style={{
                      display: 'block', color: 'rgba(245,240,232,0.38)',
                      fontSize: '0.83rem', fontWeight: 300,
                      textDecoration: 'none', marginBottom: '8px',
                      transition: 'color 0.3s', wordBreak: 'break-word',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(245,240,232,0.78)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.38)'}
                  >
                    {text}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(245,240,232,0.05)', marginBottom: '22px' }} />

        {/* Bottom row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: '10px',
        }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(245,240,232,0.18)', fontWeight: 300 }}>
            © {new Date().getFullYear()} Eva Geister Reiseberatung · Bergäcker 23, 31137 Hildesheim
          </div>
          <div style={{ fontSize: '0.7rem', color: 'rgba(245,240,232,0.18)', fontWeight: 300 }}>
            In Kooperation mit TAKE OFF Reisen
          </div>
        </div>

      </div>
    </footer>
  );
}