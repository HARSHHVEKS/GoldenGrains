import { useEffect, useRef } from 'react'

// Marks every `.reveal` descendant with `.is-in` once it scrolls into view.
export function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return undefined

    const targets = root.querySelectorAll('.reveal')
    if (targets.length === 0) return undefined

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -36px 0px' },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
