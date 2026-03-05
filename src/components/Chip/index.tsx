import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../utils'

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onRemove?: () => void
}

export function Chip({
  onRemove,
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <span className={cn('inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700', className)}>
      <button className="cursor-pointer bg-transparent p-0" type="button" {...props}>
        {children}
      </button>
      {onRemove ? (
        <button className="text-blue-500 hover:text-blue-700" onClick={onRemove} type="button">
          x
        </button>
      ) : null}
    </span>
  )
}

export default Chip
