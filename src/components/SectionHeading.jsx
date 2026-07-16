function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <header className={`section-heading reveal ${align === 'center' ? 'is-centered' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-lede">{description}</p> : null}
    </header>
  )
}

export default SectionHeading
