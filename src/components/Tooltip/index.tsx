import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  content: ReactNode
  open?: boolean
}

export function Tooltip({
  content,
  open = false,
  className,
  children,
  ...props
}: TooltipProps) {
  return (
    <div className={cn('relative inline-flex', className)} {...props}>
      {children}
      {open ? (
        <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs text-white">
          {content}
        </div>
      ) : null}
    </div>
  )
}

export default Tooltip
