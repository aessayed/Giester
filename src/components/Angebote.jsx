import { useEffect, useRef } from 'react';
import { Ship, Plane, Compass, Heart, Users, Sunset } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

const icons = [Ship, Compass, Sunset, Heart, Plane, Users];

export default function Angebote() {
  const { t } = useLang();
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
    <section id="angebote" ref={ref} style={{ padding: 'clamp(72px,10vw,120px) 0', background: 'var(--sand)', position: 'relative' }}>
      <div className="side-label" style={{
        position: 'absolute', left: '18px', top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)', transformOrigin: 'center center',
        fontSize: '0.58rem', letterSpacing: '0.4em', textTransform: 'uppercase',
        color: 'rgba(201,168,76,0.35)', whiteSpace: 'nowrap', pointerEvents: 'none',
      }}>
        Leistungen · Services
      </div>

      <div className="section-inner">
        {/* Header */}
        <div className="section-reveal" style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
            <div style={{ width: '48px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
            <span style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              {t.angebote.eyebrow}
            </span>
          </div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--ink)' }}>
            {t.angebote.headline1}<br />
            <span style={{ fontStyle: 'italic' }}>{t.angebote.headline2}</span>
          </h2>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '2px',
        }}>{console.log(t.angebote.services)}
          {t?.angebote?.services?.map((s, i)  => {
            const Icon = icons[i] || Ship;
            return (
              <div
                key={i}
                className="section-reveal card-hover"
                style={{
                  background: i % 2 === 0 ? 'rgba(232,223,200,0.5)' : 'rgba(245,240,232,0.8)',
                  padding: 'clamp(28px,4vw,40px) clamp(22px,3vw,36px)',
                  transitionDelay: `${i * 0.08}s`,
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Background number */}
                <div className="font-display" style={{
                  position: 'absolute', top: '16px', right: '20px',
                  fontSize: '3.5rem', fontWeight: 300,
                  color: 'rgba(201,168,76,0.08)', lineHeight: 1, userSelect: 'none',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div style={{
                  width: '44px', height: '44px',
                  border: '1px solid rgba(201,168,76,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '22px', color: 'var(--gold)',
                }}>
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                <div style={{ fontSize: '0.63rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>
                  {s.subtitle}
                </div>
                <h3 className="font-display" style={{ fontSize: '1.55rem', fontWeight: 400, color: 'var(--ink)', marginBottom: '12px' }}>
                  {s.title}
                </h3>
                <p style={{ color: 'var(--ink-soft)', lineHeight: 1.75, fontSize: '0.9rem', fontWeight: 300, marginBottom: '12px' }}>
                  {s.desc}
                </p>
                {/* Extra line — richer content */}
                <p style={{ color: 'var(--sage)', lineHeight: 1.65, fontSize: '0.82rem', fontWeight: 300, fontStyle: 'italic', borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: '12px', marginTop: '4px' }}>
                  {s.extra}
                </p>

                {/* Hover accent */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, var(--gold), transparent)',
                  transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.4s ease',
                }} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="section-reveal" style={{ textAlign: 'center', marginTop: '56px' }}>
          <p className="font-display" style={{ fontSize: 'clamp(1.1rem,2.5vw,1.4rem)', fontStyle: 'italic', color: 'var(--ink-soft)', marginBottom: '24px' }}>
            {t.angebote.quote}
          </p>
          <a href="#kontakt" className="gold-btn">{t.angebote.cta}</a>
        </div>
      </div>
    </section>
  );
}