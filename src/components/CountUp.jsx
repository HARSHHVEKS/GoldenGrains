import { useEffect, useRef, useState } from 'react'

// Counts a plain integer up to its value the first time it scrolls into view.
// Non-numeric values (e.g. "1–100 kg") are rendered as-is.
function CountUp({ value, duration = 1100 }) {
  const isNumeric = /^\d+$/.test(value)
  const target = isNumeric ? Number(value) : 0
  const ref = useRef(null)
  const [display, setDisplay] = useState(isNumeric ? 0 : value)

  useEffect(() => {
    if (!isNumeric) return undefined
    const node = ref.current
    if (!node) return undefined

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      setDisplay(target)
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [isNumeric, target, duration])

  return <span ref={ref}>{display}</span>
}

export default CountUp
