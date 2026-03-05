import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface PopoverProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  trigger: ReactNode
  content: ReactNode
  open?: boolean
}

export function Popover({
  trigger,
  content,
  open = false,
  className,
  ...props
}: PopoverProps) {
  return (
    <div className={cn('relative inline-flex', className)} {...props}>
      {trigger}
      {open ? (
        <div className="absolute left-0 top-full z-10 mt-2 min-w-48 rounded-xl border border-slate-200 bg-white p-3 shadow-md">
          {content}
        </div>
      ) : null}
    </div>
  )
}

export default Popover
