import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

type AlertStatus = 'info' | 'success' | 'warning' | 'danger'

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  status?: AlertStatus
  title?: ReactNode
  icon?: ReactNode
}

export function Alert({
  status = 'info',
  title,
  icon,
  className,
  children,
  ...props
}: AlertProps) {
  const tone = {
    info: 'border-blue-200 bg-blue-50 text-blue-800',
    success: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    warning: 'border-amber-200 bg-amber-50 text-amber-800',
    danger: 'border-red-200 bg-red-50 text-red-800',
  }[status]

  return (
    <div className={cn('rounded-lg border p-3 text-sm', tone, className)} role="alert" {...props}>
      <div className="flex items-start gap-2">
        {icon ? <span className="mt-0.5 inline-flex shrink-0">{icon}</span> : null}
        <div className="min-w-0">
          {title ? <div className="mb-1 font-semibold">{title}</div> : null}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Alert
