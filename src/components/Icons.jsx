import { WhatsappIcon as HugeWhatsappIcon } from 'hugeicons-react'

const base = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export function GrainMark({ size = 34, frame = 'var(--ink)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden focusable={false}>
      <rect width="64" height="64" rx="14" fill={frame} />
      <g fill="var(--gold)">
        <ellipse cx="32" cy="21" rx="6.5" ry="10" />
        <ellipse cx="20.5" cy="39" rx="6.5" ry="10" transform="rotate(-26 20.5 39)" />
        <ellipse cx="43.5" cy="39" rx="6.5" ry="10" transform="rotate(26 43.5 39)" />
      </g>
    </svg>
  )
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function PlusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function MinusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function ArrowUpIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  )
}

export function ChatIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
    </svg>
  )
}

export function BasketIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}

export function QuoteIcon(props) {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...props}>
      <path d="M9.6 5C6 7 3.8 10 3.8 14.1c0 2.9 1.8 4.9 4.2 4.9 2.2 0 3.9-1.7 3.9-3.9 0-2.1-1.5-3.7-3.5-3.7-.4 0-.9.1-1 .1.3-2 2-4.1 3.9-5.2L9.6 5Zm9.2 0c-3.6 2-5.8 5-5.8 9.1 0 2.9 1.8 4.9 4.2 4.9 2.1 0 3.9-1.7 3.9-3.9 0-2.1-1.6-3.7-3.6-3.7-.4 0-.8.1-.9.1.3-2 1.9-4.1 3.8-5.2L18.8 5Z" />
    </svg>
  )
}

export function WhatsAppIcon({ size = 18, ...props }) {
  return <HugeWhatsappIcon size={size} aria-hidden focusable={false} {...props} />
}
