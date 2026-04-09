import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ShieldCheck, Clock3, Globe2, Star } from 'lucide-react';
import { useLang } from '../i18n/LangContext';

const inputBase = {
  width:'100%', background:'transparent', border:'none',
  borderBottom:'1px solid rgba(201,168,76,0.3)',
  padding:'11px 0', color:'#f5f0e8', fontSize:'0.94rem',
  fontFamily:'DM Sans, sans-serif', fontWeight:300,
  outline:'none', transition:'border-color 0.3s',
};

const reasonIcons = [Star, Clock3, Globe2, ShieldCheck];

export default function Kontakt() {
  const { t } = useLang();
  const ref = useRef(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:'', email:'', telefon:'', reise:'', nachricht:'' });

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.section-reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const update = key => e => setForm(f => ({ ...f, [key]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    const subject = encodeURIComponent(`Reiseanfrage von ${form.name}`);
    const body    = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nTelefon: ${form.telefon}\nGewünschte Reise: ${form.reise}\n\nNachricht:\n${form.nachricht}`
    );
    window.location.href = `mailto:eva.geister@takeoff-reisen.de?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contactItems = [
    { icon: Phone, label: t.kontakt.tel,          lines: ['05121 / 28 82 54', '0152 / 21 63 52 35'] },
    { icon: Mail,  label: t.kontakt.email,         lines: ['eva.geister@takeoff-reisen.de'] },
    { icon: MapPin,label: t.kontakt.address,       lines: ['Bergäcker 23', '31137 Hildesheim'] },
    { icon: Clock, label: t.kontakt.availability,  lines: t.kontakt.availLines },
  ];

  return (
    <section id="kontakt" ref={ref} style={{
      padding:'clamp(72px,10vw,120px) 0',
      background:'var(--ink)', position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', inset:0, pointerEvents:'none',
        backgroundImage:'radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%)',
      }} />

      <div className="section-inner">
        <div className="two-col-contact">

          {/* ── Left ── */}
          <div>
            {/* Heading */}
            <div className="section-reveal" style={{ marginBottom:'40px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'16px', marginBottom:'18px' }}>
                <div style={{ width:'48px', height:'1px', background:'var(--gold)', flexShrink:0 }} />
                <span style={{ fontSize:'0.68rem', letterSpacing:'0.28em', textTransform:'uppercase', color:'var(--gold)' }}>
                  {t.kontakt.eyebrow}
                </span>
              </div>
              <h2 className="font-display" style={{ fontSize:'clamp(2.2rem,4vw,3.8rem)', fontWeight:300, lineHeight:1.1, color:'#f5f0e8' }}>
                {t.kontakt.headline1}<br />
                <span style={{ fontStyle:'italic', color:'var(--gold)' }}>{t.kontakt.headline2}</span><br />
                {t.kontakt.headline3}
              </h2>
            </div>

            {/* Contact details */}
            <div className="section-reveal" style={{ transitionDelay:'0.1s' }}>
              {contactItems.map(c => {
                const Icon = c.icon;
                return (
                  <div key={c.label} style={{ display:'flex', gap:'18px', marginBottom:'26px', alignItems:'flex-start' }}>
                    <div style={{
                      width:'38px', height:'38px', flexShrink:0,
                      border:'1px solid rgba(201,168,76,0.3)',
                      display:'flex', alignItems:'center', justifyContent:'center', color:'var(--gold)',
                    }}>
                      <Icon size={15} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div style={{ fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'5px' }}>
                        {c.label}
                      </div>
                      {c.lines.map(line => (
                        <div key={line} style={{ color:'rgba(245,240,232,0.68)', fontSize:'0.9rem', fontWeight:300, lineHeight:1.6 }}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* TAKE OFF box */}
            <div className="section-reveal" style={{ transitionDelay:'0.2s', marginBottom:'32px' }}>
              <div style={{ padding:'22px', border:'1px solid rgba(201,168,76,0.15)' }}>
                <div style={{ fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'7px' }}>
                  {t.kontakt.koopLabel}
                </div>
                <div className="font-display" style={{ fontSize:'1.35rem', color:'#f5f0e8', fontWeight:300 }}>
                  {t.kontakt.koopName}
                </div>
                <div style={{ fontSize:'0.8rem', color:'rgba(245,240,232,0.42)', fontWeight:300, marginTop:'5px' }}>
                  {t.kontakt.koopSub}
                </div>
              </div>
            </div>

            {/* Why book with me — new section */}
            <div className="section-reveal" style={{ transitionDelay:'0.28s' }}>
              <div style={{ fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'18px' }}>
                {t.kontakt.whyTitle}
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'14px' }}>
                {t.kontakt.reasons.map((r, i) => {
                  const Icon = reasonIcons[i];
                  return (
                    <div key={r.title} style={{ display:'flex', gap:'14px', alignItems:'flex-start' }}>
                      <div style={{ color:'var(--gold)', marginTop:'2px', flexShrink:0 }}>
                        <Icon size={14} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div style={{ color:'rgba(245,240,232,0.75)', fontSize:'0.86rem', fontWeight:400, marginBottom:'2px' }}>{r.title}</div>
                        <div style={{ color:'rgba(245,240,232,0.42)', fontSize:'0.8rem', fontWeight:300, lineHeight:1.55 }}>{r.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="section-reveal" style={{ transitionDelay:'0.16s' }}>
            {sent ? (
              <div style={{
                display:'flex', flexDirection:'column', alignItems:'center',
                justifyContent:'center', padding:'72px 32px',
                textAlign:'center', border:'1px solid rgba(201,168,76,0.2)', minHeight:'360px',
              }}>
                <CheckCircle size={44} color="var(--gold)" strokeWidth={1} style={{ marginBottom:'20px' }} />
                <h3 className="font-display" style={{ fontSize:'1.9rem', color:'#f5f0e8', fontWeight:300, marginBottom:'10px' }}>
                  {t.kontakt.thankTitle}
                </h3>
                <p style={{ color:'rgba(245,240,232,0.48)', fontWeight:300, fontSize:'0.92rem' }}>
                  {t.kontakt.thankSub}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column' }}>
                <div style={{ fontSize:'0.62rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'22px' }}>
                  {t.kontakt.formTitle}
                </div>

                {/* Name + Email */}
                <div className="form-row">
                  <div>
                    <label style={{ fontSize:'0.62rem', color:'rgba(245,240,232,0.38)', letterSpacing:'0.14em', textTransform:'uppercase', display:'block', marginBottom:'7px' }}>
                      {t.kontakt.labelName} *
                    </label>
                    <input required value={form.name} onChange={update('name')} style={inputBase} placeholder={t.kontakt.phName} />
                  </div>
                  <div>
                    <label style={{ fontSize:'0.62rem', color:'rgba(245,240,232,0.38)', letterSpacing:'0.14em', textTransform:'uppercase', display:'block', marginBottom:'7px' }}>
                      {t.kontakt.labelEmail} *
                    </label>
                    <input required type="email" value={form.email} onChange={update('email')} style={inputBase} placeholder={t.kontakt.phEmail} />
                  </div>
                </div>

                {/* Phone */}
                <div style={{ marginTop:'22px' }}>
                  <label style={{ fontSize:'0.62rem', color:'rgba(245,240,232,0.38)', letterSpacing:'0.14em', textTransform:'uppercase', display:'block', marginBottom:'7px' }}>
                    {t.kontakt.labelPhone}
                  </label>
                  <input value={form.telefon} onChange={update('telefon')} style={inputBase} placeholder={t.kontakt.phPhone} />
                </div>

                {/* Destination */}
                <div style={{ marginTop:'22px' }}>
                  <label style={{ fontSize:'0.62rem', color:'rgba(245,240,232,0.38)', letterSpacing:'0.14em', textTransform:'uppercase', display:'block', marginBottom:'7px' }}>
                    {t.kontakt.labelDest}
                  </label>
                  <input value={form.reise} onChange={update('reise')} style={inputBase} placeholder={t.kontakt.phDest} />
                </div>

                {/* Message */}
                <div style={{ marginTop:'22px' }}>
                  <label style={{ fontSize:'0.62rem', color:'rgba(245,240,232,0.38)', letterSpacing:'0.14em', textTransform:'uppercase', display:'block', marginBottom:'7px' }}>
                    {t.kontakt.labelMsg}
                  </label>
                  <textarea
                    value={form.nachricht} onChange={update('nachricht')} rows={5}
                    style={{ ...inputBase, resize:'vertical', minHeight:'110px' }}
                    placeholder={t.kontakt.phMsg}
                  />
                </div>

                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'14px', marginTop:'32px' }}>
                  <p style={{ fontSize:'0.72rem', color:'rgba(245,240,232,0.28)', fontWeight:300 }}>{t.kontakt.required}</p>
                  <button type="submit" className="gold-btn" style={{ display:'flex', alignItems:'center', gap:'9px' }}>
                    <span>{t.kontakt.submit}</span>
                    <Send size={13} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}