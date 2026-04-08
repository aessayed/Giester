import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactItems = [
  { icon: Phone, label: 'Telefon',        lines: ['05121 / 28 82 54', '0152 / 21 63 52 35'] },
  { icon: Mail,  label: 'E-Mail',         lines: ['eva.geister@takeoff-reisen.de'] },
  { icon: MapPin,label: 'Adresse',        lines: ['Bergäcker 23', '31137 Hildesheim'] },
  { icon: Clock, label: 'Erreichbarkeit', lines: ['Nach Vereinbarung', 'Persönliche Beratung'] },
];

const inputBase = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(201,168,76,0.3)',
  padding: '11px 0',
  color: '#f5f0e8',
  fontSize: '0.94rem',
  fontFamily: 'DM Sans, sans-serif',
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 0.3s',
};

export default function Kontakt() {
  const ref  = useRef(null);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', telefon: '', reise: '', nachricht: '' });

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
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

  return (
    <section id="kontakt" ref={ref} style={{
      padding: 'clamp(72px,10vw,120px) 0',
      background: 'var(--ink)', position: 'relative', overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 50%)',
      }} />

      <div className="section-inner">
        {/* two-col-contact collapses on ≤900 px */}
        <div className="two-col-contact">

          {/* ── Left: info ── */}
          <div>
            <div className="section-reveal" style={{ marginBottom: '44px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                <div style={{ width: '48px', height: '1px', background: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  Kontakt
                </span>
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: '#f5f0e8' }}>
                Lassen Sie uns<br />
                <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Ihre Reise</span><br />
                planen.
              </h2>
            </div>

            <div className="section-reveal" style={{ transitionDelay: '0.12s' }}>
              {contactItems.map(c => {
                const Icon = c.icon;
                return (
                  <div key={c.label} style={{ display: 'flex', gap: '18px', marginBottom: '28px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '38px', height: '38px', flexShrink: 0,
                      border: '1px solid rgba(201,168,76,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--gold)',
                    }}>
                      <Icon size={15} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '5px' }}>
                        {c.label}
                      </div>
                      {c.lines.map(line => (
                        <div key={line} style={{ color: 'rgba(245,240,232,0.68)', fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.6 }}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="section-reveal" style={{ transitionDelay: '0.24s' }}>
              <div style={{ padding: '22px', border: '1px solid rgba(201,168,76,0.15)' }}>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '7px' }}>
                  Kooperation
                </div>
                <div className="font-display" style={{ fontSize: '1.35rem', color: '#f5f0e8', fontWeight: 300 }}>
                  TAKE OFF Reisen
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(245,240,232,0.42)', fontWeight: 300, marginTop: '5px' }}>
                  Professionalität & Sicherheit
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div className="section-reveal" style={{ transitionDelay: '0.18s' }}>
            {sent ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', padding: '72px 32px',
                textAlign: 'center', border: '1px solid rgba(201,168,76,0.2)', minHeight: '360px',
              }}>
                <CheckCircle size={44} color="var(--gold)" strokeWidth={1} style={{ marginBottom: '20px' }} />
                <h3 className="font-display" style={{ fontSize: '1.9rem', color: '#f5f0e8', fontWeight: 300, marginBottom: '10px' }}>
                  Vielen Dank!
                </h3>
                <p style={{ color: 'rgba(245,240,232,0.48)', fontWeight: 300, fontSize: '0.92rem' }}>
                  Ihre E-Mail-App wird geöffnet. Ich melde mich so schnell wie möglich bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '22px' }}>
                  Reiseanfrage
                </div>

                {/* Name + Email – collapses to 1 col on mobile via .form-row */}
                <div className="form-row">
                  <div>
                    <label style={{ fontSize: '0.62rem', color: 'rgba(245,240,232,0.38)', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '7px' }}>
                      Name *
                    </label>
                    <input required value={form.name} onChange={update('name')} style={inputBase} placeholder="Ihr Name" />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.62rem', color: 'rgba(245,240,232,0.38)', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '7px' }}>
                      E-Mail *
                    </label>
                    <input required type="email" value={form.email} onChange={update('email')} style={inputBase} placeholder="ihre@email.de" />
                  </div>
                </div>

                {[
                  { key: 'telefon',  label: 'Telefon',                    ph: 'Ihre Telefonnummer',                        required: false },
                  { key: 'reise',    label: 'Gewünschte Reise / Reiseziel', ph: 'z.B. Kreuzfahrt Mittelmeer, Thailand…',  required: false },
                ].map(f => (
                  <div key={f.key} style={{ marginTop: '22px' }}>
                    <label style={{ fontSize: '0.62rem', color: 'rgba(245,240,232,0.38)', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '7px' }}>
                      {f.label}
                    </label>
                    <input
                      value={form[f.key]}
                      onChange={update(f.key)}
                      style={inputBase}
                      placeholder={f.ph}
                    />
                  </div>
                ))}

                <div style={{ marginTop: '22px' }}>
                  <label style={{ fontSize: '0.62rem', color: 'rgba(245,240,232,0.38)', letterSpacing: '0.14em', textTransform: 'uppercase', display: 'block', marginBottom: '7px' }}>
                    Ihre Wünsche & Vorstellungen
                  </label>
                  <textarea
                    value={form.nachricht}
                    onChange={update('nachricht')}
                    rows={5}
                    style={{ ...inputBase, resize: 'vertical', minHeight: '110px' }}
                    placeholder="Reisezeit, Personenanzahl, Budget, besondere Wünsche…"
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', marginTop: '32px' }}>
                  <p style={{ fontSize: '0.72rem', color: 'rgba(245,240,232,0.28)', fontWeight: 300 }}>* Pflichtfelder</p>
                  <button type="submit" className="gold-btn" style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                    <span>Anfrage senden</span>
                    <Send size={13} />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>{/* end two-col-contact */}
      </div>
    </section>
  );
}