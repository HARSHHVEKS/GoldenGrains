import { InstagramIcon, WhatsappIcon, Mail01Icon, CallIcon } from 'hugeicons-react'
import { company, contact, whatsappLink, defaultWhatsappMessage } from '../data/siteContent'
import { GrainMark } from './Icons'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <GrainMark size={36} frame="#2f5138" />
            <span className="brand-text">
              Golden Grains
              <small>Narayan Millers Ltd.</small>
            </span>
          </div>
          <p>{company.tagline}</p>
          <div className="social-row">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label={`Instagram ${contact.instagramHandle}`}
            >
              <InstagramIcon size={19} aria-hidden />
            </a>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp sales"
            >
              <WhatsappIcon size={19} aria-hidden />
            </a>
            <a href={`mailto:${contact.email}`} aria-label={`Email ${contact.email}`}>
              <Mail01Icon size={19} aria-hidden />
            </a>
            <a href={contact.phoneHref} aria-label={`Call ${contact.phoneDisplay}`}>
              <CallIcon size={19} aria-hidden />
            </a>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <p className="footer-col-title">Explore</p>
          <a href="#catalogue">Catalogue</a>
          <a href="#about">About</a>
          <a href="#process">Process</a>
          <a href="#people">People</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-contact">
          <p className="footer-col-title">Reach the mill</p>
          <p>{contact.address}</p>
          <p>{contact.poBox}</p>
          <p>
            <a href={contact.phoneHref}>{contact.phoneDisplay}</a>
          </p>
          <p>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>{contact.hours}</p>
        </div>
      </div>

      <div className="wrap footer-legal">
        <span>© 2026 Golden Grains · Narayan Millers Ltd. All rights reserved.</span>
        <span>Milled &amp; packed in Machakos, Kenya</span>
      </div>
    </footer>
  )
}

export default Footer
