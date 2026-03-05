import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

export function Spinner({ size = 'md', className, ...props }: SpinnerProps) {
  const sizeClass = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-4',
  }[size]

  return (
    <div
      aria-label="Loading"
      className={cn('animate-spin rounded-full border-slate-200 border-t-blue-500', sizeClass, className)}
      role="status"
      {...props}
    />
  )
}

export default Spinner
