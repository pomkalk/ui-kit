import type { HTMLAttributes } from 'react'
import { cn } from '../utils'

export type TagProps = HTMLAttributes<HTMLSpanElement>

export function Tag({ className, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700',
        className,
      )}
      {...props}
    />
  )
}

export default Tag
