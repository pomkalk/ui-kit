import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  actions?: ReactNode
}

export function Card({ title, actions, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn('rounded-2xl border border-slate-200 bg-white p-4', className)}
      {...props}
    >
      {(title || actions) && (
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="text-base font-semibold text-slate-900">{title}</div>
          {actions}
        </div>
      )}
      {children}
    </div>
  )
}

export default Card
