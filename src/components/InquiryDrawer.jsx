import { Sheet, SheetContent, SheetTitle, SheetDescription } from './ui/sheet'
import { products, whatsappLink } from '../data/siteContent'
import { MinusIcon, PlusIcon, WhatsAppIcon } from './Icons'

function composeInquiry(items) {
  const lines = ['Hello Golden Grains, please quote the following:']
  for (const item of items) {
    const product = products.find((p) => p.id === item.id)
    if (product) lines.push(`- ${product.name} × ${item.qty} (ref KSh ${product.price} / 1 kg)`)
  }
  lines.push('', 'Please share bulk pricing, packaging options, and availability.')
  return lines.join('\n')
}

function InquiryDrawer({ open, items, onClose, onChangeQty, onRemove, onClear }) {
  const detailed = items
    .map((item) => ({ ...item, product: products.find((p) => p.id === item.id) }))
    .filter((item) => item.product)

  const referenceTotal = detailed.reduce((sum, item) => sum + item.product.price * item.qty, 0)

  return (
    <Sheet
      open={open}
      onOpenChange={(next) => {
        if (!next) onClose()
      }}
    >
      <SheetContent className="drawer-sheet">
        <header className="drawer-head">
          <SheetTitle className="drawer-title">Inquiry list</SheetTitle>
          <SheetDescription className="visually-hidden">
            Products you selected for a bulk quote from Golden Grains
          </SheetDescription>
        </header>

        {detailed.length === 0 ? (
          <div className="drawer-empty">
            <p>Your inquiry list is empty.</p>
            <p className="drawer-empty-hint">
              Add products from the catalogue, then send the whole list to our sales team in one message.
            </p>
            <a className="btn btn-gold" href="#catalogue" onClick={onClose}>
              Browse the catalogue
            </a>
          </div>
        ) : (
          <>
            <p className="drawer-note">Quantities are 1 kg reference packs. Bulk volumes are quoted on request.</p>

            <ul className="drawer-items">
              {detailed.map((item) => (
                <li key={item.id}>
                  <img src={item.product.image} alt="" width="52" height="52" loading="lazy" />
                  <div className="drawer-item-info">
                    <strong>{item.product.name}</strong>
                    <span>KSh {item.product.price} / 1 kg</span>
                  </div>
                  <div className="qty-stepper" aria-label={`Quantity of ${item.product.name}`}>
                    <button
                      type="button"
                      className="icon-btn"
                      aria-label={`Reduce ${item.product.name} quantity`}
                      onClick={() => (item.qty <= 1 ? onRemove(item.id) : onChangeQty(item.id, -1))}
                    >
                      <MinusIcon width={14} height={14} />
                    </button>
                    <span aria-live="polite">{item.qty}</span>
                    <button
                      type="button"
                      className="icon-btn"
                      aria-label={`Increase ${item.product.name} quantity`}
                      onClick={() => onChangeQty(item.id, 1)}
                    >
                      <PlusIcon width={14} height={14} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="drawer-foot">
              <div className="drawer-total">
                <span>Reference total</span>
                <strong>KSh {referenceTotal.toLocaleString('en-KE')}</strong>
              </div>
              <a
                className="btn btn-gold"
                href={whatsappLink(composeInquiry(detailed))}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                Send via WhatsApp
              </a>
              <button type="button" className="btn btn-line" onClick={onClear}>
                Clear list
              </button>
            </footer>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

export default InquiryDrawer
