import { useState } from 'react'
import SectionHeading from './SectionHeading'
import { products, categories, categoryCount } from '../data/siteContent'
import { CheckIcon, PlusIcon } from './Icons'

function Catalogue({ inquiryIds, onAdd }) {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? products : products.filter((p) => p.category === filter)

  return (
    <section id="catalogue" className="section">
      <div className="wrap">
        <div className="catalogue-head">
          <SectionHeading
            eyebrow="Bidhaa · The catalogue"
            title="18 lines of graded grain, ready to trade"
            description="Every product below is live stock from our Machakos mill. Prices are per 1 kg retail pack. Add lines to your inquiry list for a bulk quote."
          />
        </div>

        <div className="catalogue-toolbar reveal">
          <div className="filter-row" role="group" aria-label="Filter products by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`chip ${filter === category ? 'is-active' : ''}`}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
                <span className="chip-count">{categoryCount(category)}</span>
              </button>
            ))}
          </div>
          <p className="catalogue-count" aria-live="polite">
            Showing <strong>{visible.length}</strong> of {products.length} lines
          </p>
        </div>

        <ul className="product-grid" key={filter}>
          {visible.map((product) => {
            const added = inquiryIds.has(product.id)
            return (
              <li key={product.id} className="p-card">
                <div className="p-media">
                  <span className="p-grade">Export grade</span>
                  <img
                    src={product.image}
                    alt={`${product.name}, 1 kg pack`}
                    width="330"
                    height="330"
                    loading="lazy"
                  />
                </div>
                <div className="p-body">
                  <p className="p-meta">
                    <span>{product.category}</span>
                    <span>Lot {product.id}</span>
                  </p>
                  <h3>{product.name}</h3>
                  <p className="p-desc">{product.desc}</p>
                  <div className="p-foot">
                    <span className="p-price">
                      KSh {product.price}
                      <small> / 1 kg</small>
                    </span>
                    <button
                      type="button"
                      className={`btn-add ${added ? 'is-added' : ''}`}
                      aria-pressed={added}
                      onClick={() => onAdd(product.id)}
                    >
                      {added ? <CheckIcon width={15} height={15} /> : <PlusIcon width={15} height={15} />}
                      {added ? 'Added' : 'Add to inquiry'}
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Catalogue
