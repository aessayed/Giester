import './index.css'
import { LangProvider } from './i18n/Langcontext.jsx'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Angebote from './components/Angebote'
import UeberMich from './components/Uebermich'
import Reisen   from './components/Reisen'
import Kontakt  from './components/Kontakt'
import Footer   from './components/Footer'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <Angebote />
      <UeberMich />
      <Reisen />
      <Kontakt />
      <Footer />
    </LangProvider>
  )
}