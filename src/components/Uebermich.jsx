import { useEffect, useRef } from 'react';
import { Award, BookOpen, MapPin, Star } from 'lucide-react';
import { useLang } from '../i18n/Langcontext';

export default function UeberMich() {
  const { t } = useLang();
  const ref = useRef(null);
  const tl = t.ueber.timeline;
  const hl = t.ueber.highlights;

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.section-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const badgeIcons = [MapPin, Award, BookOpen];
  const badgeTexts = [t.ueber.badge1, t.ueber.badge2, t.ueber.badge3];

  return (
    <section id="ueber" ref={ref} style={{
      padding: 'clamp(72px,10vw,120px) 0',
      background: 'var(--ink)', position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{ position:'absolute', top:'-20%', right:'-10%', width:'clamp(240px,50vw,600px)', height:'clamp(240px,50vw,600px)', borderRadius:'50%', border:'1px solid rgba(201,168,76,0.07)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'-30%', left:'-5%', width:'clamp(160px,35vw,400px)', height:'clamp(160px,35vw,400px)', borderRadius:'50%', border:'1px solid rgba(201,168,76,0.05)', pointerEvents:'none' }} />

      <div className="section-inner">
        <div className="two-col">

          {/* ── Left ── */}
          <div>
            {/* Heading */}
            <div className="section-reveal" style={{ marginBottom: '36px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'18px' }}>
                <div style={{ width:'48px', height:'1px', background:'var(--gold)', flexShrink:0 }} />
                <span style={{ fontSize:'0.68rem', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)' }}>
                  {t.ueber.eyebrow}
                </span>
              </div>
              <h2 className="font-display" style={{ fontSize:'clamp(2.2rem,4vw,3.8rem)', fontWeight:300, lineHeight:1.1, color:'#f5f0e8' }}>
                {t.ueber.headline1}<br />
                <span style={{ fontStyle:'italic', color:'var(--gold)' }}>{t.ueber.headline2}</span><br />
                {t.ueber.headline3}
              </h2>
            </div>

            {/* Four paragraphs — richer content */}
            <div className="section-reveal" style={{ transitionDelay:'0.1s' }}>
              {[t.ueber.p1, t.ueber.p2, t.ueber.p3, t.ueber.p4].map((para, i) => (
                <p key={i} style={{ color:'rgba(245,240,232,0.7)', lineHeight:1.85, fontSize:'0.93rem', fontWeight:300, marginBottom:'16px' }}>
                  {para}
                </p>
              ))}

              {/* Badges */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'10px', marginTop:'20px' }}>
                {badgeTexts.map((text, i) => {
                  const Icon = badgeIcons[i];
                  return (
                    <div key={text} style={{
                      display:'flex', alignItems:'center', gap:'8px',
                      padding:'7px 13px', border:'1px solid rgba(201,168,76,0.3)',
                      color:'var(--gold)', fontSize:'0.7rem', letterSpacing:'0.1em', textTransform:'uppercase',
                    }}>
                      <Icon size={12} strokeWidth={1.5} />
                      {text}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pull quote */}
            <div className="section-reveal" style={{ transitionDelay:'0.22s', marginTop:'36px' }}>
              <p className="font-display" style={{
                fontSize:'clamp(1rem,2vw,1.2rem)', fontStyle:'italic',
                color:'rgba(245,240,232,0.5)', lineHeight:1.65,
                borderLeft:'2px solid var(--gold)', paddingLeft:'22px',
              }}>
                {t.ueber.quote}
              </p>
            </div>

            {/* Highlights grid */}
            <div className="section-reveal" style={{ transitionDelay:'0.32s', marginTop:'36px' }}>
              <div style={{ fontSize:'0.62rem', letterSpacing:'0.26em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'16px' }}>
                {hl.label}
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(140px,1fr))', gap:'8px' }}>
                {hl.places.map(p => (
                  <div key={p.name} style={{
                    padding:'10px 14px',
                    background:'rgba(245,240,232,0.04)',
                    border:'1px solid rgba(201,168,76,0.12)',
                  }}>
                    <div style={{ display:'flex', alignItems:'center', gap:'6px', marginBottom:'3px' }}>
                      <Star size={10} color="var(--gold)" strokeWidth={1.5} />
                      <div style={{ fontSize:'0.82rem', color:'#f5f0e8', fontWeight:300 }}>{p.name}</div>
                    </div>
                    <div style={{ fontSize:'0.68rem', color:'rgba(245,240,232,0.38)', letterSpacing:'0.05em' }}>{p.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Timeline ── */}
          <div className="section-reveal" style={{ transitionDelay:'0.16s' }}>
            <div style={{ fontSize:'0.68rem', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'28px' }}>
              {tl.label}
            </div>

            <div style={{ position:'relative' }}>
              {/* Vertical line */}
              <div style={{
                position:'absolute', left:'52px', top:0, bottom:0, width:'1px',
                background:'linear-gradient(180deg, var(--gold), rgba(201,168,76,0.06))',
              }} />

              {tl.events.map((ev, i) => (
                <div key={ev.year} style={{
                  display:'flex', gap:'20px', alignItems:'flex-start',
                  marginBottom: i < tl.events.length - 1 ? '32px' : 0,
                }}>
                  <div className="font-display" style={{
                    minWidth:'60px', fontSize:'1.05rem', color:'var(--gold)',
                    fontWeight:300, paddingTop:'2px', textAlign:'right', paddingRight:'20px', flexShrink:0,
                  }}>
                    {ev.year}
                  </div>
                  <div style={{
                    width:'8px', height:'8px', borderRadius:'50%',
                    background:'var(--gold)', marginTop:'6px', flexShrink:0,
                    boxShadow:'0 0 10px rgba(201,168,76,0.4)',
                  }} />
                  <div style={{ color:'rgba(245,240,232,0.62)', fontSize:'0.88rem', fontWeight:300, lineHeight:1.65, paddingLeft:'6px' }}>
                    {ev.text}
                  </div>
                </div>
              ))}

              {/* Today */}
              <div style={{ display:'flex', gap:'20px', alignItems:'center', marginTop:'32px' }}>
                <div className="font-display" style={{
                  minWidth:'60px', fontSize:'1.05rem', color:'rgba(245,240,232,0.32)',
                  fontWeight:300, textAlign:'right', paddingRight:'20px', flexShrink:0,
                }}>
                  {tl.today}
                </div>
                <div style={{ width:'12px', height:'12px', borderRadius:'50%', border:'2px solid var(--gold)', flexShrink:0 }} />
                <div style={{ color:'rgba(245,240,232,0.32)', fontSize:'0.84rem', paddingLeft:'6px', fontStyle:'italic' }}>
                  {tl.todayLabel}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}