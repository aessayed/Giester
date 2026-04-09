import { useLang } from '../i18n/Langcontext';

export default function Footer() {
  const { t } = useLang();
  const navLinks = [
    [t.nav.home, '#home'], [t.nav.angebote,'#angebote'],
    [t.nav.ueber,'#ueber'], [t.nav.reisen,'#reisen'], [t.nav.kontakt,'#kontakt'],
  ];
  const contactLinks = [
    ['05121 / 28 82 54','tel:052122882854'],
    ['eva.geister@takeoff-reisen.de','mailto:eva.geister@takeoff-reisen.de'],
  ];

  return (
    <footer style={{ background:'#0e0c0a', padding:'clamp(40px,6vw,64px) 0 28px', borderTop:'1px solid rgba(201,168,76,0.1)' }}>
      <div className="section-inner">

        {/* Top row */}
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'flex-start',
          flexWrap:'wrap', gap:'36px', marginBottom:'48px',
        }}>
          <div>
            <div className="font-display" style={{ fontSize:'1.7rem', fontWeight:300, color:'#f5f0e8', marginBottom:'4px' }}>
              {t.footer.brand}
            </div>
            <div style={{ fontSize:'0.58rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--gold)' }}>
              {t.footer.brandSub}
            </div>
            <p style={{ marginTop:'14px', fontSize:'0.82rem', color:'rgba(245,240,232,0.3)', fontWeight:300, maxWidth:'240px', lineHeight:1.65 }}>
              {t.footer.brandDesc}
            </p>
          </div>

          <div style={{ display:'flex', gap:'clamp(28px,6vw,56px)', flexWrap:'wrap' }}>
            {[
              { label: t.footer.navLabel,     links: navLinks },
              { label: t.footer.contactLabel, links: contactLinks },
            ].map(col => (
              <div key={col.label}>
                <div style={{ fontSize:'0.58rem', letterSpacing:'0.3em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'14px' }}>
                  {col.label}
                </div>
                {col.links.map(([text, href]) => (
                  <a
                    key={text} href={href}
                    style={{
                      display:'block', color:'rgba(245,240,232,0.38)',
                      fontSize:'0.83rem', fontWeight:300, textDecoration:'none',
                      marginBottom:'8px', transition:'color 0.3s', wordBreak:'break-word',
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

        <div style={{ height:'1px', background:'rgba(245,240,232,0.05)', marginBottom:'22px' }} />

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'10px' }}>
          <div style={{ fontSize:'0.7rem', color:'rgba(245,240,232,0.18)', fontWeight:300 }}>
            © {new Date().getFullYear()} {t.footer.copy}
          </div>
          <div style={{ fontSize:'0.7rem', color:'rgba(245,240,232,0.18)', fontWeight:300 }}>
            {t.footer.partner}
          </div>
        </div>

      </div>
    </footer>
  );
}