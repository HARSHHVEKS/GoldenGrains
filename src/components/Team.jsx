import { useEffect, useRef, useState } from 'react'
import { ArrowRight02Icon } from 'hugeicons-react'
import SectionHeading from './SectionHeading'
import { team, testimonials } from '../data/siteContent'
import { QuoteIcon } from './Icons'

// Tracks which slide of a scroll-snap row is closest to its centre.
function useSnapCarousel(count) {
  const trackRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return undefined

    const onScroll = () => {
      const slides = [...track.children]
      const centre = track.scrollLeft + track.clientWidth / 2
      let best = 0
      let bestDistance = Infinity
      slides.forEach((slide, index) => {
        const slideCentre = slide.offsetLeft + slide.offsetWidth / 2
        const distance = Math.abs(slideCentre - centre)
        if (distance < bestDistance) {
          bestDistance = distance
          best = index
        }
      })
      setActiveIndex(best)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => track.removeEventListener('scroll', onScroll)
  }, [count])

  const scrollTo = (index) => {
    const track = trackRef.current
    const slide = track?.children[index]
    if (!track || !slide) return
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.offsetWidth) / 2,
      behavior: 'smooth',
    })
  }

  return { trackRef, activeIndex, scrollTo }
}

function SwipeHint() {
  return (
    <p className="swipe-hint" aria-hidden>
      Swipe
      <ArrowRight02Icon size={16} className="swipe-hint-arrow" />
    </p>
  )
}

function Team() {
  const quotes = useSnapCarousel(testimonials.length)

  return (
    <section id="people" className="section">
      <div className="wrap">
        <div className="slider-head">
          <SectionHeading
            eyebrow="Watu wetu · People & partners"
            title="Run by the Bhudia family, trusted by trade buyers"
          />
          <SwipeHint />
        </div>
      </div>

      <div className="wrap slider-shell">
        <ul className="slider team-slider" aria-label="Leadership team">
          {team.map((member) => (
            <li key={member.name} className="team-slide">
              <span className="monogram" aria-hidden>
                {member.initials}
              </span>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-blurb">{member.blurb}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="wrap slider-shell">
        <ul className="slider quote-slider" ref={quotes.trackRef} aria-label="Client testimonials">
          {testimonials.map((item) => (
            <li key={item.name} className="quote-slide">
              <span className="quote-tag">Trade reference</span>
              <QuoteIcon className="quote-mark" />
              <blockquote>
                <p>{item.quote}</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>

        <div className="dot-row" role="tablist" aria-label="Choose testimonial">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${index + 1} of ${testimonials.length}`}
              aria-current={quotes.activeIndex === index}
              onClick={() => quotes.scrollTo(index)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
