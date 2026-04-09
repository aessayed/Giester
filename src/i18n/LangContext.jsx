import { createContext, useContext, useState } from 'react';
import { translations } from './translations.js';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('de');
  const t = translations[lang];
  const toggle = () => setLang(l => (l === 'de' ? 'en' : 'de'));

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);