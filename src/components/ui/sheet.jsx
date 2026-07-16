import * as SheetPrimitive from '@radix-ui/react-dialog'
import { cn } from '@/lib/utils'
import { CloseIcon } from '../Icons'

function Sheet(props) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger(props) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose(props) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal(props) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({ className, ...props }) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'fixed inset-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0',
        className,
      )}
      {...props}
    />
  )
}

function SheetContent({ className, children, side = 'right', ...props }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'fixed flex flex-col shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:duration-500 data-[state=closed]:duration-300',
          side === 'right' &&
            'inset-y-0 right-0 h-full data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right',
          side === 'left' &&
            'inset-y-0 left-0 h-full data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left',
          side === 'top' &&
            'inset-x-0 top-0 data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top',
          side === 'bottom' &&
            'inset-x-0 bottom-0 data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="sheet-x" aria-label="Close">
          <CloseIcon />
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }) {
  return <div data-slot="sheet-header" className={cn('flex flex-col gap-1.5', className)} {...props} />
}

function SheetFooter({ className, ...props }) {
  return <div data-slot="sheet-footer" className={cn('mt-auto flex flex-col gap-2', className)} {...props} />
}

function SheetTitle({ className, ...props }) {
  return <SheetPrimitive.Title data-slot="sheet-title" className={cn(className)} {...props} />
}

function SheetDescription({ className, ...props }) {
  return <SheetPrimitive.Description data-slot="sheet-description" className={cn(className)} {...props} />
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}
