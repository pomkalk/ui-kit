import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface TopbarActionsProps extends HTMLAttributes<HTMLDivElement> {
  actions: ReactNode[]
}

export function TopbarActions({ actions, className, ...props }: TopbarActionsProps) {
  return (
    <div className={cn('inline-flex items-center gap-2', className)} {...props}>
      {actions.map((action, index) => (
        <span key={index}>{action}</span>
      ))}
    </div>
  )
}

export default TopbarActions
