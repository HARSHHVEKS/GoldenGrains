import { useEffect, useState } from 'react'
import { CheckmarkBadge01Icon } from 'hugeicons-react'
import { products, heroFeatured, whatsappLink, defaultWhatsappMessage } from '../data/siteContent'
import { WhatsAppIcon } from './Icons'

const featured = heroFeatured
  .map((id) => products.find((p) => p.id === id))
  .filter(Boolean)

const manifest = [
  { label: 'Origin', value: 'Machakos, KE' },
  { label: 'Product lines', value: '18' },
  { label: 'Pack range', value: '1–100 kg' },
  { label: 'Trade', value: 'Export & import' },
]

const trustPoints = ['Graded to export spec', 'Retail packs to 100 kg sacks', 'Shipped worldwide from Kenya']

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Circular "stamped" grade seal — the trade-dossier signature detail.
function GradeSeal() {
  return (
    <svg className="ticket-seal" viewBox="0 0 100 100" role="img" aria-label="Export grade, inspected">
      <defs>
        <path id="seal-arc" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
      </defs>
      <circle cx="50" cy="50" r="46.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <text
        fontFamily="var(--font-mono)"
        fontSize="8.4"
        letterSpacing="2.1"
        fill="currentColor"
        fontWeight="500"
      >
        <textPath href="#seal-arc" startOffset="0%">
          EXPORT GRADE · NARAYAN MILLERS · KENYA ·
        </textPath>
      </text>
      <g fill="currentColor">
        <ellipse cx="50" cy="40" rx="4.4" ry="6.8" />
        <ellipse cx="42" cy="52" rx="4.4" ry="6.8" transform="rotate(-26 42 52)" />
        <ellipse cx="58" cy="52" rx="4.4" ry="6.8" transform="rotate(26 58 52)" />
      </g>
      <text
        x="50"
        y="66"
        textAnchor="middle"
        fontFamily="var(--font-mono)"
        fontSize="5.4"
        letterSpacing="1.4"
        fill="currentColor"
      >
        INSPECTED
      </text>
    </svg>
  )
}

function TicketCard({ product, withSeal }) {
  return (
    <>
      {withSeal ? <GradeSeal /> : null}
      <div className="ticket-head">
        <span className="ticket-lot">Lot {product.id}</span>
        <span className="ticket-grade">Narayan Millers Ltd.</span>
      </div>

      <div className="ticket-frame">
        <img src={product.image} alt={`${product.name}, 1 kg pack`} width="330" height="330" />
      </div>

      <div className="ticket-meta">
        <strong>{product.name}</strong>
        <span className="ticket-price">KSh {product.price}</span>
      </div>

      <div className="ticket-foot">
        <svg
          className="ticket-barcode"
          viewBox="0 0 120 16"
          aria-hidden
          focusable="false"
          preserveAspectRatio="none"
        >
          {[2, 7, 10, 16, 21, 24, 30, 34, 39, 45, 48, 54, 57, 63, 68, 71, 77, 82, 85, 91, 96, 99, 105, 110, 115].map(
            (x, i) => (
              <rect key={x} x={x} y="0" width={i % 3 === 0 ? 2.4 : 1.2} height="16" fill="currentColor" />
            ),
          )}
        </svg>
        <span>Export grade · Kenya · 1 kg</span>
      </div>
    </>
  )
}

function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || prefersReducedMotion() || featured.length < 2) return undefined

    const timer = setInterval(() => {
      setActive((index) => (index + 1) % featured.length)
    }, 3200)
    return () => clearInterval(timer)
  }, [paused])

  // 0 = front card, 1 = waiting on the left, 2 = waiting on the right
  const position = (index) => (index - active + featured.length) % featured.length

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Machakos, Kenya · Grain export &amp; import</p>
          <h1 id="hero-title">
            Export-grade <em>grains &amp; pulses</em>, milled and packed in Kenya.
          </h1>
          <p className="hero-lede">
            Golden Grains, trading as Narayan Millers Ltd., supplies wholesalers, distributors, and
            international buyers with graded beans, lentils, and pulses, from 1&nbsp;kg retail packs
            to 100&nbsp;kg export sacks.
          </p>

          <div className="hero-actions">
            <a className="btn btn-gold" href="#catalogue">
              Browse the catalogue
            </a>
            <a
              className="btn btn-line"
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon />
              Talk to sales
            </a>
          </div>

          <p className="hero-trust">
            {trustPoints.map((point) => (
              <span key={point}>
                <CheckmarkBadge01Icon size={15} aria-hidden />
                {point}
              </span>
            ))}
          </p>

          <dl className="hero-manifest" aria-label="Key facts">
            {manifest.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="deck"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Invisible sizer keeps the deck's height in normal document flow */}
          <div className="ticket deck-sizer" aria-hidden>
            <TicketCard product={featured[0]} />
          </div>

          {featured.map((product, index) => {
            const pos = position(index)
            return (
              <article
                key={product.id}
                className={`ticket deck-card pos-${pos}`}
                aria-hidden={pos !== 0}
                onClick={() => pos !== 0 && setActive(index)}
              >
                <TicketCard product={product} withSeal={pos === 0} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero
