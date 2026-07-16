import { products } from '../data/siteContent'

function TickerRow({ hidden }) {
  return (
    <ul className="ticker-row" aria-hidden={hidden || undefined}>
      {products.map((product) => (
        <li key={product.id}>
          <span className="ticker-name">{product.name}</span>
          <span className="ticker-price">KSh {product.price}</span>
        </li>
      ))}
    </ul>
  )
}

function Ticker() {
  return (
    <div className="ticker" aria-label="Current catalogue prices per 1 kg pack">
      <span className="ticker-label">
        <span className="live-dot" aria-hidden />
        Live · KSh / 1&nbsp;kg
      </span>
      <div className="ticker-viewport">
        <div className="ticker-track">
          <TickerRow />
          <TickerRow hidden />
        </div>
      </div>
    </div>
  )
}

export default Ticker
