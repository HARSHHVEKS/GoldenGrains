import { useEffect, useState } from 'react'
import { Location01Icon, Clock01Icon, CallIcon } from 'hugeicons-react'
import { contact, whatsappLink, defaultWhatsappMessage } from '../data/siteContent'
import { GrainMark, MenuIcon, CloseIcon, BasketIcon, WhatsAppIcon } from './Icons'

const links = [
  { href: '#catalogue', label: 'Catalogue' },
  { href: '#about', label: 'About' },
  { href: '#process', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

function Navbar({ inquiryCount, onOpenInquiry }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Solidify the bar once the visitor leaves the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`topbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="trade-bar">
        <div className="wrap trade-bar-inner">
          <div className="trade-bar-left">
            <span className="trade-bar-item">
              <Location01Icon size={13} aria-hidden />
              Mlolongo Road, Machakos · Kenya
            </span>
            <span className="trade-bar-item">
              <Clock01Icon size={13} aria-hidden />
              {contact.hours}
            </span>
          </div>
          <div className="trade-bar-right">
            <span className="trade-bar-item trade-bar-live">
              <span className="live-dot" aria-hidden />
              Export &amp; import · quotes daily
            </span>
            <a className="trade-bar-item" href={contact.phoneHref}>
              <CallIcon size={13} aria-hidden />
              {contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <div className="wrap topbar-inner">
        <a className="brand" href="#top" aria-label="Golden Grains, back to top">
          <span className="brand-mark">
            <GrainMark size={38} frame="#2f5138" />
          </span>
          <span className="brand-text">
            Golden Grains
            <small>Narayan Millers Ltd.</small>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <a className="btn btn-gold btn-quote" href="#contact">
            Request a quote
          </a>

          <button type="button" className="btn btn-inquiry" onClick={onOpenInquiry}>
            <BasketIcon />
            <span>Inquiry</span>
            {inquiryCount > 0 ? (
              <span className="inquiry-count" aria-label={`${inquiryCount} products in inquiry list`}>
                {inquiryCount}
              </span>
            ) : null}
          </button>

          <button
            type="button"
            className="icon-btn menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Primary mobile">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="mobile-menu-whatsapp"
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            <WhatsAppIcon width={16} height={16} />
            WhatsApp sales
          </a>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
