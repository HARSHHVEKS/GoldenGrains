import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ArrowDown01Icon } from 'hugeicons-react'
import { cn } from '@/lib/utils'

function Accordion(props) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({ className, ...props }) {
  return <AccordionPrimitive.Item data-slot="accordion-item" className={cn('faq-item', className)} {...props} />
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="faq-header">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn('faq-trigger', className)}
        {...props}
      >
        {children}
        <ArrowDown01Icon className="faq-chevron" size={19} aria-hidden />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content data-slot="accordion-content" className="faq-content" {...props}>
      <div className={cn('faq-content-inner', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
