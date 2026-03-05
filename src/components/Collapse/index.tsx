import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface CollapseProps extends HTMLAttributes<HTMLDivElement> {
  open: boolean
  header?: ReactNode
}

export function Collapse({
  open,
  header,
  className,
  children,
  ...props
}: CollapseProps) {
  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white', className)} {...props}>
      {header ? <div className="border-b border-slate-200 px-4 py-3 text-sm font-medium">{header}</div> : null}
      {open ? <div className="px-4 py-3">{children}</div> : null}
    </div>
  )
}

export default Collapse
