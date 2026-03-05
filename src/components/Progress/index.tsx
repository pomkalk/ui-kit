import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
}

export function Progress({
  value,
  max = 100,
  className,
  ...props
}: ProgressProps) {
  const percent = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className={cn('h-2 w-full rounded-full bg-slate-200', className)} {...props}>
      <div className="h-full rounded-full bg-blue-500" style={{ width: `${percent}%` }} />
    </div>
  )
}

export default Progress
