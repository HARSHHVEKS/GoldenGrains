import SectionHeading from './SectionHeading'
import { faq } from '../data/siteContent'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion'

function Faq() {
  return (
    <section id="faq" className="section section-tint">
      <div className="wrap faq-grid">
        <SectionHeading
          eyebrow="Maswali · Buyer questions"
          title="Answers before you ask"
          description="The details trade buyers usually check first. Anything else, the assistant in the corner or the sales team on WhatsApp can answer right away."
        />

        <Accordion type="single" collapsible className="faq-list reveal" defaultValue="faq-0">
          {faq.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`}>
              <AccordionTrigger>{item.q}</AccordionTrigger>
              <AccordionContent>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faq
