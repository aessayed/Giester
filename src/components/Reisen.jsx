import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

export default function Reisen() {
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
    <section id="reisen" ref={ref} style={{ padding: 'clamp(72px,10vw,120px) 0', background: 'var(--sand-dark)', position: 'relative' }}>
      <div className="section-inner">

        {/* Header */}
        <div className="section-reveal" style={{ marginBottom: '52px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'18px' }}>
            <div style={{ width:'48px', height:'1px', background:'var(--gold)', flexShrink:0 }} />
            <span style={{ fontSize:'0.68rem', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)' }}>
              {t.reisen.eyebrow}
            </span>
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:'24px' }}>
            <h2 className="font-display" style={{ fontSize:'clamp(2.2rem,5vw,4rem)', fontWeight:300, lineHeight:1.1, color:'var(--ink)' }}>
              {t.reisen.headline1}<br /><span style={{ fontStyle:'italic' }}>{t.reisen.headline2}</span>
            </h2>
            <p style={{ maxWidth:'360px', color:'var(--ink-soft)', fontWeight:300, lineHeight:1.72, fontSize:'0.94rem' }}>
              {t.reisen.sub}
            </p>
          </div>
        </div>

        {/* Destination cards */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
          gap:'6px',
        }}>
          {t.reisen.destinations.map((d, i) => (
            <div
              key={i}
              className="section-reveal card-hover"
              style={{
                background: d.gradient,
                padding: 'clamp(28px,4vw,40px) clamp(22px,3vw,32px)',
                position:'relative', overflow:'hidden', cursor:'pointer',
                transitionDelay: `${i * 0.1}s`,
                minHeight:'300px',
                display:'flex', flexDirection:'column', justifyContent:'space-between',
              }}
            >
              <div style={{
                position:'absolute', bottom:'-28px', right:'-28px',
                width:'120px', height:'120px', borderRadius:'50%',
                border:`1px solid ${d.color}22`, pointerEvents:'none',
              }} />

              <div>
                <div style={{ fontSize:'0.62rem', letterSpacing:'0.28em', textTransform:'uppercase', color:d.color, marginBottom:'14px' }}>
                  Region
                </div>
                <h3 className="font-display" style={{ fontSize:'clamp(2rem,3.5vw,2.4rem)', fontWeight:300, color:'#f5f0e8', marginBottom:'12px', lineHeight:1 }}>
                  {d.region}
                </h3>
                <p style={{ color:'rgba(245,240,232,0.55)', fontSize:'0.88rem', lineHeight:1.68, fontWeight:300, marginBottom:'12px' }}>
                  {d.description}
                </p>
                {/* Extra detail line */}
                <p style={{ color:'rgba(245,240,232,0.38)', fontSize:'0.8rem', lineHeight:1.62, fontWeight:300, fontStyle:'italic', marginBottom:'18px' }}>
                  {d.detail}
                </p>
                <div style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
                  {d.places.map(p => (
                    <span key={p} style={{
                      fontSize:'0.62rem', letterSpacing:'0.1em',
                      padding:'3px 9px', border:`1px solid ${d.color}40`,
                      color:`${d.color}bb`, textTransform:'uppercase',
                    }}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <a href="#kontakt" style={{
                display:'flex', alignItems:'center', gap:'7px',
                color:d.color, fontSize:'0.7rem', letterSpacing:'0.14em',
                textTransform:'uppercase', marginTop:'28px', textDecoration:'none',
              }}>
                <span>{t.reisen.anfragen}</span>
                <ArrowRight size={13} />
              </a>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="section-reveal" style={{ marginTop:'64px', textAlign:'center' }}>
          <p className="font-display" style={{
            fontSize:'clamp(1.2rem,2.8vw,2rem)',
            fontWeight:300, fontStyle:'italic', color:'var(--ink)',
            lineHeight:1.55, maxWidth:'680px', margin:'0 auto',
          }}>
            {t.reisen.quote}
          </p>
          <div style={{ width:'40px', height:'1px', background:'var(--gold)', margin:'22px auto 0' }} />
        </div>

      </div>
    </section>
  );
}