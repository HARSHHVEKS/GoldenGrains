import { useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Catalogue from './components/Catalogue'
import About from './components/About'
import Process from './components/Process'
import Team from './components/Team'
import Cta from './components/Cta'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InquiryDrawer from './components/InquiryDrawer'
import Chatbot from './components/Chatbot'
import { useReveal } from './hooks/useReveal'

function App() {
  const [inquiry, setInquiry] = useState([])
  const [drawerOpen, setDrawerOpen] = useState(false)
  const mainRef = useReveal()

  const inquiryIds = useMemo(() => new Set(inquiry.map((item) => item.id)), [inquiry])

  const addToInquiry = (id) => {
    setInquiry((items) => {
      if (items.some((item) => item.id === id)) return items.filter((item) => item.id !== id)
      return [...items, { id, qty: 1 }]
    })
  }

  const changeQty = (id, delta) => {
    setInquiry((items) =>
      items.map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item)),
    )
  }

  const removeItem = (id) => {
    setInquiry((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div id="top">
      <a className="skip-link" href="#catalogue">
        Skip to catalogue
      </a>

      <Navbar inquiryCount={inquiry.length} onOpenInquiry={() => setDrawerOpen(true)} />

      <main ref={mainRef}>
        <Hero />
        <Ticker />
        <Catalogue inquiryIds={inquiryIds} onAdd={addToInquiry} />
        <About />
        <Process />
        <Team />
        <Cta />
        <Faq />
        <Contact inquiry={inquiry} />
      </main>

      <Footer />

      <InquiryDrawer
        open={drawerOpen}
        items={inquiry}
        onClose={() => setDrawerOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeItem}
        onClear={() => setInquiry([])}
      />

      <Chatbot />
    </div>
  )
}

export default App
