import { useState, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../utils'

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  content: ReactNode
  open?: boolean
}

export function Tooltip({
  content,
  open,
  className,
  children,
  ...props
}: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false)
  const isOpen = open ?? isHovered

  return (
    <div
      className={cn('relative inline-flex', className)}
      onBlur={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {children}
      {isOpen ? (
        <div className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs text-white">
          {content}
        </div>
      ) : null}
    </div>
  )
}

export default Tooltip
