import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils'

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode
  description?: ReactNode
  onClose?: () => void
}

export function Toast({
  title,
  description,
  onClose,
  className,
  ...props
}: ToastProps) {
  return (
    <div
      className={cn('w-full max-w-sm rounded-xl border border-slate-200 bg-white p-4 shadow-sm', className)}
      {...props}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          {title ? <div className="text-sm font-semibold text-slate-900">{title}</div> : null}
          {description ? <div className="mt-1 text-sm text-slate-600">{description}</div> : null}
        </div>
        {onClose ? (
          <button className="text-slate-500 hover:text-slate-700" onClick={onClose} type="button">
            x
          </button>
        ) : null}
      </div>
    </div>
  )
}

export default Toast
