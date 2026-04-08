import { useEffect, useRef } from 'react';
import { Award, BookOpen, MapPin } from 'lucide-react';

const timeline = [
  { year: '1987', text: 'Ausbildung zur Reiseverkehrskauffrau – FIRST Reisebüro, Münster' },
  { year: '1989', text: 'Wechsel nach Hildesheim – FIRST Reisebüro, Touristikabteilung' },
  { year: '1997', text: 'Ausbildereignungsprüfung, IHK Hannover' },
  { year: '1999', text: 'rt-touristik Hildesheim' },
  { year: '2012', text: 'Gründung der eigenen Reiseberatung – Kooperation mit TAKE OFF' },
];

export default function UeberMich() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    const els = ref.current?.querySelectorAll('.section-reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ueber" ref={ref} style={{
      padding: '120px 0',
      background: 'var(--ink)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.07)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-30%',
        left: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.05)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <div className="section-reveal" style={{ marginBottom: '48px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div style={{ width: '48px', height: '1px', background: 'var(--gold)' }} />
                <span style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  Über mich
                </span>
              </div>

              <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: '#f5f0e8' }}>
                Eva Geister —<br />
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Ihre persönliche</span><br />
                Reiseberaterin
              </h2>
            </div>

            <div className="section-reveal" style={{ transitionDelay: '0.15s' }}>
              <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, fontSize: '0.97rem', fontWeight: 300, marginBottom: '20px' }}>
                Schon sehr früh interessierte ich mich für fremde Sprachen, ferne Länder und Kulturen. 
                Nach einer intensiven Ausbildung und Jahrzehnten in der Reisebranche erfüllte ich mir im 
                Juni 2012 meinen beruflichen Traum von der Selbständigkeit.
              </p>
              <p style={{ color: 'rgba(245,240,232,0.7)', lineHeight: 1.85, fontSize: '0.97rem', fontWeight: 300, marginBottom: '32px' }}>
                Persönlicher Service bedeutet für mich: Ich kenne Sie, Ihre Wünsche und Vorstellungen — 
                und gestalte Ihren Urlaub so, als wäre es meiner. Denn Urlaub ist Vertrauenssache und ganz persönlich.
              </p>

              {/* Badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {[
                  { icon: MapPin, text: 'Hildesheim' },
                  { icon: Award, text: 'IHK-zertifiziert' },
                  { icon: BookOpen, text: 'TAKE OFF Partner' },
                ].map(b => {
                  const Icon = b.icon;
                  return (
                    <div key={b.text} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      border: '1px solid rgba(201,168,76,0.3)',
                      color: 'var(--gold)',
                      fontSize: '0.75rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}>
                      <Icon size={14} strokeWidth={1.5} />
                      {b.text}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="section-reveal" style={{ transitionDelay: '0.3s', marginTop: '48px' }}>
              <p className="font-display" style={{
                fontSize: '1.25rem',
                fontStyle: 'italic',
                color: 'rgba(245,240,232,0.5)',
                lineHeight: 1.6,
                borderLeft: '2px solid var(--gold)',
                paddingLeft: '24px',
              }}>
                „Die schwimmenden Märkte in Bangkok, das Taj Mahal in Agra, die unbeschreibliche 
                Unterwasserwelt auf den Malediven — ich habe all das selbst erlebt."
              </p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="section-reveal" style={{ transitionDelay: '0.2s' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '32px' }}>
              Beruflicher Werdegang
            </div>

            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute',
                left: '52px',
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(180deg, var(--gold), rgba(201,168,76,0.1))',
              }} />

              {timeline.map((t, i) => (
                <div key={t.year} style={{
                  display: 'flex',
                  gap: '24px',
                  marginBottom: i < timeline.length - 1 ? '36px' : 0,
                  alignItems: 'flex-start',
                }}>
                  {/* Year bubble */}
                  <div className="font-display" style={{
                    minWidth: "60px",
                    fontSize: '1.1rem',
                    color: 'var(--gold)',
                    fontWeight: 300,
                    paddingTop: '2px',
                    textAlign: 'right',
                    paddingRight: '24px',
                  }}>
                    {t.year}
                  </div>

                  {/* Dot */}
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    marginTop: '6px',
                    flexShrink: 0,
                    boxShadow: '0 0 12px rgba(201,168,76,0.4)',
                  }} />

                  {/* Text */}
                  <div style={{ color: 'rgba(245,240,232,0.65)', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.6, paddingLeft: '8px' }}>
                    {t.text}
                  </div>
                </div>
              ))}

              {/* Today marker */}
              <div style={{ display: 'flex', gap: '24px', alignItems: 'center', marginTop: '36px' }}>
                <div className="font-display" style={{ minWidth: '80px', fontSize: '1.1rem', color: 'rgba(245,240,232,0.4)', fontWeight: 300, textAlign: 'right', paddingRight: '24px' }}>
                  Heute
                </div>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', border: '2px solid var(--gold)', flexShrink: 0 }} />
                <div style={{ color: 'rgba(245,240,232,0.4)', fontSize: '0.85rem', paddingLeft: '8px', fontStyle: 'italic' }}>
                  Für Sie da
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #ueber .grid-cols-2-about { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}