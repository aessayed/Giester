import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const destinations = [
  {
    region: 'Asien',
    places: ['Bangkok', 'Malediven', 'Kathmandu', 'Agra'],
    color: '#c9a84c',
    description: 'Vom Treiben der schwimmenden Märkte bis zur Stille des Himalaya.',
    gradient: 'linear-gradient(135deg, #2d1b00 0%, #4a2800 100%)',
  },
  {
    region: 'Mittelmeer',
    places: ['Marokko', 'Türkei', 'Griechenland', 'Spanien'],
    color: '#6b7c5e',
    description: 'Jahrtausende Geschichte, Sonne und mediterrane Lebensfreude.',
    gradient: 'linear-gradient(135deg, #0a1a0f 0%, #162b1a 100%)',
  },
  {
    region: 'Amerika',
    places: ['Mexiko', 'Chichen Itza', 'Karibik', 'USA'],
    color: '#8b4a2f',
    description: 'Maya-Pyramiden, tropische Strände und endlose Weiten.',
    gradient: 'linear-gradient(135deg, #1a0808 0%, #2d1212 100%)',
  },
  {
    region: 'Europa',
    places: ['Italien', 'Ägypten', 'Kreuzfahrten', 'Städtereisen'],
    color: '#b8a082',
    description: 'Kunst, Kultur und unvergessliche Stadtmomente.',
    gradient: 'linear-gradient(135deg, #111118 0%, #1e1e2e 100%)',
  },
];

export default function Reisen() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.section-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="reisen" ref={ref} style={{ padding: 'clamp(72px,10vw,120px) 0', background: 'var(--sand-dark)', position: 'relative' }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-reveal" style={{ marginBottom: '52px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
            <div style={{ width: '48px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Reiseberichte & Regionen
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)' }}>
              Aus eigener<br /><span style={{ fontStyle: 'italic' }}>Erfahrung</span>
            </h2>
            <p style={{ maxWidth: '360px', color: 'var(--ink-soft)', fontWeight: 300, lineHeight: 1.72, fontSize: '0.94rem' }}>
              Beruflich und privat habe ich Länder rund um den Globus bereist —
              dieses Wissen gebe ich gerne an Sie weiter.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap: '18px',
        }}>
          {destinations.map((d, i) => (
            <div
              key={d.region}
              className="section-reveal card-hover"
              style={{
                background: d.gradient,
                padding: 'clamp(28px,4vw,40px) clamp(22px,3vw,32px)',
                position: 'relative', overflow: 'hidden', cursor: 'pointer',
                transitionDelay: `${i * 0.1}s`,
                minHeight: '260px',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
              }}
            >
              {/* Decorative circle */}
              <div style={{
                position: 'absolute', bottom: '-28px', right: '-28px',
                width: '120px', height: '120px', borderRadius: '50%',
                border: `1px solid ${d.color}22`, pointerEvents: 'none',
              }} />

              <div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: d.color, marginBottom: '14px' }}>
                  Region
                </div>
                <h3 className="font-display" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.4rem)', fontWeight: 300, color: '#f5f0e8', marginBottom: '14px', lineHeight: 1 }}>
                  {d.region}
                </h3>
                <p style={{ color: 'rgba(245,240,232,0.52)', fontSize: '0.86rem', lineHeight: 1.65, fontWeight: 300, marginBottom: '20px' }}>
                  {d.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {d.places.map(p => (
                    <span key={p} style={{
                      fontSize: '0.62rem', letterSpacing: '0.1em',
                      padding: '3px 9px', border: `1px solid ${d.color}40`,
                      color: `${d.color}bb`, textTransform: 'uppercase',
                    }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#kontakt" style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                color: d.color, fontSize: '0.7rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', marginTop: '28px', textDecoration: 'none',
              }}>
                <span>Anfragen</span>
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="section-reveal" style={{ marginTop: '64px', textAlign: 'center' }}>
          <p className="font-display" style={{
            fontSize: 'clamp(1.2rem, 2.8vw, 2rem)',
            fontWeight: 300, fontStyle: 'italic', color: 'var(--ink)',
            lineHeight: 1.55, maxWidth: '680px', margin: '0 auto',
          }}>
            „Durch regelmäßige Produktschulungen, Seminare und Studienreisen
            halte ich meine Kenntnisse stets auf dem Laufenden."
          </p>
          <div style={{ width: '40px', height: '1px', background: 'var(--gold)', margin: '22px auto 0' }} />
        </div>

      </div>
    </section>
  );
}