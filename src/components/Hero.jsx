import { ChevronDown, Globe } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

const tickerDE = [
  { name: 'Bangkok',      subtitle: 'Schwimmende Märkte', emoji: '🇹🇭' },
  { name: 'Taj Mahal',    subtitle: 'Agra, Indien',       emoji: '🇮🇳' },
  { name: 'Malediven',    subtitle: 'Unterwasserwelt',    emoji: '🏝️' },
  { name: 'Chichen Itza', subtitle: 'Maya-Pyramiden',     emoji: '🇲🇽' },
  { name: 'Kathmandu',    subtitle: 'Boudnath Stupa',     emoji: '🇳🇵' },
  { name: 'Mittelmeer',   subtitle: 'Kreuzfahrten',       emoji: '⛵' },
  { name: 'Marokko',      subtitle: 'Studienreise',       emoji: '🇲🇦' },
];
const tickerEN = [
  { name: 'Bangkok',      subtitle: 'Floating Markets',   emoji: '🇹🇭' },
  { name: 'Taj Mahal',    subtitle: 'Agra, India',        emoji: '🇮🇳' },
  { name: 'Maldives',     subtitle: 'Underwater World',   emoji: '🏝️' },
  { name: 'Chichen Itza', subtitle: 'Maya Pyramids',      emoji: '🇲🇽' },
  { name: 'Kathmandu',    subtitle: 'Boudnath Stupa',     emoji: '🇳🇵' },
  { name: 'Mediterranean',subtitle: 'Cruises',            emoji: '⛵' },
  { name: 'Morocco',      subtitle: 'Study Trip',         emoji: '🇲🇦' },
];

export default function Hero() {
  const { lang, t } = useLang();
  const ticker = lang === 'de' ? tickerDE : tickerEN;

  return (
    <section id="home" style={{
      minHeight: '100vh',
      paddingTop: 'clamp(100px,14vh,140px)',
      paddingBottom: '140px',
      position: 'relative',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      overflow: 'hidden', background: 'var(--sand)',
    }}>
      {/* Gradient blobs */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(ellipse at 70% 50%, rgba(201,168,76,0.08) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(107,124,94,0.06) 0%, transparent 50%)
        `,
      }} />

      {/* Decorative circles */}
      <div className="hero-circles" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{
          position: 'absolute', right: '-12%', top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(300px,55vw,700px)', height: 'clamp(300px,55vw,700px)',
          borderRadius: '50%', border: '1px solid rgba(201,168,76,0.15)',
        }} />
        <div style={{
          position: 'absolute', right: '-6%', top: '50%', transform: 'translateY(-50%)',
          width: 'clamp(220px,42vw,550px)', height: 'clamp(220px,42vw,550px)',
          borderRadius: '50%', border: '1px solid rgba(201,168,76,0.08)',
        }} />
      </div>

      {/* Floating globe */}
      <div className="globe-decoration animate-float" style={{
        position: 'absolute', right: '8%', top: '18%',
        color: 'rgba(201,168,76,0.13)', pointerEvents: 'none',
      }}>
        <Globe size={260} strokeWidth={0.5} />
      </div>

      {/* Main content */}
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <div className="animate-fade-up" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '28px' }}>
          <div style={{ width: '48px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
          <span style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            {t.hero.eyebrow}
          </span>
        </div>

        {/* Headline — layout shifts per language */}
        <h1 className="font-display animate-fade-up" style={{
          fontSize: 'clamp(2.8rem, 8vw, 7rem)',
          fontWeight: 300, lineHeight: 1.05, letterSpacing: '-0.01em',
          color: 'var(--ink)', maxWidth: '820px',
          animationDelay: '0.15s', opacity: 0,
        }}>
          {lang === 'de' ? (
            <>
              {t.hero.headline1}<br />
              <span style={{ fontStyle: 'italic', color: 'var(--terra)' }}>{t.hero.headline2}</span>
              {t.hero.headline3}
            </>
          ) : (
            <>
              {t.hero.headline1}<br />
              <span style={{ fontStyle: 'italic', color: 'var(--terra)' }}>{t.hero.headline2} </span>
              {t.hero.headline3}
            </>
          )}
        </h1>

        {/* Subline */}
        <p className="animate-fade-up" style={{
          maxWidth: '500px', lineHeight: 1.8,
          color: 'var(--ink-soft)', fontSize: 'clamp(0.95rem,1.8vw,1.05rem)',
          fontWeight: 300, marginTop: '24px',
          animationDelay: '0.3s', opacity: 0,
        }}>
          {t.hero.sub}
        </p>

        {/* CTAs */}
        <div className="animate-fade-up" style={{
          display: 'flex', gap: '14px', marginTop: '40px',
          flexWrap: 'wrap', animationDelay: '0.45s', opacity: 0,
        }}>
          <a href="#kontakt"  className="gold-btn">{t.hero.cta1}</a>
          <a href="#angebote" className="outline-btn">{t.hero.cta2}</a>
        </div>

        {/* Stats */}
        <div className="animate-fade-up" style={{
          display: 'flex', gap: 'clamp(24px,5vw,48px)',
          marginTop: '60px', paddingTop: '36px',
          borderTop: '1px solid rgba(201,168,76,0.2)',
          flexWrap: 'wrap', animationDelay: '0.6s', opacity: 0,
        }}>
          {[
            { num: t.hero.stat1num, label: t.hero.stat1label },
            { num: t.hero.stat2num, label: t.hero.stat2label },
            { num: t.hero.stat3num, label: t.hero.stat3label },
          ].map(s => (
            <div key={s.label}>
              <div className="font-display" style={{ fontSize: 'clamp(2rem,4vw,2.5rem)', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>
                {s.num}
              </div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginTop: '6px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ticker */}
      <div style={{
        position: 'absolute', bottom: '56px', left: 0, right: 0,
        overflow: 'hidden', padding: '11px 0',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
      }}>
        <div className="ticker-track" style={{ display: 'flex', gap: '48px', width: 'max-content' }}>
          {[...ticker, ...ticker, ...ticker].map((d, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', whiteSpace: 'nowrap' }}>
              <span style={{ fontSize: '1rem' }}>{d.emoji}</span>
              <span className="font-display" style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', fontStyle: 'italic' }}>{d.name}</span>
              <span style={{ color: 'var(--gold)', fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase' }}>{d.subtitle}</span>
              <span style={{ color: 'rgba(201,168,76,0.3)', marginLeft: '8px' }}>◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll chevron */}
      <a href="#angebote" className="scroll-bounce" style={{
        position: 'absolute', bottom: '16px', left: '50%',
        transform: 'translateX(-50%)',
        color: 'var(--gold)', display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: '4px', textDecoration: 'none',
      }}>
        <span style={{ fontSize: '0.58rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
          {t.hero.scroll}
        </span>
        <ChevronDown size={16} />
      </a>
    </section>
  );
}