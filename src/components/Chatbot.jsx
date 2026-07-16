import { useEffect, useRef, useState } from 'react'
import { AiChat02Icon } from 'hugeicons-react'
import { chatQuickReplies, whatsappLink, defaultWhatsappMessage } from '../data/siteContent'
import { getBotReply, welcomeMessage } from '../lib/chatbotBrain'
import { CloseIcon, ArrowUpIcon, GrainMark, WhatsAppIcon } from './Icons'

// Renders the bot's lightweight markup: **bold** and "• " bullet lines.
function renderRichText(text) {
  const renderBold = (line) =>
    line.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
      part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
    )

  return text.split('\n').map((line, index) => {
    const isBullet = line.startsWith('• ')
    return (
      <span key={index} className={`chat-line ${isBullet ? 'chat-bullet' : ''}`}>
        {renderBold(isBullet ? line.slice(2) : line)}
      </span>
    )
  })
}

function Chatbot() {
  const [open, setOpen] = useState(false)
  const [seen, setSeen] = useState(false)
  const [hintVisible, setHintVisible] = useState(false)
  const [messages, setMessages] = useState([{ from: 'bot', ...welcomeMessage }])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)

  const logRef = useRef(null)
  const inputRef = useRef(null)
  const timerRef = useRef(null)

  // Nudge visitors toward the assistant 5 seconds after landing.
  useEffect(() => {
    if (seen) return undefined
    const timer = setTimeout(() => setHintVisible(true), 5000)
    return () => clearTimeout(timer)
  }, [seen])

  // The nudge stays up for ~7 seconds, then gets out of the way on its own.
  useEffect(() => {
    if (!hintVisible) return undefined
    const timer = setTimeout(() => setHintVisible(false), 7000)
    return () => clearTimeout(timer)
  }, [hintVisible])

  useEffect(() => {
    if (open) {
      setSeen(true)
      setHintVisible(false)
      inputRef.current?.focus()
    }
  }, [open])

  // On phones the chat takes over the whole screen, so freeze the page behind it.
  useEffect(() => {
    if (!open || !window.matchMedia('(max-width: 620px)').matches) return undefined
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  useEffect(() => {
    const log = logRef.current
    if (log) log.scrollTop = log.scrollHeight
  }, [messages, typing])

  useEffect(() => () => clearTimeout(timerRef.current), [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const send = (raw) => {
    const text = raw.trim()
    if (!text || typing) return

    setMessages((current) => [...current, { from: 'user', text }])
    setInput('')
    setTyping(true)

    timerRef.current = setTimeout(() => {
      setMessages((current) => [...current, { from: 'bot', ...getBotReply(text) }])
      setTyping(false)
    }, 550)
  }

  return (
    <div className="chat-root">
      {open ? (
        <section className="chat-panel" aria-label="Golden Grains assistant">
          <header className="chat-head">
            <GrainMark size={32} frame="#2f5138" />
            <div className="chat-head-text">
              <strong>Golden Grains assistant</strong>
              <span>Answers from the live catalogue</span>
            </div>
            <button
              type="button"
              className="icon-btn chat-close"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </header>

          <div className="chat-log" ref={logRef} role="log" aria-live="polite">
            {messages.map((message, index) => (
              <div key={index} className={`chat-msg ${message.from === 'user' ? 'is-user' : ''}`}>
                <p>{message.from === 'bot' ? renderRichText(message.text) : message.text}</p>
                {message.action === 'whatsapp' ? (
                  <a
                    className="chat-wa-link"
                    href={whatsappLink(defaultWhatsappMessage)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon size={14} />
                    Continue on WhatsApp
                  </a>
                ) : null}
              </div>
            ))}
            {typing ? (
              <div className="chat-msg chat-typing" aria-label="Assistant is typing">
                <span />
                <span />
                <span />
              </div>
            ) : null}
          </div>

          {!messages.some((message) => message.from === 'user') ? (
            <div className="chat-chips">
              {chatQuickReplies.map((reply) => (
                <button key={reply} type="button" onClick={() => send(reply)}>
                  {reply}
                </button>
              ))}
            </div>
          ) : null}

          <form
            className="chat-input"
            onSubmit={(event) => {
              event.preventDefault()
              send(input)
            }}
          >
            <label className="visually-hidden" htmlFor="chat-field">
              Ask the Golden Grains assistant
            </label>
            <input
              id="chat-field"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about products, prices, bulk supply…"
              autoComplete="off"
            />
            <button type="submit" className="chat-send" aria-label="Send message">
              <ArrowUpIcon width={16} height={16} />
            </button>
          </form>
        </section>
      ) : (
        <>
          {hintVisible ? (
            <div className="chat-hint" role="status">
              <button
                type="button"
                className="chat-hint-close"
                aria-label="Dismiss chat hint"
                onClick={() => {
                  setHintVisible(false)
                  setSeen(true)
                }}
              >
                <CloseIcon width={13} height={13} />
              </button>
              <button type="button" className="chat-hint-body" onClick={() => setOpen(true)}>
                <strong>Jambo! Need a price fast?</strong>
                <span>Ask me here instead of searching the page. I know every product, price, and pack size.</span>
              </button>
            </div>
          ) : null}

          <div className="fab-stack">
            <a
              className="fab fab-whatsapp"
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with sales on WhatsApp"
            >
              <span className="fab-label">WhatsApp sales</span>
              <WhatsAppIcon size={24} />
            </a>

            <button
              type="button"
              className={`fab fab-extended chat-launcher ${hintVisible ? 'is-pulsing' : ''}`}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <AiChat02Icon size={21} aria-hidden />
              <span className="fab-text">Ask AI assistant</span>
              {!seen ? <span className="chat-dot" aria-hidden /> : null}
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Chatbot
