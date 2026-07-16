import { useState } from 'react'
import { CallIcon, Mail01Icon, Location01Icon, Clock01Icon } from 'hugeicons-react'
import SectionHeading from './SectionHeading'
import { contact, whatsappLink, products } from '../data/siteContent'
import { WhatsAppIcon } from './Icons'

function composeMessage({ name, companyName, email, message, inquiry }) {
  const lines = ['Hello Golden Grains, I would like to send an inquiry.']

  if (inquiry.length > 0) {
    lines.push('', 'Products of interest:')
    for (const item of inquiry) {
      const product = products.find((p) => p.id === item.id)
      if (product) lines.push(`- ${product.name} × ${item.qty} (ref KSh ${product.price} / 1 kg)`)
    }
  }

  if (message.trim()) lines.push('', message.trim())

  const signature = [name.trim(), companyName.trim(), email.trim()].filter(Boolean).join(' · ')
  if (signature) lines.push('', signature)

  return lines.join('\n')
}

function Contact({ inquiry }) {
  const [form, setForm] = useState({ name: '', companyName: '', email: '', message: '' })
  const [error, setError] = useState('')

  const update = (field) => (event) => {
    setForm((state) => ({ ...state, [field]: event.target.value }))
    if (error) setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name.trim()) {
      setError('Add your name so the team knows who to reply to.')
      return
    }
    if (!form.message.trim() && inquiry.length === 0) {
      setError('Write a short message, or add products to your inquiry list first.')
      return
    }
    window.open(whatsappLink(composeMessage({ ...form, inquiry })), '_blank', 'noreferrer')
  }

  const detailRows = [
    { label: 'Phone', icon: CallIcon, content: <a href={contact.phoneHref}>{contact.phoneDisplay}</a> },
    { label: 'Email', icon: Mail01Icon, content: <a href={`mailto:${contact.email}`}>{contact.email}</a> },
    {
      label: 'Address',
      icon: Location01Icon,
      content: (
        <a href={contact.mapLink} target="_blank" rel="noreferrer">
          {contact.address} · {contact.poBox}
        </a>
      ),
    },
    { label: 'Hours', icon: Clock01Icon, content: <span>{contact.hours}</span> },
  ]

  return (
    <section id="contact" className="section section-tint">
      <div className="wrap contact-grid">
        <div className="contact-side">
          <SectionHeading
            eyebrow="Mawasiliano · Contact & quotes"
            title="Talk to the mill about your next shipment"
            description="Quotes, availability, packaging, and export documentation. The sales team answers fastest on WhatsApp."
          />

          <dl className="contact-list reveal">
            {detailRows.map((row) => (
              <div key={row.label}>
                <dt>
                  <span className="contact-dt-icon" aria-hidden>
                    <row.icon size={15} />
                  </span>
                  {row.label}
                </dt>
                <dd>{row.content}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
          <div className="form-lead">
            <strong>Send an inquiry</strong>
            <span>Fill in a couple of fields and we&apos;ll open a WhatsApp message ready to send.</span>
          </div>

          <div className="form-pair">
            <label>
              <span className="label-row">
                Name <span className="label-req" aria-hidden>*</span>
              </span>
              <input
                type="text"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={update('name')}
                required
              />
            </label>
            <label>
              <span className="label-row">Company</span>
              <input
                type="text"
                name="organization"
                autoComplete="organization"
                value={form.companyName}
                onChange={update('companyName')}
              />
            </label>
          </div>

          <label>
            <span className="label-row">Email</span>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={update('email')}
            />
          </label>

          <label>
            <span className="label-row">
              Message <span className="label-req" aria-hidden>*</span>
            </span>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={update('message')}
              placeholder="Products, quantities, packaging, destination…"
              required
            />
          </label>

          {inquiry.length > 0 ? (
            <p className="form-note">
              Your inquiry list ({inquiry.length} {inquiry.length === 1 ? 'product' : 'products'}) will be
              attached automatically.
            </p>
          ) : null}

          {error ? (
            <p className="form-error" role="alert">
              {error}
            </p>
          ) : null}

          <button type="submit" className="btn btn-gold">
            <WhatsAppIcon />
            Send inquiry on WhatsApp
          </button>
          <p className="form-alt">
            Prefer email? Write to <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact
