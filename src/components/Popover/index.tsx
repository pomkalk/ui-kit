import { useEffect, useRef, useState, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../utils'

export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  trigger: ReactNode
  content: ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Popover({
  trigger,
  content,
  open,
  defaultOpen = false,
  onOpenChange,
  className,
  ...props
}: PopoverProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen)
  const rootRef = useRef<HTMLDivElement>(null)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen

  const setOpen = (next: boolean) => {
    if (!isControlled) setInternalOpen(next)
    onOpenChange?.(next)
  }

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <div className={cn('relative inline-flex', className)} ref={rootRef} {...props}>
      <span
        className="inline-flex"
        onClick={() => setOpen(!isOpen)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            setOpen(!isOpen)
          }
        }}
        role="button"
        tabIndex={0}
      >
        {trigger}
      </span>
      {isOpen ? (
        <div className="absolute left-0 top-full z-10 mt-2 min-w-48 rounded-xl border border-slate-200 bg-white p-3 shadow-md">
          {content}
        </div>
      ) : null}
    </div>
  )
}

export default Popover
