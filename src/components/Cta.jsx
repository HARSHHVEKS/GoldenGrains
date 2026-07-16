import { whatsappLink, defaultWhatsappMessage } from '../data/siteContent'
import { WhatsAppIcon } from './Icons'

function Cta() {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="wrap cta-inner">
        <div className="cta-copy">
          <p className="eyebrow">Tuwasiliane · Ready when you are</p>
          <h2 id="cta-title">Bring us your spec. We&apos;ll quote it.</h2>
          <p className="cta-sub">
            Tell us the products, volumes, packaging, and destination. The mill replies with pricing,
            availability, and export documentation, usually the same working day.
          </p>
        </div>

        <div className="cta-actions">
          <a className="btn btn-gold" href="#contact">
            Request a quote
          </a>
          <a
            className="btn btn-line"
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>
          <p className="cta-reassure">No account needed · Mon–Fri, 9 AM – 7 PM</p>
        </div>
      </div>
    </section>
  )
}

export default Cta
